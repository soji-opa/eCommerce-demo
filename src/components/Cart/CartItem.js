// import React from 'react'

// export default function CartItem({item, value}) {
    
    
//     const {id,title, img, price, total, count} = item;
//     // const { increment, decrement, removeItem} = props.value;
    
//     return (
//         <div>
//             <h1>This is a cart item</h1>
//         </div>
//     )
// }

import React, { Component } from 'react'
import { ProductConsumer } from '../../context';

export default class CartItem extends Component {
    render() {
        const {id,title, img, price, total, count} = this.props.item;
        return (
           <ProductConsumer>
            {(value)=>{
                
                const { increment, decrement, removeItem} = value;
                return(
                    <div className="row my-3 text-capitalize text-center">
                        <div className="col-10 mx-auto col-lg-2">
                            <img 
                            src={img} 
                            style={{width:"8rem", height:"8rem"}}
                            className="img-fluid"
                            alt="product"/>
                        </div>

                        <div className="col-10 mx-auto big  col-lg-2">
                            <span className="d-lg-none"> product: </span> {title}
                        </div>

                        <div className="col-10 mx-auto big col-lg-2">
                            <span className="d-lg-none"> price: </span> {price}
                        </div>

                        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                            <div className="d-flex justify-content-center">
                                <div>

                                <span className="btn btn__black mx-1" 
                                onClick={()=>decrement(id)}>
                                -
                                </span>

                                <span className="btn btn__black mx-1" 
                               >
                                {count}
                                </span>

                                <span className="btn btn__black mx-1" 
                                onClick={()=>increment(id)}>
                                +
                                </span>
                                </div>
                            </div>
                        </div>
                        {/**/}

                        <div className="col-10 mx-auto col-lg-2">
                            <div className="cart__icon" onClick={()=>{removeItem(id)}}>
                                <i className="fas fa-trash 2x"></i>
                            </div>
                        </div>

                        <div className="col-10 mx-auto big col-lg-2">
                            <strong className="d-lg-none"> item total : $ </strong> {total}
                        </div>
                    </div>
                )
            }}
           </ProductConsumer>
        )
    }
}
