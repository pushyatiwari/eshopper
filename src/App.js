/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'pushya',
      products: [
        {
          id: 'b1',
          name: 'Banana - Robusta',
          price: 40,
          count: 0,
          src: 'https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png',
        },
        {
          id: 'b2',
          name: 'melon',
          price: 40,
          count: 0,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhOqYV2NWv0m80WzwGG2fCz6c3PzHmpz1Dg&usqp=CAU',

        },
        {
          id: 'b3',
          name: 'apple',
          price: 40,
          count: 0,
          src: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b0009f74-ef8e-48b4-b731-419ca93d8604.jpg',

        },
        {
          id: 'b4',
          name: 'item4',
          price: 40,
          count: 0,
          src: 'https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png',

        },
      ],
      cartCount: 0,
    };
  }

  onIncrement = (id) => {
    const { cartCount, products } = this.state;
    const newState = {
      ...this.state,
      cartCount: cartCount + 1,
      products: products.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      }),
    };
    console.log(newState);
    this.setState(newState);
  }

  onDecrement = (id) => {
    const { cartCount, products } = this.state;

    if (cartCount <= 0) {
      return;
    }
    let flag = 0;
    products.forEach((product) => {
      if (product.id === id) {
        if (cartCount && product.count === 0) flag = 1;
      }
    });
    if (flag === 1) return;
    const newState = {
      ...this.state,
      cartCount: cartCount - 1,
      products: products.map((product) => {
        if (product.id === id) {
          if (product.count > 0) return { ...product, count: product.count - 1 };
          return { ...product };
        }
        return product;
      }),
    };
    console.log(newState);
    this.setState(newState);
  }

  render() {
    const { products, cartCount, name } = this.state;
    if (name) {
      return (
        <div className="container">
          <Navbar cartCount={cartCount} />
          <Home
            description={products}
            cartCount={cartCount}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        </div>
      );
    }
    return (
      <Navbar cartCount={cartCount} />
    );
  }
}

export default App;
