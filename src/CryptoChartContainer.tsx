import React from "react";
// import Select from "./customer"
import PropTypes, { InferProps } from "prop-types";

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
  data: [
    {
      price: 123.45,
      ratio: 0.0123,
      score: 5,
    },
  ],
};
const right = {
  color: "color-string",
  label: "trash",
  data: [
    {
      price: 321.89,
      ratio: 0.321,
      score: 25,
    },
  ],
};

// using this to work around issues testing responsive container
const responsive = {
  height: 450,
  width: "90%",
};

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

  componentDidMount() {
    const gist_url =
      "https://gist.githubusercontent.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4/raw/b9373b78fcc23ca3e65400d7a42ceb87605d79dc/";
    Promise.all([
      fetch(gist_url + "btc.json"), // left side crypto
      fetch(gist_url + "eth.json"), // right side options
      fetch(gist_url + "ltc.json"),
      fetch(gist_url + "xrp.json"),
    ]).then(([btc_response, eth_response, ltc_response, xrp_response]) => {
      return Promise.all([
        btc_response.json(),
        eth_response.json(),
        ltc_response.json(),
        xrp_response.json(),
      ]);
    }).then(([btc_json, eth_json, ltc_json, xrp_json]) => {
      this.setState({
        data: {
          btc: btc_json,
          eth: eth_json,
          ltc: ltc_json,
          xrp: xrp_json,
        },
      })
    });
  }

  // presentational
  render() {
    // const { currentCrypto } = this.state;

    return (
      <div>
        <CryptoChart
          cryptoLeft={left}
          cryptoRight={right}
          responsive={responsive}
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
}

// https://gist.github.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4

// API LAYER => CryptoDataProvider
// export default () => {

//   // const response = fetch();

//   // const data = parseResponse(response).filter(eth btc xrp);

//   // get data
//   return <CryptoChartContainer data={data} />;
// }

export default CryptoChartContainer;

// API LAYER => CryptoDataProvider
// export default () => {
//   const gist_url =
//     "https://gist.githubusercontent.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4/raw/b9373b78fcc23ca3e65400d7a42ceb87605d79dc/";

//   // bitcoin data (left side)j
//   const btc_response = fetch(gist_url + "btc.json");

//   // others (right side)
//   const eth_response = fetch(gist_url + "eth.json");
//   const ltc_response = fetch(gist_url + "ltc.json");
//   const xrp_response = fetch(gist_url + "xrp.json");

//   const [btc_result, etc_result, ltc_result, xrp_result] = await Promise.all([
//     btc_response,
//     eth_response,
//     ltc_response,
//     xrp_response,
//   ]);

//   return <CryptoChartContainer left={btc_response.json} />;
//   //   return <CryptoChartContainer data={data} />;
// };
