import { getPopular, getTop } from "./services.js";
import { renderCards } from "./render_cards.js";
import { renderVideo } from "./render_video.js";

const title = document.querySelector(".other-films__title");
const navMenus = document.querySelectorAll(".get-nav");

export const menuLinks = () => {
  navMenus.forEach((menu) => {
    menu.addEventListener("click", (evt) => {
      const target = evt.target.closest(".get-nav__link");

      if (!target) return;

      evt.preventDefault();
      menu.classList.remove("navigation_active");
      title.textContent = target.textContent;

      if (target.dataset.type === "trends") {
        renderVideo();
        return;
      }

      if (target.dataset.type === "popular") {
        getPopular({
          genre: target.dataset.genre,
          page: 1,
        }).then((data) => {
          renderCards(data.results, target.dataset.genre);
        });
      } else if ((target.dataset.type = "top")) {
        getTop({
          genre: target.dataset.genre,
          page: 1,
        }).then((data) => renderCards(data.results, target.dataset.genre));
      }
    });
  });
};
