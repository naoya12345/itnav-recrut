//entry
const writeCheckbox = (getData) => {
  getData = getData.filter((item) => item.date !== "");
  if (getData.length) {
    const scheduleContent = document.getElementById("scheduleContent");
    scheduleContent.insertAdjacentHTML(
      "beforeend",
      `<div class="form-chunk">
        <p class="label">会社見学を希望する日時</p>
        <div id="checkGroup" class="check-group flex"></div>
      </div>`
    );
    getData.forEach((scheduleItem) => {
      const checkItem = document.createElement("div");
      checkItem.className = "check-group-item clickable";
      document.getElementById("checkGroup").appendChild(checkItem);

      const scheduleDate = new Date(scheduleItem.date);
      const scMonth = scheduleDate.getMonth();
      const scDay = scheduleDate.getDate();
      const scHour = ("00" + scheduleDate.getHours()).slice(-2);
      const scMinute = ("00" + scheduleDate.getMinutes()).slice(-2);

      const dateName = `${scMonth + 1}_${scDay}-${scHour}_${scMinute}`;
      const dateContent = `${scMonth + 1}/${scDay} ${scHour}:${scMinute}`;

      const itemInput = document.createElement("input");
      itemInput.type = "checkbox";
      itemInput.id = dateName;
      itemInput.name = dateContent;
      checkItem.appendChild(itemInput);

      const itemLabel = document.createElement("label");
      itemLabel.htmlFor = dateName;
      itemLabel.textContent = dateContent;
      checkItem.appendChild(itemLabel);
    });
  }
};

const scheduleDataURL =
  "https://script.google.com/macros/s/AKfycbzNnnVsLWeMwMxHJo1IxTu8KWd47uRms6yuqZ1asBEhQhe6J1Xj5JXHrCzS6LXRToQ/exec";

fetch(scheduleDataURL)
  .then((response) => response.json())
  .then((data) => writeCheckbox(data));

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

const headerUrl = "/assets/htmlparts/header.html";

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

const footerURL = "entry.html";

fetch(footerURL)
  .then((response) => response.text())
  .then((data) =>
    writeFooter(new DOMParser().parseFromString(data, "text/html"))
  );
