// Small interaction layer for Page 01.
// The year updates automatically so you never need to edit it.

document.getElementById("year").textContent = new Date().getFullYear();

// Subtle reveal animation as sections enter the viewport.
const revealItems = document.querySelectorAll(
  ".area-card, .project-preview, .about-preview, .featured-top"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
