import React from 'react';
import ReactDOM from 'react-dom';

import VehiclesSelector from '../VehiclesSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehiclesSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
