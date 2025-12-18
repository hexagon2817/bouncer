
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navbarNav');
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) collapse.hide();
    });
  });








// Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Highlight active nav link on scroll
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });









    /* Floating particles */
    const particles = document.getElementById('particles');

    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.width = p.style.height = Math.random() * 7 + 3 + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 20 + 's';
        p.style.animationDuration = 15 + Math.random() * 25 + 's';
        particles.appendChild(p);
    }

    /* Scroll reveal */
    const fadeElems = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    fadeElems.forEach(el => observer.observe(el));

    /* Counter animation */
    const counters = document.querySelectorAll('.counter');

    const countUp = counter => {
        const target = +counter.dataset.target;
        const speed = 200;
        const inc = target / speed;
        let count = 0;

        const timer = setInterval(() => {
            count += inc;
            if (count >= target) {
                counter.innerText =
                    target + (target === 100 ? '%' : '+');
                clearInterval(timer);
            } else {
                counter.innerText = Math.ceil(count);
            }
        }, 20);
    };

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
