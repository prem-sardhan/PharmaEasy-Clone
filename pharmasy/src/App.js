import logo from './logo.svg';
import './App.css';
import CardSlider from './Rohit_components/CardSlide'

import Category from './Abhay_components/Category';
import { Box } from '@chakra-ui/react';



function App() {
  return (
    <div className="App" >
    
      <h1>hello world</h1>
      <Box display='flex' justifyContent='space-evenly' border='1px solid black' >
          <Category/>
      </Box>
    </div>
  );
}

export default App;
