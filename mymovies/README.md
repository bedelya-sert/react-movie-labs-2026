# react-movie-labs-2026

This is a React single-page application for viewing movies and the actors in them using TMDB's API, that extends the starter Movies app build from the Web App Development 2 labs.

The existing functionality was extended by including more ways to browse movies (popular, top rated, now playing, upcoming), a personal tab where favourites and must watch movie lists exist, more in depth details on individual movie pages including cast list, recommendations and actor pages that display actor information.

The original code has been slightly refactored in certain areas like where code duplication was discovered while adding new features. The UI also got a slight restyle with a custom font and colour scheme.

## Tech Stack

This app was built using **React with Vite**, **React Router** for navigation, **TanStack** **React Query** for caching, **MUI** for interface and **React Context** to store and pass favourites and Must Watch lists.

## Description

### Features

**From the labs**
- Discover Page 
A home page with movie cards showing poster, title, release date and rating of movies (in a list that populates the page).
- Filtering
The ability to filter movies by title and genre. Displayed as a side search bar (to search by title) and dropdown box (to search by genre).
- Favourites
The ability to add and remove movies from a list of favourites that can be viewed on a favourites page. A heart badge appears on favourited movie cards to show which ones have been favourited.
- Movie Details Page
A page that displays each selected movie's details such as: overview, genres, runtime, revenue, rating, release date and images.
- Production countries
A field that displays the production countries of the movie on the details page.
- Review Exerpts
A full review page and a form for writing your own review about movies.

**Added for the assignment**
- Browsing
    * "Popular", "Top Rated", "Now Playing" and "Upcoming Movies" pages converted to/are using ReactQuery.
    * Filtering works on all new pages added since they share the same list page template.
- Must Watch List
    * Displays the movies added to the must watch list.
    * Displayed a check mark for when a movie on the Upcoming Movies page is added to the "Must Watch" list.
    * Created a page for the list and the function to remove movies from it via the remove icon displayed on each card there.
- Movie Details
    * Added a cast section on the page displaying the main cast of the movie in separate cards containing their picture and only initials where there is no photo available for the actor.
    * Added a link to the Actor page of each actor from the cast list.
    * Added a recommended movies section below all of the other elements each linking to their own details page.
    * Restyled the header and grouped the movie facts into one block for a tidier look.
- Actors Page
    * Added an area for photo, name, birthday, birthplace and biography.
    * Added a "Known For" films section, sorted by popularity with duplicates not listed, each linking back to their own respective movie. Taken as a list.
- Navigation and Styling
    * The header menu links were grouped into Browse, In Cinemas and Personal dropdown menus with a flat list in the mobile menu.
    * A custom MUI theme was created for the site utilizing the colour palette, Source Sans 3 font, rounded corners, softer card shadows and a custom font for the main title text.
    * Restyled the filter card.
- General
    * Added React Query caching to every endpoint to avoid repeated network requests.
    * Added a shared tmdbFetch helper for API calls to reduce code bloat.
    * Added re-usable MovieGrid and NavDropdown components after noticing many shared the same structure.

## TMDB Endpoints Used
All requests go through the shared `tmdbFetch` helper in tmdb-api using the base URL `https://api.themoviedb.org/3`.

### Added for the assignment

**Static**
- `/movie/popular`: Popular Movies Page
- `/movie/top_rated`: Top Rated Movies Page
- `/movie/now_playing`: Now Playing Movies Page

**Parameterised**
- `/movie/{id}/recommendations`: Recommended movies on the details page
- `/movie/{id}/credits`: Cast section on the details page
- `/person/{id}`: Actor Page
- `/person/{id}/movie_credits`: Credits for movies the actor is known for on the Actor page

### From the Labs
- `/discover/movie`: Home Page
- `/genre/movie/list`: Genre options in the filter card
- `/movie/upcoming`: Upcoming Movies Page (Converted to React Query for the assignment)
- `/movie/{id}`: Movie details page, Favourites and Must Watch Pages
- `/movie/{id}/images`: Poster images on the movie details page
- `/movie/{id}/reviews`: Review exerpts and the full review page

## Getting Started

### Dependencies

* Node.js
* Npm
* A free TMDB account for an API key

### Installing

* Clone the repo.
* Run "npm install".
* Create an .env file in the project root containing `VITE_TMDB_KEY=your_key_here` replacing the last part with your key.

### Executing program

* Run `npm run dev` and open http://localhost:5173

## Help

* If no movies load:
    - Check your .env key.
    - Restart the dev server after changing .env (Vite only reads it at startup).
* If page details suddenly stop loading:
    - Check your internet connection or VPN if you are using one.

## Authors

Bedelya Sert 
- [@bedelya-sert](https://github.com/bedelya-sert)
- [@dazzlebutterfly](https://github.com/Dazzlebutterfly)

*For context as to why I have two accounts listed, I was logged in on my second account for another assignment in Git so it was too late to change the login when I noticed this and decided to keep it for consistency-sake.*

## Additional Notes

- Just to acknowledge that the lists of favourite movies and must watch movies reset upon page refresh. This functionality could have been extended to local persistence but due to time constraint wasn't. Perhaps in a future version of the app, that could be something to consider.

- The idea of using `append_to_response` to avoid sending multiple requests for pages and just using one single request for the API that gets broken down into parts that are fed to each component that needs those parts was something that was considered to be added too. In another update, the app could benefit from it perhaps.

## Acknowledgments

* Readme skeleton/template (https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc#file-readme-template-md)
* Undeveloped Font (https://www.1001fonts.com/undeveloped-font.html)
* Testing TMDB Endpoints (https://www.postman.com/)
* MUI palette (https://mui.com/material-ui/customization/palette/)
* MUI typography (https://mui.com/material-ui/customization/typography/)
* MUI theme design (https://zenoo.github.io/mui-theme-creator/)
* Breakpoints code snippets (https://mui.com/material-ui/customization/breakpoints/)
* React menu code snippets (https://mui.com/material-ui/react-menu/)
* List code snippets (https://react.dev/learn/rendering-lists)
* Aditional MUI Icons (https://mui.com/material-ui/material-icons/)
* Actor details (https://developer.themoviedb.org/reference/person-details)
* General TMDB related queries (https://developer.themoviedb.org/reference/)
* Card layout code snippets (https://mui.com/material-ui/react-card/)
* Flatmap array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
* Original code layout and snippets taken from (Dr. Rosanne Birney (rbirney), Deirdre O'Halloran (dohalloran74))
* Claude (Anthropic) was used to explain concepts and debug code