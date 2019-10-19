import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles }) => {
  return (
    <div>
      <h2>List of vehicles</h2>
      {vehicles.map(vehicle => {
        return <VehicleItem vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehiclesList;
