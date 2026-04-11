'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import './menu.css'

const menuItems = [
  { id: 1,  name: 'Mandi Chicken',         category: 'rice',     price: 'RM19', image: 'https://fast.ejazmine.com/wp-content/uploads/2021/11/Untitled-design-2-2.jpg' },
  { id: 2,  name: 'Mandi Shawarma Beef',   category: 'rice',     price: 'RM25', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpub6Qh3JvyoyuPtNvb0SS02jGimrTAKYKATf5ljrfkqSeHm1vN54dhc2caIvhHxfd1pU&usqp=CAU' },
  { id: 3,  name: 'Mandi Lamb',            category: 'rice',     price: 'RM33', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDNaxXb_fJu-ixF1teYBwC3kq-HxBThBXLw&s' },
  { id: 4,  name: 'Kabsa Chicken',         category: 'rice',     price: 'RM23', image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg' },
  { id: 5,  name: 'Kabsa Shawarma Beef',   category: 'rice',     price: 'RM28', image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg' },
  { id: 6,  name: 'Kabsa Lamb',            category: 'rice',     price: 'RM36', image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg' },
  { id: 7,  name: 'Crispy Chicken Set',    category: 'crispy',   price: 'RM28', image: 'https://thumbs.dreamstime.com/z/chicken-tenders-fries-fried-french-dipping-sauce-93035208.jpg' },
  { id: 8,  name: 'Crispy Chicken Roll',   category: 'crispy',   price: 'RM17', image: 'https://img.freepik.com/premium-photo/fried-chicken-wraps-white-paper-wrap-white-background_439318-4590.jpg' },
  { id: 9,  name: 'Shawarma Chicken',      category: 'shawarma', price: 'M : RM9 | L : RM14',  image: 'https://thebusybaker.ca/wp-content/uploads/2025/03/chicken-shawarma-fb-ig-12-scaled.jpg' },
  { id: 10, name: 'Shawarma Chicken Cheese', category: 'shawarma', price: 'M : RM10 | L : RM15', image: 'https://previews.123rf.com/images/jeannierv/jeannierv2111/jeannierv211100105/177527882-cheese-roll-of-shawarma-with-cheese-sauce-chicken-and-vegetables-in-pita-bread-on-wooden-dark.jpg' },
  { id: 11, name: 'Shawarma Chicken Fries', category: 'shawarma', price: 'M : RM10 | L : RM15', image: 'https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg' },
  { id: 12, name: 'Shawarma Beef',         category: 'shawarma', price: 'M : RM12 | L : RM16', image: 'https://www.corriecooks.com/wp-content/uploads/2023/08/beefshawarma.jpg' },
  { id: 13, name: 'Shawarma Beef Cheese',  category: 'shawarma', price: 'M : RM14 | L : RM18', image: 'https://thumbs.dreamstime.com/b/shawarma-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-falafel-recipetin-eatsfilled-grilled-shawarma-166799143.jpg' },
  { id: 14, name: 'Shawarma Beef Fries',   category: 'shawarma', price: 'M : RM14 | L : RM18', image: 'https://static.wixstatic.com/media/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg/v1/fill/w_315,h_315,al_c,lg_1,q_80,enc_avif,quality_auto/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg' },
  { id: 15, name: 'Mix Grill Platter',     category: 'grill',    price: 'RM35', image: '/images/f5.png' },
  { id: 16, name: 'Beef Kebab Wrap',       category: 'grill',    price: 'RM15', image: '/images/f6.png' },
  { id: 17, name: 'Fresh Orange Juice',    category: 'drinks',   price: 'RM8',  image: '/images/f8.png' },
  { id: 18, name: 'Arabic Salad',          category: 'salads',   price: 'RM10', image: '/images/f4.png' },
]

const categoryList = [
  { value: '*',        label: 'All',         icon: '🍽️' },
  { value: 'shawarma', label: 'Shawarma',    icon: '🌯' },
  { value: 'rice',     label: 'Rice Dishes', icon: '🍚' },
  { value: 'crispy',   label: 'Crispy',      icon: '🍗' },
  { value: 'grill',    label: 'Grill',       icon: '🥩' },
  { value: 'drinks',   label: 'Drinks',      icon: '🥤' },
  { value: 'salads',   label: 'Salads',      icon: '🥗' },
]

/* ── Generate a short order reference number ── */
function generateRef() {
  const ts  = Date.now().toString(36).toUpperCase()
  const rnd = Math.random().toString(36).slice(2, 5).toUpperCase()
  return `STK-${ts}-${rnd}`
}

export default function MenuPage() {
  const [filteredItems, setFilteredItems] = useState(menuItems)
  const [activeFilter, setActiveFilter]   = useState('*')
  const [animatingIds, setAnimatingIds]   = useState<Set<number>>(new Set())
  const [cartItems, setCartItems] = useState<
    Array<{ id: number | string; name: string; price: string; quantity: number; image: string }>
  >([])

  // Variant Modal
  const [variantModalItem, setVariantModalItem] = useState<{ id: number; name: string; price: string; image: string; category: string } | null>(null)
  const [selectedVariant, setSelectedVariant]   = useState<{ label: string; price: string } | null>(null)
  
  // Storage init
  const [isMounted, setIsMounted] = useState(false)

  // Mobile cart drawer
  const [cartOpen, setCartOpen] = useState(false)

  // Toast
  const [toast, setToast] = useState<{ name: string; visible: boolean }>({ name: '', visible: false })
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Invoice modal
  const [invoiceOpen, setInvoiceOpen] = useState(false)
  const [invoiceRef,  setInvoiceRef]  = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')

  /* ── Filter ── */
  const handleFilter = (category: string) => {
    if (category === activeFilter) return
    const next    = category === '*' ? menuItems : menuItems.filter(i => i.category === category)
    const leaving = new Set(filteredItems.filter(i => !next.find(n => n.id === i.id)).map(i => i.id))
    setAnimatingIds(leaving)
    setActiveFilter(category)
    setTimeout(() => { setFilteredItems(next); setAnimatingIds(new Set()) }, 280)
  }

  /* ── Cart helpers ── */
  const getNumericPrice = (price: string) => {
    const m = price.match(/RM\s*(\d+)/)
    return m ? Number(m[1]) : 0
  }

  const addToCart = (item: { id: number | string; name: string; price: string; image: string }) => {
    setCartItems(prev => {
      const ex = prev.find(c => c.id === item.id)
      if (ex) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)
      return [...prev, { ...item, quantity: 1 }]
    })
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ name: item.name, visible: true })
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2500)
  }

  const updateQuantity = (id: number | string, delta: number) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i)
          .filter(i => i.quantity > 0)
    )
  }

  const handleAddClick = (item: { id: number; name: string; price: string; image: string; category: string }) => {
    if (item.price.includes('|')) {
      setVariantModalItem(item)
      setSelectedVariant(null)
    } else {
      addToCart(item)
    }
  }

  const handleVariantAdd = () => {
    if (!variantModalItem || !selectedVariant) return
    addToCart({
      id: `${variantModalItem.id}-${selectedVariant.label}`,
      name: `${variantModalItem.name} (${selectedVariant.label})`,
      price: selectedVariant.price,
      image: variantModalItem.image
    })
    setVariantModalItem(null)
  }

  const total    = cartItems.reduce((s, i) => s + getNumericPrice(i.price) * i.quantity, 0)
  const totalQty = cartItems.reduce((s, i) => s + i.quantity, 0)

  /* ── Open invoice ── */
  const openInvoice = () => {
    const now = new Date()
    setInvoiceRef(generateRef())
    setInvoiceDate(
      now.toLocaleDateString('en-MY', { day: '2-digit', month: 'long', year: 'numeric' }) +
      '  ·  ' +
      now.toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit' })
    )
    setInvoiceOpen(true)
    setCartOpen(false)            // close mobile drawer when invoice opens
  }

  /* ── Block body scroll when overlays open ── */
  useEffect(() => {
    document.body.style.overflow = (invoiceOpen || cartOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [invoiceOpen, cartOpen])

  /* ── Sync cart to localStorage ── */
  useEffect(() => {
    const saved = localStorage.getItem('stk_cart')
    if (saved) {
      try { setCartItems(JSON.parse(saved)) } catch(e) {}
    }
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('stk_cart', JSON.stringify(cartItems))
    }
  }, [cartItems, isMounted])

  /* ──────────────────────────────────────────────────────── JSX ─── */
  return (
    <main className="mp-root">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="mp-hero">
        <div className="mp-hero-orb mp-hero-orb1" />
        <div className="mp-hero-orb mp-hero-orb2" />
        <div className="mp-float mp-float-l" aria-hidden="true">
          <Image src="/images/f1.png" alt="" fill className="object-contain" />
        </div>
        <div className="mp-float mp-float-r" aria-hidden="true">
          <Image src="/images/f2.png" alt="" fill className="object-contain" />
        </div>
        <div className="mp-hero-inner">
          <span className="mp-tag">Authentic · Fresh · Handcrafted</span>
          <h1 className="mp-title">Our <span className="mp-title-accent">Menu</span></h1>
          <p className="mp-subtitle">Explore our full selection of shawarmas, rice dishes &amp; more</p>
        </div>
        <div className="mp-wave" aria-hidden="true" />
      </section>

      {/* ══ STICKY FILTER BAR ════════════████════════════════════════ */}
      <div className="mp-filter-bar" role="tablist" aria-label="Menu categories">
        {categoryList.map(cat => (
          <button
            key={cat.value} role="tab"
            aria-selected={activeFilter === cat.value}
            onClick={() => handleFilter(cat.value)}
            className={`mp-pill${activeFilter === cat.value ? ' mp-pill-active' : ''}`}
          >
            <span className="mp-pill-icon">{cat.icon}</span>{cat.label}
          </button>
        ))}
      </div>

      {/* ══ BODY ══════════════════════════════════════════════════════ */}
      <section className="mp-body">
        <div className="mp-layout">

          {/* ── Menu grid ── */}
          <div className="mp-grid-col">
            <div className="mp-grid" role="list">
              {filteredItems.map(item => (
                <article
                  key={item.id} role="listitem"
                  className={`mp-card${animatingIds.has(item.id) ? ' mp-card-exit' : ' mp-card-enter'}`}
                >
                  <div className="mp-card-img-wrap">
                    <Image src={item.image} alt={item.name} fill className="mp-card-img" unoptimized />
                    <span className="mp-card-badge">
                      {categoryList.find(c => c.value === item.category)?.icon} {item.category}
                    </span>
                  </div>
                  <div className="mp-card-body">
                    <h3 className="mp-card-name">{item.name}</h3>
                    <div className="mp-card-footer">
                      <span className="mp-card-price">{item.price}</span>
                      <button
                        onClick={() => handleAddClick(item)}
                        className="mp-add-btn" aria-label={`Add ${item.name} to cart`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ── Desktop cart sidebar ── */}
          <div className="mp-cart-wrapper">
            <aside className="mp-cart" aria-label="Your order">
              <div className="mp-cart-hdr">
              <div>
                <h2 className="mp-cart-title">My Order</h2>
                <p className="mp-cart-count">{cartItems.length} item{cartItems.length === 1 ? '' : 's'}</p>
              </div>
              <div className="mp-cart-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
            </div>

            <div className="mp-cart-items">
              {cartItems.length === 0 ? (
                <div className="mp-cart-empty">
                  <div className="mp-cart-empty-ico">🛒</div>
                  <p>Your cart is empty</p>
                  <span>Add items from the menu</span>
                </div>
              ) : cartItems.map(item => (
                <div key={item.id} className="mp-cart-item">
                  <div className="mp-ci-img">
                    <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="mp-ci-info">
                    <h4 className="mp-ci-name">{item.name}</h4>
                    <span className="mp-ci-price">{item.price}</span>
                  </div>
                  <div className="mp-ci-qty">
                    <button onClick={() => updateQuantity(item.id, -1)} className="mp-qty-btn" aria-label="Decrease">−</button>
                    <span className="mp-qty-num">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}  className="mp-qty-btn" aria-label="Increase">+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mp-cart-ftr">
              <div className="mp-total-row">
                <span className="mp-total-lbl">Estimated total</span>
                <span className="mp-total-amt">RM {total}</span>
              </div>
              <button
                className="mp-checkout-btn"
                disabled={cartItems.length === 0}
                onClick={openInvoice}
              >
                {cartItems.length === 0 ? 'Add items to checkout' : 'Proceed to Checkout →'}
              </button>
            </div>
          </aside>
          </div>

        </div>
      </section>

      {/* ══ MOBILE FLOATING CART BAR ══════════════════════════════════ */}
      <div className={`mp-mobile-cart-bar ${cartItems.length > 0 ? 'mp-mcb-visible' : ''}`}>
        <button className="mp-mcb-trigger" onClick={() => setCartOpen(true)} aria-label="View my order">
          <div className="mp-mcb-left">
            <div className="mp-mcb-badge">{totalQty}</div>
            <span className="mp-mcb-label">View My Order</span>
          </div>
          <span className="mp-mcb-total">RM {total}</span>
        </button>
      </div>

      {/* ══ MOBILE CART DRAWER ════════════════════════════════════════ */}
      <div className={`mp-mob-backdrop ${cartOpen ? 'mp-mob-backdrop-show' : ''}`} onClick={() => setCartOpen(false)} aria-hidden="true" />
      <div className={`mp-mob-drawer ${cartOpen ? 'mp-mob-drawer-open' : ''}`} role="dialog" aria-label="Your order">
        <div className="mp-mob-handle" />
        <div className="mp-mob-drawer-hdr">
          <div>
            <h2 className="mp-cart-title">My Order</h2>
            <p className="mp-cart-count">{cartItems.length} item{cartItems.length === 1 ? '' : 's'}</p>
          </div>
          <button className="mp-mob-close" onClick={() => setCartOpen(false)} aria-label="Close cart">✕</button>
        </div>

        <div className="mp-mob-drawer-items">
          {cartItems.length === 0 ? (
            <div className="mp-cart-empty">
              <div className="mp-cart-empty-ico">🛒</div>
              <p>Your cart is empty</p>
              <span>Add items from the menu</span>
            </div>
          ) : cartItems.map(item => (
            <div key={item.id} className="mp-mob-order-item">
              <div className="mp-mob-oi-img">
                <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
              </div>
              <div className="mp-mob-oi-info">
                <h4 className="mp-mob-oi-name">{item.name}</h4>
                <span className="mp-mob-oi-price">{item.price}</span>
              </div>
              <div className="mp-ci-qty">
                <button onClick={() => updateQuantity(item.id, -1)} className="mp-qty-btn" aria-label="Decrease">−</button>
                <span className="mp-qty-num">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}  className="mp-qty-btn" aria-label="Increase">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mp-mob-drawer-ftr">
          <div className="mp-total-row" style={{ marginBottom: '14px' }}>
            <span className="mp-total-lbl">Estimated total</span>
            <span className="mp-total-amt">RM {total}</span>
          </div>
          <button
            className="mp-checkout-btn"
            disabled={cartItems.length === 0}
            onClick={openInvoice}
          >
            {cartItems.length === 0 ? 'Add items to checkout' : 'Proceed to Checkout →'}
          </button>
        </div>
      </div>

      {/* ══ TOAST ══════════════════════════════════════════════════════ */}
      <div className={`mp-toast ${toast.visible ? 'mp-toast-show' : ''}`} role="status" aria-live="polite">
        <span className="mp-toast-icon">✅</span>
        <span><strong>{toast.name}</strong> added to your order!</span>
      </div>

      {/* ══ VARIANT MODAL ══════════════════════════════════════════════ */}
      <div
        className={`inv-overlay ${variantModalItem ? 'inv-overlay-show' : ''}`}
        onClick={() => setVariantModalItem(null)}
        aria-hidden="true"
        style={{ zIndex: 90 }}
      />
      <div className={`inv-modal ${variantModalItem ? 'inv-modal-show' : ''}`} role="dialog" aria-modal="true" aria-label="Select Variant" style={{ zIndex: 100 }}>
        {variantModalItem && (
          <div className="var-card" onClick={e => e.stopPropagation()}>
            <div className="var-body" style={{ marginTop: '30px' }}>
              <div className="var-img">
                <Image src={variantModalItem.image} alt={variantModalItem.name} fill className="object-cover" unoptimized />
              </div>
              <h2 className="var-title">{variantModalItem.name}</h2>
              <div style={{ color: 'var(--txt-secondary)', fontSize: '13px', marginTop: '-8px' }}>Select an option Below</div>
              
              <div className="var-opts">
                {variantModalItem.price.split('|').map((opt, i) => {
                  const [lbl, prc] = opt.split(':').map(s => s.trim())
                  const isActive = selectedVariant?.label === lbl
                  return (
                    <button
                      key={i}
                      className={`var-opt-btn ${isActive ? 'var-opt-active' : ''}`}
                      onClick={() => setSelectedVariant({ label: lbl, price: prc })}
                    >
                      <span className="var-opt-lbl">{lbl}</span>
                      <span className="var-opt-prc">{prc}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            
            <div className="inv-actions">
              <button className="inv-btn-secondary" onClick={() => setVariantModalItem(null)}>Cancel</button>
              <button 
                className="inv-btn-primary" 
                onClick={handleVariantAdd}
                disabled={!selectedVariant}
                style={{ opacity: selectedVariant ? 1 : 0.5 }}
              >
                Add {selectedVariant ? selectedVariant.price : 'To Order'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ══ INVOICE MODAL ══════════════════════════════════════════════ */}
      <div
        className={`inv-overlay ${invoiceOpen ? 'inv-overlay-show' : ''}`}
        onClick={() => setInvoiceOpen(false)}
        aria-hidden="true"
      />
      <div className={`inv-modal ${invoiceOpen ? 'inv-modal-show' : ''}`} role="dialog" aria-modal="true" aria-label="Order Invoice">

        {/* ── Close ── */}
        <button className="inv-close" onClick={() => setInvoiceOpen(false)} aria-label="Close invoice">✕</button>

        {/* ── Invoice card ── */}
        <div className="inv-card">

          {/* Header stripe */}
          <div className="inv-header">
            <div className="inv-logo-wrap">
              <Image src="/images/logo.png" alt="Shawarma Time Kitchen" fill className="object-contain p-1 invert grayscale" />
            </div>
            <div>
              <div className="inv-brand">Shawarma Time Kitchen</div>
              <div className="inv-brand-sub">12, Jalan Suadamai 1/3, Tun Hussein Onn, 43200 Cheras</div>
              <div className="inv-brand-sub">📞 011-3903 9304 · info@shawarmatimekitchen.com</div>
            </div>
            <div className="inv-stamp">ORDER<br/>CONFIRMED</div>
          </div>

          {/* Ref + Date row */}
          <div className="inv-meta">
            <div className="inv-meta-block">
              <span className="inv-meta-lbl">Reference No.</span>
              <span className="inv-meta-val inv-ref">{invoiceRef}</span>
            </div>
            <div className="inv-meta-block" style={{ textAlign: 'right' }}>
              <span className="inv-meta-lbl">Date &amp; Time</span>
              <span className="inv-meta-val">{invoiceDate}</span>
            </div>
          </div>

          <div className="inv-divider" />

          {/* Items table */}
          <div className="inv-table-head">
            <span>Item</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
          </div>
          <div className="inv-items">
            {cartItems.map(item => {
              const unitPrice = getNumericPrice(item.price)
              return (
                <div key={item.id} className="inv-row">
                  <div className="inv-row-item">
                    <div className="inv-row-img">
                      <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                    </div>
                    <span className="inv-row-name">{item.name}</span>
                  </div>
                  <span className="inv-row-cell">
                    {unitPrice > 0 ? `RM ${unitPrice}` : item.price}
                  </span>
                  <span className="inv-row-cell">{item.quantity}</span>
                  <span className="inv-row-cell inv-row-sub">
                    {unitPrice > 0 ? `RM ${unitPrice * item.quantity}` : '—'}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="inv-divider" />

          {/* Totals */}
          <div className="inv-totals">
            <div className="inv-total-line">
              <span>Subtotal</span><span>RM {total}</span>
            </div>
            <div className="inv-total-line">
              <span>Service Tax (6%)</span>
              <span>RM {(total * 0.06).toFixed(2)}</span>
            </div>
            <div className="inv-total-line inv-grand">
              <span>Total</span>
              <span>RM {(total * 1.06).toFixed(2)}</span>
            </div>
          </div>

          <div className="inv-divider" />

          {/* Footer note */}
          <div className="inv-footer-note">
            <div className="inv-thank">🌯 Thank you for your order!</div>
            <p>Please show this invoice when collecting your order. Our team will prepare your fresh &amp; authentic meal with love.</p>
            <div className="inv-qr-row">
              <div className="inv-qr-fake" aria-hidden="true">
                {/* Simple SVG QR-like decoration */}
                <svg viewBox="0 0 60 60" width="60" height="60">
                  <rect x="2"  y="2"  width="22" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="9"  y="9"  width="8"  height="8"  rx="1" fill="currentColor"/>
                  <rect x="36" y="2"  width="22" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="43" y="9"  width="8"  height="8"  rx="1" fill="currentColor"/>
                  <rect x="2"  y="36" width="22" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="9"  y="43" width="8"  height="8"  rx="1" fill="currentColor"/>
                  <rect x="36" y="30" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="44" y="30" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="52" y="30" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="36" y="38" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="44" y="46" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="52" y="38" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="36" y="52" width="6"  height="6"  rx="1" fill="currentColor"/>
                  <rect x="52" y="52" width="6"  height="6"  rx="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="inv-qr-txt">
                <strong>Ref: {invoiceRef}</strong>
                <br/>Cheras Branch
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="inv-actions">
            <button className="inv-btn-secondary" onClick={() => setInvoiceOpen(false)}>← Back to Menu</button>
            <button className="inv-btn-primary" onClick={() => window.print()}>🖨 Print Invoice</button>
          </div>
        </div>
      </div>

    </main>
  )
}
