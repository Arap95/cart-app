import React, { Component } from 'react';
// import { Product } from '../../Product';
import PostListItem from '../PostListItem/PostListItem';

class Postlist extends Component {
  render() {
    const { data, onAddBasket} = this.props;
    return (
      <div className='product-box'>
        {
          data.map((elem, index) => {
            return (
              <div>
                <PostListItem
                  key={index} 
                  {...elem} 
                  onAddBasket={() => onAddBasket(elem.id)} />
              </div>
            )         
           })
        }
      </div>
    );
  }
}
export default Postlist;