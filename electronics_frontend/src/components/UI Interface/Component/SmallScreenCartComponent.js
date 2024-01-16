import { FormControl} from "@mui/material";
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { serverURL,postData } from "../../../services/FeatchNodeServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import useRazorpay from "react-razorpay";
import LoginComponent from "./user/logincomponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SmallScreenCartComponent(props)
{ 
  var data=props.productCart
  const [status,setStatus]=React.useState(false)
  //calculation 
  var originalAmount=data.reduce((p1,p2)=>{
    return p1+(p2.price*p2.qty)
   },0)
   var actualAmount=data.reduce((p1,p2)=>{
    return p1+(p2.offerprice*p2.qty)
 },0)
   var yousave=originalAmount-actualAmount
  
   const handleClick=()=>{
   alert('status logi ntrue')
    setStatus(true)
   
   }
  
   console.log('value of data',data)
    return(<div>
             <div style={{width:'82%',marginTop:'31%'}}>
             <div style={{padding:5,border:'1px solid #fff',width:'100%',borderRadius:8,background:'#fff'}}>
             <span style={{padding:4,fontSize:17}}><b>Delivery option for </b><span style={{color:'green'}}><b>400049</b></span> <span style={{color:'green',width:'10%',marginLeft:'20%',borderBottom:"1px solid 'green'"}}><b>Change</b></span></span>
             <div style={{marginTop:'1%'}}>
             <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
       <span> <FormControlLabel value="express" control={<Radio />}/><span><LocalShippingIcon style={{marginBottom:'-2%',marginLeft:'-4%'}}/></span><span style={{fontSize:15}}><b> Express Delivery by today </b></span><span style={{fontSize:12,color:'grey'}}>within</span><span style={{fontSize:14,color:'green'}}>8hr 40min</span></span>
       <span>  <FormControlLabel value="standard" control={<Radio />}/><span><AssignmentTurnedInIcon style={{marginBottom:'-2%',marginLeft:'-4%'}}/></span><span style={{fontSize:15}}><b>Standard Delivery by tomorrow</b></span></span>
      </RadioGroup>
    </FormControl>
             </div>
             </div>
             <div  style={{border:'1px solid #F8E6E7',width:'100%',borderRadius:6,padding:2,marginTop:'5%',display:'flex',justifyContent:'center',background:'#F8E6E7',fontSize:14}}>
                 <div style={{padding:6,color:'#C72D3A'}}><b> One or more products in your cart are not available for the delivery mode selected. </b></div>
                </div>

                <div style={{marginTop:'5%',padding:5,border:'1px solid #fff',width:'100%',borderRadius:8,background:'#fff'}}>
             <span style={{padding:4,fontSize:17}}><b>Order Summary ( 4 items ) </b></span>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%'}}>
             <span style={{fontSize:"1vw"}}>Original Price</span>
             <span style={{fontSize:"1vw",marginLeft:'auto'}}>₹{originalAmount}</span>
             </div>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%'}}>
            <span style={{fontSize:"1vw"}}>Amount Saved</span><span style={{fontSize:"1vw",marginLeft:'auto'}}>₹{yousave}</span>
             </div>
          
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%'}}>
            <span style={{fontSize:"1vw"}}>Delivery</span><span style={{fontSize:"1vw",marginLeft:'auto'}}><s>₹60.00</s></span>
             </div>
             <div style={{marginTop:'4%',display:'flex',flexDirection:'row',width:'100%'}}>
             <span style={{fontSize:"1vw"}}>Total</span><span style={{fontSize:"1vw",marginLeft:'auto'}}>₹{actualAmount}</span>

             </div>
             <div  style={{border:'1px solid #12DAA8',width:'100%',borderRadius:6,padding:2,marginTop:'5%',display:'flex',justifyContent:'center',background:'#12DAA8',fontSize:14}}>
                 {props.title=="Checkout"?
                 <div onClick={handleClick} style={{padding:6,cursor:'pointer'}}><b>{props.title} </b></div>
                 :
                 <div onClick={handleClick} style={{padding:6,cursor:'pointer'}}><b>{props.title} </b></div>}
                </div>
             </div>
             </div> 
             <LoginComponent status={status} setStatus={setStatus}/>
             </div>)
}