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

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
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
// window.addEventListener("load", () => {
//   const elements = document.querySelectorAll(".section__text, .section__btn");

//   for (let i = 0; i < elements.length; i++) {
//     elements[i].style.animationPlayState = "running";
//   }
// });

// window.addEventListener("scroll", () => {
//   const features = document.querySelector(".features");
//   const featuresRect = features.getBoundingClientRect();
//   if (featuresRect.top < window.innerHeight && featuresRect.bottom >= 0) {
//     const featuresItem = document.querySelectorAll(".features__item");
//     featuresItem.forEach((i) => {
//       i.style.animationPlayState = "running";
//     });
//   }

//   const card = document.querySelector(".tour__list");
//   const cardRect = card.getBoundingClientRect();
//   if (cardRect.top < window.innerHeight && cardRect.bottom >= 0) {
//     const tourCard = document.querySelectorAll(".tour__item");
//     tourCard.forEach((e) => {
//       e.style.animationPlayState = "running";
//     });
//   }
// });

// 函數：啟動動畫 (簡化Code)
const startAnimation = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((e) => {
    e.style.animationPlayState = "running";
  });
};
// 加載時啟動初始動畫
window.addEventListener("load", () => {
  startAnimation("main__title, main__text, main__btn");
});
// 滾動檢查元素是否在視窗中
window.addEventListener("scroll", () => {
  const sections = [
    { selector: ".features", items: ".features__item" },
    { selector: ".tour__list", items: ".tour__item" },
    { selector: ".guide", items: ".guide__item" },
  ];

  sections.forEach(({ selector, items }) => {
    const section = document.querySelector(selector);
    const sectionRect = section.getBoundingClientRect();

    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      startAnimation(items);
    }
  });
});

// view__more Btn animation
const viewBtn = document.querySelector(".view__btn");
const arrow = document.querySelectorAll(".arrow__animation");

viewBtn.addEventListener("mouseover", () => {
  arrow.forEach((arrow) => {
    arrow.style.animationPlayState = "running";
  });
});

viewBtn.addEventListener("mouseout", () => {
  arrow.forEach((arrow) => {
    arrow.style.animationPlayState = "paused";
  });
});
