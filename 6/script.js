const menu_active = document.querySelector(".active_menu");
const burger = document.querySelector(".menu_right_side");

function toggle_menu() {
  menu_active.classList.toggle("hidden_menu");
}

burger.addEventListener("click", toggle_menu);
