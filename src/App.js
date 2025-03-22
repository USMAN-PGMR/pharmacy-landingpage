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
import Whyus from './components/Frontend/Whyus/Whyus';
import Contact from './components/Frontend/Contact/Contact';
import Footer from './components/Frontend/Footer/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <WhatOffer/>
   <Promises/>
   <Discount/>
   <Whyus/>
   <Contact/>
   <Footer/>
    </>
  );
}

export default App;
