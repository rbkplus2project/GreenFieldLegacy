import './App.css';
import React from "react"
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import HomePage from "./pages/homePage/homePage"
import CardComp from "./components/cardComponents/card"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initailItems: [{ city: "singapore", size: 'large' }, { city: "kualalumpur", size: 'large' }, { city: "losAngeles" }, { city: "rome" }, { city: "Barcelona" }, { city: 'paris' }],
     currentUser:"",
    }
  }

  componentDidMount() {
    //checking the auth
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'jwt-auth': localStorage.getItem('jwt-auth') // signed by Mo'men
      },
    }
    fetch("http://localhost:5000/auth",requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({currentUser:data.displayName})
      })
      .then(()=>console.log(this.state))
      .catch(err => console.log(err.message))

  }
  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/signin" render={()=>
              this.state.currentUser
             ? (<Redirect to='/'/>)
             : (<SignInAndSignUpPage/>)} />
          <Switch>
            <Route exact path="/" render={()=><HomePage currentUser={this.state.currentUser}/>} />
            <Route exact path="/card" render={()=><CardComp/>} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
