import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import VehiclesList from '../VehiclesList';

const vehicles = [
  {
    make: 'Tesla',
    model: 'Model S',
    enginePowerPS: '184',
    enginePowerKW: '135',
    fuelType: 'Electric',
    bodyType: 'Sedan',
    engineCapacity: '---'
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    enginePowerPS: '174',
    enginePowerKW: '120',
    fuelType: 'Electric',
    bodyType: 'Sedan',
    engineCapacity: '---'
  },
  {
    make: 'Tesla',
    model: 'Model X',
    enginePowerPS: '200',
    enginePowerKW: '195',
    fuelType: 'Electric',
    bodyType: 'SUV',
    engineCapacity: '---'
  }
];

describe('Vehicle List', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VehiclesList vehicles={vehicles} message={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render VehiclesList correctly', () => {
    const { container } = render(
      <VehiclesList vehicles={vehicles} message={true} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of VehicleItem components', () => {
    const { getByText } = render(
      <VehiclesList vehicles={vehicles} message={true} />
    );
    expect(getByText('Tesla Model S')).toBeInTheDocument();
    expect(getByText('Tesla Model 3')).toBeInTheDocument();
    expect(getByText('Tesla Model X')).toBeInTheDocument();
  });
});
