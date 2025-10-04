import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";


const initialState = {
  firstName: "Nazarbek",
  lastName: "Sayfullayev",
  email: "nazarbek@gmail.com",
  address: "King STone Unitedt State",
  passwordMain: "123456"
};


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            const {firstName, lastName, email, address} = action.payload
            state.firstName = firstName
            state.lastName = lastName
            state.email = email
            state.address = address
            toast.success("You successfully updated the profile!")
        },
        changeThePassword: (state, action) => {
            state.passwordMain = action.payload
        }
    }
})

export const {updateProfile, changeThePassword} = profileSlice.actions

export default profileSlice.reducer