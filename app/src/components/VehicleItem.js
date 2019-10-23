import React from 'react';

import autoImage from '../static/auto.png';

const VehicleItem = ({ vehicle }) => {
  return (
    <div className="v-item__container">
      <div>
        <img
          src={autoImage}
          alt="auto"
          title="Image of an auto"
          className="v-item__image"
        />
      </div>

      <div className="v-item__field">
        <h3 className="v-item__title">
          {vehicle.make} {vehicle.model}
        </h3>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">Engine Power</h4>
        <p className="v-item__text">
          <span className="v-item__value">{vehicle.enginePowerPS}</span>{' '}
          <span className="v-item__unit">HP</span>
        </p>
        <p className="v-item__text">
          <span className="v-item__value">{vehicle.enginePowerKW}</span>{' '}
          <span className="v-item__unit">KW</span>
        </p>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">Fuel Type</h4>
        <p className="v-item__text">{vehicle.fuelType}</p>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">Vehicle Body Type</h4>
        <p className="v-item__text">{vehicle.bodyType}</p>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">Engine Capacity</h4>
        <p className="v-item__text">
          <span className="v-item__value">{vehicle.engineCapacity}</span>{' '}
          <span className="v-item__unit">cc</span>
        </p>
      </div>
    </div>
  );
};

export default VehicleItem;
