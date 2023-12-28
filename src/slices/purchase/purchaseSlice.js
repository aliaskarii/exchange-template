import { createSlice } from '@reduxjs/toolkit'


export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        cardnumberValid: false,
        nextPermation: false,
        nextClick: false,
        orderId: 12313123,
        status: '',
        symbol: '',
        price: 0,
        spend: 0,
        cardnumber: '',
        iban: '',
    },
    reducers: {
        info: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { info } = purchaseSlice.actions

export default purchaseSlice.reducer