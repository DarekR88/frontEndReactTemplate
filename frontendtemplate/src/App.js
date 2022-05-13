import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';

const App = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHnadler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  }

  let backdrop;

  if (isSideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHnadler}/>
  }


  return (
    <div style = {{ height: '100%'}} >
      <Toolbar drawerClickHandler={toggleDrawer} />
      <SideDrawer show={isSideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '64px'}}>
        <p>This is the page content!</p>
      </main> 
    </div >
  );
}

export default App;