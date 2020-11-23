import './homePage.css';
import React from "react"
import MenuItems from "../../components/menuItem/menuItem"
import NavAndSearch from "../../components/navBar/navBar"

class HomePage extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      initailItems: [ { city: "rome",link:"https://cdn.citywonders.com/media/17764/rome-city.jpg?anchor=center&mode=crop&width=1200&height=600" }, { city: "Barcelona",link:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/Zrlvh0hw-1380x690.jpeg" },{ city: "losAngeles",link:"https://i.ytimg.com/vi/tvDH4JM_gME/maxresdefault.jpg" },{ city: 'paris',link:"https://cdn.hipwallpaper.com/i/82/73/QoZlmC.jpg" },{ city: "Dubai", link: 'https://images.hdqwalls.com/download/dubai-burj-khalifa-minimalist-d0-1280x1024.jpg' }, { city: "kualalumpur", link: 'https://wallpapercave.com/wp/wp2378918.jpg' }],
    }
  }
  render() {
   const {handleAdultsChange, currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
    return (
      <div>
        <NavAndSearch handleAdultsChange={handleAdultsChange} handleSeachButtonClick={handleSeachButtonClick} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/>
          <div className="cards-list"> 
          { 
            this.state.initailItems.map((item, id) => (
              
              <MenuItems item={item} key={id} handleSeachButtonClick={handleSeachButtonClick} searchValue={searchValue} />
             
              
            ))
          }
            </div>
      </div>
    );
  }
}
export default HomePage;
