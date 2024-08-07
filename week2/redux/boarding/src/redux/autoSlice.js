import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    run: false
}

const autoSlice = createSlice({
    name: "auto",
    initialState,
    reducers: {
        start: (state) =>{
            state.run = true
        }
    }
})

export const { start } = autoSlice.actions
export default autoSlice.reducer