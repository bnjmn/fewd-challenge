import React from 'react';
import Select from 'react-select';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import btc_raw from './data/btc.json';
import eth_raw from './data/eth.json';
import ltc_raw from './data/ltc.json';
import xrp_raw from './data/xrp.json';
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
        value: 'btc',
        label: 'bitcoin',
        color: '#FFB31C',
        shape: 'circle',
        raw: btc_raw,
    },
    eth: {
        value: 'eth',
        label: 'ethereum',
        color: '#432392',
        shape: 'triangle',
        raw: eth_raw,
    },
    ltc: {
        value: 'ltc',
        label: 'litecoin',
        color: '#EC46C3',
        shape: 'cross',
        raw: ltc_raw,
    },
    xrp: {
        value: 'xrp',
        label: 'ripple',
        color: '#4473F6',
        shape: 'diamond',
        raw: xrp_raw,
    },
}


const options = [
    // { value: 'eth', label: 'ethereum' },
    // { value: 'xrp', label: 'ripple' },
    // { value: 'ltc', label: 'litecoin' }
    data.eth, data.ltc, data.xrp
  ]


class ThreeDimScatterChart extends React.Component {
    state = {
        selectedOption: data.eth,
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

	render () {
      return (
        <div className='Scatter'>
            <ScatterChart width={800} height={400} margin={{top: 40, right: 40, bottom: 40, left: 40}}>
                <XAxis type="number" dataKey={'score'} name='score' />
                {/* <YAxis type="number" dataKey={'price'} name='price' /> */}

                <YAxis yAxisId="left" type="number" dataKey={'price'} name='Price' unit='$' stroke="#8884d8" />
                <YAxis 
                    yAxisId="right"
                    type="number"
                    dataKey={'price'}
                    name='Price'
                    unit='$'
                    orientation="right"
                    stroke={this.state.selectedOption.color}
                    />

                <ZAxis type="number" dataKey={'ratio'} name='ratio' scale='auto'/>

                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                <Legend />

                <Scatter yAxisId='left' name='bitcoin' data={data.btc.raw} fill={data.btc.color} shape="circle"/>
                <Scatter 
                    yAxisId='right'
                    name={this.state.selectedOption.label} 
                    data={this.state.selectedOption.raw} 
                    fill={this.state.selectedOption.color}
                    shape="triangle"
                    // shape={this.state.selectedOption.shape}
                    />
            </ScatterChart>

            <Select 
                className='Scatter-select'
                value={this.state.selectedOption.value}
                onChange={this.handleChange}
                options={options}
                />
        </div>
    );
  }
}

export default ThreeDimScatterChart;