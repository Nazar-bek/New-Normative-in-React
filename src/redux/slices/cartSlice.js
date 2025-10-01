import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
    cartStore: [],
    totalPrice: 0
}

const calculateTotal = (state) => {
  state.totalPrice = state.cartStore.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );
};


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        addToCart: (state, action) => {
            const existing = state.cartStore.find(item => item.id === action.payload.id)
            if(existing){
                toast.error(`It is already added to cart! ${action.payload.title}`)
            }else{
                state.cartStore.push({...action.payload, quantity: 1})
                toast.success(`You successfully added to cart the ${action.payload.title}`)
            }

            calculateTotal(state)
        },
        deleteCart : (state, action) => {
            const newArr = state.cartStore.filter(card => card.id !== action.payload.id)
            state.cartStore = newArr
            toast.success(`The ${action.payload.title} was successfully deleted!`)
            calculateTotal(state)
        },
        increment: (state, action)  => {
            const card = state.cartStore.find(item => item.id === action.payload)
            if(card){
                card.quantity++
                card.totalPrice = card.quantity * card.price
            }
            calculateTotal(state)
        },
        decrement: (state, action) =>{
            const cart = state.cartStore.find(item => item.id === action.payload)
            if(cart && cart.quantity > 1){
                cart.quantity--
                cart.totalPrice = cart.quantity * cart.price
            }
            calculateTotal(state)
        }
    }
})

export const {actions, reducer} = cartSlice
export default reducer
export const {addToCart,deleteCart,increment,decrement} = actions