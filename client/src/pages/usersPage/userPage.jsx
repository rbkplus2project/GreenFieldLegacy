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
        fetch("http://127.0.0.1:5000/user/getuser", {
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