import { slideMenu } from "./menu.js";
import { renderVideo } from "./render_video.js";

slideMenu({
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  openBtn: ".header__burger-btn",
  closeTrigger: [".navigation__close", ".navigation__link"],
});

renderVideo();
