import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './slices/CounterSlice'

const store = configureStore({
    reducer:{
        count: counterSlice
    }
})

export default store