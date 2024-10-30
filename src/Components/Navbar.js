import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "About", icon: <InfoIcon />, link: "/about" },
    { text: "Resource Hub", icon: <CommentRoundedIcon />, link: "/resource-hub" },
    { text: "Connect with mentor", icon: <CommentRoundedIcon />, link: "/connect" },
    { text: "Job/Internships", icon: <CommentRoundedIcon />, link: "/jobs" },
    { text: "Stories", icon: <CommentRoundedIcon />, link: "/stories" },
    { text: "Contact", icon: <PhoneRoundedIcon />, link: "/contact" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        {/* Replace anchor tags with Link */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resource-hub">Resource Hub</Link>
        <Link to="/connect">Connect with mentor</Link>
        <Link to="/jobs">Job/Internships</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/contact">Contact</Link>
        {/* Login Button */}
        <Link to="/login">
          <button className="primary-button">Login</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
