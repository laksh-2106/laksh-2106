import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const items=[
['01','LINUX OPERATIONS','Linux Administration','Working with Linux servers, users and permissions, services, processes, storage, logs, SSH and practical troubleshooting.'],
['02','CLOUD INFRASTRUCTURE','AWS Cloud','Hands-on learning and implementation across EC2, EBS, VPC, IAM, S3, CloudWatch, networking and cloud operations.'],
['03','OBSERVABILITY','Monitoring & Automation','Building monitoring knowledge with Zabbix, templates, triggers, discovery, agents, alerting and API-based host onboarding.'],
['04','DELIVERY & AUTOMATION','DevOps Engineering','Developing practical skills in Git, CI/CD, Bash, Python, Docker, Kubernetes, Terraform and Ansible.']
];
export default function Expertise(){
 const root=useRef(null);
 useEffect(()=>{const ctx=gsap.context(()=>gsap.fromTo('.expertise-card',{y:60,opacity:0},{y:0,opacity:1,duration:.75,stagger:.16,ease:'power3.out',scrollTrigger:{trigger:root.current,start:'top 72%'}}),root);return()=>ctx.revert();},[]);
 return <section id="expertise" ref={root} className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-12 md:py-28"><div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-700/10 blur-[140px]"/><div className="relative mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.28em] text-red-500">Episode 02 · Core Competencies</p><h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Technical <span className="text-red-600">Capabilities.</span></h2></div><p className="max-w-md text-sm leading-7 text-white/55">My focus is on reliable infrastructure, clear operational visibility and practical automation.</p></div><div className="grid gap-4">{items.map(([n,tag,title,desc])=><article key={n} className="expertise-card group relative grid gap-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171115] to-[#101014] p-7 transition hover:border-red-600/50 md:grid-cols-12 md:items-center md:p-9"><span className="absolute right-6 top-2 font-display text-6xl font-bold text-white/[.035]">{n}</span><div className="md:col-span-4"><span className="rounded border border-red-600/25 bg-red-600/10 px-2.5 py-1 font-mono text-[9px] tracking-widest text-red-400">{tag}</span><h3 className="mt-4 font-display text-2xl font-semibold uppercase md:text-3xl group-hover:text-red-500">{title}</h3></div><p className="text-sm leading-7 text-white/60 md:col-span-8">{desc}</p></article>)}</div></div></section>;
}
