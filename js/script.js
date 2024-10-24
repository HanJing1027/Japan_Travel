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
