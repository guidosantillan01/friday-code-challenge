import React from 'react';

const selector = (onChangeHandler, options = []) => {
  return (
    <div>
      <select onChange={onChangeHandler} className="v-selector">
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const VehicleSelector = ({
  makes,
  models,
  selectVehicleMake,
  selectVehicleModel
}) => {
  return (
    <div>
      <h2 className="App__subtitle">Vehicle Selector</h2>

      <div className="v-selector__container">
        {selector(selectVehicleMake, makes)}
        {selector(selectVehicleModel, models)}
      </div>
    </div>
  );
};

export default VehicleSelector;
