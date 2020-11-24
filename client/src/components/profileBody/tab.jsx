import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs({handleFavPrevChange,compDidmount}) {
  const [value, setValue] = React.useState(1);

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
      </Tabs>
    </Paper>
  );
}