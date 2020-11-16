import React from 'react';
import RecipeReviewCard from './read'
import NavAndSearch from "../navBar/navBar"
const rate = 7.7; // here the rating
export default function CardComp({ currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick}) {
    return (<div>
        <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/>
        <RecipeReviewCard />
    </div>)
}