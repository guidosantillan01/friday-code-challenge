import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import VehicleItem from '../VehicleItem';

const vehicle = {
  make: 'Tesla',
  model: 'Model S',
  enginePowerPS: '184',
  enginePowerKW: '135',
  fuelType: 'Electric',
  bodyType: 'Sedan',
  engineCapacity: '---'
};

describe('Vehicle Item', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VehicleItem vehicle={vehicle} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render VehicleItem correctly', () => {
    const { container } = render(<VehicleItem vehicle={vehicle} />);
    expect(container).toMatchSnapshot();
  });

  test('should render VehicleItem fields', () => {
    const { getByTestId } = render(<VehicleItem vehicle={vehicle} />);
    expect(getByTestId('vehicle-model')).toBeInTheDocument();
    expect(getByTestId('vehicle-power')).toBeInTheDocument();
    expect(getByTestId('vehicle-fuel')).toBeInTheDocument();
    expect(getByTestId('vehicle-body')).toBeInTheDocument();
    expect(getByTestId('vehicle-capacity')).toBeInTheDocument();
  });

  test('should render VehicleItem fields correctly', () => {
    const { getByTestId } = render(<VehicleItem vehicle={vehicle} />);
    expect(getByTestId('vehicle-model')).not.toHaveTextContent('');
    expect(getByTestId('vehicle-model')).toHaveTextContent('Tesla Model S');
    expect(getByTestId('vehicle-power')).not.toHaveTextContent('');
    expect(getByTestId('vehicle-fuel')).toHaveTextContent('Electric');
    expect(getByTestId('vehicle-body')).toHaveTextContent('Sedan');
    expect(getByTestId('vehicle-capacity')).toHaveTextContent('---');
  });
});
