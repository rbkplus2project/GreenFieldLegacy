import React from "react"
import 'date-fns';
import { Typography } from '@material-ui/core';
import "./greeting.css"
class Greeting extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div position="static" className="greeting" >
                    <Typography variant="h3" className="text" >
                        Where to next, .......
                                 </Typography>
                </div>
            </div>
        )
    }
}

export default Greeting

