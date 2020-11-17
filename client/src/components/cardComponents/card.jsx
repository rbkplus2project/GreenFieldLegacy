import React from 'react';
import RecipeReviewCard from './read'
export default function CardComp({ data,currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick }) {
    return (<div>
        {/* <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/> */}
        <RecipeReviewCard cityAndCountry={cityAndCountry} data={data}/>
       

    </div>)
}