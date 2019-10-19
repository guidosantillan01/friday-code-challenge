import React, { Component } from 'react';

import VehiclesList from './VehiclesList';
import VehiclesSelector from './VehiclesSelector';

const GET_MAKER_API = 'http://localhost:8080/api/makes';
const GET_MODEL_API = 'http://localhost:8080/api/model';
const GET_VEHICLE_API = 'http://localhost:8080/api/vehicles';

export class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      vehicles: [],
      make: 'Ford',
      model: 'Fiesta'
    };
  }

  componentDidMount() {
    fetch(
      GET_VEHICLE_API + `?make=${this.state.make}&model=${this.state.model}`
    )
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
        <VehiclesSelector />
        <VehiclesList vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default Vehicles;
