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

const static_data = {
  data: "whatever-test",
  btc: {
    color: "#FFB31C",
    label: "Bitcoin",
    data: [],
  },
  eth: {
    color: "#432392",
    label: "Ethereum",
    data: [],
  },
  ltc: {
    color: "#EC46C3",
    label: "LiteCoin",
    data: [],
  },
  xrp: {
    color: "#4473F6",
    label: "Ripple",
    data: [],
  },
};

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
  state = {
    currentCrypto: "eth"
  };

  // onChangeCrypto = (value) => {
  //   this.setState({
  //     currentCrypto: value
  //   })
  // }

  componentWillMount() {
    const gist_url =
      "https://gist.githubusercontent.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4/raw/b9373b78fcc23ca3e65400d7a42ceb87605d79dc/";

    Promise.all([
      fetch(gist_url + "btc.json"), // left side crypto
      fetch(gist_url + "eth.json"), // right side options
      fetch(gist_url + "ltc.json"),
      fetch(gist_url + "xrp.json"),
    ])
      .then(([btc_response, eth_response, ltc_response, xrp_response]) => {
        return Promise.all([
          btc_response.json(),
          eth_response.json(),
          ltc_response.json(),
          xrp_response.json(),
        ]);
      })
      .then(([btc_json, eth_json, ltc_json, xrp_json]) => {
        static_data.btc.data = btc_json;
        static_data.eth.data = eth_json;
        static_data.ltc.data = ltc_json;
        static_data.xrp.data = xrp_json;

        this.setState({currentCrypto: "ltc"});
      });
  }

  // presentational
  render() {
    return (
      <div>
        <CryptoChart
          cryptoLeft={static_data.btc}
          cryptoRight={static_data[this.state.currentCrypto]}
          responsive={responsive}
        />
      </div>
    );
  }
}

export default CryptoChartContainer;
