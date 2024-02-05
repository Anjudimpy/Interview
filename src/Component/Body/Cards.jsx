
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

function Cards({title, number,icons})
 {

  return (
    <div>

<Card className=' h-30 w-96'>
<CardContent>
<span className='p-2 font-bold text-lg text-gray-600 '>{title}</span>
<p className='p-2'>This Week</p>
<div className='flex justify-between'>
    <div>{icons}</div>
    <div className='p-2 font-bold text-xl text-gray-600 '>{number}</div>
</div>

</CardContent>
</Card>
    </div>
  )
}

export default Cards