import { slideMenu } from "./menu.js";
import { renderVideo } from "./render_video.js";
import { menuLinks } from "./menu_links.js";
import { search } from "./search.js";

slideMenu({
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  openBtn: ".header__burger-btn",
  closeTrigger: [".navigation__close", ".navigation__link"],
});

menuLinks();
renderVideo();
search();
