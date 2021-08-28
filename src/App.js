import React, { Component } from 'react';
import './App.css'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import PostList from './components/Postlist/Postlist';
import { Product } from './Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Product,
      basket: []
    }
  }
  componentDidMount() {
    this.setState({
      basket: JSON.parse(localStorage.getItem('cart')) || []
    })
  }

  componentDidUpdate(prevProps, prevState, shapshot) {
    if (prevState.state !== this.state.basket) {
      localStorage.setItem('cart', JSON.stringify(this.state.basket))
    }
  }

  onAddBasket = (id) => {
    this.setState(({ data, basket }) => {
      const index = data.find(elem => elem.id === id);
      const newItem = {
        cart: { ...index }
      }
      const newArr = [...basket, newItem]
      return {
        basket: newArr
      }
    })
  }

  onDeleteItem = (id) => {
    this.setState(({ basket }) => {
      const index = basket.findIndex((elem) => elem.cart.id === id);
      const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
      // console.log(newArr);
      return {
        basket: newArr
      }
    })
  }
  // onAddToBasket = (i) => {
  //   this.setState(({data, basket}) => {
  //     const Product = data.find((elem) => elem.id ===i)
  //     const newItem = {
  //       cart: {...Product}
  //     }
  //     const newArr = [...basket, newItem]
  //     return {
  //       basket: newArr
  //     }
  //   })
  // }
  render() {
    return (
      <Router>
        <div>
          <Header basket={this.state.basket}/>
        </div>
        <Switch>
          <Route path="/menu">
            <PostList 
            onAddBasket={this.onAddBasket}
            data={this.state.data}/>
          </Route>
          <Route path="/basket">
            <Cart 
            onDeleteItem={this.onDeleteItem}
            basket={this.state.basket}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

