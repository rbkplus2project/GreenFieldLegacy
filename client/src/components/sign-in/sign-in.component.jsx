import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';



import './sign-in.styles.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: ""
    };
  }
  componentDidMount() {
    // this.handleSubmit()
  }
  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://127.0.0.1:5000/user/signin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then( (data) => {
        // this.setState({token:localStorage.getItem("token")})
        localStorage.setItem("jwt-auth", data.token)

        console.log('Success:', data);
      })
      .then(()=> window.location.reload())
      .catch((error) => {
        console.error('Error:', error);
      });

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })

  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>

          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
