import React, { Component } from 'react';

import VehiclesList from './VehiclesList';

const GET_MAKER_API = 'http://localhost:8080/api/makes';
const GET_MODEL_API = 'http://localhost:8080/api/model';
const GET_VEHICLE_API = 'http://localhost:8080/api/vehicles';

export class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      vehicles: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/vehicles?make=BMW&model=3er')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            vehicles: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <VehiclesList vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default Vehicles;
