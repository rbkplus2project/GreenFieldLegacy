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
            result: [],
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
            .then(data => { console.log(data); this.setState({ result: data.reservations, currentUser: data.displayName, userid: data._id }) })
        // .then(() => console.log(this.state))
    }

    handlePrice = (price) => {
        let res = price.split("$")
        let x = Number(res[1])
        x+=this.state.price
        this.setState({ price: x })
    }
    render() {
        const { adults } = this.props
        return (
            <div>
                <AppBarr currentUser={this.state.currentUser} />
                {
                    this.state.result.length ?
                        this.state.result.map((data, i) => {
                            {/* console.log(data) */ }
                            if (data){
                                this.handlePrice()
                                return <CardComp key={i} data={data} adults={adults} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} hideFav={this.state.hideFav} currentUser={this.state.currentUser} />

                            }
                                
                        })
                        :
                        <h2>
                            there are no items
                    </h2>
                }
                <div className='total'>TOTAL: ${this.state.price}</div>
                <StripeCheckoutButton price={this.state.price} userid={this.state.userid} />
            </div>
        );
    }
}
export default Reservations;
