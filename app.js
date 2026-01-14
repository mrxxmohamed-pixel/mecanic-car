const revealElements = document.querySelectorAll(".reveal");
const yearTarget = document.getElementById("year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));
