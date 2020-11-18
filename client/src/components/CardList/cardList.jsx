import React from 'react';
import './cardList.css'
import NavAndSearch from "../navBar/navBar"
import CardComp from "../cardComponents/card"
import StripeCheckoutButton from "../stripe/stripe"
class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {adults,dateDifferenceNumber, checkIn, checkOut, reservationArray,favoritesArray, searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                {
                    resulsArray.length?  
                    resulsArray.map((data,i)=>{
                        return <CardComp data={data} key={i} adults={adults} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
                    })
                    :
                    <h2>
                        please search frist
                    </h2>
                }
                {/* <CardComp adults={adults} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser}  reservationArray={reservationArray} favoritesArray={favoritesArray}/> */}
                <StripeCheckoutButton price={100}/>
            </div>
        )
    }
}

export default CardList;