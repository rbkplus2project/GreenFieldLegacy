// import { showSign } from '../actions/actions.js';
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
        let options = {
            url: `/user/forgot-password`,
            method: 'post',
            data: { email: input[0].value }
        }

        axios(options)
            .then((results) => {
                console.log(results);
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

                        <p >Back to Sign In <Link to="/signin" >Sign In</Link></p>
                    </form>
                </div>
            )
        }
    }
};


// Redux 
const mapStateToProps = (state) => {
    return {
        showSign: state.showSign,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // sign: (z) => { dispatch(showSign(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
