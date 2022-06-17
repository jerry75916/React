import Home from "./Routes/home/home.component";
import { Route, Routes, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navgation from "./Routes/navigation/navigation.component";
import Authentication from "./component/Authentication/Authentication.component";
import Practice from "./component/practiceComponent/practice.component";
import Shop from "./Routes/shop/shop.component";
import CheckOut from "./component/checkout/checkout.component";
import { useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setcurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setcurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navgation />}>
          <Route index element={<Home />} />
          <Route path="Practice" element={<Practice />} />
          <Route path="CheckOut" element={<CheckOut />} />
          <Route path="Shop/*" element={<Shop />} />
          <Route path="Authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
