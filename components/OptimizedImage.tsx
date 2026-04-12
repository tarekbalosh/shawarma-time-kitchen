/**
 * OptimizedImage – a production-ready next/image wrapper.
 *
 * Features:
 *  • placeholder="blur"  → LCP-aware shimmer while image loads (no CLS)
 *  • lazy loading by default (override with priority={true} for above-the-fold)
 *  • sizes attribute tells the browser the rendered width at each breakpoint so
 *    it picks the smallest adequate srcset variant (prevents oversized downloads)
 *  • Graceful fallback skeleton shown during load / on error
 */

'use client'

import Image, { type ImageProps } from 'next/image'
import { useState, useCallback } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

type SizePreset = 'thumbnail' | 'card' | 'hero' | 'avatar' | 'full'

interface OptimizedImageProps extends Omit<ImageProps, 'sizes'> {
  /**
   * Convenience shorthand. Overridden by an explicit `sizes` prop.
   *
   * thumbnail  – small list/grid item   (≤160 px)
   * avatar     – circular profile pic   (≤80 px)
   * card       – content card           (sm:50vw lg:33vw)
   * hero       – full-width hero        (100vw)
   * full       – fill the container     (100%)
   */
  sizePreset?: SizePreset
  /** Optional blur placeholder as a base64 data URI (10×10 px is enough). */
  blurDataURL?: string
  /** Optional CSS class applied to the wrapping div when layout="fill". */
  wrapperClassName?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Pre-built sizes strings for common use-cases. */
const SIZE_PRESETS: Record<SizePreset, string> = {
  thumbnail: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 160px',
  avatar:    '80px',
  card:      '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  hero:      '100vw',
  full:      '100%',
}

/**
 * A very small (10×10 px) warm-grey base64 PNG used as the default shimmer.
 * Replace with your own brand-coloured placeholder if desired.
 */
const DEFAULT_BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mNkYPhfz0AEYBxVSF+FABJADveax2aRAAAAAElFTkSuQmCC'

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Drop-in replacement for `next/image` with sensible performance defaults.
 *
 * @example – lazy card image (most common)
 * ```tsx
 * <OptimizedImage
 *   src="/images/f1.png"
 *   alt="Chicken Shawarma"
 *   width={400}
 *   height={400}
 *   sizePreset="card"
 * />
 * ```
 *
 * @example – priority hero image (above the fold, no lazy)
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero-bg.jpg"
 *   alt="Hero background"
 *   fill
 *   sizePreset="hero"
 *   priority
 * />
 * ```
 */
export default function OptimizedImage({
  src,
  alt,
  sizePreset = 'card',
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  wrapperClassName = '',
  className = '',
  priority = false,
  fill,
  width,
  height,
  ...rest
}: OptimizedImageProps) {
  const [loaded, setLoaded]   = useState(false)
  const [errored, setErrored] = useState(false)

  const handleLoad  = useCallback(() => setLoaded(true),  [])
  const handleError = useCallback(() => setErrored(true), [])

  const sizes = SIZE_PRESETS[sizePreset]

  // ── Skeleton shown while loading ──────────────────────────────────────────
  const skeleton = (
    <span
      aria-hidden
      className={[
        'absolute inset-0 animate-pulse rounded-[inherit]',
        'bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
        'dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800',
        loaded || errored ? 'opacity-0 pointer-events-none' : 'opacity-100',
        'transition-opacity duration-500',
      ].join(' ')}
    />
  )

  // ── Error state ───────────────────────────────────────────────────────────
  if (errored) {
    return (
      <span
        role="img"
        aria-label={alt}
        className={[
          'flex items-center justify-center bg-neutral-100 dark:bg-neutral-800',
          'text-neutral-400 text-xs select-none rounded-[inherit]',
          fill ? 'absolute inset-0' : '',
          className,
        ].join(' ')}
        style={fill ? undefined : { width, height }}
      >
        🍽️
      </span>
    )
  }

  // ── Fill layout (parent must be position:relative) ────────────────────────
  if (fill) {
    return (
      <span className={`absolute inset-0 overflow-hidden ${wrapperClassName}`}>
        {skeleton}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      </span>
    )
  }

  // ── Fixed width/height layout ─────────────────────────────────────────────
  return (
    <span className={`relative block overflow-hidden rounded-[inherit] ${wrapperClassName}`} style={{ width, height }}>
      {skeleton}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
    </span>
  )
}
