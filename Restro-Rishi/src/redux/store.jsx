import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import CategorySlice from './slices/CategorySlice';

const Store = configureStore({
    reducer :{
        cart : CartSlice,
        category : CategorySlice,
    }
});
export default Store;
