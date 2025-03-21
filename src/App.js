import './App.scss';
// import '../node_modules'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../components/Frontend/Navbar/Navbar"
import Navbar from './components/Frontend/Navbar';
import HeroSection from './components/Frontend/HeroSection';
import About from './components/Frontend/About';
import WhatOffer from './components/Frontend/WhatOffer/WhatOffer';
import Promises from './components/Frontend/Promises/Promises';
import Discount from './components/Frontend/Discount/Discount';

function App() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <WhatOffer/>
   <Promises/>
   <Discount/>
    </>
  );
}

export default App;
