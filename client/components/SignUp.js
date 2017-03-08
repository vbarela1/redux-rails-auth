import React from 'react';
import { Link } from 'react-router';
import {handleSignUp} from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
  let first_name = this.refs.firstName.value;
  let last_name = this.refs.lastName.value;
  let email = this.refs.email.value;
  let password = this.refs.password.value;
  this.props.dispatch(handleSignUp(first_name, last_name, email, password))

}

render () {
  return(
<div className='center'>
  <h3>Sign Up For A New Account</h3>
  <form onSubmit = {this.handleSubmit }>
    <input ref='firstName' type='text' placeholder='First Name' />
    <br />
    <input ref='lastName'type='text' placeholder='Last Name' />
    <br />
    <input ref='email' type='text' required placeholder='email' />
    <br />
    <input ref='password' type='password' required placeholder='password' />
    <br />
    <input type='submit' className='btn blue' value='Sign Up'/>
    <Link to='login' className='btn red'>Cancel</Link>
  </form>
</div>
  );
 }
}

export default connect()(SignUp);
