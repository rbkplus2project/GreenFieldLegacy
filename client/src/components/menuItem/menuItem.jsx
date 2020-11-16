import React from 'react';
import './menuItem.css'



class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resulsArray:[]
        }
    }
 

    render() {
        const { currentUser, searchValue} =this.props
      
        return (
            <div className={`${this.props.item.size} menu-item`} onClick={(e) => {e.preventDefault(); searchValue(this.props.item.city)}} >
                <div className={`background-image ${this.props.item.city} `}>
                </div>
            </div>
        )
    }
}

export default MenuItem;