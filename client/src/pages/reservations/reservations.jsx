import './reservations.css';
import React from "react" 

import AppBarr from "../../components/AppBar/AppBar"
import CardComp from "../../components/cardComponents/card"
class Reservations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reserveShow: true,
            hideFav:true,
            result:[],
            currentUser:""
        }
    }
    componentDidMount= ()=> {
       
            fetch("http://127.0.0.1:5000/user/getuser", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "displayName": this.props.currentUser }),
            })
                .then(data => data.json())
                .then(data => this.setState({result: data.reservations,currentUser:data.displayName}))
                .then(()=>console.log(this.state))
        }
    
    render() {
        const {  adults } = this.props
        return (
            <div>
                <AppBarr currentUser={this.state.currentUser} />
                {
                    this.state.result.length ?
                    this.state.result.map((data, i) => {
                            {/* console.log(data) */}
                            if(data)
                                return <CardComp key={i} data={data} adults={adults} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} hideFav={this.state.hideFav}   currentUser={this.state.currentUser}  />
                        })
                        :
                        <h2>
                           there are no items
                    </h2>
                }

            </div>
        );
    }
}
export default Reservations;
