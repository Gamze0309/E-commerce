import { configureStore } from '@reduxjs/toolkit'
import getUserSliceReducer from './Slices/getUser'
import oneProductReducer from './Slices/oneProduct'
import shoppingCartReducer from './Slices/shoppingCart'

export const Store = configureStore({
    reducer: {
        getUser: getUserSliceReducer,
        oneProduct: oneProductReducer,
        shoppingCart: shoppingCartReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch