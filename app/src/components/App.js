import React from 'react';

import Vehicles from './Vehicles';

import fridayLogo from '../static/friday logo.png';

function App() {
  return (
    <div className="App__container">
      <h1 className="App__title">
        <img
          className="logo"
          src={fridayLogo}
          alt="friday logo"
          title="FRIDAY Logo"
        />
        Car Insurance
      </h1>
      <Vehicles />
    </div>
  );
}

export default App;
