import { combineReducers } from "@reduxjs/toolkit";
import purchaseSlice from "../slices/purchase/purchaseSlice";


const rootReducer = combineReducers({
    purchase: purchaseSlice,
})

export default rootReducer