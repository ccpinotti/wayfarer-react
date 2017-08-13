import React, { Component } from "react";
import CityList from "./CityList";
import CityStuff from "./CityStuff";
import CityModel from "./models/City";

class CityBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    CityModel.all().then( (res) => {
      this.setState({
        cities: res.cities
      })
    })

  }
  render() {
    return (
      <div>
        <div className='row'>
          <CityStuff />
          <CityList
            cities={this.state.cities}
             />
        </div>
      </div>
    );
  }
}

export default CityBox;
