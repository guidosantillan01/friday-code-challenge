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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehicleItem vehicle={vehicle} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
