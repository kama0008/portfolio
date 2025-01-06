const burger = document.getElementById("burger");
const leftMenu = document.getElementById("venstre_menu");
const rightMenu = document.getElementById("højre_menu");

burger.addEventListener("click", () => {
  leftMenu.classList.toggle("active");
  rightMenu.classList.toggle("active");
});
