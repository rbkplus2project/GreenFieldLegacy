import React from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* col1 */}
                    <div className="col">
                        <h4>About</h4>
                        <span>HotelCom is a Hotel reservation website</span> 
                        <span> which allow you to book your ticket with best price</span>
                    </div>
                    {/* col2 */}
                    <div className="col">
                        <h4>Contact Us </h4>
                        <ul className="list-unstyled"></ul>
                        <li>321-654-8977</li>
                        <li>Palestine</li>
                        <li>123 street South</li>
                    </div>
                    
                    {/* col3 */}
                    <div className="col">
                        <h4>Developers</h4>
                        <ul className="list-unstyled">
                            <li>Aya Abu Yossif</li>
                            <li>Hamdallah Fatayer</li>
                            <li>Rami Okkeh</li>
                            <li>Rasha Alamleh</li>
                            <li>Yasir Tbaileh</li>
                        </ul>
                    </div>
                    
                </div>
            

                <hr />
                <div>
                    <span className="col">
                        &copy;{new Date().getFullYear()} HotelCom | All right reserved by <span style={{color:'blue',cursor:"pointer"}} href="/"> HotelCom. </span>|<span style={{color:'blue',cursor:"pointer"}} href="/"> Terms Of Service </span>|<span style={{color:'blue',cursor:"pointer"}} href="/"> Privacy </span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}
export default Footer;