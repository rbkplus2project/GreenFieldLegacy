import { setUser } from '../../actions/actions.js';
import React, { Component } from 'react';

import { connect } from 'react-redux';
const $ = require('jquery');

class Profile extends Component {

    // Gets the logged in user's info
    
    componentDidMount() {
        fetch('http://127.0.0.1:5000/user/getuser')
          .then(res => res.json())
            .then(res => {
                if (localStorage.getItem('gamesio')) {
                    let newUser = this.props.user;
                    newUser.games = res.filter(elem => elem.postedBy === this.props.user._id);
                    this.props.setUser(newUser);
                    localStorage.setItem('gamesio', JSON.stringify(newUser));
                    this.setState({})
                }
            })
    }

    // Changes profile picture & saves in database
    updateImage = () => {
        let newImg = document.getElementById('newImg');
        let name = this.props.user.username
        let newUser = this.props.user
        if (newImg.files && newImg.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                let options = {
                    method: 'put',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"profile": e.target.result})
                }
                fetch('http://localhost:3000/user/' + name, options)
                .then(res => {
                    if (res.status === 200) {
                        newUser.profile = e.target.result
                        this.props.setUser(newUser)
                        localStorage.setItem('gamesio', JSON.stringify(newUser))
                        this.setState({})
                    } else {
                        throw new Error('plop')
                    }
                })
                .catch(res => alert('image too large'))
            }
            reader.readAsDataURL(newImg.files[0])
        }
    }

    // Changes name & saves in database
    updateName = () => {
        let newName = $('#change-name').val()
        let oldName = this.props.user.username
        let options = {
            method: 'put',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"username": newName})
        }
        fetch('http://localhost:3000/user/' + oldName, options)
        .then(res => {
            if (res.status === 200) {
                let newUser = this.props.user
                newUser.username = newName
                this.props.setUser(newUser)
                localStorage.setItem('gamesio', JSON.stringify(newUser))
                alert('New Username:' + newName )
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('username already taken'))
    }

    // Changes password for the signed in user
    updatePass = () => {
        let newPass = $('#change-pass').val()
        let name = this.props.user.username
        let options = {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({password: newPass, username: name})
        }
        fetch('http://localhost:3000/user/' + name, options)
            .then(res => {
            console.log(res)
            if (res.status === 200) {
                alert('Password changed successfully')
            } else {
                throw new Error('plop')
            }
        })
        .catch(res => alert('Password must be longer than 6 characters'))
    }
    render() {
        return (
            <div className="center styled profile">
                <img className="profileimg" alt="Profile" src={this.props.user.profile ? this.props.user.profile : "./media/signin.png"} style={{color:this.props.colors[3],borderColor:this.props.colors[1]}}/>
                <br />
                <br />
                <input type="file" id="newImg" onChange={()=>{this.updateImage(this)}} style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}/><p className="up" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}>Change Picture</p> 
                <span style={{color:this.props.colors[3]}}>Username</span>  <input type="text" className="text" id="change-name" name="change-name" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}/>  <button className="edit" onClick={this.updateName} style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}>Change Name</button>
                <br/>
                <span style={{color:this.props.colors[3]}}>Password</span>  <input type="password" className="text" id="change-pass" name="change-pass" style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}/>  <button className="edit" onClick={this.updatePass} style={{color:this.props.colors[3],backgroundColor:this.props.colors[0],borderColor:this.props.colors[1]}}>Change Password</button>
                <div>
                    <p style={{color:this.props.colors[3]}}>My Games</p>
                    <div className="row">
                        {this.props.user.games.map((elem, i) => <DisplayGame game={elem} key={i} item={i} rerender={() => this.setState({})} />)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile)
