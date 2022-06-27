import React from 'react'
import Contact from './Components/Contact';
import Handle from './Components/Handle';
import Navbar from './Components/Navbar';
import Option from './Components/Option';
import Power from './Components/Power';
import Speedy from './Components/Speedy';

function App() {
  return (
    <div>
     <Navbar/>
     <Power/>
     <Speedy/>
     <Handle/>
     <Option/>
     <Contact/>
    </div>
  );
}

export default App;
