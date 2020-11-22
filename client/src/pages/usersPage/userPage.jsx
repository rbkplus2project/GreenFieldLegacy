// import './profileBody.css';
// import React from "react"

// import Avatar from '@material-ui/core/Avatar';
// import { Link } from 'react-router-dom';
// class PfofileBody extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }

//     render() {
//         //  const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
//         return (
//             <div >


//                 <form className="form1">
//                     <h2>
//                         <Avatar alt="ameedasmah" src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-6ec65bc18cc7-512" />
//                     </h2>
//                     <label className="label1" for="username">Email : ameed asmah</label>

//                     <label className="label1" for="email">Email : ameed.asmah1@gmail.com</label>

//                     <label className="label1" for="creditcard">cardnumber : "1234-1234-1234-1234"</label>

//                     <label className="label1" for="favourit number">favorite number : "4" </label>

//                     <label className="label1" for="res number">res number : 2</label>

//                     <div className="buttondiv">
//                         <Link to='/profile/favorites'>
//                             <button className="button">favorites</button>
//                         </Link>
//                         <Link to='/profile/reservations'>
//                             <button className="button">reservations</button>
//                         </Link>

//                     </div>
//                 </form>
//             </div>

//         );
//     }
// }
// export default PfofileBody;

import './profileBody.css';
import React from "react"
class ProfileBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: false,
            master: false,
            usersArray: [],
            adminsArray: []
        }
    }
    componentDidMount = () => {
        fetch("/user/getuser", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "displayName": this.props.currentUser }),
        })
            .then(data => data.json())
            .then(data => this.setState({ currentUser: data.displayName, email: data.email, admin: data.admin, master: data.master }))
            .then(() => this.setState({ price: this.handlePrice() }))
    }
    render() {
        return (

            <div >


            </div>

        )
    }
}
export default ProfileBody;
