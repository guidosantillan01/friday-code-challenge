import React, { Component } from 'react';

import VehiclesList from './VehiclesList';
import VehiclesSelector from './VehiclesSelector';

const GET_MAKES_API = 'http://localhost:8080/api/makes';
const GET_MODELS_API = 'http://localhost:8080/api/models';
const GET_VEHICLES_API = 'http://localhost:8080/api/vehicles';

export class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      makes: [],
      models: [],
      vehicles: [],
      userMake: undefined,
      userModel: undefined
    };

    this.selectVehicleMaker = this.selectVehicleMaker.bind(this);
    this.selectVehicleModel = this.selectVehicleModel.bind(this);
    this.fetchMakes = this.fetchMakes.bind(this);
    this.fetchModels = this.fetchModels.bind(this);
    this.fetchVehicles = this.fetchVehicles.bind(this);
  }

  componentDidMount() {
    this.fetchMakes();
  }

  fetchMakes() {
    fetch(GET_MAKES_API)
      .then(res => res.json())
      .then(result => {
        this.setState({ makes: result });
      });
  }

  fetchModels() {
    fetch(GET_MODELS_API + `?make=${this.state.userMake}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ models: result });
      });
  }

  fetchVehicles() {
    fetch(
      GET_VEHICLES_API +
        `?make=${this.state.userMake}&model=${this.state.userModel}`
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
            vehicles: [],
            error
          });
        }
      );
  }

  selectVehicleMaker(e) {
    const userMake = e.target.value;
    this.setState({ userMake }, () => {
      this.fetchModels();
    });
  }

  selectVehicleModel(e) {
    const userModel = e.target.value;
    this.setState({ userModel }, () => {
      this.fetchVehicles();
    });
  }

  render() {
    return (
      <div>
        <VehiclesSelector
          makes={this.state.makes}
          models={this.state.models}
          selectVehicleMaker={this.selectVehicleMaker}
          selectVehicleModel={this.selectVehicleModel}
        />
        <VehiclesList vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default Vehicles;
