import { getTrends } from "./services.js";

const filmWeek = document.querySelector(".film-week");
const filmWeekTmp = document.querySelector(".film-week-template");

const firstRender = (data) => {
  console.log(data);
    const filmNameOriginal = data.original_title ?? data.original_name;
    const filmNameTranslated = data.title ?? data.name;

  const filmWeekCloned = filmWeekTmp.content.cloneNode(true);

  //original title
  const filmWeekOriginalTitle = filmWeekCloned.querySelector(
    ".film-week__title_origin"
  );
  filmWeekOriginalTitle.innerHTML = filmNameOriginal;

  //translated title
  const filmWeekTitle = filmWeekCloned.querySelector(".film-week__title");
  filmWeekTitle.innerHTML = filmNameTranslated;

  //rating
  const filmWeekRating = filmWeekCloned.querySelector(
    ".film-week__container[data-rating]"
  );
  filmWeekRating.dataset.rating = data.vote_average;

  //background image
  const filmWeekBackground = filmWeekCloned.querySelector(".film-week__poster");
  filmWeekBackground.src = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;
  filmWeekBackground.alt = `Постер ${filmNameTranslated}`;

  filmWeek.innerHTML = "";
  filmWeek.append(filmWeekCloned);
};

export const renderVideo = async () => {
  const data = await getTrends({
      type: 'movies',
      period: 'day',
      page: 3,
  });

  firstRender(data.results[0]);
};
