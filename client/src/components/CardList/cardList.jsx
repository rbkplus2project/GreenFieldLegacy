import CardComp from "../cardComponents/card";
import NavAndSearch from "../navBar/navBar";
import Map from "../../components/Map/Map";
import { Button } from '@material-ui/core';
import React from 'react';
const $ = require('jquery');

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
        if ($('#sort').val() === 'Price') {
            console.log($('#sort').val())
            if (this.state.sortOrder === "descending") {
                this.props.resulsArray.sort((a, b) => {
                    if (a.ratePlan.price.current > b.ratePlan.price.current) {
                        return -1
                    }
                    return a.ratePlan.price.current > b.ratePlan.price.current ? 1 : 0
                },
                    this.setState({ sortOrder: "ascending" }))
            } else if (this.state.sortOrder === "ascending") {
                this.props.resulsArray.sort((a, b) => {
                    if (a.ratePlan.price.current < b.ratePlan.price.current) {
                        return -1
                    }
                    return a.ratePlan.price.current > b.ratePlan.price.current ? 1 : 0
                },
                    this.setState({ sortOrder: "descending" }))
            }
            this.setState({
                sortedResults: this.props.resulsArray,
                isSorted: true
            })
        }
    if ($('#sort').val() === 'Rate') {
        console.log($('#sort').val())
        if (this.state.sortOrder === "descending") {
            this.props.resulsArray.sort((a, b) => {
                if (a.starRating> b.starRating) {
                    return -1
                }
                return a.starRating > b.starRating ? 1 : 0
            },
                this.setState({ sortOrder: "ascending" }))
        } else if (this.state.sortOrder === "ascending") {
            this.props.resulsArray.sort((a, b) => {
                if (a.starRating < b.starRating) {
                    return -1
                }
                return a.starRating > b.starRating ? 1 : 0
            },
                this.setState({ sortOrder: "descending" }))
        }
        this.setState({
            sortedResults: this.props.resulsArray,
            isSorted: true
        })
    }
if ($('#sort').val() === 'Reviews') {
    console.log($('#sort').val())
    if (this.state.sortOrder === "descending") {
        this.props.resulsArray.sort((a, b) => {
            if (a.guestReviews.total > b.guestReviews.total) {
                return -1
            }
            return a.guestReviews.total > b.guestReviews.total ? 1 : 0
        },
            this.setState({ sortOrder: "ascending" }))
    } else if (this.state.sortOrder === "ascending") {
        this.props.resulsArray.sort((a, b) => {
            if (a.guestReviews.total < b.guestReviews.total) {
                return -1
            }
            return a.guestReviews.total > b.guestReviews.total ? 1 : 0
        },
            this.setState({ sortOrder: "descending" }))
    }
    this.setState({
        sortedResults: this.props.resulsArray,
        isSorted: true
    })
}
if ($('#sort').val() === 'Rate2') {
    console.log($('#sort').val())
    if (this.state.sortOrder === "descending") {
        this.props.resulsArray.sort((a, b) => {
            if (a.guestReviews.unformattedRating > b.guestReviews.unformattedRating) {
                return -1
            }
            return a.guestReviews.unformattedRating > b.guestReviews.unformattedRating ? 1 : 0
        },
            this.setState({ sortOrder: "ascending" }))
    } else if (this.state.sortOrder === "ascending") {
        this.props.resulsArray.sort((a, b) => {
            if (a.guestReviews.unformattedRating < b.guestReviews.unformattedRating) {
                return -1
            }
            return a.guestReviews.unformattedRating > b.guestReviews.unformattedRating ? 1 : 0
        },
            this.setState({ sortOrder: "descending" }))
    }
    this.setState({
        sortedResults: this.props.resulsArray,
        isSorted: true
    })
}
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
                <br />
                {this.state.map ? <Map hotels={this.props.resulsArray} location={this.props.cityCenter()} google={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}></Map> : <div></div>}
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
