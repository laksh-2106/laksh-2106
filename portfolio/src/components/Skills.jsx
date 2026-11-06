import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const groups=[
{title:'Cloud & Linux',tag:'INFRASTRUCTURE',desc:'Core operating system and AWS infrastructure concepts used in cloud operations.',skills:['AWS','Linux','Amazon Linux','RHEL','Ubuntu','EC2','EBS','VPC','IAM','S3','Nginx']},
{title:'Monitoring & Observability',tag:'VISIBILITY',desc:'Monitoring hosts, understanding metrics and turning events into actionable alerts.',skills:['Zabbix 7.x','Zabbix Agent','Agent 2','Templates','Triggers','Discovery','SNMP','CloudWatch']},
{title:'DevOps & Automation',tag:'DELIVERY',desc:'Tools and practices for repeatable deployment, infrastructure and operational tasks.',skills:['Git','GitHub Actions','Jenkins','Docker','Kubernetes','Terraform','Ansible','Bash']},
{title:'Development',tag:'APPLICATIONS',desc:'Full-stack technologies used to build dashboards, APIs and responsive applications.',skills:['React','Node.js','Express','TypeScript','JavaScript','MongoDB','MySQL','Tailwind CSS']},
{title:'Scripting & Networking',tag:'TROUBLESHOOTING',desc:'Scripting and networking fundamentals for diagnostics, integrations and automation.',skills:['Python','Bash','TCP/IP','DNS','DHCP','SSH','curl','tcpdump','nslookup']}
];
export default function Skills(){
 const root=useRef(null);
 useEffect(()=>{const ctx=gsap.context(()=>gsap.fromTo('.skill-panel',{y:45,opacity:0,scale:.98},{y:0,opacity:1,scale:1,duration:.7,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:root.current,start:'top 75%'}}),root);return()=>ctx.revert();},[]);
 return <section id="skills" ref={root} className="relative overflow-hidden bg-[#0b0b0f] px-6 py-24 md:px-12 md:py-28"><div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[.025]"><span className="font-display text-[28vw] font-bold">SKILLS</span></div><div className="relative mx-auto max-w-7xl"><div className="mb-12"><p className="mb-4 font-mono text-[10px] uppercase tracking-[.28em] text-red-500">Episode 03 · Technical Universe</p><h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Tools of the <span className="text-red-600">Trade.</span></h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{groups.map((g,i)=><article key={g.title} className="skill-panel group rounded-2xl border border-white/10 bg-[#15151b]/90 p-7 transition hover:border-red-600/50"><div className="flex justify-between"><span className="font-mono text-[9px] tracking-[.18em] text-red-500">{g.tag}</span><span className="font-mono text-xs text-white/25">0{i+1} / 05</span></div><h3 className="mt-7 font-display text-2xl font-semibold uppercase group-hover:text-red-500">{g.title}</h3><p className="mt-3 min-h-14 text-xs leading-6 text-white/50">{g.desc}</p><div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">{g.skills.map(s=><span key={s} className="rounded border border-white/10 bg-white/[.04] px-2.5 py-1.5 font-mono text-[10px] text-white/70 hover:border-red-600/40">{s}</span>)}</div></article>)}</div></div></section>;
}
