import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.css';
const $ = require('jquery');

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  componentDidMount() {
    // this.handleSubmit()
  }
  handleSubmit = (event) => {
    event.preventDefault()
   
    // const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
    // emailError.textContent = '';
    passwordError.textContent = '';

    const { displayName, email, password, confirmPassword } = this.state
    fetch('/user/signin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      // .then((response) => {
      //   // console.log('responce =====', response);
      //   response.json()
      // })
      .then(response => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("jwt-auth", data.token)
          localStorage.setItem("current-user", data.displayName)
        }

        else {
          // throw Error("incorrect credentials")
          passwordError.textContent = "incorrect credentials";
        }
        console.log('Success:', data);
      })

      .catch((error) => {
        alert(error)
        console.error('Error:', error);
      })
      .then(() => { window.location.reload() })

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })

  }

  render() {
    return (
      <div className='sign-in'>
        <button ><Link to="/">Return To Home Page</Link> </button>
        <form className='sign-in-form'onSubmit={this.handleSubmit}>
          <h2>Sign In </h2>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <div className="email error" ></div>

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="password error" ></div>

          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
          </div>

          {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}

          {/* <a href="/auth/google">Log In with Google</a><br/> */}
          
          <p >Don't have an account? <Link to="/signup" >Sign Up</Link></p>

          <Link to="/forgot-password">
            <p >Forgot password?</p>
          </Link>
        </form>
      </div>
    );
  }
}


// Redux 
const mapStateToProps = (state) => {
  return {
    user: state.user,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


