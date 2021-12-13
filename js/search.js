import { getSearch } from "./services.js";
import { renderCards } from "./render_cards.js";

const title = document.querySelector(".other-films__title");
const filmWeek = document.querySelector('.film-week');
const searchForm = document.querySelector(".header__search-form");
const searchInput = document.querySelector(".header__search-input");

export const search = () => {
    searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('value', searchInput.value);

        if (!searchInput.value) return

        getSearch(searchInput.value)
          .then((data) => {
            if (data.results.length > 0) {
              renderCards(data.results);
            } else {
              throw new Error(
                "К сожалению по вашему запросу ничего не найдено"
              );
            }
          })
          .then(() => {
            //filmWeek.remove();
            title.textContent = "Результат поиска";
          })
          .catch((err) => {
            title.textContent = err;
          });
    });
}