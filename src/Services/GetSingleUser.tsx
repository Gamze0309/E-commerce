import axios from "axios";
import { RootState, AppDispatch } from "../Redux/store";
import { getUser } from "../Redux/Slices/getUser";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

export const getSingleUser = (username: String, password: String): ThunkAction<void, RootState, unknown, AnyAction> => 
    async useAppDispatch => {
        const baseUrl = 'https://fakestoreapi.com/auth/login'
        console.log('burdaaa')
        await axios({
            method: 'post',
            url: baseUrl,
            data: {
                username: username,
                password: password
            }
        })
        .then(res=> res.status == 200? useAppDispatch(getUser({username: username, password: password, status:'Success'})): useAppDispatch(getUser({username: '', password: '', status:'Error'})))
        .then(res => console.log(res))
        .catch((error) => {
            console.log(error)
            useAppDispatch(getUser({username: '', password: '', status:'Error'}))
        }); 
}