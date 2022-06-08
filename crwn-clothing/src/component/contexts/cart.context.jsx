import { createContext, useState, useEffect, useReducer } from "react";
import CartItem from "../cart-Item/cart-item.component";

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

//讓外界可以存取
export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  DelItemToCart: () => {},
  RemoveProduceToCart: () => {},
  cartQuantity: 0,
  cartTotal: 0,
});

const INIT_STATE = {
  isCartOpen: false,
  cartQuantity: 0,
  cartTotal: 0,
  cartItems: [],
};
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_ISOPEN: "SET_CART_ISOPEN",
};
const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload }; //state：cartQuantity, cartTotal, cartItems, isCartOpen
    case CART_ACTION_TYPES.SET_CART_ISOPEN:
      return { ...state, isCartOpen: payload }; //只改單一的state值return回去設值故使用isCartOpen的新值回傳

    default:
      throw new Error(`Not has this ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setisCartOpen] = useState(false);
  const [{ cartQuantity, cartTotal, cartItems, isCartOpen }, Dispatch] =
    useReducer(
      Reducer,
      INIT_STATE //直接傳遞一個包含三個動作的初值
    );

  // useEffect(() => {
  //   const totalquantity = cartItems.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue.quantity,
  //     0
  //   );
  //   return Dispatch({ type: "CHANGE_CARTTYPE", payload: totalquantity });
  // }, [cartItems]);
  //只要購物車有更動的話刪或改數量，都可以更新購物車所選的數量

  const updateCartItemsReducer = (cartItems) => {
    const totalquantity = cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );

    const total = cartItems.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.quantity * currentValue.price,
      0
    );
    //Reducer 的目的為讓一個連串的cart 數量 加總 及 cartitems 都是連動下，包成一個payload action物件，就不需要使用三個UseState
    const payload = {
      cartItems,
      cartQuantity: totalquantity,
      cartTotal: total,
    };

    Dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: payload });
  };

  //(USE Stat)透過外部的additemtoCart(productToAdd) 重設setcarItem
  const addItemToCart = (productToAdd) => {
    const _cartItems = addCartItemfunc(cartItems, productToAdd);
    updateCartItemsReducer(_cartItems);
  };
  const DelItemToCart = (productToDel) => {
    const _cartItems = DelCartItemfunc(cartItems, productToDel);
    updateCartItemsReducer(_cartItems);
  };
  const RemoveProduceToCart = (productToDel) => {
    const _cartItems = RemoveProductfunc(cartItems, productToDel);
    updateCartItemsReducer(_cartItems);
  };
  const setisCartOpen = (boolflag) => {
    Dispatch({ type: CART_ACTION_TYPES.SET_CART_ISOPEN, payload: boolflag });
  };

  //初值
  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartQuantity,
    cartTotal,
    DelItemToCart,
    RemoveProduceToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
