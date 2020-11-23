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
            map: 'none'
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
            .then(data => {
                console.log(data)
                data.json()
            })
            .then(data => {
                console.log(data)
                if (data) {
                    this.setState({ reservationsArray: data.reservations })
                }
            })
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
                <button onClick={() => { this.setState({ map: 'block' }); this.props.refresh()}}>use map</button>
                {this.state.map === 'block' ? <Map hotels={this.props.resulsArray} location={this.props.cityCenter()} google={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}></Map> : <div></div> }
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