import CartComponent from "../CartComponent";
import CheckoutComponent from "../CheckoutComponent";
import Header2 from "../header2";
import { useStyles } from "./Projectcss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SmallScreenCartComponent from "../SmallScreenCartComponent";
import { useSelector } from "react-redux";
import MyAccountComponent from "../MyAccountComponent";
export default function Cart()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var classes=useStyles()   
    return(<div className={classes.root}>
       <div>
        <Header2/>
       </div>
       <div style={{width:'100%'}}>
        <MyAccountComponent/>
       </div>
     
    </div>)
}