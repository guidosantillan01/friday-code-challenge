import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import VehiclesSelector from '../VehiclesSelector';

const makes = ['BWM', 'Ford', 'Tesla'];
const models = ['Model S', 'Model 3', 'Model X', 'Model Y'];
const selectVehicleMake = () => {};
const selectVehicleModel = () => {};

describe('Vehicle Selector', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <VehiclesSelector
        makes={makes}
        models={models}
        selectVehicleMake={selectVehicleMake()}
        selectVehicleModel={selectVehicleModel()}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render VehiclesSelector correctly', () => {
    const { container } = render(
      <VehiclesSelector
        makes={makes}
        models={models}
        selectVehicleMake={selectVehicleMake()}
        selectVehicleModel={selectVehicleModel()}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
