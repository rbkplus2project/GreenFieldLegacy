import './profileBody.css';
import React from "react"

import Avatar from '@material-ui/core/Avatar';
import {Link } from 'react-router-dom';
class PfofileBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    //  const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
    return (
      <div >
        
       
          <form >
            <h2>
            <Avatar alt="ameedasmah" src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-6ec65bc18cc7-512" />
            </h2>
            <label for="username">Email : ameed asmah</label>

            <label for="email">Email : ameed.asmah1@gmail.com</label>
            
            <label for="creditcard">cardnumber : "1234-1234-1234-1234"</label>

            <label for="favourit number">favorite number : "4" </label>

            <label for="res number">res number : 2</label>

            <div className="buttondiv">
            <Link  to='/profile/favorites'>
            <button>favorites</button> 
            </Link>
            <Link  to='/profile/reservations'>
            <button>reservations</button> 
            </Link>
            
            </div>
          </form>
      </div>

    );  
  }
}
export default PfofileBody;
