import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../actions/productsActions';
import appstore from '../store';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import './products_List.css';


const Products = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    const actionDispatcher: any = useDispatch();

    const productsList: any = useSelector((state: any) => state.products);

    const [products, setProducts] = useState([]);



    useEffect(() => {
        console.log(productsList);

        if (productsList && productsList.length === 0) {
            actionDispatcher(fetchProductsAction());
        } else {
            setProducts(productsList[0]);
            console.log(productsList[0]);
            setShowSpinner(false);
        }
    }, [productsList]);

    return (
        <>
            {showSpinner && productsList.length === 0 && (<Spinner animation="border" variant="primary" className='spin' />)}
            <div>
                {<Row className='row'>{products.map((product: any) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">${product.price}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}</Row>}
            </div>
        </>

    );
}

export default Products;
