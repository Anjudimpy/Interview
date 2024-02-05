import { Card, CardContent } from '@mui/material'
import React from 'react'
import NewsFeeds from './NewsFeeds'
import BasicTable from './Project'

const RecentProject = () => {
  return (
    <div>
        <div className='mt-8'>
       <div className='flex justify-between'>
        <div className='w-full pr-8'>
        <Card className=' pb-2 h-20 ' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardContent >
      <div className=''>
        <div className=' font-bold text-gray-600 text-md'>Recent Projects</div>
         <div> Check latest project here</div>
      </div>
      </CardContent>
    </Card>
{/* 
    <Card className=' pb-2 h-12 mt-px' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 , borderTopRightRadius: 0, borderTopLeftRadius: 0}}>
      <CardContent >
      <div className='flex justify-between'>
        <div className=' font-bold text-gray-600 text-md'>Project</div>
        <div className=' font-bold text-gray-600 text-md'>Due Date</div>
        <div className=' font-bold text-gray-600 text-md'>Progress</div>
         </div>
      </CardContent>
    </Card> */}

    <Card className='mt-px h-96 pl-10 ' sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
    <BasicTable/>
    </Card>
        </div>

        <div className='mb-20'>

        <Card className='h-20 pb-2' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardContent className='  text-gray-600 text-md'>
        <div className='font-bold'>Newsfeed</div>
        <span className=''>Stories posted today</span>
      </CardContent>
    </Card>
      
        <Card className='mt-px h-full  w-96 flex justify-between'sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} >
        <CardContent>
    <NewsFeeds img='dp.jpeg' nam='Carolyn'/>
    <NewsFeeds img='img.jpg' nam='Carolyn'/>
    <NewsFeeds img='gdp.jpg' nam='Carolyn'/>
    
        </CardContent>
    </Card>
        </div>
       </div>
    </div>


    </div>
  )
}

export default RecentProject