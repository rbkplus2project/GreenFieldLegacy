import React from 'react';
import NavAndSearch from "../navBar/navBar";
import CardComp from "../cardComponents/card";
import Map from "../../components/Map/Map";

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            removeGetRes:false,
            reservationsArray: [],
            map: false
        }
    }


    componentDidMount = () => {
        fetch("http://localhost:5000/user/getuser", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "displayName": this.props.currentUser }),
        })
            .then(data => {
                if (data.status === 200) {
                    data.json()
                } else {
                    throw new Error('user not found')
                }
            })
            .then(data => this.setState({ reservationsArray: data.reservations }))
            .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.props)
        const { handleAdultsChange,adults,dateDifferenceNumber, checkIn, checkOut,  
            // reservationArray,
            // favoritesArray, 
            searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                <button onClick={() => { this.setState({ map: !this.state.map }); this.props.refresh()}}>use map</button>
                {this.state.map ? <Map hotels={this.props.resulsArray} location={this.props.cityCenter()} google={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}></Map> : <div></div> }
                {
                    resulsArray.length ?
                        resulsArray.map((data, i) => {
                            let ele = this.state.removeGetRes
                            this.state.reservationsArray.forEach(element => {
                                if (element.id === data.id) {
                                    ele = true
                                }
                            })
                                return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmount={this.componentDidMount}  currentUser={currentUser} />
                        })
                        :
                        <h2 style={{textAlign:"center"}}>
                            there are no items
                    </h2>
                }
                {/* <CardComp adults={adults} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser}  reservationArray={reservationArray} favoritesArray={favoritesArray}/> */}
               
            </div>
        )
    }
}

export default CardList;