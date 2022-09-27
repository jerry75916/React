import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
      STORE_PRODUCTS:(state,action)=>{
         state.products=action.payload.products
      }
  }
});

export const {STORE_PRODUCTS} = ProductSlice.actions;
export const selectProducts=(state)=>state.Product.products;
export default ProductSlice.reducer