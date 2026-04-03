document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     THEME TOGGLE
     ========================================== */
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
      themeBtn.textContent = '☾';
    }

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      if (isLight) {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '☾';
      } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☼';
      }
    });
  }

  /* ==========================================
     LV-STYLE SMART NAVIGATION BAR
     ========================================== */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  if (navbar) {
    // Initial check on load
    if (window.scrollY > 50) navbar.classList.add('nav-scrolled');

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // 1. Transparent vs Solid State
      if (currentScrollY > 50) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }

      // 2. Hide / Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        navbar.classList.add('nav-hidden');
      } else {
        // Scrolling Up
        navbar.classList.remove('nav-hidden');
      }

      lastScrollY = currentScrollY;
    });
  }

  /* ==========================================
     SCROLL REVEAL (SLOW, CINEMATIC)
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================
     SMOOTH SCROLLING NAV
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================
     DYNAMIC HERO CAROUSEL
     ========================================== */
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  let currentSlide = 0;
  let carouselInterval;

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startCarousel() {
    if(slides.length > 0) {
      carouselInterval = setInterval(nextSlide, 3500);
    }
  }

  function resetCarousel() {
    clearInterval(carouselInterval);
    startCarousel();
  }

  // Dot Click handlers
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.target.getAttribute('data-slide'));
      goToSlide(slideIndex);
      resetCarousel(); // Reset timer so it doesn't instantly flip again
    });
  });

  // Start the auto-play loop on load
  startCarousel();

});
