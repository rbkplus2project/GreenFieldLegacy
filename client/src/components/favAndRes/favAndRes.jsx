import React from "react"
import CardComp from "../cardComponents/card"
import StripeCheckoutButton from "../stripe/stripe"
class FavAndRes extends React.Component {
    constructor(props) {
        super(props)
        
    }

        render() {
        const { favPrev,reserveShow,hideFav,adults, dateDifferenceNumber,compDidmount,compDidmountF, currentUser,removeGetRes,compDidmountF,favoriteNotEmp,hideRes,reservationsArray,price,userid,result } = this.props

        return (
            <div>
                <div className="gallery">
                    {favPrev ?
                        <div>
                            {
                                result.length ?
                                    result.map((data, i) => {
                                        let ele = removeGetRes
                                        reservationsArray.forEach(element => {
                                            if (element.id === data.id) {
                                                ele = true
                                            }
                                        })
                                        if (typeof data === "object" && data.name)
                                            return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmountF={this.componentDidMount} favoriteNotEmp={favoriteNotEmp} hideRes={hideRes} currentUser={currentUser} />
                                    })
                                    :
                                    <h2>
                                        there are no items
                                     </h2>
                            }
                        </div>
                        : <div>
                            {/* component code for RESERVATIONS*/}
                            {
                                reservationsArray.length ?
                                    <div>

                                        {reservationsArray.map((data, i) => {
                                            if (data) {
                                                return <CardComp key={i} data={data} adults={adults} dateDifferenceNumber={dateDifferenceNumber} compDidmount={this.componentDidMount} reserveShow={reserveShow} hideFav={hideFav} currentUser={currentUser} />
                                            }
                                        })}
                                        <div className="center-me">
                                            <div className='total'>TOTAL: ${price}</div>
                                            <StripeCheckoutButton className="payment" price={this.handlePrice()} userid={userid} />
                                        </div>
                                    </div>
                                    :
                                    <h2>
                                        there are no items
                                    </h2>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default FavAndRes;
