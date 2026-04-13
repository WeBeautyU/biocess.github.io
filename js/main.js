// ============================================
// BIOCESS - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ─── Sticky Header ───────────────────────────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Mobile Navigation ───────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      mobileNav && mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      mobileNav && mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ─── Scroll Animations (Intersection Observer) ───────────────────
  const animEls = document.querySelectorAll('.fade-up, .fade-in');
  if (animEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    animEls.forEach(el => observer.observe(el));
  }

  // ─── Active Nav Link ─────────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── FAQ Accordion ───────────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  // ─── Lightbox ────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', () => {
        const src = el.getAttribute('data-lightbox') || el.querySelector('img')?.src || el.src;
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ─── Toast Notification ──────────────────────────────────────────
  window.showToast = function (message, duration = 3500) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  };

  // ─── Newsletter Form ─────────────────────────────────────────────
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const nameInput = newsletterForm.querySelector('input[name="name"]');
      const email = emailInput?.value.trim();
      if (!email) return;

      const btn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Subscribing...'; btn.disabled = true; }

      try {
        const response = await fetch('tables/newsletter_subscribers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            name: nameInput?.value.trim() || '',
            source: window.location.pathname,
            subscribed_at: new Date().toISOString()
          })
        });

        if (response.ok || response.status === 201) {
          showToast('✓ You\'re on the list! We\'ll notify you at launch.');
          newsletterForm.reset();
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        showToast('Something went wrong. Please try again.');
      } finally {
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      }
    });
  }

  // ─── Contact Form ────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm));
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn?.textContent;
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

      try {
        const response = await fetch('tables/contact_messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, sent_at: new Date().toISOString() })
        });

        if (response.ok || response.status === 201) {
          showToast('✓ Message sent! We\'ll get back to you soon.');
          contactForm.reset();
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        showToast('Something went wrong. Please try again.');
      } finally {
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      }
    });
  }

  // ─── Smooth Scroll for anchor links ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── Animate molecular weight bars ───────────────────────────────
  const mwBars = document.querySelectorAll('.mw-depth-fill');
  if (mwBars.length) {
    const mwObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width') || '0%';
          setTimeout(() => { bar.style.width = width; }, 200);
          mwObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    mwBars.forEach(bar => {
      bar.style.width = '0%';
      mwObserver.observe(bar);
    });
  }

  // ─── Product Gallery Switcher ─────────────────────────────────────
  const mainImgEl = document.getElementById('gallery-main-img');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  if (mainImgEl && thumbs.length) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.querySelector('img')?.src;
        if (newSrc) {
          mainImgEl.style.opacity = '0';
          setTimeout(() => {
            mainImgEl.src = newSrc;
            mainImgEl.style.opacity = '1';
          }, 200);
        }
      });
    });
    if (thumbs[0]) thumbs[0].classList.add('active');
  }

  // ─── Ingredient Search ───────────────────────────────────────────
  const ingSearch = document.getElementById('ingredient-search');
  const ingRows = document.querySelectorAll('.ingredients-table-row');
  const ingCount = document.getElementById('ingredient-count');

  if (ingSearch && ingRows.length) {
    ingSearch.addEventListener('input', () => {
      const query = ingSearch.value.toLowerCase();
      let visible = 0;
      ingRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const show = text.includes(query);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (ingCount) ingCount.textContent = `Showing ${visible} of ${ingRows.length} ingredients`;
    });
  }

  // ─── Number Counter Animation ────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          let start = 0;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(progress * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

});
