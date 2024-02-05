import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function NewsFeeds({img,nam}) {
  return (
<div className='w-full flex justify-between'>
    <div>
    <List >
      <ListItem >
        <ListItemAvatar>
          <Avatar alt="" src={img} />
        </ListItemAvatar>
    <ListItemText>  
        <span>{nam}</span>
        <div className='text-xs'>Weekend-Lorem ipsum dolor sit amet adi... </div>       </ListItemText>
      </ListItem>
    </List>
    </div>

  
</div>
  );
}