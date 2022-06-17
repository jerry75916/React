import { CART_ACTION_TYPES } from "./cart.type";
const INIT_STATE = {
  IsCartOpen: false,

  cartItems: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload }; //state：cartQuantity, cartTotal, cartItems, isCartOpen
    case CART_ACTION_TYPES.SET_CART_ISOPEN:
      return { ...state, IsCartOpen: payload }; //只改單一的state值return回去設值故使用isCartOpen的新值回傳
    default:
      return state;
  }
};
