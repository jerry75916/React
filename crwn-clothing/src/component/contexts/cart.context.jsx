import { createContext, useState, useEffect } from "react";
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartQuantity, setcartQuantity] = useState(0);
  const [cartTotal, setCarTotal] = useState(0);
  const [cartItems, setCarItems] = useState([]);
  useEffect(() => {
    const totalquantity = cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
    setcartQuantity(totalquantity);
  }, [cartItems]); //只要購物車有更動的話刪或改數量，都可以更新購物車所選的數量
  useEffect(() => {
    const total = cartItems.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.quantity * currentValue.price,
      0
    );
    setCarTotal(total);
  });
  //透過外部的additemtoCart(productToAdd) 重設setcarItem
  const addItemToCart = (productToAdd) => {
    setCarItems(addCartItemfunc(cartItems, productToAdd));
  };
  const DelItemToCart = (productToDel) => {
    setCarItems(DelCartItemfunc(cartItems, productToDel));
  };
  const RemoveProduceToCart = (productToDel) => {
    setCarItems(RemoveProductfunc(cartItems, productToDel));
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
