import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductWrapper } from './Button'

import { ProductConsumer } from '../context';

import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"></img>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id)}}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled> {" "} in cart</p>) : (<i className="fas fa-cart-plus"></i>)}
                                </button>
                            </div>
                        )}

                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">Rs</span> {price}

                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}



export default Product;