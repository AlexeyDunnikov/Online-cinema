const API_KEY = "44c4c709137f95114e6e6965b2f134d1";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";

//trending/all/day?api_key=<<api_key>>

const getData = async (url) => {
  console.log(url)
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Response error ${response.status}`);
  } catch (err) {
    console.error(err);
  }
};

export const getTrends = async ({
  type = "all",
  period = "week",
  page = 1,
} = {}) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getPopular = async ({ genre, page } = {}) => {
  console.log(genre);
  const url = `${BASE_URL}${genre}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getTop = async ({ genre, page } = {}) => {
  const url = `${BASE_URL}${genre}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getVideo = async ({id, type} = {}) => {
  const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
  return await getData(url);
}
//https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US

export const getSearch = async (query) => {
  const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&query=${query}&page=1`;
  console.log(url);
  return await getData(url);
};
//https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
