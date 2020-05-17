import React, { Component } from 'react';
import { ProductConsumer} from '../../context'
import { Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value;
                    const { img, title, price} = value.modalProduct;

                    if (!modalOpen){
                        return null;
                    }else{
                        return(
                            <div className="modal__container">
                            <div className="container">
                                <div className=" row">
                                    <div 
                                    id="modal"
                                     className ="col-8 mx-auto col-md-6 col-lg-4
                                     text-center text-capitalize p-5">
                                        <h5 className="modal__heading">Item added to cart</h5>
                                        <img src={img} className="img-fluid"
                                        alt="product"
                                        ></img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted"> price : $ {price}
                                        </h5>
                                        <Link to="/">
                                            <button 
                                            onClick={()=>{closeModal()}}
                                            className="modal__btn">
                                             Continue Shopping</button>
                                        </Link>

                                        <Link to="/cart">
                                            <button 
                                            onClick={()=>{closeModal()}}
                                            className="modal__btn2">
                                             Go to cart</button>
                                        </Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
