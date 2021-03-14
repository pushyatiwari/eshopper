import React, { useContext } from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import { ThemeContext } from '../../themeContext';

// {"Fruits & Vegatables":[
//   {"id":1,"name":"apple","price":120,"count":20,"category":"Fruits & Vegatables",
//   "src":"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"},{"id":3,"name":"grapes","price":50,"count":10,"category":"Fruits & Vegatables","src":"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"},

// description:- {"id":1,"name":"apple","price":120,"countInCart":1,"count":20,"category":"Fruits & Vegatables","src":"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}
const Home = ({ onIncrement, onDecrement, description }) => {
  const theme = useContext(ThemeContext);
  // console.log('in home desc: ', description);
  return (
    <>
      <div className={theme === 'dark' ? 'darkTheme container' : 'whiteTheme container'} data-testid="home-route">
        <div className="rendercards">
          {Object.keys(description).map((category) => (
            <React.Fragment key={category}>
              {description[category].map((product) => (
                <Product
                  key={product.id}
                  description={product}
                  onIncrement={() => onIncrement(product.id, category)}
                  onDecrement={() => onDecrement(product.id, category)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  description: PropTypes.objectOf(PropTypes.array).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Home;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
