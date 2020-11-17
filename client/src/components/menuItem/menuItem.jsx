import React from 'react';
import './menuItem.css'
import {Link } from 'react-router-dom';


class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resulsArray: []
        }
    }


    render() {
        const { currentUser,handleSeachButtonClick, searchValue } = this.props

        return (
            <div onClick={async(e) => {  await searchValue(this.props.item.city); handleSeachButtonClick() }} >
                <Link to='/cardlist'>
                    <div class="card 1">
                        <div class="card_image"> <img src={this.props.item.link} /> </div>
                        <div class="card_title title-white">
                            <p>{this.props.item.city.toUpperCase()}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MenuItem;