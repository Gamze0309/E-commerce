import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

interface ProductState {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

interface QuantityState {
    quantity: number,
    product: ProductState
}

interface CartState{
    products: Array<QuantityState>
}

type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

const initialState = {products:[]} as CartState

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addShoppingCart: (state, action: PayloadAction<Product>) => {
            let product = state.products.find((p) => p.product.id === action.payload.id)
            if(product){
                product.quantity = product.quantity + 1
            }
            else{
                return{
                    ...state,
                    products:[...state.products, {quantity: 1, product:action.payload}]
                }
            }
        }
    }
})

export const {addShoppingCart} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer