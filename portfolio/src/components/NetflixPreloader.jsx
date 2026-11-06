import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
export default function NetflixPreloader({onComplete}){
  const root=useRef(null),content=useRef(null);
  useEffect(()=>{
    const tl=gsap.timeline({onComplete:()=>onComplete?.()});
    tl.fromTo(content.current,{opacity:0,scale:.92,filter:'blur(10px)'},{opacity:1,scale:1,filter:'blur(0)',duration:.7,ease:'power3.out'})
      .to(content.current,{opacity:0,scale:1.04,filter:'blur(8px)',duration:.4,delay:.35})
      .to(root.current,{opacity:0,duration:.35});
    return ()=>tl.kill();
  },[onComplete]);
  return <div ref={root} className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"><div ref={content} className="flex flex-col items-center gap-5"><div className="font-display text-7xl font-bold tracking-[-.08em]">LA<span className="text-red-600">.</span></div><div className="h-[2px] w-40 bg-white/10"><div className="h-full w-1/2 animate-pulse bg-red-600"/></div><p className="font-mono text-[9px] tracking-[.35em] text-white/45">A LAKSHAY ATTRI ORIGINAL</p></div></div>;
}
