'use client'

// Restaurant Website JavaScript Utilities

// ===== SCROLL ANIMATIONS =====
export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Observe all scroll-animate elements
  const animateElements = document.querySelectorAll(
    '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .card-advanced, .menu-item, .form-group'
  )
  animateElements.forEach((element) => observer.observe(element))
}

// ===== BACK TO TOP BUTTON =====
export function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop') || createBackToTopButton()
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show')
    } else {
      backToTopBtn.classList.remove('show')
    }
  })
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// Create back to top button if not exists
function createBackToTopButton() {
  const btn = document.createElement('button')
  btn.id = 'backToTop'
  btn.className = 'back-to-top'
  btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
  document.body.appendChild(btn)
  return btn
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

// ===== MOBILE MENU TOGGLE =====
export function initMobileMenu() {
  const menuToggle = document.querySelector('[data-menu-toggle]')
  const mobileMenu = document.querySelector('[data-mobile-menu]')
  const menuItems = mobileMenu?.querySelectorAll('a')

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active')
      menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false')
    })

    // Close menu when clicking on a link
    menuItems?.forEach((item) => {
      item.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
        menuToggle.setAttribute('aria-expanded', 'false')
      })
    })

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        !target.closest('[data-menu-toggle]') &&
        !target.closest('[data-mobile-menu]')
      ) {
        mobileMenu.classList.remove('active')
        menuToggle.setAttribute('aria-expanded', 'false')
      }
    })
  }
}

// ===== FORM VALIDATION =====
export function initFormValidation() {
  const forms = document.querySelectorAll('form')

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()

        // Add visual feedback
        const inputs = form.querySelectorAll('input, textarea, select')
        inputs.forEach((input) => {
          const htmlInput = input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          if (!htmlInput.checkValidity()) {
            htmlInput.style.borderColor = '#ff6b35'
            htmlInput.style.boxShadow = '0 0 0 4px rgba(255, 107, 53, 0.2)'

            setTimeout(() => {
              htmlInput.style.borderColor = ''
              htmlInput.style.boxShadow = ''
            }, 2000)
          }
        })
      }
    })
  })
}

// ===== LAZY LOAD IMAGES =====
export function initLazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]')

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src!
        img.removeAttribute('data-src')
        img.classList.add('loaded')
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// ===== PARALLAX EFFECT =====
export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]')

  if (parallaxElements.length === 0) return

  window.addEventListener('scroll', () => {
    parallaxElements.forEach((element) => {
      const htmlElement = element as HTMLElement
      const scrollPosition = window.scrollY
      const elementPosition = htmlElement.offsetTop
      const elementHeight = htmlElement.offsetHeight

      if (scrollPosition + window.innerHeight > elementPosition && scrollPosition < elementPosition + elementHeight) {
        const yPos = (scrollPosition - elementPosition) * 0.5
        htmlElement.style.backgroundPosition = `center calc(50% + ${yPos}px)`
      }
    })
  })
}

// ===== COUNTER ANIMATION =====
export function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]')

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement
      if (entry.isIntersecting && !target.dataset.counted) {
        countUp(target)
        target.dataset.counted = 'true'
      }
    })
  }, { threshold: 0.5 })

  counters.forEach((counter) => countObserver.observe(counter))
}

function countUp(element) {
  const target = parseInt(element.dataset.count)
  const duration = 2000
  const increment = target / (duration / 16)
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 16)
}

// ===== FILTER ANIMATION =====
export function initFilterAnimation() {
  const filterButtons = document.querySelectorAll('[data-filter]')
  const filterItems = document.querySelectorAll('[data-filter-item]')

  filterButtons.forEach((button) => {
    const htmlButton = button as HTMLElement
    htmlButton.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'))
      htmlButton.classList.add('active')

      const filter = htmlButton.dataset.filter

      filterItems.forEach((item) => {
        const htmlItem = item as HTMLElement
        if (filter === '*' || htmlItem.dataset.filterItem === filter) {
          htmlItem.style.display = 'block'
          setTimeout(() => {
            htmlItem.classList.add('visible')
          }, 10)
        } else {
          htmlItem.classList.remove('visible')
          setTimeout(() => {
            htmlItem.style.display = 'none'
          }, 300)
        }
      })
    })
  })
}

// ===== MODAL FUNCTIONALITY =====
export function initModals() {
  const modals = document.querySelectorAll('[data-modal]')
  const triggers = document.querySelectorAll('[data-modal-trigger]')

  triggers.forEach((trigger) => {
    const htmlTrigger = trigger as HTMLElement
    htmlTrigger.addEventListener('click', () => {
      const modalId = htmlTrigger.dataset.modalTrigger
      const modal = document.querySelector(`[data-modal="${modalId}"]`)
      if (modal) {
        modal.classList.add('active')
        document.body.style.overflow = 'hidden'
      }
    })
  })
  
  modals.forEach((modal) => {
    const closeBtn = modal.querySelector('[data-modal-close]')
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active')
        document.body.style.overflow = 'auto'
      })
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active')
        document.body.style.overflow = 'auto'
      }
    })
  })
}

// ===== SEARCH FUNCTIONALITY =====
export function initSearch() {
  const searchInput = document.querySelector('[data-search]')
  const searchResults = document.querySelector('[data-search-results]')
  const searchableItems = document.querySelectorAll('[data-searchable]')
  
  if (!searchInput) return
  
  searchInput.addEventListener('input', (e) => {
    const htmlTarget = e.target as HTMLInputElement
    const query = htmlTarget.value.toLowerCase()
    let visibleCount = 0
    
    searchableItems.forEach((item) => {
      const htmlItem = item as HTMLElement
      const text = item.textContent.toLowerCase()
      if (text.includes(query)) {
        htmlItem.style.display = 'block'
        htmlItem.classList.add('visible')
        visibleCount++
      } else {
        htmlItem.classList.remove('visible')
        htmlItem.style.display = 'none'
      }
    })
    
    if (searchResults && visibleCount === 0 && query) {
      const htmlResults = searchResults as HTMLElement
      htmlResults.innerHTML = '<p class="text-center text-gray-500">No results found</p>'
    } else if (searchResults) {
      const htmlResults = searchResults as HTMLElement
      htmlResults.innerHTML = ''
    }
  })
}

// ===== NOTIFICATION SYSTEM =====
export function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.classList.add('show')
  }, 100)
  
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, duration)
}

// ===== ACTIVE LINK HIGHLIGHT =====
export function highlightActiveLink() {
  const currentPath = window.location.pathname
  const navLinks = document.querySelectorAll('nav a[href]')
  
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

// ===== INITIALIZE ALL =====
export function initializeAll() {
  if (typeof window !== 'undefined') {
    initScrollAnimations()
    initBackToTop()
    initSmoothScroll()
    initMobileMenu()
    initFormValidation()
    initLazyLoadImages()
    initParallax()
    initCounterAnimation()
    initFilterAnimation()
    initModals()
    initSearch()
    highlightActiveLink()
  }
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeAll)
}
