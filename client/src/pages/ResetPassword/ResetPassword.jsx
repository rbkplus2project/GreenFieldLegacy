import { store } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');

// Sends a request to change password for a user that forgot the password
// Using email verification
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newpass: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("hi");
        let input = $('#reset-form').serializeArray();
        this.props.storeUser(input[0].value)
        let options = {
            url: `http://localhost:5000/user/forgot-password`,
            method: 'post',
            data: { email: input[0].value }
        }

        axios(options)
            .then((results) => {
                // console.log(results);
                if (results.status === 200) {
                    this.setState({ newpass: true })
                };

            })
            .catch((err) => {
                console.error("err===== =>", err);
            })
    }

    render() {
        if (this.state.newpass) {
            return <Redirect to="/reset/:token" />
        }
        else {
            console.log("reset props", this.props)
            return (
                <div id="reset" className="center styled">
                    <form id="reset-form" onSubmit={this.handleSubmit}>
                        <h1>Forgot Password</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="text" id="email" name="email" />
                        </div>
                        <br />
                        <button className="button" >Reset Password</button><br />

                        <p >Back to <Link to="/signin" >Sign In</Link></p>
                    </form>
                </div>
            )
        }
    }
};


// function saveToLocalStorage(state) {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem("state", serializedState)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// function loadFromLocalStorage() {
//     try {
//         const serializedState = localStorage.getItem("state");
//         if (serializedState === null) {
//             return undefined
//         }
//         return JSON.parse(serializedState)
//     }
//     catch (e) {
//         console(e);
//         return;
//     }
// }

const mapStateToProps = (state) => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined
        }
        return {user: JSON.parse(serializedState)}
    }
    catch (e) {
        console(e);
        return;
    }
    // return {
    //     user: state.user,
        
    // }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeUser: (z) => { dispatch(store(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);



