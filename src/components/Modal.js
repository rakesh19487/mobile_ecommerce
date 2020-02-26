import React, { Component } from 'react';

import { ModalContainer, ButtonContainer } from './Button';
import { ProductConsumer } from '../context';

import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, price, title } = value.modalProduct;

                    if (!modalOpen) {
                        return null
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" id="modal">
                                            <h5>item added to the cart</h5>
                                            <img src={img} alt="product" className="img-fluid"></img>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : Rs {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}


export default Modal;