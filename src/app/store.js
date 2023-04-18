import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Features/ProductSlice";
import LoginReducer from "../Features/LoginSlice";
export default configureStore({
  reducer: {
    products: ProductReducer,
    login: LoginReducer,
  },
});
