import { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
const NavDropdown = ({ label, items}) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const navigate = useNavigate();

   const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

   const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Referencing dropdown code from here https://mui.com/material-ui/react-menu/

 return (
        <>
    <Button
        color="inherit"
        aria-controls={`${label}-menu`} //For unique dropdown id use passed label
        aria-haspopup="true"
        onClick={handleMenu}
        endIcon={<ExpandMoreIcon />} //For caret
        >
        {label}
    </Button>
        <Menu
            id={`${label}-menu`}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: "bottom", //Don't want the menu to open top right
            horizontal: "left",
            }}
            transformOrigin={{
            vertical: "top",
            horizontal: "left", //items
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
        >
        {items.map((item) => (
            <MenuItem
                key={item.label}
                onClick={() => handleMenuSelect(item.path)}
            >
            {item.label}
            </MenuItem>
        ))}
        </Menu>
    </>
    )
  }
export default NavDropdown;