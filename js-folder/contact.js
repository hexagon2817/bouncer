document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navbarNav');
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) collapse.hide();
    });
  });






// Trigger animations on scroll
        window.addEventListener('scroll', () => {
            const card = document.getElementById('contactCard');
            const cardPos = card.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (cardPos < screenPos) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });

        // Staggered animation for info items and social icons
        setTimeout(() => {
            document.getElementById('info1').classList.add('show');
        }, 500);
        setTimeout(() => {
            document.getElementById('info2').classList.add('show');
        }, 800);
        setTimeout(() => {
            document.getElementById('info3').classList.add('show');
        }, 1100);
        setTimeout(() => {
            document.getElementById('social1').classList.add('show');
        }, 1400);
        setTimeout(() => {
            document.getElementById('social2').classList.add('show');
        }, 1600);
        setTimeout(() => {
            document.getElementById('social3').classList.add('show');
        }, 1800);
        setTimeout(() => {
            document.getElementById('social4').classList.add('show');
        }, 2000);

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! We will respond within minutes.');
            this.reset();
        });