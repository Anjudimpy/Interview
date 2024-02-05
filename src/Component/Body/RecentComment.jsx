import { Card, CardContent } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentList from './CommentList';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export const RecentComment = () => {
  return (
    <div className='mt-8' >
       <div className='flex justify-between'>
        <div className='w-full pr-8 h-full '>
        <Card className='h-12 pb-2' sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardContent className=' font-bold text-gray-600 text-md'>
      <div className='flex justify-between'>
        <div>Recent Comments</div> <div className='cursor-pointer'><MoreVertIcon /></div>
      </div>
      </CardContent>
    </Card>
    <Card className='mt-px  w-full  flex justify-between' sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        <CardContent>
      <div className=''>
      <CommentList img='dp.jpeg' nam='John Doe'/>
      <CommentList img='gdp.jpg' nam='Meek Mill'/>
      <CommentList img='img.jpg' nam='Anju Kumari'/>
      <CommentList img='gdp.jpg' nam='Meek Mill'/>
      <CommentList img='img.jpg' nam='Anju Kumari'/>
      <CommentList img='gdp.jpg' nam='Meek Mill'/>
      </div>
        </CardContent>
    </Card>
        </div>

        <div className=''>
      
        <Card className='mt-1 h-full w-96' >
            <div className='h-1/2 bg-slate-600'>
                <img src='dp.jpeg'/>
            </div>

            <div className='p-7'>
                <span className='font-bold text-3xl '>City Light in New York</span>
<div className='mt-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse quasi cupiditate saepe,
 perferendis consequuntur reiciendis natus incidunt possimus molestias.</div>
           <div className='text-gray-500 pl-8'>
          <span className='mr-5'> < AccessTimeRoundedIcon sx={{color:'gray', fontSize:17 }}/> 6 mins ago </span> <QuestionAnswerIcon sx={{color:'gray', fontSize:17 }}/> 39 comments
           </div>
           
            </div>
     
    </Card>
        </div>
       </div>
    </div>
  )
}
