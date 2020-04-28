import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// import { findAveragePrice } from "./util";

type CryptoDatum = {
  price: number,
  ratio: number,
  score: number,
}

type CryptoData = {
  color: string,
  label: string,
  data: CryptoDatum[],
}

type ChartProps = {
  cryptoLeft: CryptoData,
  cryptoRight: CryptoData,
  responsive: {
    height: number,
    width: string,
  }
}

// class CryptoChart extends React.Component {
const CryptoChart = ({cryptoLeft, cryptoRight, responsive}: ChartProps) => {
  console.log(cryptoLeft, cryptoRight);
    return (
      <div className="Crypto-container" data-testid="crypto-chart">
        {/* Currently, the test won't render the chart when using Responsive */}
        {/* <ResponsiveContainer width="100%" height={450}> */}
        <ResponsiveContainer width={responsive.width} height={responsive.height}>
          <ScatterChart>
          {/* <ScatterChart height={400} width={800}> */}
            <XAxis type="number" dataKey={"score"} name="Google Trend Score" />

            <YAxis
                yAxisId="left"
                type="number"
                dataKey={"price"}
                name="Price"
                unit="$"
                stroke={cryptoLeft.color}
            />

            <YAxis
                yAxisId="right"
                type="number"
                dataKey={"price"}
                name="Price"
                unit="$"
                orientation="right"
                stroke={cryptoRight.color}
            />

            <ZAxis type="number" dataKey={"ratio"} name="Low/High Ratio" />

            <CartesianGrid />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend iconType="triangle" />

            <Scatter
                yAxisId="left"
                name={cryptoLeft.label}
                data={cryptoLeft.data}
                fill={cryptoLeft.color}
                shape="circle"
            />
            <Scatter
                yAxisId="right"
                name={cryptoRight.label}
                data={cryptoRight.data}
                fill={cryptoRight.color}
                shape="triangle"
            />

          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
};

export default CryptoChart;
