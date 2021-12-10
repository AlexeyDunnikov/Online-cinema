const otherFilmsList = document.querySelector(".other-films__list");
const otherFilmTmp = document.querySelector(".other-films__item-template");

export const renderCards = async (dataArr) => {
  dataArr.length = 12;
  otherFilmsList.innerHTML = "";
  const cards = dataArr.map((data) => {
    const otherFilmCloned = otherFilmTmp.content.cloneNode(true);

    const filmNameTranslated = data.title ?? data.name;

    //rating
    const otherFilmRating = otherFilmCloned.querySelector(
      ".other-films__link[data-rating]"
    );
    let voteAverage = data.vote_average;
    if (voteAverage === 0) {
      voteAverage = '-';
    }
    otherFilmRating.dataset.rating = voteAverage;

    //background image
    const otherFilmBackground =
      otherFilmCloned.querySelector(".other-films__img");
    otherFilmBackground.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`;
    otherFilmBackground.alt = `Постер ${filmNameTranslated}`;

    return otherFilmCloned;
  });

  otherFilmsList.append(...cards);
};
