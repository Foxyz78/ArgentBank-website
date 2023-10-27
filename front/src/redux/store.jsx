import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./signInSlice";

const store = configureStore({
    reducer: {
        signIn: signInSlice.reducer,
    },
});

export const { signIn, signOut } = signInSlice.actions;

export default store;
