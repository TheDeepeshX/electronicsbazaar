import AppBar from "@mui/material/AppBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { getData, serverURL } from "../../../services/FeatchNodeServices";
// 
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// Logo
import SerchComponent from "./Serchcomponent";
import { useSelector } from "react-redux";

export default function Header2() {
    var navigate=useNavigate()
    var Cart=useSelector(State=>State.mycart)
    var productcart=Object.values(Cart)
    // console.log('cart redux storage data :',Cart);
    const [state, setState] = React.useState({
        left: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    //

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
  //component LIsht costant 
    const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon style={{color:'#fff'}} /> : <MailIcon  style={{color:'#fff'}} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{color:'fff'}} />
      <List>
        {Categories.map((text, index) => (
          <ListItem key={text.Categoryname} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={`${serverURL}/images/Category slider/${text.image}`} style={{width:35}} />
              </ListItemIcon>
              <ListItemText primary={text.Categoryname} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


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
              <Badge color="primary"   badgeContent={productcart?.length} showZero>
                <ShoppingCart onClick={()=>navigate('/Cart')}  style={{ margin: 10, fontSize: 30 }} />
               </Badge>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "13%",
                }}
              >
                <AccountCircle onClick={()=>navigate('/Dashboard')} style={{ margin: 15, fontSize: 27 }} />
                <Badge color="primary" badgeContent={productcart?.length} showZero>
                <ShoppingCart   onClick={()=>navigate('/Cart')} style={{ margin: 10, fontSize: 30 }} />
               </Badge>
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
                alignItems:'center',
                marginBottom:10, 
                backgroundColor: "",
                color: "#fff",
              }}
            >
             
                <MenuIcon
                style={{ width: "30px", height: "30px" }}
                onClick={toggleDrawer('left', true)}
             />
           <React.Fragment key={'left'}>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            sx={{
                '.css-4t3x6l-MuiPaper-root-MuiDrawer-paper':
                {
                 backgroundColor:'#000',
                 color:'#fff'
                } 
            }}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
        <p style={{ fontSize: 13 }}>Menu</p>
            </div>
            <div style={{ width: "70%", display: "flex", marginRight: 20,marginBottom:10 }}>
              <SerchComponent />
            </div>
          </div>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
} 
