// LuxeGlow main JS
console.log("LuxeGlow loaded successfully");

document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(
    '.service-card, .testimonial-card, .why-content, .booking-form, .gallery-grid img'
  );

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target); // reveal once, then stop observing
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => observer.observe(el));
});