let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

let toggleNavShow = function () {
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.opacity = "1";
  getSidebar.style.width = "272px";

  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1";
  }
};
let toggleNavHide = function () {
  getSidebar.style.width = "50px";
  getSidebar.style.opacity = "0";
  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }
  getSidebarUl.style.visibility = "hidden";
};

const getSidebarColor01 = document.getElementById("sidebarColor01");
const getSidebarColor02 = document.getElementById("sidebarColor02");
const getSidebarColor03 = document.getElementById("sidebarColor03");
const getSidebarColor04 = document.getElementById("sidebarColor04");
const getSidebarColor05 = document.getElementById("sidebarColor05");
const backgroundColor = document.getElementById("backgroundColor");

getSidebarColor01.addEventListener("click", changeToColor01);
getSidebarColor02.addEventListener("click", changeToColor02);
getSidebarColor03.addEventListener("click", changeToColor03);
getSidebarColor04.addEventListener("click", changeToColor04);
getSidebarColor05.addEventListener("click", changeToColor05);

function changeToColor01() {
  backgroundColor.className = "";
  backgroundColor.classList.add("backgroundColor01");
  document.getElementById("radioColor01").checked = true;
  document.getElementById("radioColor02").checked = false;
  document.getElementById("radioColor03").checked = false;
  document.getElementById("radioColor04").checked = false;
  document.getElementById("radioColor05").checked = false;
  document.getElementById("title").innerHTML = "Home";
}
function changeToColor02() {
  backgroundColor.className = "";
  backgroundColor.classList.add("backgroundColor02");
  document.getElementById("radioColor02").checked = true;
  document.getElementById("radioColor01").checked = false;
  document.getElementById("radioColor03").checked = false;
  document.getElementById("radioColor04").checked = false;
  document.getElementById("radioColor05").checked = false;
  document.getElementById("title").innerHTML = "Red";
}
function changeToColor03() {
  backgroundColor.className = "";
  backgroundColor.classList.add("backgroundColor03");
  document.getElementById("radioColor03").checked = true;
  document.getElementById("radioColor01").checked = false;
  document.getElementById("radioColor02").checked = false;
  document.getElementById("radioColor04").checked = false;
  document.getElementById("radioColor05").checked = false;
  document.getElementById("title").innerHTML = "Orange";
}
function changeToColor04() {
  backgroundColor.className = "";
  backgroundColor.classList.add("backgroundColor04");
  document.getElementById("radioColor04").checked = true;
  document.getElementById("radioColor01").checked = false;
  document.getElementById("radioColor02").checked = false;
  document.getElementById("radioColor03").checked = false;
  document.getElementById("radioColor05").checked = false;
  document.getElementById("title").innerHTML = "Purple";
}
function changeToColor05() {
  backgroundColor.className = "";
  backgroundColor.classList.add("backgroundColor05");
  document.getElementById("radioColor05").checked = true;
  document.getElementById("radioColor01").checked = false;
  document.getElementById("radioColor02").checked = false;
  document.getElementById("radioColor03").checked = false;
  document.getElementById("radioColor04").checked = false;
  document.getElementById("title").innerHTML = "Green";
}

const keyBoard = document.getElementById("backgroundColor");
keyBoard.addEventListener("keydown", keyDownFunction);

function keyDownFunction(event) {
  if (event.key === "1") {
    changeToColor01();
  } else if (event.key === "2") {
    changeToColor02();
  } else if (event.key === "3") {
    changeToColor03();
  } else if (event.key === "4") {
    changeToColor04();
  } else if (event.key === "5") {
    changeToColor05();
  }
}
