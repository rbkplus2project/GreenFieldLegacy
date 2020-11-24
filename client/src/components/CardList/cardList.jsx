import CardComp from "../cardComponents/card";
import NavAndSearch from "../navBar/navBar";
import Map from "../../components/Map/Map";
import { Button } from '@material-ui/core';
import React from 'react';

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
                    throw new Error('You are not signed in')
                }
            })
            .then(data => {if(data){this.setState({ reservationsArray: data.reservations })}})
            .catch(err => console.log(err))
    }
    render() {
        const { handleAdultsChange, adults, dateDifferenceNumber, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick, currentUser, resulsArray } = this.props
        return (
            <div >
                <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                <Button variant="outlined" size="medium" color="primary" style={{ height: 30, float:"right", marginRight: "1vw", marginTop: "-30px" }} onClick={(e) => { e.preventDefault(); handleSeachButtonClick() }}>
                <p style={{ color:"navy" }} onClick={() => { this.setState({ map: 'show' }); this.props.refresh()}}>Show map</p>
                </Button>
                <br/>
                {this.state.map === 'show' ? <Map hotels={this.props.resulsArray} location={this.props.cityCenter()} google={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}></Map> : <div></div> }
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
                            ..... Loading Results .....
                        </h2>
                }
            </div>
        )
    }
}

export default CardList;
