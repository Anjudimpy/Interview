import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import OutboundIcon from '@mui/icons-material/Outbound';
import AppsIcon from '@mui/icons-material/Apps';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import CenterFocusWeakRoundedIcon from '@mui/icons-material/CenterFocusWeakRounded';
import { Badge } from '@mui/material';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
   <div>
     <List className=''>
      <ListItemButton>
        <ListItemIcon> <OutboundIcon />  </ListItemIcon>
        <ListItemText>Home</ListItemText>
        <ListItemIcon>   </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AppsIcon/>
        </ListItemIcon>
        <ListItemText primary="Apps" />
        <Badge className='mr-3' badgeContent={5} color="error"/>
        {open ?  <ExpandMore />:<ExpandLess />}
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LibraryBooksRoundedIcon  />
        </ListItemIcon>
        <ListItemText primary="Features" />
        <Badge className='mr-3' badgeContent={5} color="error"/>
        {open ?  <ExpandMore />:<ExpandLess />}
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BarChartRoundedIcon  />
        </ListItemIcon>
        <ListItemText primary="Material" />
        <Badge className='mr-3' badgeContent={10} color="secondary"/>
        {open ?  <ExpandMore />:<ExpandLess />}
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CenterFocusWeakRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Icons" />
        {open ?  <ExpandMore />:<ExpandLess />}
      </ListItemButton>
      
    </List>
   </div>
  );
}