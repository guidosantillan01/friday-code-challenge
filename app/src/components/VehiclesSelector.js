import React from 'react';

const VehicleSelector = ({
  makes,
  models,
  selectVehicleMaker,
  selectVehicleModel
}) => {
  return (
    <div>
      <h2>Selector for Vehicles</h2>

      <form>
        <label>
          <select onChange={selectVehicleMaker}>
            {makes.map(make => {
              return <option value={make}>{make}</option>;
            })}
          </select>
        </label>
      </form>

      <form>
        <label>
          <select onChange={selectVehicleModel}>
            {models.map(model => {
              return <option value={model}>{model}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default VehicleSelector;
