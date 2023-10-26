import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name: "signIn",
    // le state inital
    initialState: { token: "" },
    // reducers
    reducers: {
        signIn: (state, action) => {
            // permet d'enregister le token
            state.token = action.payload;
        },
        signOut: (state) => {
            // supprime le token
            state.token = "";
        },
    },
});

export default SignInSlice;
