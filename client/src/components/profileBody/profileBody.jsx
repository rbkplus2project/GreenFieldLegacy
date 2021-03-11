import './profileBody.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from "react"
import DisabledTabs from './tab';
import CardComp from "../cardComponents/card"
import StripeCheckoutButton from "../stripe/stripe"
import $ from "jquery"
class ProfileBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteNotEmp: true,
            removeGetRes: false,
            result: [],
            currentUser: '',
            reservationsArray: [],
            email: "",
            reserveShow: true,
            hideFav: true,
            userid: "",
            price: 0,
            favPrev: true,
            admin: false,
            master: false,
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
            .then(data => this.setState({ result: data.favorites, currentUser: data.displayName, reservationsArray: data.reservations, email: data.email, userid: data._id, admin: data.admin, master: data.master }))
            .then(() => this.setState({ price: this.handlePrice() }))
    }
    handleFavPrevChange = (data) => {
        this.setState({ favPrev: data })
    }
    handlePrice = () => {
        let res = this.state.reservationsArray.reduce((acc, el) => {
            let res = el.ratePlan.price.current.split("$")
            let x = Number(res[1])
            return (acc + x)

        }, 0)
        
        return res * this.props.adults * this.props.dateDifferenceNumber()
    }
     //new features
    updateImage = () => {
        let newImg = document.getElementById('newImg');
        let name = this.props.currentUser
        if (newImg.files && newImg.files[0]) {
            let reader = new FileReader();
            reader.onload = e => {
                let options = {
                    method: 'put',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "profile": e.target.result })
                }
                fetch('http://localhost:5000/user/' + name, options)
                    .then(res => {
                        if (res.status === 200) {
                            // this.props.setUser(newUser)
                            localStorage.setItem('hotel-profile', JSON.stringify(e.target.result))
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
        let newEamil = $('#change-email').val()
        let oldName = this.props.currentUser
        let options = {
            method: 'put',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "displayName": newName , "email": newEamil})
        }
        fetch('http://localhost:5000/user/' + oldName, options)
            .then(res => {
                if (res.status === 200) {
                    let newUser = this.props.user
                    newUser.username = newName
                    localStorage.setItem('hotel-profile', JSON.stringify(newUser))
                    alert('New Username:' + newName)
                } else {
                    throw new Error('plop')
                }
            })
            .catch(res => alert('username already taken'))
    }
    render() {
        const { adults, dateDifferenceNumber, currentUser } = this.props

        return (

            <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
                <div style={{
                }}>
                    <div className="background_img">
                    <img alt="" src={localStorage.getItem("hotel-profile") ? JSON.parse(localStorage.getItem("hotel-profile")) : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" } style={{ width: "160px", marginTop: '30px', marginLeft: '30px', height: "160px", borderRadius: "80px " }}></img>
                        <input type="file" id="newImg" onChange={()=>{this.updateImage(this)}}/><p className="up">Change Profile Picture</p> 
                        <div style={{ marginLeft: "55px", display: "flex", justifyContent: "space-around", width: "15%" }}>
                            <div style={{ position: "relative", paddingLeft: "5px", left: "40px",top:"-60px", marginTop: '5px' }} className="active"></div>
                        </div>
                    <div className="popup">
                    <Popup trigger={<button className="pop">Edit</button>} position="left">
                                <div>
                                <span></span>  <input type="text" className="text" id="change-name" name="change-name"/>  <button className="edit" onClick={this.updateName}>Change Name</button>
                                <span></span>  <input type="text" className="text" id="change-email" name="change-email"/>  <button className="edit" onClick={this.updateEmail}>Change Email</button>
                                </div>
                    </Popup>
                    </div>
                    </div>
                </div>
                <div style={{ display: "flex", height: "50vh" }}>
                    <div style={{ flex: ".27", backgroundColor: "#f2f2f2", boxShadow: '3px 3px #d9d9d9', borderTopLeftRadius: "45px" }} >
                        <div >
                            <h4 style={{ color:"royalblue" ,padding: "30px 10px 20px 15px" }}> Name: {currentUser} </h4>
                            <h4 style={{ color:"royalblue" ,padding: "0 10px 20px 15px" }}> Email: {this.state.email}</h4>
                            <h4 style={{ color:"royalblue" ,padding: "0 10px 20px 15px" }}> No of Favourits:  {this.state.result.length}</h4>
                            <h4 style={{ color:"royalblue" ,padding: "0 10px 20px 15px" }} > No of Reservations: {this.state.reservationsArray.length}</h4>
                            </div>
                    </div>
                    <div style={{ flex: '.73' }}>
                        <DisabledTabs admin={this.state.admin} master={this.state.master} handleFavPrevChange={this.handleFavPrevChange} compDidmount={this.componentDidMount} />
                        <div className="gallery">
                            {this.state.favPrev ?
                                <div>
                                    {
                                        this.state.result.length ?
                                            this.state.result.map((data, i) => {
                                                let ele = this.state.removeGetRes
                                                this.state.reservationsArray.forEach(element => {
                                                    if (element.id === data.id) {
                                                        ele = true
                                                    }
                                                })
                                                if (typeof data === "object" && data.name) {
                                                    return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmount={this.componentDidMount} favoriteNotEmp={this.state.favoriteNotEmp} hideRes={this.state.hideRes} currentUser={this.state.currentUser} />
                                                }
                                                else { return <div></div> }
                                            })
                                            :
                                            <h2 style={{ textAlign: "center" }}>
                                                there are no items
                                     </h2>
                                    }
                                </div>
                                : <div>
                                    {
                                        <div>

                                            {this.state.reservationsArray.length ?
                                                <div>

                                                    {this.state.reservationsArray.map((data, i) => {
                                                        if (data) {
                                                            return <CardComp key={i} data={data} adults={adults} dateDifferenceNumber={dateDifferenceNumber} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} hideFav={this.state.hideFav} currentUser={this.state.currentUser} />
                                                        }
                                                        else { return <div></div> }
                                                    })

                                                    }
                                                    <div className="center-me">
                                                        <div className='total'>TOTAL: ${this.state.price}</div>
                                                        <StripeCheckoutButton className="payment" price={this.handlePrice()} userid={this.state.userid} />
                                                    </div>
                                                </div>

                                                :
                                                <h2 style={{ textAlign: "center" }}>
                                                    there are no items
                                    </h2>}

                                        </div>

                                    }

                                </div>
                            }
                            {/* users list */}
                            { }


                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUser: (z) => { dispatch(setUser(z)) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody);
export default ProfileBody;


//<div className="profile" >
 //   <RightSide />
//</div> 