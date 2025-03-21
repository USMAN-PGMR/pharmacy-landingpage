import './App.scss';
// import '../node_modules'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../components/Frontend/Navbar/Navbar"
import Navbar from './components/Frontend/Navbar';
import HeroSection from './components/Frontend/HeroSection';
import About from './components/Frontend/About';
import WhatOffer from './components/Frontend/WhatOffer/WhatOffer';

function App() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <WhatOffer/>
    </>
  );
}

export default App;
