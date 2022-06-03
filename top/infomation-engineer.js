//heder
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

const headerUrl = "header.html";

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
    path.match("information.html") &&
    path.split("/").filter(Boolean).length > 1
  ) {
    footerHead.remove();
  } else if (path.match("entry.html")) {
    footerHead.remove();
  }
};

const footerURL = "footer.html";

fetch(footerURL)
  .then((response) => response.text())
  .then((data) =>
    writeFooter(new DOMParser().parseFromString(data, "text/html"))
  );
