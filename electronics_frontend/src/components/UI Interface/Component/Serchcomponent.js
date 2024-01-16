import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';
export default function SerchComponent(){
 return(
    <div style={{display:'flex',alignItems:'center',backgroundColor:'#FFFF',width:'100%',height:35,padding:3,borderRadius:5}} >
    <TextField
    hiddenLabel
    placeholder=" What you are looking For?"
    variant="standard"
    size="small"
    fullWidth
    InputProps={{
        disableUnderline:true,
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      style={{backgroundColor:'#FFFF',border:'non',}}
    />     
     </div>
 )
}