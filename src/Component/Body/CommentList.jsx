import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function CommentList({img,nam}) {
  return (
<div className='w-full flex justify-between'>
    <div>
    <List >
      <ListItem >
        <ListItemAvatar>
          <Avatar alt="" src={img} />
        </ListItemAvatar>
    <ListItemText>  
        <span className='p-0 font-bold'>{nam}</span>
        <div className='text-xs'>Weekend-Lorem ipsum dolor sit amet adipisicing elit. Sunt et neque blanditiis non recusandae, adipisci...</div>
        </ListItemText>
      </ListItem>
    </List>
    </div>

    <div className='pt-3 pl-8 text-gray-500'>
        Oct-
        <div>11,17</div>

    </div>
</div>
  );
}