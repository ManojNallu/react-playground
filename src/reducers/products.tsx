import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProductsAction } from '../actions/productsActions';
import appstore from '../store';

const ProductsList = () => {

    const actionDispatcher : any = useDispatch();
    console.log(appstore.getState());

    useEffect(() => {

        actionDispatcher(fetchProductsAction());

    },[])

    return (
        <div>
            this is the products page
        </div>
    );
}

export default ProductsList;
