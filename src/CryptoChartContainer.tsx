import React from "react";
import Select from "./customer"
import PropTypes, { InferProps } from 'prop-types';

import CryptoChart from "./CryptoChart";
import CryptoScatterChart from "./ScatterChart";

// const propTypes = {
//   something: 'else'
// }

// type Props = InferProps<typeof propTypes>;

// interface State {
//   currentCrypto: String;
// }

// state layer
export class CryptoChartContainer extends React.Component<Props, State> {
  state = {
    currentCrypto
  }

  onChangeCrypto = (value) => {
    this.setState({
      currentCrypto: value
    })
  }

  // presentational
  render() {
    const { currentCrypto } = this.state;

    return (
      <>
        <CryptoChart
            data={}
            />
            <p>Something</p>
            <Select 
            value={currentCrypto}
            onChange={this.onChangeCrypto}
            default={}
            options={}
        />
      </>
    );
  }
};

CryptoChartContainer.propTypes = {
    currentCrypto: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    data: PropTypes.shape({


    })

};


// https://gist.github.com/drewdrewthis/8c004da114c745f8b0ca29500798d5f4

// API LAYER => CryptoDataProvider
export default () => {

  const response = fetch();

  const data = parseResponse(response).filter(eth btc xrp);

  // get data
  return <CryptoChartContainer data={data} />;
}
