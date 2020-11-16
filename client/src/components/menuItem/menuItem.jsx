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
        const { currentUser, searchValue } = this.props

        return (
            <div className={`${this.props.item.size} menu-item`} onClick={(e) => { e.preventDefault(); searchValue(this.props.item.city) }} >
                <Link to='/cardlist'>
                    <div className={`background-image ${this.props.item.city} `}>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MenuItem;