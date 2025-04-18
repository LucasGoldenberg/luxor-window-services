// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const quoteBtn = document.querySelector(".btn");
  
    // Smooth scroll to contact section + highlight form
    quoteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const formSection = document.querySelector("#contact");
      formSection.scrollIntoView({ behavior: "smooth" });
  
      form.classList.add("highlight");
      setTimeout(() => {
        form.classList.remove("highlight");
      }, 2000);
    });
  
    // Handle form submission to Formspree
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
  
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(() => {
          alert("Thanks for your message! We’ll be in touch soon.");
          form.reset();
        })
        .catch(() => {
          alert("Oops! Something went wrong. Please try again.");
        });
    });
  });