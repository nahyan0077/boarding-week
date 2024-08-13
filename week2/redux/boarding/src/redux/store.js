// import { configureStore } from '@reduxjs/toolkit'
// import counterSlicer from './slice'
// import runnerSlice from './autoSlice'

// export const store = configureStore({
//     reducer: {
//         count: counterSlicer,
//         runner: runnerSlice
//     }
// })


import {configureStore} from '@reduxjs/toolkit'
import counterSlicer from './slice'
import runnerSlice from './autoSlice'

export const store = configureStore ({
    reducer: {
        count: counterSlicer,
        runner: runnerSlice
    }
})