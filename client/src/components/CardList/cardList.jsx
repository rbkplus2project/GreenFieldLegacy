import React from 'react';
import './cardList.css'
import NavAndSearch from "../navBar/navBar"


class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
    const { checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick,currentUser} =this.props

        return (
            <div >
        <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/>
               hellllllllllllllo
            </div>
        )
    }
}

export default CardList;