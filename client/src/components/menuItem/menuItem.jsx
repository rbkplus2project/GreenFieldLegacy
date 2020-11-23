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
        const { handleSeachButtonClick, searchValue } = this.props

        return (
            <div onClick={async(e) => {  await searchValue(this.props.item.city); handleSeachButtonClick() }} >
                <Link to='/cardlist'>
                    <div className="card 1">
                        <div className="card_image"> <img src={this.props.item.link} alt=""/> </div>
                        <div className="card_title title-white">
                            <div>{this.props.item.city.toUpperCase()}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MenuItem;