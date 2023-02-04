import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import "../../../static/css/index.css";
import { useCallback } from "react";

const Header = () => {
  const navigate = useNavigate();
  const pages = ["Home", "Available Puppies", "Breeders", "Contact us", "Login"];
  const links = ["/", "/puppies-and-dogs-for-sale", "/breeders", "/contact", "/login"];
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const navigateTo = (index) => {
    navigate(links[index]);
  };

  return ( 
      <AppBar className="header">
        <Toolbar>
          <Typography>DOGSANDCATS</Typography>
          {isMatch ? (
            <>
              <DrawerComp navigateTo={navigateTo}/>
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {pages.map((page, index) => (
                  <Tab className="tab"
                    key={index}
                    label={page}
                    onClick={() => navigateTo(index)}
                  ></Tab>
                ))}
              </Tabs>
              
              <img src="../../../static/images/dogIcon.png" className="dog--icon"/>
         
            </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Header;
