//header
const writeHeader = (getData) => {
  document.getElementById("header").innerHTML =
    getData.getElementsByTagName("header")[0].innerHTML;

  // headerナビゲーションのcurrent表示
  const navLinks = document.getElementsByClassName("nav-link");
  Array.from(navLinks).forEach((item) => {
    if (item.href === window.location.href) item.classList.add("is-current");
  });

  // sp版headerのメニューボタン
  const headerBtn = document.getElementById("headerBtn");
  headerBtn.onclick = () => {
    const headerMenu = document.getElementById("headerMenu");
    headerMenu.classList.toggle("is-open");
  };
};

const headerUrl = "index.html";

fetch(headerUrl)
  .then((response) => response.text())
  .then((data) =>
    writeHeader(new DOMParser().parseFromString(data, "text/html"))
  );

//footer
const writeFooter = (getData) => {
  document.getElementById("footer").innerHTML =
    getData.getElementsByTagName("footer")[0].innerHTML;

  const footerHead = document.getElementById("footerHead");
  const path = window.location.pathname;
  if (
    path.match("/information/") &&
    path.split("/").filter(Boolean).length > 1
  ) {
    footerHead.remove();
  } else if (path.match("/entry/")) {
    footerHead.remove();
  }
};

const footerURL = "index.html";

//top
const swiper = new Swiper(".swiper", {
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className} ">${("00" + (index + 1)).slice(-2)}</span>`,
  },
});
