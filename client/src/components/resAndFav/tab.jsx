import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from '@material-ui/core';

export default function DisabledTabs({handleFavPrevChange,compDidmount,master,admin}) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square style={{borderBottomRightRadius:'20px', borderTopRightRadius:'20px'}}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"  
      >
        <Tab label="favorite" onClick={()=>{handleFavPrevChange(true);compDidmount()}} />
        <Tab label="reservation"  onClick={()=>{handleFavPrevChange(false);compDidmount()}}/>
        {
          admin?
          <Link to="/profile/users">
          <Tab label="users"  onClick={()=>{compDidmount()}}/>
          </Link>
          
          :<div/>

        }
        {/* { */}
          {/* master? */}
          {/* <Link to="/profile/admins"> */}
          <Tab label="admins"  onClick={()=>{compDidmount()}}/>
          {/* </Link> */}
          :
          <div/>
        {/* } */}
      </Tabs>
    </Paper>
  );
}