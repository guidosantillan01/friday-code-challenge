import React from 'react';
import ReactDOM from 'react-dom';

import VehicleItem from '../VehicleItem';

const vehicle = {
  make: 'Tesla',
  model: 'Model S',
  enginePowerPS: '184',
  enginePowerKW: '135',
  fuelType: 'Electric',
  bodyType: 'Sedan',
  engineCapacity: '3000'
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<VehicleItem vehicle={vehicle} />, container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {});
