import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from '../slices/purchase/purchaseSlice'

export default configureStore({
    reducer: {
        purchase: purchaseReducer,
    },
})