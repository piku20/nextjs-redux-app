import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slicecs/counterSlice';
import cartSlice from './slicecs/cartSlice';
import formSlice from './slicecs/formState';

const store = configureStore({
    reducer:{
        counter:counterSlice,
        cart: cartSlice,
        form: formSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;