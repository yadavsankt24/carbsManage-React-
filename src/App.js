import { Box } from '@chakra-ui/react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { HomePage } from './Page Division/HomePage';
import LargeWithLogoCentered from './Sections/Footer';
import { Uppersection } from './Sections/Uppersection';



function App() {
  return (
    <Box >
      <HomePage/>
    </Box>
    
  );
}

export default App;
