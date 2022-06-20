//header
function writeHeader(getData) {
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
}

const headerUrl = "index.html";

fetch(headerUrl)
  .then((response) => response.text())
  .then((data) =>
    writeHeader(new DOMParser().parseFromString(data, "text/html"))
  );
