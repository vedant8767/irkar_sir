import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Header/Navbar'
import Home from './pages/HomePage'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({
        // Add options here, if needed
        duration: 1500, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once or every time you scroll
      });
},[])
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
