import React from 'react';

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
        <div className="v-selector">
          <select onChange={selectVehicleMake}>
            {makes.map(make => {
              return (
                <option value={make} key={make}>
                  {make}
                </option>
              );
            })}
          </select>
        </div>

        <div className="v-selector">
          <select onChange={selectVehicleModel}>
            {models.map(model => {
              return (
                <option value={model} key={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;
