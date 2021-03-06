import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./navigation.style.scss";
import { UserContext } from "../../component/contexts/user.context";
import { SignOutFun } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.componet";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../component/contexts/cart.context";
import { useSelector } from "react-redux";
import { selectcurrentUser } from "../../store/user/user.selector";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import {
  NavigationContainer,
  NaviLinks,
  NavLink,
  LogoContainer,
} from "./navigation.style";
const Navgation = () => {
  const currentUser = useSelector(selectcurrentUser); //redux 中已dispatch 後，取出值使用selector
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const UserSignOut = () => {
    dispatch(signOutStart());
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>

        <NaviLinks>
          <NavLink to="/Practice">Practice</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/CheckOut">CheckOut</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={UserSignOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/Authentication">Sign In</NavLink>
          )}
          <CartIcon />
        </NaviLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navgation;
