import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage"
import MustWatchPage from "./pages/mustWatchPage";
import ActorPage from "./pages/actorPage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favourites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
            <Route path="/movies/now_playing" element={<NowPlayingPage />} />
            <Route path="/movies/must_watch" element={<MustWatchPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);