import React, { Component } from 'react'
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default class CartTotals extends Component {
    

    render() {
        
        return (
            <ProductConsumer>
                {(value)=>{
                    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
                    return(
                        <React.Fragment>
                            <div class="container">
                                <div className="row">
                                    <div className="col-10 mt-3 ml-sm-5 
                                    ml-md-auto col-sm-8 text-capitalize text-right">
                                    <Link to="/" className="btn
                                     btn-outline-danger text-uppercase mb-3 px-5"
                                     onClick={()=>{clearCart()}}
                                    > clear 
                                    </Link>
                                    <h5>
                                    <span className="text__title"> subtotal : </span>
                                    <strong>$ {cartSubTotal}</strong>
                                    </h5>

                                    <h5>
                                    <span className="text__title"> tax : </span>
                                    <strong>$ {cartTax}</strong>
                                    </h5>

                                    <h5>
                                    <span className="text__title"> total : </span>
                                    <strong>$ {cartTotal}</strong>
                                    </h5>

                                    <PayPalButton total={cartTotal} clearCart={clearCart} history ={this.props.history}/>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}
