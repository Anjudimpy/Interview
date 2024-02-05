import { Card, CardContent } from '@mui/material';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, stop, defs } from 'recharts';

const data = [
  { year: 2017, value: 50000, value2: 70000, value3: 80000, value4: 90000 },
  { year: 2010, value: 40500, value2: 43000, value3: 50000, value4: 40000 },
  { year: 2000, value: 38500, value2: 78000, value3: 58000, value4: 37000 },
  { year: 1990, value: 32000, value2: 34000, value3: 38000, value4: 30000 },
];

const AreaCharts = () => {
  return (
  <>
  <Card className='h-12 pb-2' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardContent className=' font-bold text-gray-600 text-md'>
      Total Sales
      </CardContent>
    </Card>
  <Card className=' w-full mt-px' sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
    <CardContent className='flex justify-center'>
    <AreaChart width={950} height={300} data={data}>
      <defs>
        <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="20%" stopColor="green" stopOpacity={0.2} />
          <stop offset="100%" stopColor="green"  />
        </linearGradient>
        <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
          <stop offset="95%" stopColor="blue" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="red" stopOpacity={0.8} />
          <stop offset="100%" stopColor="red" stopOpacity={0.2}/>
        </linearGradient>
        <linearGradient id="colorValue4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="100%" stopColor="skyblue" stopOpacity={0.8}/>
          <stop offset="100%" stopColor="skyblue"   />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis domain={[30000, 90000]} ticks={[30000, 40000, 50000, 60000, 70000, 80000, 90000]} />
      <CartesianGrid  />
      <Tooltip />
      <Area dataKey="value" stroke="green" fillOpacity={1} fill="url(#colorValue1)" />
      <Area dataKey="value2" stroke="blue" fillOpacity={1} fill="url(#colorValue2)" />
      <Area dataKey="value3" stroke="red" fillOpacity={1} fill="url(#colorValue3)" />
      <Area dataKey="value4" stroke="skyblue" fillOpacity={1} fill="url(#colorValue4)" />
    </AreaChart>
    </CardContent>
  </Card>
  </>
  );
};

export default AreaCharts;