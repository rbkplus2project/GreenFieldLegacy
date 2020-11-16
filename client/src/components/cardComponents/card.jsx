import React from 'react';
import RecipeReviewCard from './read'
const rate = 7.7; // here the rating
export default function CardComp({ currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick }) {
    return (<div>
        {/* <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/> */}
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />

    </div>)
}