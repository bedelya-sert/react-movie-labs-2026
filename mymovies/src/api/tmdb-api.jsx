const BASE_URL = "https://api.themoviedb.org/3";

//Added this to consolidate all fetch requests used into one function as there was a lot of repeated code blocks
const tmdbFetch = (path, params = {}) => { //No need to export this bec it only ever gets used within this api
  const query = new URLSearchParams({
    api_key: import.meta.env.VITE_TMDB_KEY,
    ...params,
  });

  return fetch(`${BASE_URL}${path}?${query}`).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  });
};

export const getMovies = () =>
  tmdbFetch("/discover/movie",{
    language: "en-US",
    include_adult: false,
    include_video: false,
    page: 1,
  });

export const getMovie = ({queryKey}) => {
   const [, {id}] = queryKey;
   return tmdbFetch(`/movie/${id}`);
  }

  export const getGenres = () => tmdbFetch("/genre/movie/list", {language: "en-US"});

  export const getMovieImages = ({ queryKey }) => {
   const [, {id}] = queryKey;
   return tmdbFetch(`/movie/${id}/images`);
  }

  export const getMovieReviews = ({ queryKey }) => {
   const [, {id}] = queryKey;
   return tmdbFetch(`/movie/${id}/reviews`);
  }

export const getMovieRecommendations = ({ queryKey }) => {
  const [, {id}] = queryKey;
  return tmdbFetch(`/movie/${id}/recommendations`, {language: "en-US", page:1});
}; //Get the recommendations for a movie with said ID

export const getMovieCredits = ({ queryKey }) => {
  const [, {id}] = queryKey;
  return tmdbFetch(`/movie/${id}/credits`, {language: "en-US", page:1});
}; //Get the credits of a specific movie (id)

const getMovieList = (listType) => tmdbFetch(`/movie/${listType}`, {language: "en-US", page: 1});

export const getUpcomingMovies = () => getMovieList("upcoming");
export const getPopularMovies = () => getMovieList("popular");
export const getTopRatedMovies = () => getMovieList("top_rated");
export const getNowPlaying = () => getMovieList("now_playing");