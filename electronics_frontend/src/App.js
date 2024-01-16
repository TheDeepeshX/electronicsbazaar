import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Dashbord from "./components/Dashbord";
import Home from "../src/components/UI Interface/Component/Screens/home";
import ProductPurchasescreen from "./components/UI Interface/Component/Screens/Productpurchasescreen";
import Cart from "./components/UI Interface/Component/Screens/Cart";
import Cartscreen from "./components/UI Interface/Component/Screens/Shopping";
import OtpComponent from "./components/UI Interface/Component/user/OtpComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={<Adminlogin />}
            path="/Adminlogin"
            caption="Adminlogin"
          />
          <Route
            element={<Dashbord />}
            path="/Dashboard/*"
            caption="Dashbord"
          />
          <Route element={<Home />} path="/" caption="Home" />
          <Route
            element={<ProductPurchasescreen />}
            path="/purchase"
            caption="purchase"
          />
        <Route element={<OtpComponent/>}  path="/otp"/>
        <Route element={<Cart/>} path="/Cart" />
        <Route element={<Cartscreen/>} path="/useraccount" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
