import React from "react";
import "./App.css";

import TinyLineChart from "./TinyChart";
import CryptoChartContainer from "./CryptoChartContainer";

function App() {
  return (
    <div className="App">
      <div className="App-content-wrapper">
        <header className="App-header">
          <TinyLineChart />
          <p>Welcome to my first react app: A Bitcoin Comparison</p>
        </header>

        <CryptoChartContainer/>

      </div>
    </div>
  );
}

export default App;
