import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const customColors = ['green', 'blue', 'red']; // Replace with your desired colors

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 5, },
            { id: 1, value: 15, },
            { id: 2, value: 30, },
          ],
        },
      ]}
      width={400}
      height={185}
      colors={customColors}
      sectorBlendMode="multiply"
    />
  );
}
