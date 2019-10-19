import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles }) => {
  return (
    <div>
      <h2>List of vehicles</h2>
      <VehicleItem />
      <VehicleItem />
      <VehicleItem />
      <VehicleItem />
    </div>
  );
};

export default VehiclesList;
