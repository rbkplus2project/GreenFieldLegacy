import React from 'react';
import RecipeReviewCard from './read'
export default function CardComp({hideFav,hideRes,compDidmountF,compDidmount,reserveShow,favoriteNotEmp,adults,dateDifferenceNumber, reservationArray,favoritesArray,data,currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick }) {
    return (<div>
        {/* <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/> */}
        <RecipeReviewCard hideRes={hideRes} hideFav={hideFav} compDidmountF={compDidmountF} compDidmount={compDidmount} adults={adults} reserveShow={reserveShow} favoriteNotEmp={favoriteNotEmp} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser} data={data} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
       

    </div>)
}