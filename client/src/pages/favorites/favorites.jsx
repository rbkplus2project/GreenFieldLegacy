import React from "react"

import AppBarr from "../../components/AppBar/AppBar"
import CardComp from "../../components/cardComponents/card"
class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteNotEmp: true,
      removeGetRes: false,
      result: [],
      currentUser: '',
      reservationsArray: []

    }
  }
  componentDidMount = () => {

    fetch("http://127.0.0.1:5000/user/getuser", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "displayName": this.props.currentUser }),
    })
      .then(data => data.json())
      .then(data => this.setState({ result: data.favorites, currentUser: data.displayName, reservationsArray: data.reservations }))
      .then(() => console.log(this.state))
  }

  render() {
    const { adults,dateDifferenceNumber } = this.props
    return (
      <div>
        <AppBarr currentUser={this.state.currentUser} />
        {
          this.state.result.length ?
            this.state.result.map((data, i) => {
              let ele = this.state.removeGetRes
              this.state.reservationsArray.forEach(element => {
                if (element.id === data.id) {
                  ele = true
                }
              })
              if (typeof data === "object" && data.name)
                return <CardComp dateDifferenceNumber={dateDifferenceNumber} removeGetRes={ele} key={i} data={data} adults={adults} compDidmountF={this.componentDidMount} favoriteNotEmp={this.state.favoriteNotEmp} hideRes={this.state.hideRes} currentUser={this.state.currentUser} />
            })
            :
            <h2>
              there are no items
            </h2>
        }

      </div>
    );
  }
}
export default Favorites;
