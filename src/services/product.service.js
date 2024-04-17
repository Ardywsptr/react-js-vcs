import axios from "axios";

export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
}

export const getDetailProduct = (productId, callback) => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
}