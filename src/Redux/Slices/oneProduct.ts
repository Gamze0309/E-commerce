import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

interface ProductState {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

const initialState = {id: 0, title: '', price: 0, category: '', description: '', image: ''} as ProductState

const oneProductSlice = createSlice({
    name: 'oneProduct',
    initialState,
    reducers: {
        oneProduct: (state, action: PayloadAction<Product>) => {
            console.log(action.payload)
            return{
                ...state,
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                category: action.payload.category,
                description: action.payload.description,
                image: action.payload.image
            }
        }
    }
})

export const {oneProduct} = oneProductSlice.actions
export default oneProductSlice.reducer