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
                        <p>HotelCom is a Hotel reservation website which allow you to book your ticket with best price</p>
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
                            <li>Aya</li>
                            <li>Hamdallah</li>
                            <li>Rami</li>
                            <li>Rasha</li>
                            <li>Yasir</li>
                        </ul>
                    </div>
                    
                </div>
            

                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Hotelcom|All right reserved by <a href="/"> Hotelcom.</a>|<a href="/"> Terms Of Service</a>|<a href="/"> Privacy</a>
                    </p>
                </div>
                
            </div>
        </div>
    )
}
export default Footer;