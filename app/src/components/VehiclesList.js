import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles = [] }) => {
  return (
    <div className="v-list__container">
      {vehicles.slice(0, 10).map(vehicle => {
        return <VehicleItem vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehiclesList;
