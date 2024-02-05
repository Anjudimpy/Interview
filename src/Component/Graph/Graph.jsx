import React from 'react'
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar
} from 'recharts';

const newData = [
  { "name": 1, "uv": 6, "pv": 5},
  { "name": 2, "uv": 5, "pv": 4 },
  { "name": 3, "uv": 8, "pv": 4},
  { "name": 4, "uv": 8.1, "pv": 1.908},
  { "name": 5, "uv": 5, "pv": 6},
  { "name": 6, "uv": 5.2, "pv": 1.8 },
  { "name": 7, "uv": 4, "pv": 5 }
];

const Graph = () => {
  return (
    <>
      <ComposedChart width={290} height={200} data={newData}>
        <XAxis dataKey="name" domain={[1, 7]} />
        <YAxis domain={[0, 9]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={25} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="red" />
      </ComposedChart>

      
    </>
  );
};

export default Graph;
