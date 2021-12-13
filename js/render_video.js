import { getTrends,  getVideo } from "./services.js";
import { renderCards } from "./render_cards.js";


const filmWeek = document.querySelector(".film-week");
const filmWeekTmp = document.querySelector(".film-week-template");

const firstRender = (data, keyVideo) => {
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
  const rating = data.vote_average === 0 ? "-" : data.vote_average;
  filmWeekRating.dataset.rating = rating;

  //background image
  const filmWeekBackground = filmWeekCloned.querySelector(".film-week__poster");
  filmWeekBackground.src = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;
  filmWeekBackground.alt = `Постер ${filmNameTranslated}`;

  //video
  const filmWeekLink = filmWeekCloned.querySelector(
    ".film-week__watch-trailer"
  );

  if (keyVideo){
    filmWeekLink.href = `https://youtu.be/${keyVideo}`;
  }
  else filmWeekLink.style.display = 'none';

  filmWeek.innerHTML = "";
  filmWeek.append(filmWeekCloned);
};

export const renderVideo = async () => {
  const data = await getTrends({
    type: "movie",
    period: "week",
    page: 1,
  });

  const [firstCard, ...otherCard] = data.results;

  const video = await getVideo({
    id: firstCard.id,
    type: firstCard.media_type
  });

  firstRender(firstCard, video.results[0].key);
  renderCards(otherCard);
};
