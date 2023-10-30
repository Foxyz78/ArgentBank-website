import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "userProfile",
    initialState: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: "",
    },
    reducers: {
        getUser: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        },
        editUser: (state, action) => {
            state.userName = action.payload.userName;
        },
    },
});

export default UserSlice;
