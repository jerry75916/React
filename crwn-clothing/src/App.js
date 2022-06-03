import Home from "./Routes/home/home.component";
import { Route, Routes, Outlet } from "react-router-dom";
import Navgation from "./Routes/navigation/navigation.component";
import Authentication from "./component/Authentication/Authentication.component";
import Practice from "./component/practiceComponent/practice.component";
import Shop from "./Routes/shop/shop.component";
import CheckOut from "./component/checkout/checkout.component";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navgation />}>
          <Route index element={<Home />} />
          <Route path="CheckOut" element={<CheckOut />} />
          <Route path="Shop/*" element={<Shop />} />
          <Route path="Authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
