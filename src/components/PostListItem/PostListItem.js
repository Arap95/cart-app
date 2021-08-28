import React, { Component } from 'react';
import { Product } from '../../Product';
import './PostListItem.css'

class PostListItem extends Component {
  render() {
    const {image, title, price, onAddBasket, text} = this.props
    return (
      <div >
         <div className='product-box2'>
          <img src={image} alt="" style={{width: "200px", height: "200px"}}/> 
            <span>{title}</span>
            <h6>{text}</h6>
            <span>цена:  {price}</span>
          <div>
            <button onClick={onAddBasket}>корзинка</button>
          </div>
        </div>
      </div>
    );
  }
}
export default PostListItem;