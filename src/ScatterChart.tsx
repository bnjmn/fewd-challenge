import React from "react";
import Select from "react-select";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import btc_raw from "./data/btc.json";
import eth_raw from "./data/eth.json";
import ltc_raw from "./data/ltc.json";
import xrp_raw from "./data/xrp.json";
// example obj structure
// [{
//     "price": 3685.14,
//     "date": 1549756800000,
//     "score": 4,
//     "ratio": 0.021329227835929894
// }, ...]

// Colors inspired by
// https://www.schemecolor.com/tomorrow.php
const data = {
  btc: {
    value: "btc",
    label: "Bitcoin",
    color: "#FFB31C",
    raw: btc_raw,
  },
  eth: {
    value: "eth",
    label: "Ethereum",
    color: "#432392",
    raw: eth_raw,
  },
  ltc: {
    value: "ltc",
    label: "Litecoin",
    color: "#EC46C3",
    raw: ltc_raw,
  },
  xrp: {
    value: "xrp",
    label: "Ripple",
    color: "#4473F6",
    raw: xrp_raw,
  },
};


// Select dropdown options for comparison
const options = [data.eth, data.ltc, data.xrp];

class CryptoScatterChart extends React.Component {
  state = {
    // default ethereum
    selectedOption: data.eth,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    return (
      <div className="Scatter">
        <ScatterChart
          width={880}
          height={420}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <XAxis type="number" dataKey={"score"} name="Google Trend Score" />
          <YAxis
            yAxisId="left"
            type="number"
            dataKey={"price"}
            name="Price"
            unit="$"
            stroke="#8884d8"
          />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey={"price"}
            name="Price"
            unit="$"
            orientation="right"
            stroke={this.state.selectedOption.color}
          />

          <ZAxis
            type="number"
            dataKey={"ratio"}
            name="Low/High Ratio"
            scale="auto"
          />

          <CartesianGrid />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend iconType="triangle" />

          <Scatter
            yAxisId="left"
            name={
              data.btc.label +
              " (avg. price: $" +
              findAveragePrice(data.btc.raw) +
              ")"
            }
            data={data.btc.raw}
            fill={data.btc.color}
            shape="circle"
          />
          <Scatter
            yAxisId="right"
            name={
              this.state.selectedOption.label +
              " (avg. price: $" +
              findAveragePrice(this.state.selectedOption.raw) +
              ")"
            }
            data={this.state.selectedOption.raw}
            fill={this.state.selectedOption.color}
            shape="triangle"
          />
        </ScatterChart>

        <p>
          <code>Compare Bitcoin against...</code>
        </p>

        <Select
          className="Scatter-select"
          defaultValue={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default CryptoScatterChart;
