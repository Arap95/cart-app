import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
  render() {
    const { basket, onDeleteItem } = this.props
    return (
      <div>
        {
          basket.map(elem => {
            return (
              <div  className='product-box'>
                <div className='product-box2'>
                  <img src={elem.cart.image} alt="" style={{ width: "250px", height: "240px" }} />
                  <span>{elem.cart.title}</span>
                  {/* <span>{text}</span> */}
                  <span>цена:  {elem.cart.price}</span>
                  <div>
                    <button onClick={() => onDeleteItem(elem.cart.id)}>корзинка</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Cart;