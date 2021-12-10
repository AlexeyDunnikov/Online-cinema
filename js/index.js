import { slideMenu } from "./menu.js";
import { renderVideo } from "./render_video.js";
import { menuLinks } from "./menu_links.js";

const MOVIE = "movie";
const TV = "tv";

slideMenu({
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  openBtn: ".header__burger-btn",
  closeTrigger: [".navigation__close", ".navigation__link"],
});

menuLinks();

renderVideo();
