import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../../context";
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className=" col-9 mx-auto col-md-6 col-lg-3 product__wrapper">
                <div className="card">
                <ProductConsumer>
                {(value) => (
                    <div className="img__container p-5" 
                    onClick={()=> value.handleDetail(id)}
                    >
                
                    <Link to="/details">
                        <img src = {img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart__btn" 
                    disabled={inCart? true: false} onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id)
                    }}>
                    {inCart? (<p className ="text-capitalize mb-0" disabled> {" "} in Cart</p>): (<i className ="fas fa-cart-plus"></i>)}

                    </button>
                </div>
                )}
               
                </ProductConsumer>
                {/* card footer*/}
                <div className="card__footer d-flex m-0 justify-content-between py-2 px-3">
                    <p className=" align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text__blue font-italic mb-0  text__size">
                        <span className="mr-1 ">$</span>
                        {price}
                    </h5>
                </div>
                </div>
            </div>
        );
    }
}

Product.propTypes ={
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price:PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}