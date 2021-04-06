/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import * as EmailValidator from 'email-validator';
import './Checkout.css';

const Checkout = ({ checkout }) => {
  const [formname, setName] = useState('');
  const [formemail, setEmail] = useState('');
  const [formaddress, setAddress] = useState('');
  const [formphone, setPhone] = useState('');
  const [isOrdered, setisOrdered] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
    if (name === 'formname') setName(value);
    if (name === 'formemail') setEmail(value);
    if (name === 'formaddress') setAddress(value);
    if (name === 'formphone') setPhone(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    checkout();
    setisOrdered(true);
    console.log('order placed');
    // console.log(formname);
    // console.log(formemail);
    // console.log(formaddress);
    // console.log(formphone);
  };

  return (
    <>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-element">
            <p>NAME:</p>
            {' '}
            <input data-testid="input-name" type="text" name="formname" aria-describedby="name-format" required aria-required="true" onChange={handleChange} value={formname} pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+" />
            <br />
          </div>
          <div className="form-element">
            <p>EMAIL:</p>
            <input data-testid="input-email" type="email" id="formemail" name="formemail" required onChange={handleChange} value={formemail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
            <br />
          </div>
          <div className="form-element">
            <p>ADDRESS:</p>
            <input data-testid="input-address" type="text" name="formaddress" onChange={handleChange} value={formaddress} />
            <br />
          </div>
          <div className="form-element">
            <p>PHONE:</p>
            <input
              data-testid="input-phone"
              type="text"
              name="formphone"
              onChange={handleChange}
              value={formphone}
              pattern="^\d{10}$"
              required="required"
            />
          </div>
          <br />
          <button type="submit">Checkout</button>
        </form>
      </div>
      <h1 className={isOrdered ? 'order-placed' : 'order-not-placed'}>Your Order is placed successfully!</h1>
    </>
  );
};

export default Checkout;
