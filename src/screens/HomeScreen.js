import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Services from '../components/Services';
import Affiliates from '../components/Affiliates';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products, pages, page } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>} <br />
            {/* <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                </>
            )} */}

            <Tabs defaultActiveKey="newArrivals" className="mb-3">
                <Tab eventKey="newArrivals" title="New Arrivals">
                    {/* <h1>Latest Products</h1> */}
                    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row>
                                {products.filter(product => product.category.toUpperCase() === 'NEW WELE')
                                    .map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                        </>
                    )}
                </Tab>
                <Tab eventKey="tshirts" title="T Shirts">
                    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row>
                                {products.filter(product => product.category.toUpperCase() === 'T SHIRTS')
                                    .map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                        </>
                    )}
                </Tab>
                <Tab eventKey="longSleeves" title="Long Sleeves">
                    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row>
                                {products.filter(product => product.category.toUpperCase() === 'LONG SLEEVES / HOODIES')
                                    .map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                        </>
                    )}
                </Tab>
                <Tab eventKey="capSeries" title="Cap Series">
                    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Row>
                                {products.filter(product => product.category.toUpperCase() === 'CAP SERIES')
                                    .map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                        </>
                    )}
                </Tab>
                <Tab eventKey="services" title="Services">
                    <Services />
                </Tab>
                <Tab eventKey="affiliates" title="Affiliates">
                    <Affiliates />
                </Tab>
            </Tabs>
        </>
    )
}

export default HomeScreen
