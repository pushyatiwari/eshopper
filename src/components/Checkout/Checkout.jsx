/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import * as EmailValidator from 'email-validator';
import './Checkout.css';

const Checkout = () => {
  const [formname, setName] = useState('');
  const [formemail, setEmail] = useState('');
  const [formaddress, setAddress] = useState('');
  const [formphone, setPhone] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
    if (name === 'formname') setName(value);
    if (name === 'formemail') setEmail(value);
    if (name === 'formaddress') setAddress(value);
    if (name === 'formphone') setPhone(value);
  };
  // if (name === 'name') {
  //   this.setState((prevState) => ({ ...prevState, name: value }));
  // }
  // if (name === 'email') {
  //   this.setState((prevState) => ({ ...prevState, email: value }));
  // }
  // if (name === 'address') {
  //   this.setState((prevState) => ({ ...prevState, address: value }));
  // }
  // if (name === 'phone') {
  //   this.setState((prevState) => ({ ...prevState, phone: value }));
  // }
  // }

  // let emailValidate = false;
  // if (EmailValidator.validate(email)) {
  //   console.log('true email');
  //   emailValidate = true;
  // }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formname);
    console.log(formemail);
    console.log(formaddress);
    console.log(formphone);
  };

  return (
    <>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-element">
            <p>NAME:</p>
            {' '}
            <input type="text" name="formname" aria-describedby="name-format" required aria-required="true" onChange={handleChange} value={formname} pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+" />
            <br />
          </div>
          <div className="form-element">
            <p>EMAIL:</p>
            <input type="email" id="formemail" name="formemail" required onChange={handleChange} value={formemail} />
            <br />
          </div>
          <div className="form-element">
            <p>ADDRESS:</p>
            <input type="text" name="formaddress" onChange={handleChange} value={formaddress} />
            <br />
          </div>
          <div className="form-element">
            <p>PHONE:</p>
            <input
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
    </>
  );
};

export default Checkout;
