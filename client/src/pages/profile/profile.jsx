// import './profile.css';
// import React from "react"
// // import Button from "@material-ui/core/Button";
// // import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Avatar from '@material-ui/core/Avatar';
// import AppBarr from "../../components/AppBar/AppBar"
// // import ProfileBody from "../../components/profileBody/profileBody"
// class Profile extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     //  const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
//     return (
//       <div >
//         <div className="navbar">
//           <AppBarr  />
//         </div>
//         {/* <div className="total_button">
//           <div className="buttongroup1">
//             <ButtonGroup
//             variant="contained"
//               color="primary"
//               aria-label="contained primary button group"
//               >
//               <Button>favorite</Button>
//             </ButtonGroup>
//           </div>
//           <div className="buttongroup2">
//             <ButtonGroup
//               variant="contained"
//               color="primary"
//               aria-label="contained primary button group">
//               <Button> reserve </Button>
//             </ButtonGroup>
//           </div>
//         </div> */}
       
//           <form >
//             <h2>
//             <Avatar alt="ameedasmah" src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-6ec65bc18cc7-512" />
//             </h2>
//             <label for="username">Email : ameed asmah</label>

//             <label for="email">Email : ameed.asmah1@gmail.com</label>
            
//             <label for="creditcard">cardnumber : "1234-1234-1234-1234"</label>

//             <label for="favourit number">favorite number : "4" </label>

//             <label for="res number">res number : 2</label>


//             {/* <input type="text" name="cardnumber" placeholder="1234-1234-1234-1234" required /> */}
//             {/* <div className="email error">some error</div> */}
//             {/* <label for="password">Password</label>
//             <input type="password" name="password" required />
//             <div className="password error"></div> */}
//             <div className="buttondiv">
//             <button>favorite</button> 
//             <button>reserve</button>
//             </div>
//           </form>
//     {/* const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick ,adults,dateDifferenceNumber} =this.props
//     return (
//       <div>
//         <AppBarr currentUser={currentUser}/>
//         <ProfileBody adults={adults} currentUser={currentUser} dateDifferenceNumber={dateDifferenceNumber} /> */}
//       </div>

//     );  
//   }
// }
// export default Profile;


import './profile.css';
import React from "react"

import AppBarr from "../../components/AppBar/AppBar"
// import ProfileBody from "../../components/profileBody/profileBody"
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
   const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick ,adults,dateDifferenceNumber} =this.props
    return (
      <div>
        <AppBarr currentUser={currentUser}/>
        {/* <ProfileBody adults={adults} currentUser={currentUser} dateDifferenceNumber={dateDifferenceNumber} /> */}
      </div>
    );
  }
}
export default Profile;