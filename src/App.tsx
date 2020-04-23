import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TinyLineChart from "./TinyChart";
import CryptoScatterChart from "./ScatterChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TinyLineChart />
        <p>Welcome to my first react app: A Bitcoin Comparison</p>
      </header>

      <CryptoScatterChart/>
    </div>
  );
}

export default App;
