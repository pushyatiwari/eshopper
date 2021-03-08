import React from 'react';
// import * as EmailValidator from 'email-validator';
import './Checkout.css';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
    };
  }

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });

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
}

render() {
  const {
    name, email, phone, address,
  } = this.state;
  // let emailValidate = false;
  // if (EmailValidator.validate(email)) {
  //   console.log('true email');
  //   emailValidate = true;
  // }
  return (
    <>
      <div>
        <form className="form-container">
          <div className="form-element">
            <p>NAME:</p>
            {' '}
            <input type="text" name="name" aria-describedby="name-format" required aria-required="true" onChange={this.handleChange} value={name} pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+" />
            <br />
          </div>
          <div className="form-element">
            <p>EMAIL:</p>
            <input type="email" id="email" name="email" required onChange={this.handleChange} value={email} />
            <br />
          </div>
          <div className="form-element">
            <p>ADDRESS:</p>
            <input type="text" name="address" onChange={this.handleChange} value={address} />
            <br />
          </div>
          <div className="form-element">
            <p>PHONE:</p>
            <input type="text" name="phone" onChange={this.handleChange} value={phone} />
          </div>
          <br />
          <button type="submit">Checkout</button>
        </form>
      </div>
    </>
  );
}
}

export default Checkout;
