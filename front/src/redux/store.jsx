import { configureStore } from "@reduxjs/toolkit";

import SignInSlice from "./SignInSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        signIn: SignInSlice.reducer,
        //userProfile: UserSlice.reducer,
    },
});

export const { signIn, signOut } = SignInSlice.actions;
//export const { getUserData, editUserData } = UserSlice.actions;

export default store;
