import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        cart : [],
    },
    reducers : {
        addToCart : (state, action)=>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state, action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload)
        }
    }
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
