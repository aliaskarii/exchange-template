import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    step: 0,
    value: {
        cardnumberValid: false,
        nextClick: false,
        orderId: 12313123,
        status: 'idle',
        symbol: '',
        price: 0,
        spend: 0,
        cardnumber: '',
        iban: '',
    },
}

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: Object.assign({}, {...initialState}),
    reducers: {
        next: (state) => {
            state.step = state.step + 1;
        },
        back: (state) => {
            state.step = state.step - 1;
        },
        info: (state, action) => {
            state.value = action.payload
        },
        reset() {
            return Object.assign({}, {...initialState})
        }
    }
})

export const { info, back, next,reset } = purchaseSlice.actions

export default purchaseSlice.reducer