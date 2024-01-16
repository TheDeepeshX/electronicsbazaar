import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
//icon mui material 
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer()
{

     return(<div style={{display:"flex",width:'100%',height:320,marginTop:20,backgroundColor:'#1D1D1D'}}>
        
        <div style={{width:'33.333%',color:'#FFF',justifyContent:'right'}} >
             <div style={{idsplay:'flex',marginLeft:60,borderRight:' 2px solid #FFF',height:'80%'}}>
        <h3 style={{display:'flex'}} >Contact With Us</h3>
        <div style={{display:'flex',alignItems:'center',backgroundColor:'#FFFF',width:'55%',height:35,padding:3,borderRadius:5}}> 
        <TextField
    hiddenLabel
    placeholder="Enter EmailID."
    variant="standard"
    size="small"
    fullWidth
    InputProps={{
        disableUnderline:true,
      }}
      style={{backgroundColor:'#FFFF',border:'non',}}
    />   
        </div>
        <div>
        <YouTubeIcon style={{fontSize:30,margin:10}} />
        <FacebookIcon style={{fontSize:30,margin:10}} />
        <InstagramIcon style={{fontSize:30,margin:10}} />
        <LinkedInIcon  style={{fontSize:30,margin:10}} />
        <TwitterIcon  style={{fontSize:30,margin:10}} />
        </div>
        <div>
            <p>© no Copyright.</p>
            <p>this is a testing and traning Project.</p>
            </div>
            </div>
        </div>
       
        <div style={{display:'flex',width:'33.333%',color:'#FFF'}} >
          <div>
          <h3 style={{display:'flex'}} >USEFUL LINKS
                                          About Croma</h3>
          <ul>
            <li ><a href="https://www.croma.com/" > Help & Support</a></li>
            <li ><a href="https://www.croma.com/" > FAQs</a></li>
            <li ><a href="https://www.croma.com/" > Buying Guide</a></li>
            <li ><a href="https://www.croma.com/" > Return Policy</a></li>
            <li ><a href="https://www.croma.com/" > B2B Order</a></li>
            <li ><a href="https://www.croma.com/" > Store Locater</a></li>
            <li ><a href="https://www.croma.com/" > E-waste</a></li>
          </ul>
          </div>
        </div>
       
     </div>)
}