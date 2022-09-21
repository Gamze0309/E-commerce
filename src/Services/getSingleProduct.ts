import axios from "axios";

export const getSingleProduct =async(productId: any): Promise<any> => {
        const baseUrl = 'https://fakestoreapi.com/products/' + productId
        return await axios.get(baseUrl)
        .catch(error => console.log(error)); 
}