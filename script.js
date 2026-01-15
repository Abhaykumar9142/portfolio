const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const skillSection = document.querySelector("#skills");
const circles = document.querySelectorAll(".skill-circle");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        circles.forEach(circle => {
          const percent = circle.getAttribute("data-percent");
          const progress = circle.querySelector(".progress");
          const offset = 326 - (326 * percent) / 100;
          progress.style.strokeDashoffset = offset;
        });
        observer.disconnect(); // run only once
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(skillSection);
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});
