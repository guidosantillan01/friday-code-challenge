import React, { Component } from 'react';

import VehiclesList from './VehiclesList';
import VehiclesSelector from './VehiclesSelector';
import Message from './Message';

const GET_MAKES_API = 'http://localhost:8080/api/makes';
const GET_MODELS_API = 'http://localhost:8080/api/models';
const GET_VEHICLES_API = 'http://localhost:8080/api/vehicles';
const API_CALL_TRIES = 5;

export class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiError: false,
      isLoading: true,
      showMessage: true,
      makes: ['-'],
      models: ['-'],
      vehicles: [],
      userMake: undefined,
      userModel: undefined
    };
  }

  componentDidMount() {
    this.tryToFetchMakes(API_CALL_TRIES);
  }

  handleAPIConnectionError = err => {
    this.setState({
      apiError: true
    });
    throw err;
  };

  tryToFetchMakes = async numberOfTries => {
    try {
      return await fetch(GET_MAKES_API)
        .then(res => res.json())
        .then(result => {
          this.setState({
            makes: ['-', ...result],
            apiError: false,
            isLoading: false
          });
        });
    } catch (err) {
      console.log(numberOfTries);
      if (numberOfTries === 1) {
        this.handleAPIConnectionError(err);
      }
      return await this.tryToFetchMakes(numberOfTries - 1);
    }
  };

  tryToFetchModels = async numberOfTries => {
    try {
      return await fetch(GET_MODELS_API + `?make=${this.state.userMake}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            models: ['-', ...result],
            apiError: false,
            isLoading: false
          });
        });
    } catch (err) {
      console.log(numberOfTries);
      if (numberOfTries === 1) {
        this.handleAPIConnectionError(err);
      }
      return await this.tryToFetchModels(numberOfTries - 1);
    }
  };

  tryToFetchVehicles = async numberOfTries => {
    try {
      return await fetch(
        GET_VEHICLES_API +
          `?make=${this.state.userMake}&model=${this.state.userModel}`
      )
        .then(res => res.json())
        .then(result => {
          this.setState({
            vehicles: result,
            apiError: false,
            isLoading: false,
            showMessage: false
          });
        });
    } catch (err) {
      console.log(numberOfTries);
      if (numberOfTries === 1) {
        this.handleAPIConnectionError(err);
      }
      return await this.tryToFetchVehicles(numberOfTries - 1);
    }
  };

  selectVehicleMake = e => {
    const userMake = e.target.value;
    this.setState(
      {
        userMake,
        userModel: undefined,
        vehicles: [],
        isLoading: true
      },
      () => {
        this.tryToFetchModels(API_CALL_TRIES);
      }
    );
  };

  selectVehicleModel = e => {
    const userModel = e.target.value;
    this.setState(
      {
        userModel,
        apiError: false,
        isLoading: true
      },
      () => {
        this.tryToFetchVehicles(API_CALL_TRIES);
      }
    );
  };

  render() {
    return (
      <div>
        <VehiclesSelector
          makes={this.state.makes}
          models={this.state.models}
          selectVehicleMake={this.selectVehicleMake}
          selectVehicleModel={this.selectVehicleModel}
        />
        <Message
          apiError={this.state.apiError}
          isLoading={this.state.isLoading}
          showMessage={this.state.showMessage}
        />
        <VehiclesList
          vehicles={this.state.vehicles}
          message={this.state.showMessage}
        />
      </div>
    );
  }
}

export default Vehicles;
