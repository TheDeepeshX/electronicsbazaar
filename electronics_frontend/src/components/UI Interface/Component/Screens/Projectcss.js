import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  home_root: {
    background: "#191919",
    height: "100%",
    width: "100vw",
  },
  imagemagnificent_root:{
  height:500,
  width:500,
  },
  ProductScreen_Root: {
    height: "100vh",
    width: "100vw",
    background: "#191919",
    overflow: "auto",
  },
  ProductPurchaseScreen_Root: {
    width: "100vw",
    height: "100vh",
    background: "#191919",
    overflow: "auto",
  },
  ProductScreen_Main_Box: {
    width: "100%",
    display: "flex",
  },
  ProductPurchaseScreen_Right_Box: {
    width: "50%",
  },
  Cart_main:{
    display:'flex',
    height: "100%",
    width: "100vw",
    flexDirection:'column',
  },
  Box: {
    background: '#f1f2f6',
    height: "100%",
    width:"100%",
  },
});

export { useStyles };
