import { createSlice } from '@reduxjs/toolkit'

export const componentSlice = createSlice({
    name: 'component',
    initialState: {
        component: 'home',
    },
    reducers: {
        changeComponentTo: (state, action) => {
            state.component = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeComponentTo } = componentSlice.actions

export default componentSlice.reducer