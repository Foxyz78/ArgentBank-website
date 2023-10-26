import { configureStore } from "@reduxjs/toolkit";

import SignInSlice from "./SignInSlice";
//import UserInfoSlice from "./UserInfoSlice";

const store = configureStore({
    reducer: {
        signIn: SignInSlice.reducer,
        //userProfile: UserInfoSlice.reducer,
    },
});

export const { signIn, signOut } = SignInSlice.actions;
//export const { getUserData, editUserData } = UserInfoSlice.actions;

export default store;
