import axios from "axios";

export const getAllProducts =async(): Promise<any> => {
        const baseUrl = 'https://fakestoreapi.com/products'
        return await axios.get(baseUrl)
        .then((response)=> {
        return{ 
                status: response.status, 
                data: response.data}})
        .catch(error => console.log(error)); 
}