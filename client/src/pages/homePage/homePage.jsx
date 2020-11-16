import './homePage.css';
import React from "react"
import { Link } from 'react-router-dom';
import MenuItems from "../../components/menuItem/menuItem"
import NavAndSearch from "../../components/navBar/navBar"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initailItems: [{ city: "singapore", size: 'large' },{ city: "losAngeles" }, { city: "kualalumpur", size: 'large' },  { city: "rome" }, { city: 'paris' }, { city: "Barcelona" }],
    }
  }
  render() {
   const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
    return (
      <div>
        <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/>
        <div className='directory-menu' >
          {
            this.state.initailItems.map((item, id) => (
              <MenuItems item={item} key={id} currentUser={currentUser}  searchValue={searchValue} />
            ))
          }
        </div>
      </div>
    );
  }
}
export default HomePage;
