import './profileBody.css';
import React from "react"
import DisabledTabs from './tab';
import CardComp from "../cardComponents/card"
import StripeCheckoutButton from "../stripe/stripe"
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
        console.log(res)
        return res * this.props.adults * this.props.dateDifferenceNumber()
    }
    render() {
        const { adults, dateDifferenceNumber, currentUser } = this.props

        return (

            <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
                <div style={{
                }}>
                    <div className="background_img">
                        <img style={{ width: "160px", marginTop: '30px', marginLeft: '30px', height: "160px", borderRadius: "80px " }}
                            src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-c9c19858d7dc-512" />
                        <div style={{ marginLeft: "55px", display: "flex", justifyContent: "space-around", width: "15%" }}>
                            <h2 style={{ margin: "0px", color: "white" }}>{currentUser}</h2>
                            <div style={{ paddingLeft: "5px", margin: "0px", marginTop: '5px' }} className="active"></div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", height: "50vh" }}>
                    <div style={{ flex: ".27", backgroundColor: "#f2f2f2", boxShadow: '3px 3px #d9d9d9', borderTopLeftRadius: "45px" }} >
                        <div >
                            <h3 style={{ padding: "30px 10px 20px 15px" }}> username: {currentUser}</h3>
                            <h4 style={{ padding: "0 10px 20px 15px" }}>email:{this.state.email}</h4>
                            <h4 style={{ padding: "0 10px 20px 15px" }}> number of favourits :  {this.state.result.length}</h4>
                            <h4 style={{ padding: "0 10px 20px 15px" }} > number of reservations : {this.state.reservationsArray.length}</h4>
                        </div>
                    </div>
                    <div style={{ flex: '.73' }}>
                        <DisabledTabs admin={this.state.admin} master={this.state.master} handleFavPrevChange={this.handleFavPrevChange} compDidmount={this.componentDidMount} />
                        {/* component code for FAVORITES*/}
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
                                                if (typeof data === "object" && data.name)
                                                    return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmount={this.componentDidMount} favoriteNotEmp={this.state.favoriteNotEmp} hideRes={this.state.hideRes} currentUser={this.state.currentUser} />
                                            })
                                            :
                                            <h2 style={{textAlign:"center"}}>
                                                there are no items
                                     </h2>
                                    }
                                </div>
                                : <div>
                                    {/* component code for RESERVATIONS*/}
                                    {
                                        <div>

                                            {this.state.reservationsArray.length ?
                                                <div>

                                                    {this.state.reservationsArray.map((data, i) => {
                                                        if (data) {
                                                            return <CardComp key={i} data={data} adults={adults} dateDifferenceNumber={dateDifferenceNumber} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} hideFav={this.state.hideFav} currentUser={this.state.currentUser} />
                                                        }

                                                    })

                                                    }
                                                    <div className="center-me">
                                                        <div className='total'>TOTAL: ${this.state.price}</div>
                                                        <StripeCheckoutButton className="payment" price={this.handlePrice()} userid={this.state.userid} />
                                                    </div>
                                                </div>

                                                :
                                                <h2 style={{textAlign:"center"}}>
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
export default ProfileBody;
{/* <div className="profile" >
  
    <RightSide />
  
</div> */}