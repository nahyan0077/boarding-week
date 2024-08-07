import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 0
}


const counterSlicer = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        plus: (state) => {
            state.count += 1
        },
        minus: (state) => {
            state.count -= 1
        },
        win: (state, action) =>{
            state.count = action.payload
        }
    },

})

export const { plus, minus, win } = counterSlicer.actions

export default counterSlicer.reducer