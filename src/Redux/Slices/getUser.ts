import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

interface UserState {
    username: String
    password: String
    status: String
}

const initialState = {username: '', password: '', status: 'idle'} as UserState

const getUserSlice = createSlice({
    name: 'getUser',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<{username: String, password: String, status: String}>) => {
            return{
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                status: action.payload.status
            }
        }
    }
})

export const {getUser} = getUserSlice.actions
export default getUserSlice.reducer