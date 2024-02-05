import { Card, CardContent } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChartsCard = ({title,charts}) => {
  return (
    <>
    <Card className='h-12 w-96 pb-2' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardContent className=' font-bold text-gray-600 text-md'>
      <div className='flex justify-between'>
        <div>{title}</div> <div className='cursor-pointer'><MoreVertIcon /></div>
      </div>
      </CardContent>
    </Card>
    <Card className='mt-px h-52 w-96 flex justify-between' sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        <CardContent>
      <div className='pr-80'>
      {charts}
      </div>
        </CardContent>
    </Card>
    </>
  )
}

export default ChartsCard