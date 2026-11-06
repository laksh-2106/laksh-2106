import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
const photo='https://avatars.githubusercontent.com/u/183363480?v=4';
const words=['LINUX ADMINISTRATION','AWS CLOUD INFRASTRUCTURE','MONITORING & AUTOMATION','DEVOPS ENGINEERING'];
export default function Hero(){
  const scope=useRef(null),portrait=useRef(null),glare=useRef(null);
  useEffect(()=>{const ctx=gsap.context(()=>{gsap.timeline({defaults:{ease:'power4.out'}}).fromTo('header',{y:-25,opacity:0},{y:0,opacity:1,duration:.7}).fromTo('.hero-in',{y:35,opacity:0,filter:'blur(8px)'},{y:0,opacity:1,filter:'blur(0)',duration:.8,stagger:.12},'-.35').fromTo(portrait.current,{scale:.82,opacity:0,rotationY:18},{scale:1,opacity:1,rotationY:0,duration:1.1,ease:'back.out(1.25)'},'-.65');},scope);return()=>ctx.revert();},[]);
  const tilt=e=>{if(window.matchMedia('(pointer:coarse)').matches)return;const r=portrait.current.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to(portrait.current,{rotationY:x*13,rotationX:y*-13,duration:.4});gsap.to(glare.current,{x:x*45,y:y*45,duration:.35});};
  const reset=()=>gsap.to(portrait.current,{rotationY:0,rotationX:0,duration:.5});
  return <section id="home" ref={scope} className="relative flex min-h-[760px] h-screen max-h-[980px] flex-col justify-between overflow-hidden bg-[#050505]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_45%,rgba(100,24,39,.34),transparent_40%),linear-gradient(100deg,#050505_12%,#09080d_65%,#160b11)]"/>
    <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-[.055]"><div className="animate-marquee whitespace-nowrap">{[...words,...words].map((w,i)=><span key={i} className="mx-8 font-display text-[13vw] font-bold text-red-500">{w} ·</span>)}</div></div>
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12">
      <a href="#home" className="font-display text-3xl font-bold text-red-600">LA<span className="text-white">.</span></a>
      <nav className="hidden gap-7 font-mono text-[11px] uppercase tracking-widest text-white/70 md:flex">{[['About','#about'],['Expertise','#expertise'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']].map(([t,h])=><a key={t} href={h} className="hover:text-red-500">{t}</a>)}</nav>
      <a href="mailto:attrilakshay07@gmail.com" className="rounded border border-red-600/60 bg-red-600/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-red-600">Hire Me</a>
    </header>
    <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-14 pt-4 md:px-12 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <div className="hero-in mb-6 inline-flex items-center gap-3 rounded border border-red-600/35 bg-black/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[.2em] text-white/80"><span className="h-2 w-2 animate-pulse rounded-full bg-red-600"/><span className="text-red-500">Linux & Cloud Engineer Original</span><span className="text-white/35">|</span><span>OculusIT</span></div>
        <div className="hero-in mb-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest text-white/60"><span className="rounded bg-red-600 px-2 py-1 font-bold text-white">AWS · LINUX · DEVOPS</span><span className="rounded border border-white/20 px-2 py-1">Monitoring</span><span className="rounded border border-white/20 px-2 py-1">Automation</span></div>
        <h1 className="hero-in font-display text-[clamp(4rem,10vw,8.7rem)] font-bold uppercase leading-[.84] tracking-[-.055em]">LAKSHAY<br/><span className="text-glow text-red-600">ATTRI</span></h1>
        <div className="hero-in mt-7 flex flex-wrap gap-3 font-mono text-xs text-white/65"><span className="font-bold text-emerald-400">BUILD · MONITOR · AUTOMATE</span><span>•</span><span>Linux / AWS / Zabbix</span></div>
        <p className="hero-in mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">Building reliable infrastructure, automating operations and monitoring systems. Turning complex cloud and Linux environments into stable, observable experiences.</p>
        <div className="hero-in mt-8 flex flex-wrap gap-3"><a href="#projects" className="rounded bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black transition hover:scale-105 hover:bg-red-600 hover:text-white">▶ Explore Projects</a><a href="#about" className="rounded border border-white/25 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-red-500">About Me ↗</a></div>
      </div>
      <div className="flex justify-center lg:col-span-6 lg:justify-end"><div className="relative w-[min(75vw,390px)]" onMouseMove={tilt} onMouseLeave={reset}><div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-600/50 via-rose-700/10 to-purple-700/20 blur-3xl"/><div ref={portrait} className="relative overflow-hidden rounded-[1.6rem] border border-red-500/35 bg-[#15151c] p-3 shadow-[0_35px_90px_rgba(0,0,0,.8)]"><div ref={glare} className="pointer-events-none absolute -inset-1/2 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent"/><div className="absolute left-6 top-6 z-30 rounded bg-red-600 px-3 py-1 font-mono text-[9px] font-bold tracking-widest">FEATURED ENGINEER</div><img src={photo} alt="Lakshay Attri" className="h-[420px] w-full rounded-xl object-cover object-center md:h-[500px]"/><div className="absolute inset-x-3 bottom-3 rounded-b-xl bg-gradient-to-t from-black/95 via-black/45 to-transparent p-6 pt-20"><p className="font-display text-2xl font-semibold uppercase">Lakshay Attri</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[.22em] text-red-300">Linux · Cloud · Automation</p></div></div></div></div>
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-between border-t border-white/10 px-6 py-5 font-mono text-[9px] uppercase tracking-[.2em] text-white/35 md:px-12"><span>ENGINEERED FOR RELIABILITY</span><span>PORTFOLIO · 2026</span></div>
  </section>;
}
