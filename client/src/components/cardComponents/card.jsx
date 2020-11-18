import React from 'react';
import RecipeReviewCard from './read'
export default function CardComp({compDidmountF,compDidmount,reserveShow,favoriteEmp,adults,dateDifferenceNumber, reservationArray,favoritesArray,data,currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick }) {
    return (<div>
        {/* <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/> */}
        <RecipeReviewCard compDidmountF={compDidmountF} compDidmount={compDidmount} adults={adults} reserveShow={reserveShow} favoriteEmp={favoriteEmp} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser} data={data} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
       

    </div>)
}