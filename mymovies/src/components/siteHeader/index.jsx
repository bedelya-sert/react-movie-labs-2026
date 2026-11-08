import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDropdown from "../navDropdown";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Browse",
      items: [
        { label: "Popular", path:"/movies/popular"},
        { label: "Top Rated", path:"/movies/top_rated"}
      ] 
    },
     { label: "In Cinemas",
      items: [
         { label: "Upcoming", path: "/movies/upcoming" },
         { label: "Now Playing", path:"/movies/now_playing"}
      ] 
    },
    { label: "Personal",
      items: [
          { label: "Favourites", path:"/movies/favourites"},
          { label: "Must Watch List", path:"/movies/must_watch"}
      ] 
    },
  ];

  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 //references taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
  const mobileOptions = menuOptions.flatMap((opt) => (opt.items ? opt.items : [opt]));

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="bigTitle" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {mobileOptions.map((opt) => (
                    <MenuItem key={opt.label} onClick={() => handleMenuSelect(opt.path)}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <> {/* Check whether the option is a group or not and display the menu as a dropdown or not accordingly*/}
                {menuOptions.map((opt) => 
                  opt.items ? (
                    <NavDropdown key={opt.label} label={opt.label} items={opt.items} />
                  ) : (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;