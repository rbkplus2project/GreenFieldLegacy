import './NewPassword.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');

// Changes password for a user who is not signed in and forgot the password
class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false
        }
    }
    checkPassWord = (password) => {
        // if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.{8,})/.test(password)) {
        //     return true;
        // }
        return true;
    }
    componentDidMount = () => {
        console.log("hiiii")
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const passwordError = document.querySelector('.password.error');
        passwordError.textContent = '';

        let input = $('#newPassword-form').serializeArray();
        let currenturl = window.location.href;
        let index = currenturl.lastIndexOf("/");
        let token = currenturl.slice(index + 1);

        if (input[0].value === input[1].value && (this.checkPassWord(input[0].value)) === true) {
            let options = {
                url: `/user/reset/:token`,
                method: 'post',
                data: { password: input[0].value, token: token }
            }

            axios(options)
                .then((results) => {
                    if (results.status === 200) {
                        this.setState({home : true})
                    };
                })
                .catch((err) => {
                    console.error(err);
                })
        }
        else {
            if (input[0].value.length === 0 || input[1].value.length === 0) {
                passwordError.textContent = "Please enter a password";
            }
            else if (input[0].value.length !== input[1].value.length) {
                passwordError.textContent = "Password doesn't match";
            }
            else {
                passwordError.textContent = "Password doesn't fulfill the requirement to be secure"
            }
        }
    }

    render() {
        if(this.state.home){
            return <Redirect to="/"/>
        }
        return (
            <div id="newPassword" className="">
                <form className="newPassword-form" onSubmit={this.handleSubmit}>
                    <h1>Reset Password</h1>
                    <br />
                    <div className="">
                        <label htmlFor="password-n" >New Password:</label>
                        <input type="password" className="text" id="password-n" name="password-n" />
                        <div className="password-req" >Password must contain at least <b>one lowercase</b>, <b>uppercase</b>, <b>symbol</b>, <b>number</b> <br/>and min.length of 8 char.</div><br />
                    </div>

                    <div className="">
                        <label htmlFor="password-con" >Confirm Password:</label>
                        <input type="password" className="text" id="password-con" name="password-con" />
                        <div className="password error"></div>
                    </div>
                    <br />
                
                    <button className="button" >Update Password</button><br />
                </form>
            </div>
        )
    }
};

// Redux 
const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // sign: (z) => { dispatch(showSign(z)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
