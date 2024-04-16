import { configureStore } from "@reduxjs/toolkit";
import authsliceReducer from './Slices/AuthSlice';

const store = configureStore({
    reducer: {
        auth: authsliceReducer
    },
    devTools: true
});

export default store;