import { CART_ACTION_TYPES } from "./cart.type";

const addCartItemfunc = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find((x) => x.id === productToAdd.id);
  if (!existCartItem) {
    //new item
    //透過解構取得整個物件，和新增的物件
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    //has item
    return cartItems.map((q) => {
      if (q.id === productToAdd.id) {
        return { ...q, quantity: q.quantity + 1 };
      }
      return q;
    });
  }
};

const DelCartItemfunc = (cartItems, productToAdd) => {
  //find product id to minus
  const existCartItem = cartItems.find((x) => x.id === productToAdd.id);

  //delete 0 count item
  if (existCartItem.quantity === 1) {
    return cartItems.filter((CartItem) => CartItem.id !== existCartItem.id);
  }
  //minus item count
  return cartItems.map((q) => {
    if (q.id === productToAdd.id) {
      return { ...q, quantity: q.quantity - 1 };
    }
    return q;
  });
};

const RemoveProductfunc = (cartItems, productToAdd) => {
  //find product id to minus
  const existCartItem = cartItems.find((x) => x.id === productToAdd.id);

  return cartItems.filter((CartItem) => CartItem.id !== existCartItem.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const _cartItems = addCartItemfunc(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: _cartItems };
};
export const DelItemToCart = (cartItems, productToDel) => {
  const _cartItems = DelCartItemfunc(cartItems, productToDel);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: _cartItems };
};
export const RemoveProduceToCart = (cartItems, productToDel) => {
  const _cartItems = RemoveProductfunc(cartItems, productToDel);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: _cartItems };
};

export const setisCartOpen = (IsCartOpen) => {
  return { type: CART_ACTION_TYPES.SET_CART_ISOPEN, payload: IsCartOpen };
};
