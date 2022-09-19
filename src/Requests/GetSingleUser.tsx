import axios from "axios";
import { RootState, AppDispatch } from "../Redux/store";
import { getUser } from "../Redux/Slices/getUser";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

export const getSingleUser = async() => {
        const baseUrl = 'https://fakestoreapi.com/auth/login'
        await axios({
            method: 'post',
            url: baseUrl,
            data: {
                username: "mor_2314",
                password: "83r5^_"
            }
        })
        .then(res=> console.log(res))
        .catch(error => console.log(error)); 
}