import React from 'react';

const VehicleSelector = ({
  makes,
  models,
  selectVehicleMake,
  selectVehicleModel
}) => {
  return (
    <div>
      <h2>Selector for Vehicles</h2>

      <form>
        <label>
          <select onChange={selectVehicleMake}>
            {makes.map(make => {
              return (
                <option value={make} key={make}>
                  {make}
                </option>
              );
            })}
          </select>
        </label>
      </form>

      <form>
        <label>
          <select onChange={selectVehicleModel}>
            {models.map(model => {
              return (
                <option value={model} key={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default VehicleSelector;
