import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        cart : [],
    },
    reducers : {
        addToCart : (state, action)=>{
            const existingItem = state.cart.find((item)=> item.food.id === action.payload.food.id)
            if(existingItem){
               state.cart = state.cart.map((item)=> item.food.id === action.payload.food.id ? {...item, qnty : item.qnty + 1} : item)
            }else{
                state.cart.push(action.payload);
            }
        },
        removeFromCart:(state, action)=>{
            state.cart = state.cart.filter((item)=> item.food.id !== action.payload)
        },
        increamentQnty :(state, action)=>{
            state.cart = state.cart.map((item)=> item.food.id === action.payload.id ? {...item, qnty : item.qnty +1} : item);
        },
        decreamentQnty :(state, action)=>{
            state.cart = state.cart.map((item)=> item.food.id === action.payload.id ? {...item, qnty : item.qnty -1} : item);
        }

    }
});

export const {addToCart, removeFromCart, increamentQnty, decreamentQnty} = CartSlice.actions;
export default CartSlice.reducer;
