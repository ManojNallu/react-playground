import axios from "axios";



export const getProductsAction = (productslist: any) => {
    return {
        type: 'GET_PRODUCTS',
        payload: productslist,
    };
}


//this is a Aync action

export const fetchProductsAction = () => {
    return (dispatch: any) => {
        // this axios.get returns the promise 
        axios.get('https://dummyjson.com/products').then((response: any) => {
            const products: any = response.data.products

            dispatch(getProductsAction(products));

        }).catch((error: any) => {
            console.log(error);
        })
    }
}