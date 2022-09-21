import { configureStore } from '@reduxjs/toolkit'
import getUserSliceReducer from './Slices/getUser'
import oneProductReducer from './Slices/oneProduct'

export const Store = configureStore({
    reducer: {
        getUser: getUserSliceReducer,
        oneProduct: oneProductReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch