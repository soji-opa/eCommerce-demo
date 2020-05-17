// import React from 'react';
// import CartItem from './CartItem';
// import { ProductConsumer } from '../../context';

// export default function CartList({value}) {
//     const { cart } = value;
    
    
//     return (
//         <ProductConsumer>
//             {()}
//         </ProductConsumer>
//         <div>
//             {cart.map((item) =>{
//                 return <CartItem key={item.id} 
//                 item={item} value={value} />
//             })}
//             <CartItem/>
//         </div>
//     )
// }

import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import CartItem from './CartItem';

export default class CartList extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {(value) =>{
                    return value.cart.map((item)=>{
                        return <CartItem key={item.id} item={item} />
                    })
                }}
            </ProductConsumer>
        )
    }
}

