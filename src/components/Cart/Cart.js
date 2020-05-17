import React, { Component } from 'react';
import Title from '../pages/Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {

    componentDidMount(){
        console.log("props", this.props);
        
    }
    render() {
        return (
            <section>
            <ProductConsumer>
            {(value)=>{
                const {cart} = value;
                
                if(cart.length > 0){
                    return(
                        <React.Fragment>
                         <Title name="your" title ="cart"/>
                         <CartColumns/>
                         <CartList/>
                         <CartTotals history={this.props.history}/>
                        </React.Fragment>
                    )
                }else{
                    return(<EmptyCart/>)
                }
            }}
            </ProductConsumer>
                
            </section>
        )
    }
}
