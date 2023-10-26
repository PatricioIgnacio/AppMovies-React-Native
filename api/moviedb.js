import axios from "axios";
import { apiKey } from "../constants/apikey";

const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?language=en-US&api_key=${apiKey}`;
const searchMoviesEndPoint = `${apiBaseUrl}/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndPoint);
};

export const searchMovies = (params) => {
  return apiCall(searchMoviesEndPoint, params);
};
