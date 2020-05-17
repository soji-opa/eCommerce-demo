import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                   const {id, company, img, info, title, price, inCart} = (value.detailProduct);
                   return(
                       <div className="container py-5">
                       {/* title*/}
                        <div className="row">
                            <div className="col-10 mx-auto-text-center text-slanted text__blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                       {/* end title*/}
                       {/* product info*/}
                        <div className="row">
                            <div className="col-10 mx-auto-col-md-6 my-3 text-capitalize">
                            <img src={img} className="img__fluid" alt="product"/>
                            </div>
                            {/* product text*/}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model: {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> 
                            made by : <span className="text-capitalize">{company}</span></h4>
                            <h4 className="text__blue">
                                <strong>
                                    price: <span>$</span> {price}
                                </strong>
                            </h4>
                            <p className="text-capitalize  font-weight-bold mt-3 mb-0">
                                Info about the product: 
                            </p>
                            <p className="text-muted lead info__text"> {info}</p>

                            {/* buttons */}
                                <Link to="/">
                                    <button className="details__btn">Back to Products</button>
                                </Link>

                                <button disabled={inCart ? true : false} 
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                                className="cart__btn2">
                                    {inCart ? "inCart": "add to cart"}
                                </button>
                            </div>
                        </div>
                       </div>
                   ) 
                }}
            </ProductConsumer>
        )
    }
}
