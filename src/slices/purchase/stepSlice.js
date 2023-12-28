import { createSlice } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
    name: "step",
    initialState: { value: 0 },
    reducers: {
        next: (state, action) => {
            state.value = state.value + 1;
        },
        back: (state, action) => {
            state.value = state.value - 1;
        },
    },
});
export const { next, back } = stepSlice.actions;
export default stepSlice.reducer;