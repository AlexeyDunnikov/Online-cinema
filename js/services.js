const API_KEY = "44c4c709137f95114e6e6965b2f134d1";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";

//trending/all/day?api_key=<<api_key>>

const getData = async (url) => {
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
  const url = `${BASE_URL}${genre}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getTop = async ({ genre, page } = {}) => {
  const url = `${BASE_URL}${genre}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};
