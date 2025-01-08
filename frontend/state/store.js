import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoslice";

export const store = configureStore({
    reducer: {
        todosState: todosReducer,
    }
})