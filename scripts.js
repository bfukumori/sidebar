const menu = document.querySelector(".hamburger-menu");
const sideToggleItems = document.querySelectorAll("[data-item=toggle]");
const sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", handleClick);
const navItems = document.querySelectorAll(".nav-item");
const mainTitle = document.querySelector(".title");

navItems.forEach((item) => item.addEventListener("click", changeMainTitle))

function handleClick() {
  sideToggleItems.forEach((item) => {
    item.classList.toggle("hiddenItem");
  })
  sidebar.classList.toggle("expand-collapse")
}

function changeMainTitle(event) {
  mainTitle.innerText = event.currentTarget.innerText
}