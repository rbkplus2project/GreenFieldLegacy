import './reservations.css';
import React from "react"

import AppBarr from "../../components/AppBar/AppBar"
import CardComp from "../../components/cardComponents/card"
import StripeCheckoutButton from "../../components/stripe/stripe"
class Reservations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reserveShow: true,
            hideFav: true,
            reservationsArray: [],
            currentUser: "",
            userid: "",
            price: 0
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
            .then(data => { console.log(data); this.setState({ reservationsArray: data.reservations, currentUser: data.displayName, userid: data._id }) })
            .then(() => this.setState({price:this.handlePrice()}))
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
        const { adults, dateDifferenceNumber } = this.props
        return (
            <div>
                <AppBarr currentUser={this.state.currentUser} />
                {
                    this.state.reservationsArray.length ?
                        this.state.reservationsArray.map((data, i) => {
                            if (data) {
                                return <CardComp key={i} data={data} adults={adults} dateDifferenceNumber={dateDifferenceNumber} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} hideFav={this.state.hideFav} currentUser={this.state.currentUser} />

                            }

                        })
                        :
                        <h2>
                            there are no items
                    </h2>
                }
                <div className="center-me">
                    <div className='total'>TOTAL: ${this.state.price}</div>
                    <StripeCheckoutButton className="payment" price={this.handlePrice()} userid={this.state.userid} />
                </div>

            </div>
        );
    }
}
export default Reservations;
