document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarNav");
    const collapse = bootstrap.Collapse.getInstance(menu);
    if (collapse) collapse.hide();
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==================== COUNTER ANIMATION ====================
// const counters = document.querySelectorAll('.counter');

// const startCounter = (counter) => {
//   const target = +counter.getAttribute('data-target');
//   const count = +counter.innerText;
//   const increment = target / 200;

//   if (count < target) {
//     counter.innerText = Math.ceil(count + increment);
//     setTimeout(() => startCounter(counter), 10);
//   } else {
//     counter.innerText = target;
//   }
// };

// const counterObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       startCounter(entry.target);
//       counterObserver.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.7 });

// counters.forEach(counter => {
//   counterObserver.observe(counter);
// });

// ==================== FADE-IN ON SCROLL ====================
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((el) => {
  fadeObserver.observe(el);
});

// ==================== HORIZONTAL SCROLL ENHANCEMENTS ====================
// Only run if the horizontal journey section exists
const horizontalWrapper = document.querySelector(".horizontal-scroll-wrapper");

if (horizontalWrapper) {
  // Enable smooth wheel scrolling horizontally
  horizontalWrapper.addEventListener("wheel", (e) => {
    e.preventDefault();
    horizontalWrapper.scrollLeft += e.deltaY * 1.5; // Adjust speed
  });

  // Optional: Snap to panels after scroll ends
  let scrollTimeout;
  horizontalWrapper.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const panels = document.querySelectorAll(".milestone-panel");
      let closestPanel = null;
      let closestDistance = Infinity;

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const distance = Math.abs(
          rect.left - (window.innerWidth / 2 - rect.width / 2)
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPanel = panel;
        }
      });

      if (closestPanel) {
        closestPanel.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }, 150);
  });
}

// ==================== FLOATING PARTICLES ====================
const particlesContainer = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 5 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;

  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 25000);
}

setInterval(createParticle, 800);

for (let i = 0; i < 20; i++) {
  createParticle();
}
