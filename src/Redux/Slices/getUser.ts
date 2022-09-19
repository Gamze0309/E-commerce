import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

interface UserState {
    username: String
    password: String
}

const initialState = {username: '', password: ''} as UserState

const getUserSlice = createSlice({
    name: 'getUser',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<{username: String, password: String}>) => {
            return{
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }
        }
    }
})

export const {getUser} = getUserSlice.actions
export default getUserSlice.reducer