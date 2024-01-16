import AppBar from "@mui/material/AppBar";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { getData } from "../../../services/FeatchNodeServices";
// Logo
import SerchComponent from "./Serchcomponent";

export default function Header() {
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
  //menu icon system
  var featchAllCateegory = async () => {
    var responce = await getData("Category/Dispaly_all_category");
    setCategories(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [Categories, setCategories] = useState([]);
  const Categorymenu = () => {
    return Categories.map((item) => {
      return (
        <MenuItem
          style={{ color: "#000" }}
          onClick={handleClick}
          value={item.Categoryid}
        >
          {item.Categoryname}
        </MenuItem>
      );
    });
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            height: 70,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Toolbar>
            {matches_sm ? (
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  }
                  width={130}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <img
                  src={
                    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  }
                  width={150}
                />
              </div>
            )}
            {matches_sm ? (
              <></>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "right",
                  backgroundColor: "",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginRight: "10%",
                    backgroundColor: "",
                  }}
                ></div>
                <div
                  style={{
                    marginLeft: "1%",
                    width: "70%",
                    display: "flex",
                    justifyContent: "right",
                    margin: 10,
                  }}
                >
                  <SerchComponent />
                </div>
              </div>
            )}
            {matches_sm ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "30%",
                }}
              >
                <AccountCircle style={{ margin: 10, fontSize: 30 }} />
                <ShoppingCart style={{ margin: 10, fontSize: 30 }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "13%",
                }}
              >
                <AccountCircle style={{ margin: 15, fontSize: 27 }} />
                <ShoppingCart style={{ margin: 15, fontSize: 27 }} />
              </div>
            )}
          </Toolbar>
        </AppBar>

        {matches_sm ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              backgroundColor: "#000",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "30%",
                justifyContent: "center",
                backgroundColor: "",
                color: "#fff",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <MenuIcon
                  onClick={handleClick}
                  style={{ width: "30px", height: "30px" }}
                />
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  {Categorymenu()}
                </Menu>
                <p style={{ fontSize: 13 }}>Menu</p>
              </IconButton>
            </div>
            <div style={{ width: "70%", display: "flex", marginRight: 20 }}>
              <SerchComponent />
            </div>
          </div>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
} // main end

/* paste this code in index.html to change the color of menu
 <style>
    .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
      position: absolute;
      overflow-y: hidden;
      overflow-x: hidden;
      -ms-overflow-style: none !important;   
      scrollbar-width: none !important;
      min-width: 16px;
      min-height: 16px;
      max-width: calc(100% - 32px);
      max-height: calc(100% - 32px);
      outline: 0;
      max-height: calc(100% - 96px);
      -webkit-overflow-scrolling: touch;
     

  }
  .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper::-webkit-scrollbar {
    display: none !important;
}
.css-6hp17o-MuiList-root-MuiMenu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    outline: 0;
    background: #000;
    color: #fff;
}
  </style>
*/
