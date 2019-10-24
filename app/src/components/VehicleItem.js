import React from 'react';

import autoImage from '../static/auto.png';
import powerIcon from '../static/power.png';
import fuelIcon from '../static/fuel.png';
import bodyIcon from '../static/body.png';
import capacityIcon from '../static/capacity.png';

const renderIcons = true;

const VehicleItem = ({ vehicle }) => {
  return (
    <div className="v-item__container">
      <div>
        <img
          src={autoImage}
          alt="auto"
          title="auto"
          className="v-item__image"
        />
      </div>

      <div className="v-item__field">
        <h3 className="v-item__title">
          {vehicle.make} {vehicle.model}
        </h3>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">
          Engine Power{' '}
          {renderIcons && <img className="v-item__icon" src={powerIcon} />}
        </h4>
        <div className="v-item__engine-power">
          <p className="v-item__text">
            <span className="v-item__value">{vehicle.enginePowerPS}</span>{' '}
            <span className="v-item__unit">HP</span>
          </p>
          <p className="v-item__text">
            <span className="v-item__value">{vehicle.enginePowerKW}</span>{' '}
            <span className="v-item__unit">KW</span>
          </p>
        </div>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">
          Fuel Type{' '}
          {renderIcons && <img className="v-item__icon" src={fuelIcon} />}
        </h4>

        <p className="v-item__text">{vehicle.fuelType}</p>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">
          Vehicle Body Type{' '}
          {renderIcons && <img className="v-item__icon" src={bodyIcon} />}
        </h4>
        <p className="v-item__text">{vehicle.bodyType}</p>
      </div>

      <div className="v-item__field">
        <h4 className="v-item__subtitle">
          Engine Capacity{' '}
          {renderIcons && <img className="v-item__icon" src={capacityIcon} />}
        </h4>
        <p className="v-item__text">
          <span className="v-item__value">{vehicle.engineCapacity}</span>{' '}
          <span className="v-item__unit">cc</span>
        </p>
      </div>
    </div>
  );
};

export default VehicleItem;
