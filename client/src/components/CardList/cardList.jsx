import React from 'react';
import NavAndSearch from "../navBar/navBar"
import CardComp from "../cardComponents/card"
class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { handleAdultsChange,adults,dateDifferenceNumber, checkIn, checkOut, reservationArray,favoritesArray, searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
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
               
            </div>
        )
    }
}

export default CardList;