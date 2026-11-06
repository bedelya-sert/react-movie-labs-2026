import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const isOnList = context.mustWatch.includes(movie.id); //Used to check if on list

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToMustWatch}>
      {isOnList ? (
      <PlaylistAddCheckIcon color="primary" fontSize="large" /> //If the movie is alr on the list then show a tick
      ) : ( //ternary operator simplifies conditionals here
      <PlaylistAddIcon color="primary" fontSize="large" />
      )}
    </IconButton>
  );
};

export default AddToWatchListIcon;