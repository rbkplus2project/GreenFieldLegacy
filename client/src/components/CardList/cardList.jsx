import CardComp from "../cardComponents/card";
import NavAndSearch from "../navBar/navBar";
import Map from "../../components/Map/Map";
import { Button } from '@material-ui/core';
import React from 'react';
import $ from 'jquery';

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            removeGetRes: false,
            reservationsArray: [],
            map: false,
            sortOrder: "descending"
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
            .then(data => { if (data) { this.setState({ reservationsArray: data.reservations }) } })
            .catch(err => console.log(err))
    }
    Sorting = () => {
    if ($('#sort').val() === 'PriceD') {
        this.props.resulsArray.sort((a, b) => a.ratePlan.price.current > b.ratePlan.price.current ? -1 : 0
        ,this.setState({}))}
    if ($('#sort').val() === 'PriceA') {
        this.props.resulsArray.sort((a, b) => a.ratePlan.price.current < b.ratePlan.price.current ? -1 : 0
        ,this.setState({}))}

        if ($('#sort').val() === 'RateD') {
            this.props.resulsArray.sort((a, b) => a.starRating > b.starRating ? -1 : 0
            ,this.setState({}))}
        if ($('#sort').val() === 'RateA') {
            this.props.resulsArray.sort((a, b) => a.starRating < b.starRating ? -1 : 0
            ,this.setState({}))}

            if ($('#sort').val() === 'Rate2D') {
                this.props.resulsArray.sort((a, b) => a.guestReviews.unformattedRating > b.guestReviews.unformattedRating ? -1 : 0
                ,this.setState({}))}
            if ($('#sort').val() === 'Rate2A') {
                this.props.resulsArray.sort((a, b) => a.guestReviews.unformattedRating < b.guestReviews.unformattedRating ? -1 : 0
                ,this.setState({}))}

                if ($('#sort').val() === 'ReviewsD') {
                    this.props.resulsArray.sort((a, b) => a.guestReviews.total > b.guestReviews.total ? -1 : 0
                    ,this.setState({}))}
                if ($('#sort').val() === 'ReviewsA') {
                    this.props.resulsArray.sort((a, b) => a.guestReviews.total < b.guestReviews.total ? -1 : 0
                    ,this.setState({}))}
    }

    render() {
        const { handleAdultsChange, adults, dateDifferenceNumber, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick, currentUser, resulsArray } = this.props
        return (
            <div >
                <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                <div className="Sort">
                    Sort
                    <select id="sort" onChange={this.Sorting.bind(this)}>
                        <option value="Price">Price</option>
                        <option value="Rate" >Rate</option>
                        <option value="Rate2" >Rate2</option>
                        <option value="Reviews" >Reviews</option>
                    </select>
                </div>
                <Button variant="outlined" size="medium" color="primary" style={{ height: 30, float: "right", marginRight: "1vw", marginTop: "-30px" }} onClick={(e) => { e.preventDefault(); handleSeachButtonClick() }}>
                    <p style={{ color: "navy" }} onClick={() => { this.setState({ map: !this.state.map }); this.props.refresh() }}>Show map</p>
                </Button>
                <div className="select" style={{width:'200px'}}>
                    <select id="sort" onChange={this.Sorting.bind(this)}>
                        <option value="PriceA">Price A</option>
                        <option value="PriceD">Price D</option>
                        <option value="RateA" >International A</option>
                        <option value="RateD" >International D</option>
                        <option value="Rate2A" >People Rating A</option>
                        <option value="Rate2D" >People Rating D</option>
                        <option value="ReviewsA" >Reviews A</option>
                        <option value="ReviewsD" >Reviews D</option>
                    </select>
                </div>
                <br/>
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
                            return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmount={this.componentDidMount} currentUser={currentUser} />
                        })
                        :
                        <h2 style={{ textAlign: "center" }}>
                            ..... Loading Results .....
                        </h2>
                }
            </div>
        )
    }
}

export default CardList;
