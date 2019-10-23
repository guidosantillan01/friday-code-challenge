import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles }) => {
  return (
    <div>
      <div className="v-list__container">
        {vehicles.length !== 0 ? (
          vehicles.map(vehicle => {
            return <VehicleItem vehicle={vehicle} />;
          })
        ) : (
          <p>No vehicles found</p>
        )}
      </div>
    </div>
  );
};

export default VehiclesList;
