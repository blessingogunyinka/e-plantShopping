import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const name = action.payload.name
            const image = action.payload.image
            const cost = action.payload.cost

            const item = state.items.find(item => item.name === name) ; 
            if (item) {
                item.quantity++ ; 
            } else {
                state.items.push({ name, image, cost, quantity: 1}) ; 
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload) ; 
        },
        updateQuantity: (state, action) => {
            const name = action.payload.name ; 
            const quantity = action.payload.quantity ; 
            const item = state.items.find(item => item.name === name) ; 
            if (item) {
                item.quantity = quantity ; 
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
