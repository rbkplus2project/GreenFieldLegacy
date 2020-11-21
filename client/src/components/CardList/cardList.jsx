import React from 'react';
import NavAndSearch from "../navBar/navBar"
import CardComp from "../cardComponents/card"
class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            removeGetRes:false,
            reservationsArray:[]
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
            .then(data => this.setState({  reservationsArray: data.reservations }))
    }
    
    render() {
        const { handleAdultsChange,adults,dateDifferenceNumber, checkIn, checkOut, reservationArray,favoritesArray, searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
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