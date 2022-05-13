import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
import LandingScreen from './components/LandingScreen/LandingScreen'
import SecondScreen from './components/SecondScreen/SecondScreen';
import ThirdScreen from './components/ThirdScreen/ThirdScreen';

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
      <SideDrawer show={isSideDrawerOpen} drawerClickHandler={toggleDrawer}/>
      {backdrop} 
      <LandingScreen />
      <SecondScreen />
      <ThirdScreen />

      
    </div >
  );
}

export default App;