const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-animation");
      observer.unobserve(entry.target);
    }
  });
});

cards.forEach((card) => observer.observe(card));
