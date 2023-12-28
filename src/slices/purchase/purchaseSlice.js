import { createSlice } from '@reduxjs/toolkit'


export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        step: 0,
        value: {
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
    },
    reducers: {
        next: (state) => {
            state.step = state.step + 1;
        },
        back: (state) => {
            state.step = state.step - 1;
        },
        info: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { info, back, next } = purchaseSlice.actions

export default purchaseSlice.reducer