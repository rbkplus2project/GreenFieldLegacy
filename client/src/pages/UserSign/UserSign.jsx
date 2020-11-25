import SignUp from '../../components/sign-up/sign-up.component.jsx';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// const $ = require('jquery');
// import './UserSign.styles.css';

class UserSign extends Component {

  render(){
    return (
    // <div className='UserSign'>
    <Router>
      {/* <Switch> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
      {/* </Switch>  */}
    </Router>
      
    // </div>
    )
  }
  
};

export default UserSign;
