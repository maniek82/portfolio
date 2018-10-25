import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    return ( 
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}>
           <List component="nav">
            <ListItem button onClick={()=>console.log('list-item')}>
                Events starts now
            </ListItem>
            <ListItem button onClick={()=>console.log('list-item')}>
                Venue info
            </ListItem>
            <ListItem button onClick={()=>console.log('list-item')}>
                Highlights
            </ListItem>
            <ListItem button onClick={()=>console.log('list-item')}>
                Pricing
            </ListItem>
            <ListItem button onClick={()=>console.log('list-item')}>
                Location
            </ListItem>

           </List>
        </Drawer>
     );
}
 
export default SideDrawer;