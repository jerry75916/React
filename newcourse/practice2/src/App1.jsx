import "./App.css";
// import Translator from "./component/MbTransfer/Translator";
// import ThisofTask from "./component/UseState/TaskClick";
// import Profile from "./component/profile/profile";
// import AuthContainer from "./component/Auth/AuthContainer";
// import UseEffect_Practice from "./component/UseEffectPractice/UseEffect_Practice";
// import Joke_Generator from "./component/UseEffectPractice/Joke_Generator";
// import GitHub_Users from "./component/UseEffectPractice/GitHub_Users";
// import ControlInput from "./component/form/ControlInput";
// import Categories from "./component/Categories/Categories";
// import ProductList from "./component/Products/ProductList";
// // import SubList from "./component/subscription/SubList";
// import Counter from "./component/Reducer_Practice/Counter";
// import PracticeType from "./component/TypeScriptComponent/PracticeType";
import Home from "./component/RoutingPractice/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

import About from "./component/RoutingPractice/About";
import Blogs from "./component/RoutingPractice/Blogs";
import BlogDetail from "./component/RoutingPractice/BlogDetail";
import NavBar from "./component/RoutingPractice/Navs/NavBar";
import Info from "./component/RoutingPractice/Info";
import Error from "./component/RoutingPractice/Error";
import { useState } from "react";
function App() {
  const [isLogin, setisLogin] = useState(true);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/*" element={<About />}></Route>
        <Route path="/Blogs/" element={<Blogs />} />
        <Route path="Blogs/Blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/view"
          element={isLogin ? <Navigate to="/Blogs" /> : <h1>Please login</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
