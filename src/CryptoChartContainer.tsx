import React from "react";
// import Select from "./customer"
import PropTypes, { InferProps } from 'prop-types';

import CryptoChart from "./CryptoChart";

// const propTypes = {
//   something: 'else'
// }

// type Props = InferProps<typeof propTypes>;

// interface State {
//   currentCrypto: String;
// }


const left = {
  color: "#d3d3d3",
  label: "whatever",
  data: [{
    price: 123.45,
    ratio: 0.0123,
    score: 5,
  }]
}

const right = {
  color: "color-string",
  label: "trash",
  data: [{
    price: 321.89,
    ratio: 0.321,
    score: 25,
  }]
}

// state layer
// export class CryptoChartContainer extends React.Component<Props, State> {
export class CryptoChartContainer extends React.Component {
  // state = {
  //   currentCrypto
  // }

  // onChangeCrypto = (value) => {
  //   this.setState({
  //     currentCrypto: value
  //   })
  // }

  // presentational
  render() {
    // const { currentCrypto } = this.state;

    return (
      <div>
        <CryptoChart
          cryptoLeft={left}
          cryptoRight={right}
          />

        {/* </CryptoChart>

            data={}
            />
            <p>Something</p>
            <Select 
            value={currentCrypto}
            onChange={this.onChangeCrypto}
            default={}
            options={}
        /> */}
      </div>
    );
  }
};


// https://gist.github.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4

// API LAYER => CryptoDataProvider
// export default () => {

//   // const response = fetch();

//   // const data = parseResponse(response).filter(eth btc xrp);

//   // get data
//   return <CryptoChartContainer data={data} />;
// }

export default CryptoChartContainer;