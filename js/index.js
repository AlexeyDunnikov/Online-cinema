import slideMenu from "./menu.js";
slideMenu({
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  openBtn: ".header__burger-btn",
  closeTrigger: [".navigation__close", ".navigation__link"],
});