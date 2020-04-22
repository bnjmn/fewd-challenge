import React, { PureComponent } from 'react';
import { LineChart, Line} from 'recharts';

import * as btc from './data/btc.json';


import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class TinyLineChart extends React.Component {
    render() {
  	return (
    	<LineChart width={300} height={100} data={data}>
        <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
      </LineChart>
    );
    }

}

const data01 = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];
const data02 = [{x: 200, y: 260, z: 240}, {x: 240, y: 290, z: 220},
                  {x: 190, y: 290, z: 250}, {x: 198, y: 250, z: 210},
                  {x: 180, y: 280, z: 260}, {x: 210, y: 220, z: 230}];

class ThreeDimScatterChart extends React.Component {
	render () {
      return (
        <ScatterChart width={800} height={400} margin={{top: 40, right: 40, bottom: 40, left: 40}}>
        <XAxis type="number" dataKey={'x'} name='stature' unit='cm'/>
        <YAxis type="number" dataKey={'y'} name='weight' unit='kg'/>
        <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km'/>
        <CartesianGrid />
        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend />
        <Scatter name='A school' data={data01} fill='#8884d8' shape="star"/>
        <Scatter name='B school' data={data02} fill='#82ca9d' shape="triangle"/>
        </ScatterChart>
    );
  }

}

export {TinyLineChart, ThreeDimScatterChart};