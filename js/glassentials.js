/* ============================================
   GLASSENTIALS.JS — Product Gallery, Lightbox,
   Map, Parallax, Dynamic Offerings
   ============================================ */

(() => {
  'use strict';

  /* =============================================
     PRODUCT DATA
     ============================================= */
  const glassProducts = [
    {
      id: 'architectural-glass',
      num: '01',
      name: 'Architectural Glass',
      desc: 'Designed for modern structures where light, clarity and structural performance come together.',
      images: [
        'assets/products/glass/architectural-glass-1.jpg',
        'assets/products/glass/architectural-glass-2.jpg',
        'assets/products/glass/architectural-glass-3.jpg',
      ],
      layout: 'a',
    },
    {
      id: 'toughened-glass',
      num: '02',
      name: 'Toughened Glass',
      desc: 'Safety glass processed for strength, thermal resistance and safety compliance.',
      images: [
        'assets/products/glass/toughened-glass-1.jpg',
        'assets/products/glass/toughened-glass-2.jpg',
        'assets/products/glass/toughened-glass-3.jpg',
      ],
      layout: 'c',
    },
    {
      id: 'fluted-glass',
      num: '03',
      name: 'Fluted Glass',
      desc: 'Textured vertical grooves that diffuse light and add tactile character to interiors.',
      variants: ['Brown', 'Gray'],
      imagesByVariant: {
        Brown: [
          'assets/products/glass/fluted-glass-brown-1.jpg',
          'assets/products/glass/fluted-glass-brown-2.webp',
          'assets/products/glass/fluted-glass-brown-3.png',
        ],
        Gray: [
          'assets/products/glass/fluted-glass-gray-1.png',
          'assets/products/glass/fluted-glass-gray-2.webp',
          'assets/products/glass/fluted-glass-gray-3.webp',
        ],
      },
      layout: 'b',
    },
    {
      id: 'frosted-glass',
      num: '04',
      name: 'Frosted Glass',
      desc: 'Translucent finish that provides privacy while allowing soft diffused light to pass through.',
      images: [
        'assets/products/glass/frosted-glass-1.jpg',
        'assets/products/glass/frosted-glass-2.jpg',
        'assets/products/glass/frosted-glass-3.webp',
      ],
      layout: 'a',
    },
    {
      id: 'annealed-glass',
      num: '05',
      name: 'Annealed Glass',
      desc: 'Standard float glass — clear, versatile and foundational for a wide range of applications.',
      images: [
        'assets/products/glass/annealed-glass-1.jpg',
        'assets/products/glass/annealed-glass-2.jpg',
        'assets/products/glass/annealed-glass-3.jpg',
      ],
      layout: 'c',
    },
    {
      id: 'tinted-glass',
      num: '06',
      name: 'Tinted Glass',
      desc: 'Colour-body glass that reduces solar heat gain and adds visual depth to architectural surfaces.',
      variants: ['Black', 'Gray', 'Brown'],
      imagesByVariant: {
        Black: [
          'assets/products/glass/tinted-glass-black-1.jpg',
          'assets/products/glass/tinted-glass-black-2.jpg',
          'assets/products/glass/tinted-glass-black-3.jpg',
        ],
        Gray: [
          'assets/products/glass/tinted-glass-gray-1.jpg',
          'assets/products/glass/tinted-glass-gray-2.jpg',
          'assets/products/glass/tinted-glass-gray-3.jpg',
        ],
        Brown: [
          'assets/products/glass/tinted-glass-brown-1.webp',
          'assets/products/glass/tinted-glass-brown-2.webp',
          'assets/products/glass/tinted-glass-brown-3.jpg',
        ],
      },
      layout: 'b',
    },
    {
      id: 'laminated-glass',
      num: '07',
      name: 'Laminated Glass',
      desc: 'Two or more glass layers bonded with interlayer film — enhanced safety, sound insulation and UV control.',
      images: [
        'assets/products/glass/laminated-glass-1.jpg',
        'assets/products/glass/laminated-glass-2.jpg',
        'assets/products/glass/laminated-glass-3.jpg',
      ],
      layout: 'a',
    },
    {
      id: 'fabric-laminated-glass',
      num: '08',
      name: 'Fabric Laminated Glass',
      desc: 'Textile interlayers embedded within glass — a distinctive material for partitions and decorative features.',
      images: [
        'assets/products/glass/fabric-laminated-glass-1.jpg',
        'assets/products/glass/fabric-laminated-glass-2.jpg',
        'assets/products/glass/fabric-laminated-glass-3.jpg',
      ],
      layout: 'c',
    },
  ];

  const mirrorProducts = [
    {
      id: 'clear-mirror',
      num: '01',
      name: 'Clear Mirror',
      desc: 'Standard silver-backed mirrors with high reflectivity for architectural and commercial applications.',
      images: [
        'assets/products/mirror/clear-mirror-1.jpg',
        'assets/products/mirror/clear-mirror-2.jpg',
        'assets/products/mirror/clear-mirror-3.jpg',
      ],
      layout: 'a',
    },
    {
      id: 'extra-clear-mirror',
      num: '02',
      name: 'Extra Clear Mirror',
      desc: 'Low-iron glass base delivers a truer, warmer reflection with minimal green tint.',
      images: [
        'assets/products/mirror/extra-clear-mirror-1.jpeg',
        'assets/products/mirror/extra-clear-mirror-2.webp',
        'assets/products/mirror/extra-clear-mirror-3.jpg',
      ],
      layout: 'c',
    },
    {
      id: 'led-mirror',
      num: '03',
      name: 'LED Mirror',
      desc: 'Illuminated mirrors that combine function and ambience — ideal for bathrooms and dressing areas.',
      variants: ['Frontlit', 'Backlit'],
      imagesByVariant: {
        Frontlit: [
          'assets/products/mirror/led-mirror-frontlit-1.jpg',
          'assets/products/mirror/led-mirror-frontlit-2.jpg',
          'assets/products/mirror/led-mirror-frontlit-3.jpg',
        ],
        Backlit: [
          'assets/products/mirror/led-mirror-backlit-1.jpg',
          'assets/products/mirror/led-mirror-backlit-2.jpg',
          'assets/products/mirror/led-mirror-backlit-3.jpg',
        ],
      },
      layout: 'b',
    },
    {
      id: 'framed-mirror',
      num: '04',
      name: 'Framed Mirror',
      desc: 'Precision-framed mirrors in a range of profiles — available with and without integrated LED.',
      variants: ['LED', 'Without LED'],
      imagesByVariant: {
        LED: [
          'assets/products/mirror/framed-mirror-led-1.jpg',
          'assets/products/mirror/framed-mirror-led-2.jpg',
          'assets/products/mirror/framed-mirror-led-3.jpg',
        ],
        'Without LED': [
          'assets/products/mirror/framed-mirror-without-led-1.jpg',
          'assets/products/mirror/framed-mirror-without-led-2.jpg',
          'assets/products/mirror/framed-mirror-without-led-3.jpg',
        ],
      },
      layout: 'a',
    },
    {
      id: 'frameless-mirror',
      num: '05',
      name: 'Frameless Mirror',
      desc: 'Clean, edge-polished mirrors for contemporary interiors where the glass itself is the statement.',
      images: [
        'assets/products/mirror/frameless-mirror-1.jpg',
        'assets/products/mirror/frameless-mirror-2.jpg',
        'assets/products/mirror/frameless-mirror-3.jpg',
      ],
      layout: 'c',
    },
  ];

  const offerings = [
    {
      num: '01',
      name: 'Architectural Glass',
      desc: 'Glass solutions for modern architectural and interior applications.',
    },
    {
      num: '02',
      name: 'Mirrors',
      desc: 'Clear, extra-clear, framed, frameless and illuminated mirror solutions.',
    },
    {
      num: '03',
      name: 'Glass Bricks',
      desc: 'Decorative glass brick solutions for distinctive interiors.',
    },
    {
      num: '04',
      name: 'Shower Solutions',
      desc: 'Glass shower enclosures, fittings and precision hardware.',
    },
    {
      num: '05',
      name: 'Custom & Specialized',
      desc: 'Specialized glass configurations and custom applications.',
    },
    {
      num: '06',
      name: 'Toughened & Safety Glass',
      desc: 'Processed glass for safety, thermal performance and structural use.',
    },
  ];

  /* =============================================
     IMAGE EXISTENCE + RENDER HELPERS
     ============================================= */

  /**
   * Build a uniform catalogue grid.
   * Fixed-height cells, object-fit:contain — every image shape handled cleanly.
   */
  function buildAdaptiveGrid(images, catName) {
    const wrapper = document.createElement('div');
    wrapper.className = 'ge-adaptive-grid';

    // Classify by count only — CSS handles the rest
    const n = images.length;
    if (n === 1) wrapper.classList.add('gel-single');
    else if (n === 2) wrapper.classList.add('gel-two');
    else if (n >= 4) wrapper.classList.add('gel-masonry');
    // 3 images = default 3-col (no extra class needed)

    images.forEach((src, idx) => {
      const item = document.createElement('div');
      item.className = 'ge-img-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `View ${catName} image ${idx + 1}`);

      const img = document.createElement('img');
      img.alt = `${catName} ${idx + 1}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = src;

      const overlay = document.createElement('div');
      overlay.className = 'ge-img-item-overlay';
      overlay.innerHTML = `<span>${catName}<span aria-hidden="true"> ↗</span></span>`;

      img.onerror = () => {
        item.innerHTML = '';
        item.className = 'ge-img-placeholder';
        item.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 16l5-5 4 4 3-3 6 6"/>
          </svg>
          <span>Image coming soon</span>
        `;
      };

      item.appendChild(img);
      item.appendChild(overlay);

      item.addEventListener('click', () => openLightbox(images, idx));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openLightbox(images, idx);
      });

      wrapper.appendChild(item);
    });

    return wrapper;
  }

  /**
   * Build a product category block.
   */
  function buildProductCat(product, catIndex) {
    const block = document.createElement('div');
    block.className = 'ge-product-cat reveal';

    // Header
    const header = document.createElement('div');
    header.className = 'ge-product-cat-header';
    header.innerHTML = `
      <span class="ge-product-cat-num">${product.num}</span>
      <span class="ge-product-cat-name">${product.name}</span>
      <span class="ge-product-cat-desc">${product.desc}</span>
    `;
    block.appendChild(header);

    // Variant tabs + image grid area
    const imgArea = document.createElement('div');
    imgArea.className = 'ge-product-cat-images';

    if (product.variants && product.imagesByVariant) {
      // Has variants
      const tabs = document.createElement('div');
      tabs.className = 'ge-variant-tabs';

      const gridContainer = document.createElement('div');
      let currentGrid = null;

      product.variants.forEach((variant, vi) => {
        const tab = document.createElement('button');
        tab.className = 'ge-variant-tab' + (vi === 0 ? ' active' : '');
        tab.textContent = variant;
        tab.setAttribute('aria-pressed', vi === 0 ? 'true' : 'false');
        tabs.appendChild(tab);

        tab.addEventListener('click', () => {
          tabs.querySelectorAll('.ge-variant-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-pressed', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-pressed', 'true');
          if (currentGrid) gridContainer.removeChild(currentGrid);
          const imgs = product.imagesByVariant[variant];
          currentGrid = buildAdaptiveGrid(imgs, `${product.name} - ${variant}`);
          gridContainer.appendChild(currentGrid);
        });
      });

      // Initial grid
      const initImgs = product.imagesByVariant[product.variants[0]];
      currentGrid = buildAdaptiveGrid(initImgs, `${product.name} - ${product.variants[0]}`);
      gridContainer.appendChild(currentGrid);

      imgArea.appendChild(tabs);
      imgArea.appendChild(gridContainer);
    } else {
      // No variants
      const grid = buildAdaptiveGrid(product.images, product.name);
      imgArea.appendChild(grid);
    }

    block.appendChild(imgArea);
    return block;
  }

  /* =============================================
     RENDER GALLERIES
     ============================================= */
  function renderGallery(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    products.forEach((product, i) => {
      const block = buildProductCat(product, i);
      container.appendChild(block);
    });
  }

  /* =============================================
     RENDER OFFERINGS
     ============================================= */
  function renderOfferings() {
    const container = document.getElementById('ge-offerings');
    if (!container) return;
    offerings.forEach(o => {
      const item = document.createElement('div');
      item.className = 'ge-offering-item reveal';
      item.innerHTML = `
        <span class="ge-offering-num">${o.num}</span>
        <h3>${o.name}</h3>
        <p>${o.desc}</p>
      `;
      container.appendChild(item);
    });
  }

  /* =============================================
     LIGHTBOX
     ============================================= */
  let lbImages = [];
  let lbIndex = 0;

  const lightbox = document.getElementById('geLightbox');
  const lbImg = document.getElementById('geLbImg');
  const lbCounter = document.getElementById('geLbCounter');
  const lbClose = document.getElementById('geLbClose');
  const lbPrev = document.getElementById('geLbPrev');
  const lbNext = document.getElementById('geLbNext');

  function openLightbox(images, index) {
    lbImages = images;
    lbIndex = index;
    showLbImage();
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function showLbImage() {
    const src = lbImages[lbIndex];
    lbImg.src = src;
    lbImg.alt = `Product image ${lbIndex + 1}`;
    lbCounter.textContent = `${String(lbIndex + 1).padStart(2, '0')} / ${String(lbImages.length).padStart(2, '0')}`;
    lbPrev.disabled = lbIndex === 0;
    lbNext.disabled = lbIndex === lbImages.length - 1;
  }

  function lbNavigate(dir) {
    const newIndex = lbIndex + dir;
    if (newIndex >= 0 && newIndex < lbImages.length) {
      lbIndex = newIndex;
      showLbImage();
    }
  }

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => lbNavigate(-1));
  lbNext?.addEventListener('click', () => lbNavigate(1));

  // Click outside image
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbNavigate(-1);
    if (e.key === 'ArrowRight') lbNavigate(1);
  });

  /* =============================================
     INDIA MAP INTERACTION
     ============================================= */
  function initMap() {
    const dots = document.querySelectorAll('.ge-map-dot');
    const tooltip = document.getElementById('geMapTooltip');

    dots.forEach(dot => {
      dot.addEventListener('mouseenter', () => {
        const city = dot.getAttribute('data-city');
        if (tooltip) {
          tooltip.textContent = city;
          // Position near the dot
          const cx = parseFloat(dot.getAttribute('cx'));
          const cy = parseFloat(dot.getAttribute('cy'));
          tooltip.setAttribute('x', cx);
          tooltip.setAttribute('y', cy - 14);
          tooltip.style.opacity = '1';
        }
      });

      dot.addEventListener('mouseleave', () => {
        if (tooltip) tooltip.style.opacity = '0';
      });
    });
  }

  /* =============================================
     PARALLAX (Brand Statement)
     ============================================= */
  function initParallax() {
    const statementImg = document.getElementById('geStatementImg');
    if (!statementImg) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScroll = () => {
      const section = statementImg.closest('.ge-brand-statement');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const shift = (progress - 0.5) * 60;
      statementImg.style.transform = `translateY(${shift}px) scale(1.08)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =============================================
     HERO IMAGE SUBTLE PARALLAX
     ============================================= */
  function initHeroParallax() {
    const heroImg = document.getElementById('geHeroImg');
    if (!heroImg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScroll = () => {
      const y = window.scrollY;
      heroImg.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* =============================================
     SCROLL REVEAL — register new .reveal elements
     (main.js handles global reveal, but we may add
     elements dynamically — re-observe after render)
     ============================================= */
  function observeReveal() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    items.forEach(el => obs.observe(el));
  }

  /* =============================================
     COUNTER ANIMATION (supplement to main.js)
     ============================================= */
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 2000;
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const prog = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.floor(eased * target);
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(el => obs.observe(el));
  }

  /* =============================================
     INIT
     ============================================= */
  function init() {
    renderOfferings();
    renderGallery('ge-glass-gallery', glassProducts);
    renderGallery('ge-mirror-gallery', mirrorProducts);

    // After rendering dynamic elements, re-observe
    requestAnimationFrame(() => {
      observeReveal();
    });

    initMap();
    initParallax();
    initHeroParallax();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
