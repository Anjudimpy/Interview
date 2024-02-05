import * as React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { x: 4, y: 2, id: 1 },
  { x: 10, y: 12, id: 2 },
  { x: 6, y: 6, id: 3 },
  { x: 7, y: 8, id: 4 },
];

export default function SimpleScatterChart() {
  return (
    <ScatterChart
      width={300}
      height={200}
      data={data}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" domain={[4, 7]} />
      <YAxis type="number" dataKey="y" domain={[0, 14]} />
      
      <Scatter dataKey="y" fill="red" shape="circle" />
    </ScatterChart>
  );
}
