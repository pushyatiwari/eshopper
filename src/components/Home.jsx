/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-use-before-define */
import React from 'react';
import './Home.css';
import Product from './Product';
import Navbar from './Navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((product) => {
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
    if (this.state.cartCount <= 0) {
      return;
    }
    let flag = 0;
    this.state.products.forEach((product) => {
      if (product.id === id) {
        if (this.state.cartCount && product.count === 0) flag = 1;
      }
    });
    if (flag === 1) return;
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount - 1,
      products: this.state.products.map((product) => {
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

   renderCards = () => {
     const { products } = this.state;
     return products.map((product) => (
       <Product
         key={product.id}
         description={product}
         onIncrement={() => this.onIncrement(product.id)}
         onDecrement={() => this.onDecrement(product.id)}
       />
     ));
   }

   render() {
     // const { allProducts } = this.state;
     return (
       <div className="container">
         <Navbar cartCount={this.state.cartCount} />
         <div className="rendercards">
           {this.renderCards()}
         </div>
       </div>
     );
   }
}

export default Home;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
