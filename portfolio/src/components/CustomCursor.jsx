import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
export default function CustomCursor(){
  const dot=useRef(null),ring=useRef(null),glow=useRef(null);
  useEffect(()=>{
    if(window.matchMedia('(pointer:coarse)').matches)return;
    const xd=gsap.quickTo(dot.current,'x',{duration:.05}),yd=gsap.quickTo(dot.current,'y',{duration:.05});
    const xr=gsap.quickTo(ring.current,'x',{duration:.16}),yr=gsap.quickTo(ring.current,'y',{duration:.16});
    const move=e=>{xd(e.clientX-5);yd(e.clientY-5);xr(e.clientX-20);yr(e.clientY-20);glow.current.style.transform=`translate3d(${e.clientX-250}px,${e.clientY-250}px,0)`;};
    const enter=()=>gsap.to([dot.current,ring.current],{opacity:1,scale:1,duration:.2});
    const leave=()=>gsap.to([dot.current,ring.current],{opacity:0,scale:.65,duration:.2});
    window.addEventListener('mousemove',move);document.addEventListener('mouseenter',enter);document.addEventListener('mouseleave',leave);
    return()=>{window.removeEventListener('mousemove',move);document.removeEventListener('mouseenter',enter);document.removeEventListener('mouseleave',leave);};
  },[]);
  return <><div ref={glow} className="cursor-spotlight pointer-events-none fixed left-0 top-0 z-[9997] h-[500px] w-[500px] rounded-full opacity-40 blur-[100px]" style={{background:'radial-gradient(circle,rgba(229,9,20,.18),transparent 68%)'}}/><div ref={dot} className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-red-600 opacity-0 shadow-[0_0_16px_#e50914]"/><div ref={ring} className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-red-500/70 opacity-0"/></>;
}
