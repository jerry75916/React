import { createSelector } from "reselect";
//export const cartIsOpen = (state) => state.cart.isCartOpen;

const selectReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectReducer],
  (cart) => cart.IsCartOpen
);

export const selectCartItem = createSelector(
  [selectReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItem],

  (cartItems) => {
    return cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  }
);
export const selectCartTotal = createSelector([selectCartItem], (cartItems) => {
  return cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue.price,
    0
  );
});
