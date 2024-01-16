import CartComponent from "../CartComponent";
import CheckoutComponent from "../CheckoutComponent";
import Header2 from "../header2"
import { useStyles } from "./Projectcss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SmallScreenCartComponent from "../SmallScreenCartComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Cart()
{   const [cartRefresh,setCartRefresh]=useState(false)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    var classes=useStyles()   
    var cart=useSelector(State=>State.mycart)    
    var productCart=Object.values(cart)
    
    return(
    <div className={classes.Box}>
       <div>
        <Header2/>
       </div>
       <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
       <div style={{width:matches?'98%':'70%'}}>
        <CartComponent productCart={productCart} cartRefresh={cartRefresh} setCartRefresh={setCartRefresh}/>
       </div>  
       {matches?<></>:<div style={{width:'30%'}}>
        <SmallScreenCartComponent title="Checkout"  productCart={productCart}/>
       </div>}
       </div>
        {matches?<div  style={{position:'sticky',bottom:'0',zIndex:'3'}} >
        <CheckoutComponent  productCart={productCart}/>
       </div> :<></> }
    </div>)
}