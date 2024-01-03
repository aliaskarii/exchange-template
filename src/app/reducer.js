import { combineReducers } from '@reduxjs/toolkit'
import { PurchaseSlice } from '../slices/purchase/PurchaseSlice'


const rootReducer = combineReducers({
  Purchase: PurchaseSlice,
})

export default rootReducer