import React from 'react';
import logo from './logo.svg';
import './App.css';

import TinyLineChart from './tiny_chart';
import ThreeDimScatterChart from './chart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first react app.
        </p>

        <TinyLineChart />

      </header>

      <ThreeDimScatterChart />

    </div>

  );
}

export default App;
