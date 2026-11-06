import { useState } from 'react';
import NetflixPreloader from './components/NetflixPreloader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App(){
  const [loading,setLoading]=useState(true);
  return <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-red-600 selection:text-white">
    {loading&&<NetflixPreloader onComplete={()=>setLoading(false)}/>}
    <CustomCursor/><Hero/><About/><Expertise/><Skills/><Projects/><Contact/><Footer/>
  </main>;
}
