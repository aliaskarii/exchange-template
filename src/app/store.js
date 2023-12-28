import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from '../slices/purchase/purchaseSlice'
import stepSlice from "../slices/purchase/stepSlice";

export default configureStore({
    reducer: {
        purchase: purchaseReducer,
        step: stepSlice
    },
})