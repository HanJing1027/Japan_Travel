// load
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // 確保 header 加載後再運行 script.js 的邏輯
      showMenu("nav-toggle", "nav-menu");
    })
    .catch((error) => console.error("Error loading header:", error));
});

// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

// animation
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".section__text, .section__btn");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.animationPlayState = "running";
  }
});

window.addEventListener("scroll", () => {
  const features = document.querySelector(".features");
  const featuresRect = features.getBoundingClientRect();
  if (featuresRect.top < window.innerHeight && featuresRect.bottom >= 0) {
    const featuresItem = document.querySelectorAll(".features__item");
    featuresItem.forEach((i) => {
      i.style.animationPlayState = "running";
    });
  }

  const card = document.querySelector(".tour__list");
  const cardRect = card.getBoundingClientRect();
  if (cardRect.top < window.innerHeight && cardRect.bottom >= 0) {
    const tourCard = document.querySelectorAll(".tour__item");
    tourCard.forEach((e) => {
      e.style.animationPlayState = "running";
    });
  }
});
