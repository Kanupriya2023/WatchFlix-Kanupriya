import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Search2Icon, BellIcon } from "@chakra-ui/icons";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export function TemporaryDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate()
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon style={{ color: "#FFFFFF" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className='drawer'>
        <List>
          {[{name:"Movies",path:"/"},{name: "TV Series", path:"/description"}, {name:"Documentaries",path:"/description"}, {name:"Categories",path:"/categories"}].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>navigate(text.path)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                 primary={text.name} 
                 
                 />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>
      </Drawer>
    </>
  );
}

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <Text id="watch">Watch</Text>
        <Text id="flix">Flix</Text>
      </div>

      <div className="header-menu">
        {/* <Text id="movies" >Movies</Text>
                    <Text id="tvSeries" >TV Series</Text>
                    <Text id="documentary" >Documentaries</Text>
                    <Text id="category" >Categories</Text> */}
        <NavLink
          to="/"
          id="movies"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <span>Movies</span>
        </NavLink>

        <NavLink
          to="/description"
          id="tvSeries"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <span>TV Series</span>
        </NavLink>

        <NavLink
          to="/description"
          id="documentary"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <span>Documentaries</span>
        </NavLink>

        <NavLink
          to="/categories"
          id="category"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          <span>Categories</span>
        </NavLink>
      </div>
      <div className="header-end">
        <Search2Icon w={10} h={10} color={"white"} />
        <BellIcon w={10} h={10} color={"white"} />
        <Text id="signup">Sign Up</Text>
      </div>
      <div className="header-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
