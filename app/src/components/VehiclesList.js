import React from 'react';

import VehicleItem from './VehicleItem';

const VehiclesList = ({ vehicles = [], message = true }) => {
  return (
    <div>
      <div className="v-list__container">
        {vehicles.length !== 0 ? (
          vehicles.map(vehicle => {
            return <VehicleItem vehicle={vehicle} />;
          })
        ) : message ? (
          <p className="v-list__message">
            Select your vehicle manufacturer and model
          </p>
        ) : (
          <p className="v-list__message">
            No vehicles could be found. Try another option
          </p>
        )}
      </div>
    </div>
  );
};

export default VehiclesList;
