import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PrimarySearchAppBar from './Header';
import Cards from './Cards';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupsIcon from '@mui/icons-material/Groups';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import AreaCharts from '../Graph/AraeCharts';
import ChartsCard from './ChartsCard';
import Graph from '../Graph/Graph';
import BasicPie from '../Graph/PaiChatts';
import SimpleScatterChart from '../Graph/Spots';
import { Card, CardContent } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloudSharpIcon from '@mui/icons-material/CloudSharp';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import { RecentComment } from './RecentComment';
import RecentProject from './RecentProject';
import Footer from './Footer';
import { LeftBody } from './LeftBody';



const Body = () => {
  return (
    <div>
        <div className=' pt-1 flex '>
            <div className='w-96'>
<LeftBody/>
            </div>
            <div className=''>
                
                <div className='w-full'>
                <PrimarySearchAppBar/>
                </div>

                <div className='p-8  h-full bg-slate-200'>
                    <div className='flex  justify-between'>
                        <div><Cards title='New Orders' number='190' icons={<LocalMallIcon sx={{ fontSize: 50, color:'blue'}}/>}/></div>
                        <div><Cards title='Total Profits' number='987' icons={<GroupsIcon  sx={{ fontSize: 50, color:'blue'}}/>} /></div>
                        <div><Cards title='Email' number='236' icons={<UnarchiveIcon sx={{ fontSize: 50, color:'blue'}}/>}/></div>
                   
                    </div>

                    {/* AreaChart */}
                    <div className='pt-8'>
                        <AreaCharts/>
                    </div>

                    {/* multiple chars */}
<div className='flex justify-between mt-8'>
    <div>        <ChartsCard title='Revenue' charts={<BasicPie/>}/>    </div>

    <div>        <ChartsCard title='Yearly Sales' charts={<Graph/>}/>    </div>

    <div>        <ChartsCard title='Sales Report' charts={<SimpleScatterChart/>} />    </div>
</div>
                            {/* image and Wether */}
 <div className='flex w-full pt-8'>
    <div className='h-40 w-full  flex justify-between'>
    
       <Card className='h-96'>
            <div className='flex justify-between  bg-blue-50'>
                <div className='w-full '>
                <img src='img.jpg' alt='' 
                 style={{ width:'100%', height: '70%' }} /> 
                </div>
                <div className='pt-20 text-center w-96'>
                <span className='text-gray-800 font-bold text-xl tracking-wider mr-4'>GABRIELLE</span>
                <span className='text-gray-800 tracking-wider font-bold text-xl'>WEE</span>

                    <div className='flex pt-5 justify-between'>
                        <div><button className='pt-1 pb-1 pl-2 pr-2 ml-16 bg-rose-600 text-white font-bold text-xs'>UI DESIGNER</button></div>
                        <div><button className='p-2 mr-16 bg-indigo-600 text-white text-xs font-bold'>+FOLLOW</button></div>
                    </div>
<div className='flex items-center cursor-pointer justify-between mt-7 ml-28 mr-28'>
    <div>< FacebookRoundedIcon sx={{fontSize: 25,color:'blue'}} /></div>
    <div>< GoogleIcon sx={{fontSize: 25,color:'blue'}} /></div>
    <div>< TwitterIcon sx={{fontSize: 25,color:'blue'}} /></div>
</div>

                </div>
                </div> 
        </Card>
       </div>
       
       {/* Wether */}

    <div className='pl-8 h-96'>
    <Card className='mt-1 h-96 w-96 flex justify-center '>
      <CardContent className='p-5 text-center'>
        <div>
          <span className=' text-gray-600 font-bold text-lg'>Today</span>
        </div>
        <div className="relative mt-4">
      <CloudSharpIcon className="absolute top-0 left-1/2 transform -translate-x-1/2" sx={{fontSize:70, color:'blue'}} />
      <WbSunnyOutlinedIcon sx={{color:'blue' , fontSize:55}} className="absolute top-0 left-1/2 transform -translate-x-1/8" />
    </div>
    <div className='mt-20 pt-1 font-bold text-xl text-gray-600'>
    <span>{13}&deg;C</span>
    </div>
    <span>Surrey, Canada</span>

    <div className='flex justify-between '>
    <div className='pt-5 pr-10'>
        <spna>Yesterday</spna>
   <div className='pt-3 pb-3'>
   <ThunderstormOutlinedIcon sx={{color:'gray', fontSize:35}} />
      <WbSunnyOutlinedIcon sx={{color:'gray', fontSize:25}} />
   </div>
   <span className='font-bold text-xl text-gray-500'>{13}&deg;C</span>
    </div>
    <div className='pt-5 pl-10'>
        <span >Tomorrow</span>
   <div className='pt-3 pb-3'>
   <CloudOutlinedIcon sx={{color:'gray', fontSize:35}}/>
      <WbSunnyOutlinedIcon sx={{color:'gray', fontSize:25}} />
   </div>
   <span className='font-bold text-xl text-gray-500'>{13}&deg;C</span>
    </div>
    

</div>
      </CardContent>
      
    </Card>

    </div>
    </div> 

    <div>
    <RecentComment/>
    </div>

    <div>
    <RecentProject/>
    </div>

    <div className='flex justify-between mt-6 '>
        <div className='mr-5'><Footer online='31' cmnt='11' fb='f' names='Facebook'/></div>
        <div className='mr-5'><Footer online='76' cmnt='19' logo={<TwitterIcon sx={{color:'white', fontSize:40}}/>} names='Twitter'/></div>
        <div><Footer online='9' cmnt='21' linkind='in' names='Linkedin'/></div>
    </div>


    

                </div>
            </div>
        </div>
        
    </div>
  )
}

const Day=()=>{
return(
    
<>

</>    

)
}

export default Body