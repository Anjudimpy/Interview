import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('PROJECT HOLLISTON', 'July 11',<LinearProgress sx={{width:'200px'}} variant="determinate" value={20} className='ml-20' /> ),
  createData('PROJECT NGH', 'July 11',<LinearProgress sx={{width:'200px'}} variant="determinate" value={40} className='ml-20' />),
  createData('PROJECT ARMADA', 'July 11', <LinearProgress sx={{width:'200px'}} variant="determinate" value={50} className='ml-20' />),
  createData('PROJECT VALISE', 'July 11', <LinearProgress sx={{width:'200px'}} variant="determinate" value={80} className='ml-20' />),
  createData('PROJECT KOMODO', 'July 12',<LinearProgress sx={{width:'200px'}} variant="determinate" value={45} className='ml-20' /> ),
  createData('PROJECT VALISE', 'July 11', <LinearProgress sx={{width:'200px'}} variant="determinate" value={80} className='ml-20' />),
];

export default function BasicTable() {
  return (
    <TableContainer className='w-full '>
      <Table>
        <TableHead>
          <TableRow style={{ fontWeight: 'bold' }} >
            
            <TableCell>Projects</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Progress</TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ border: 'none' }}>{row.name}</TableCell>
              <TableCell align="right" style={{ border: 'none' }}>{row.calories}</TableCell>
              <TableCell align="right" style={{ border: 'none' }}>{row.fat}</TableCell>
              <TableCell align="right" style={{ border: 'none' }}>{row.carbs}</TableCell>
              <TableCell align="right" style={{ border: 'none' }}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
