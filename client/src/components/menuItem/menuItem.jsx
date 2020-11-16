import React from 'react';
import './menuItem.css'



class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resulsArray:[]
        }
    }
    // onPicClick = (city) => {
    //     fetch(`https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${city}`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "19fe5ca383msh9591c981cf8ec3ap1768e4jsn0d1c67890d8e",
    //             "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //         }
    //     })
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then((data) => {
    //             fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${data.suggestions[0].entities[0].destinationId}&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE`, {
    //                 "method": "GET",
    //                 "headers": {
    //                     "x-rapidapi-key": "19fe5ca383msh9591c981cf8ec3ap1768e4jsn0d1c67890d8e",
    //                     "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //                 }
    //             })
    //                 .then(response => {
    //                     return response.json()
    //                 })
    //                 .then(data => {
    //                     this.setState({ resulsArray: data.data.body.searchResults.results })
    //                 })
    //                 .then(data => console.log(this.state))
    //                 .catch(err => {
    //                     console.error(err);
    //                 });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }


    render() {

        return (
            <div className={`${this.props.item.size} menu-item`} onClick={() => this.onPicClick(this.props.item.city)} >
                <div className={`background-image ${this.props.item.city} `}>
                </div>
            </div>
        )
    }
}

export default MenuItem;