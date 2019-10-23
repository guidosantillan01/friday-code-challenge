import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles }) => {
  return (
    <div>
      <h2>List of vehicles</h2>
      <div className="v-list__container">
        {vehicles.map(vehicle => {
          return <VehicleItem vehicle={vehicle} />;
        })}
      </div>
    </div>
  );
};

export default VehiclesList;
