document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150; // Reveal point

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  // Run once on load
  reveal();

  // Run on scroll
  window.addEventListener("scroll", reveal);

  // Optional: Handle form submission prevention for demo purposes
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thanks for reaching out! (Form logic to be connected to a backend).",
      );
    });
  }
});
