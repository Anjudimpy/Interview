import { Card, CardContent } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = ({logo,names,linkind,fb,online,cmnt}) => {
  return (
    <div>
        <Card className='h-52 w-96 'sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 , borderTopRightRadius: 0, borderTopLeftRadius: 0}}>
            
                <div className='flex h-full w-full '>
                    <div className=' bg-indigo-600 w-1/2 pt-16 flex justify-center'>
                        <div>
                        <div className='pl-8 font-bold text-white text-5xl '>{fb}</div> 
                            <div className='pl-5 pb-3'>{logo} <div className='p-0 font-bold text-white text-4xl '>{linkind}</div>        </div>
                            
                        <div className='p-0 font-bold text-white text-xl '>{names}</div>
                        </div>

                    </div>
   <div className='mx-auto text-center p-4'>
      <div className='font-bold text-3xl text-gray-600'>{online}</div>
      <div className='pt-3 text-gray-500'>Online</div>
      <hr className='my-4 w-20 border-t-2 border-gray-300' />

      <div className='font-bold text-3xl text-gray-600'>{cmnt}</div>
      <div className='pt-3 text-gray-500'>Comment</div>
    </div>

    
                </div>
            
        </Card>
    </div>
  )
}

export default Footer