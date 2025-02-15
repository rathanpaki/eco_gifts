// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#2E7D32";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    navbar.style.transition =
      "background-color 0.5s ease, box-shadow 0.5s ease";
  } else {
    navbar.style.backgroundColor = "#388E3C";
    navbar.style.boxShadow = "none";
    navbar.style.transition =
      "background-color 0.5s ease, box-shadow 0.5s ease";
  }
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

// Fade-in Animation on Scroll
function fadeInElements() {
  let elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }
  });
}
window.addEventListener("scroll", fadeInElements);
window.addEventListener("load", fadeInElements);

// Button Hover Effect
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });
  button.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.3s ease";
  });
});
