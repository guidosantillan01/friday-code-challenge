import React from 'react';

const selector = (onChangeHandler, data) => {
  return (
    <div className="v-selector">
      <select onChange={onChangeHandler}>
        {data.map(d => {
          return (
            <option value={d} key={d}>
              {d}
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
      <h2 className="App__subtitle">Selector for Vehicles</h2>

      <div className="v-selector__container">
        {selector(selectVehicleMake, makes)}
        {selector(selectVehicleModel, models)}
      </div>
    </div>
  );
};

export default VehicleSelector;
