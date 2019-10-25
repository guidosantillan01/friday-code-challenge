import React from 'react';
import ReactDOM from 'react-dom';

import VehiclesList from '../VehiclesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehiclesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
