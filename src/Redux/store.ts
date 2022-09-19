import { configureStore } from '@reduxjs/toolkit'
import getUserSliceReducer from './Slices/getUser'

export const Store = configureStore({
    reducer: {
        getUser: getUserSliceReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch