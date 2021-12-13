import { getVideo } from "./services.js";

const otherFilmsList = document.querySelector(".other-films__list");
const otherFilmTmp = document.querySelector(".other-films__item-template");

export const renderCards = (dataArr) => {
  //dataArr.length = dataArr.length > 12 ? 12 : dataArr.length;
  otherFilmsList.innerHTML = "";
  Promise.all(
    dataArr.map(async (data) => {
      const otherFilmCloned = otherFilmTmp.content.cloneNode(true);

      const filmNameTranslated = data.title ?? data.name;

      //rating and video
      const otherFilmLink = otherFilmCloned.querySelector(".other-films__link");
      const rating = data.vote_average === 0 ? "-" : data.vote_average;
      otherFilmLink.dataset.rating = rating;

      const video = await getVideo({
        id: data.id,
        type: data.media_type,
      });

      if (video.results.length > 0) {
        otherFilmLink.href = `https://youtu.be/${video.results[0].key}`;
      }

      //background image
      const otherFilmBackground =
        otherFilmCloned.querySelector(".other-films__img");
      const posterPath = data.poster_path
        ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`
        : "./../img/no-poster.jpg";
      otherFilmBackground.src = posterPath;
      otherFilmBackground.alt = `Постер ${filmNameTranslated}`;

      return otherFilmCloned;
    })
  ).then((cards) => otherFilmsList.append(...cards));
};
