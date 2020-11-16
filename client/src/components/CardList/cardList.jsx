import React from 'react';
import './cardList.css'
import NavAndSearch from "../navBar/navBar"
import CardComp from "../cardComponents/card"

class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick, currentUser,resulsArray } = this.props

        return (
            <div >
                <NavAndSearch handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry} />
                {
                    resulsArray.length?
                    resulsArray.map((element,i)=>{
                        return <CardComp element={element} key={i} />
                    })
                    :
                    <h2>
                        please search frist
                    </h2>
                }
                
            </div>
        )
    }
}

export default CardList;