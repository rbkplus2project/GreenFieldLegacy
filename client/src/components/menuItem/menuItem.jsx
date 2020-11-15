import React from 'react';
import './menuItem.css'


const MenuItem = ({item}) => {
    return(
        <div className={`${item.size} menu-item`} >
            <div className = {`background-image ${item.city}`}>
            </div>
        </div>
    )
}

export default MenuItem;