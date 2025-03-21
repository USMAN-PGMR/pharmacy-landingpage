import './App.scss';
// import '../node_modules'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../components/Frontend/Navbar/Navbar"
import Navbar from './components/Frontend/Navbar';
import HeroSection from './components/Frontend/HeroSection';

function App() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
    </>
  );
}

export default App;
