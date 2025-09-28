import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
    wishlistStore: [],
}

const wishlist = createSlice({
    name: "wishlist", 
    initialState,
    reducers : {
        addToWishlist: (state, action) => {
            const index = state.wishlistStore.findIndex(item => item.id === action.payload.id)
            if(index !== -1){
                state.wishlistStore.splice(index, 1)
                toast.error(`Wishlistad olinib tashlandi ${action.payload.title}`, {
                    position: "bottom-right"
                });   
            }else{
             state.wishlistStore.push(action.payload)
                toast.success("WIshlistga qoshildi", {
                    position: "bottom-right"
                });
            }
        },
        deleteItemWishlist: (state, action) => {
            state.wishlistStore = state.wishlistStore.filter(item => item.id !== action.payload.id)
            toast.success(`${action.payload.title} was deleted successfully!`)
        }
    }
})

const {actions, reducer} = wishlist
export default reducer
export const {addToWishlist, deleteItemWishlist} = actions