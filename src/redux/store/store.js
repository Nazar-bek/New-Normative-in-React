import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishlist from "../slices/wishlistSlice"
import cartSlice from "../slices/cartSlice"
import storage from "redux-persist/lib/storage"
import profileSlice from "../slices/profileSlice"
import { persistReducer, persistStore } from "redux-persist"; 


const middleWare = () => (next) =>(action) =>{
  if(typeof action === "string"){
    return next({type: action})
  }
  return next(action)
}

const rootReducer = combineReducers({
    wishlist,cartSlice, profileSlice
})
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["wishlist", "cartSlice", "profileSlice"], 
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(middleWare),
    devTools: true
})

export const persistor = persistStore(store)