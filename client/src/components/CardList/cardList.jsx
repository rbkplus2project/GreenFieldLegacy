import React from 'react';
import './cardList.css'
import NavAndSearch from "../navBar/navBar"
import CardComp from "../cardComponents/card"

class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { checkIn, checkOut, reservationArray,favoritesArray, searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                {/* {
                    resulsArray.length? 
                    resulsArray.map((data,i)=>{
                        return <CardComp data={data} key={i} currentUser={currentUser} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
                    })
                    :
                    <h2>
                        please search frist
                    </h2>
                } */}
                <CardComp currentUser={currentUser} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
                
            </div>
        )
    }
}

export default CardList;