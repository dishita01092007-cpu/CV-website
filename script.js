if(!CanvasRenderingContext2D.prototype.roundRect){CanvasRenderingContext2D.prototype.roundRect=function(a,b,c,d){this.rect(a,b,c,d)}}
/* ===== Résumé content: edit text here =====
   g = who it matters most to: 'c' consulting, 'f' finance, 'b' both. Matching items rise to the top and get highlighted. */
const I=(t,w,l,g='b')=>({t,w,l,g});
const chips=a=>`<div class="chips">${a.map(x=>`<span>${x}</span>`).join('')}</div>`;
const stat=(b,s)=>`<div><b>${b}</b><small>${s}</small></div>`;
let track='a';

const stops=[
{label:'Kickoff',title:"Hi, I'm Dishita",take:'Dual-degree student at IIM Bangalore and Christ University who turns messy problems into structured answers.',
 pre:()=>`<p>I work across strategy, credit and financial analysis, and I like building things, from client decks to live websites.</p><div class="stats">${track==='f'?stat('3.90','CGPA out of 4.0')+stat('10+','senior leaders briefed (AU SFB)')+stat('₹700 Cr','AUM roadmap (case)')+stat('Feb 2027','CFA Level 1'):stat('3.90','CGPA out of 4.0')+stat('4','client decks in 4 hours')+stat('400+','applicants evaluated')+stat('4th','nationally, FedEx TGELF')}</div>`},
{label:'Diagnostic',title:'Education',take:'A strong quantitative base: 3.90 / 4.0 at IIM Bangalore × Christ, and 93.6% in Class XII with Applied Mathematics.',items:[
 I('Dual degree: BBA Digital Business &amp; Entrepreneurship + BBA (Hons./Hons. with Research)','2025-28 · IIM Bangalore &amp; Christ University',['CGPA 3.90 / 4.0']),
 I('Class XII, Commerce with Applied Mathematics','2025 · Dharav High School, Jaipur · CBSE',['93.6%']),
 I('Class X','2023 · Dharav High School, Jaipur · CBSE',['91.17%'])]},
{label:'Analysis',title:'Work experience',take:'Turned regulatory and credit complexity into recommendations for 10+ senior leaders.',items:[
 I('Summer Intern, Sales &amp; Credit · AU Small Finance Bank, Jaipur','May 2026',['Analyzed RBI mandates and credit policy frameworks for NBFC-FinTech lending partnerships; turned risk assessments and commercial implications into an executive deck for 10+ senior leaders.','Mapped end-to-end appraisal workflows across retail and gold loan portfolios; identified bottlenecks and proposed fixes to reduce turnaround time (TAT).'],'f'),
 I('Intern, Sponsorship &amp; Operations · Arogya Foundation of India, Bengaluru','Dec 2025 - Feb 2026',['Planned logistics and budget for a 2-day rural immersion programme: 50+ students, 5+ farmers, 10+ community professionals.','Contributed to renovating an entire government school and led outreach initiatives.'],'c')]},
{label:'Synthesis',title:'Leadership &amp; positions',take:'Led and scaled teams: 400+ applicants evaluated, a 150+ creator pipeline and 20+ sponsors secured.',items:[
 I('Senior Coordinator, Industry Outreach, Partnership Cell · IIMB','Apr 2026 - Present',['Built a pipeline of 150+ creators; closed 3 high-impact brand partnerships within 7 days.','Pitched 70+ institutions, securing Hansraj, BITS Pilani and SRCC.','Standardized live-project selection workflows for 1,000+ applicants.','Led evaluation of 400+ applicants with competency rubrics and case studies to recruit 10+ senior coordinators and coordinators.'],'c'),
 I('Financial Research Analyst · AQuant, Christ University','Jul 2025 - Present',['Financial statement analysis, competitive benchmarking and market sizing for SME advisory mandates; built cost-optimization and margin-expansion roadmaps.'],'f'),
 I('CUSBMA, Christ University','Jun 2025 - Present',['Scoring: standardized real-time rubrics and tabulation with zero tabulation error.','Sponsorship: liaised with 200+ partners to secure 20+ sponsors; Belgian Waffle Co. activation drove ~20% surge in stall revenue.']),
 I('Design Team Member · Finometrics, Christ University','Jul 2025 - Present',['Designed content for a monthly magazine with 20,000+ readers; supported recruitment and onboarding.']),
 I('House Captain, Student Council · Dharav High School','May 2021 - Mar 2025',['Led 400+ students for 4 consecutive years; organized events and mentored juniors.'])]},
{label:'Working Session',title:'Try a 30-second case',puzzle:1,take:'Structure first, numbers second.',
 pre:()=>`<p>Roughly how many people in Bengaluru might take a gold loan in a year? Pick your first move.</p>
 <div class="opts"><button data-o="a">Start from Bengaluru's population and narrow down to likely borrowers</button><button data-o="b">Count gold loan branches and multiply by customers per branch</button><button data-o="c">Pick a number that sounds right and defend it</button></div>
 <div class="fb" id="fb" aria-live="polite">Choose an option to see how I would think about it.</div>
 <div class="flow"><span>Population</span><em>→</em><span>Adults</span><em>→</em><span>Gold-owning households</span><em>→</em><span>Share who borrow</span><em>→</em><span>Loans per year</span></div>
 <p>Then cross-check with the supply side: branches × customers per branch. Assumptions stated out loud, so they can be challenged.</p>`},
{label:'Recommendation',title:'Projects, cases &amp; research',take:'Delivered 4 client decks in 4 hours, and built roadmaps for two financial-sector cases.',items:[
 I('Zero-Capital Micro-Consultancy','Apr 2026',['Market sizing, competitor benchmarking and digital strategy decks for 4 commercial clients within a 4-hour delivery window at 100% net margin.'],'c'),
 I('₹250 Art Venture','Mar 2026',['Field study on price elasticity and customer segmentation on Church Street: 130% ROI and 56.5% operating margin in 30 minutes via dynamic product bundling.'],'c'),
 I('EcoDhaga Case Study','Jul 2026',['Field study of NSRCEL-incubated circular textile startup, mapping collection, ThriftEx resale and upcycling flows.'],'c'),
 I('Vridhi Housing Finance · case','Case competition',['Engineered a ₹700 Cr AUM expansion roadmap and a 5-tier debt syndication strategy to resolve a 134.5% CAR constraint, modeling a turnaround to a 2.33% ROTA recovery.'],'f'),
 I('Ditto Insurance · case','Case competition',['Market entry and regulatory disruption analysis after 100% FDI liberalization; built an integrated 3-year operating and financial forecast to test growth sustainability.'],'f'),
 I('Frenchloveria Website','May 2026',['Built and deployed a responsive site for a Jaipur French-language startup, structuring 6 DELF curriculum levels.']),
 I('The Climate Economy (research report)','IIM Bangalore × SRCC Commerce Society',['Co-published on climate change, economic policy and the net-zero transition.'])]},
{label:'Toolkit',title:'Skills &amp; certifications',take:'Frameworks for the thinking, Excel and Power BI for the proof.',
 pre:()=>`<h3 class="sec">Consulting methods</h3>${chips(['Root-Cause Analysis','Hypothesis-Driven Problem Solving','Competitive Benchmarking','Go-to-Market Strategy','Business Strategy'])}
<h3 class="sec">Core</h3>${chips(['Case Analysis','Unit Economics','Cost-Benefit Analysis','Market Sizing','Financial Analysis'])}
<h3 class="sec">Tools</h3>${chips(['MS Excel','Google Sheets','MS PowerPoint','Power BI','Web development','Git/GitHub','Canva'])}
<h3 class="sec">Professional</h3>${chips(['Presentation','Project Management','Team Leadership','Collaboration','Stakeholder Management'])}
<h3 class="sec">Certifications</h3><ul><li>CFA Level 1, February 2027</li><li>Forage: Goldman Sachs Operations and BCG Strategy Consulting job simulations</li><li>McKinsey Forward Program (ongoing)</li></ul>`},
{label:'Next Steps',title:'Recommendation: hire Dishita',take:'Three reasons, then next steps.',
 pre:()=>`<ol><li><b>Structured problem solver.</b> 4 client decks in 4 hours, plus case work on Vridhi Housing Finance and Ditto Insurance.</li><li><b>Credible in financial settings.</b> Credit-policy deck for 10+ senior leaders at AU Small Finance Bank; margin roadmaps at AQuant.</li><li><b>Leads and scales.</b> 400+ applicants evaluated, 150+ creators sourced, 20+ sponsors secured, 3.90 CGPA.</li></ol>
<p><b>Also:</b> ranked 4th nationally at the FedEx TGELF International Trade Challenge; Best Delegate (4x) in Model United Nations; 2nd place, RIEDU International Painting Contest.</p>
<p><b>Next steps:</b> a 20-minute conversation. <a class="ghost" href="mailto:ms.dishita197@outlook.com">ms.dishita197@outlook.com</a> <a class="ghost" href="tel:+917014326632">+91 7014326632</a> <a class="ghost" href="Dishita_Agarwal_Resume.pdf" target="_blank" rel="noopener">Résumé PDF</a></p>`}
];

const rank=i=>i.g===track?0:i.g==='b'?1:2;
function body(s){let it=[...(s.items||[])];if(track!=='a')it.sort((a,b)=>rank(a)-rank(b));
 return `<p class="take">${s.take}</p>`+(s.pre?s.pre():'')+it.map(i=>`<div class="item${track!=='a'&&i.g===track?' hl':''}"><h3>${i.t}</h3><p class="when">${i.w}</p><ul>${i.l.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}
const fbText={a:'Strong. Top-down, with every assumption visible: population, then adults, then gold-owning households, then the share who borrow against gold. Then sanity-check with the supply side.',b:'A good cross-check. Branch counts show capacity, not demand, so I would use this to validate a top-down estimate, not to start.',c:'Risky. A number with no structure cannot be challenged or improved. Break the question into drivers first.'};

/* ===== Game ===== */
const $=s=>document.querySelector(s),cv=$('#cv'),x=cv.getContext('2d');
const N=stops.length,SEG=2300,START=700,gateD=i=>START+i*SEG;
const CO=['Scope creep','Pushback','Data gap','Tight deadline','Silo'],FI=['Rate hike','NPA spike','Liquidity gap','Inflation','Volatility'];
let W,H,rw,rx,cw,ch,cy,dist=0,speed=6,pv=100,ins=0,cp=0,mode='menu',carX,tx,inv=0,flash=0,objs=[],prev='menu',auto=false;
const keys={l:0,r:0},laneX=k=>rx+rw*(.18+.32*k);

$('#ticker').innerHTML='<div>'+[...Array(2)].map(()=>['CGPA 3.90 / 4.0 ▲','4 client decks in 4 hours ▲','400+ applicants evaluated ▲','150+ creator pipeline ▲','20+ sponsors secured ▲','70+ institutions pitched ▲','₹700 Cr AUM roadmap (case) ▲','FedEx TGELF national rank 4 ▲','CFA Level 1 Feb 2027 ◆'].map(t=>`<span>${t}</span>`).join('')).join('')+'</div>';

function resize(){const d=devicePixelRatio||1;W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);rw=Math.min(W*.94,480);rx=(W-rw)/2;cw=rw*.13;ch=cw*1.9;cy=H*.74;carX=tx=W/2}
addEventListener('resize',resize);resize();

function build(){objs=[];let s=7;const r=()=>(s=s*16807%2147483647)/2147483647;
 const pool=track==='c'?CO.concat(FI[0]):track==='f'?FI.concat(CO[0]):CO.concat(FI);
 for(let d=START+450;d<gateD(N-1)-450;d+=300){const m=(d-START)%SEG;if(m<450||m>SEG-450)continue;
  const sl=[0,1,2].sort(()=>r()-.5),n=r()<.45?2:1;
  sl.slice(0,n).forEach(k=>objs.push({d,k,t:'r',l:pool[Math.floor(r()*pool.length)]}));
  if(r()<.85)for(let j=1;j<=3;j++)objs.push({d:d+60+j*50,k:sl[n],t:'c'})}}
function hud(){$('#pv').textContent=Math.round(pv);$('#ins').textContent=ins;
 $('#route').innerHTML=stops.map((_,i)=>`<i class="${i<cp?'done':i===cp?'now':''}"></i>`).join('')}
function begin(t){track=t;dist=0;cp=0;pv=100;ins=0;speed=6;inv=flash=0;carX=tx=W/2;build();hud();$('#start').hidden=true;$('#hud').hidden=false;mode='play'}
document.querySelectorAll('.pick').forEach(b=>b.onclick=()=>begin(b.dataset.t));

const sheet=(h,b,f)=>`<div class="sheet">${h}<div class="body">${b}</div><footer>${f}</footer></div>`;
function openCard(i){mode='card';const s=stops[i],last=i===N-1,c=$('#card');
 c.innerHTML=sheet(`<header><p>Phase ${i+1} of ${N} · ${s.label}</p><h2>${s.title}</h2></header>`,body(s),`<button id="next" class="btn">${last?'Drive again':'Continue driving'}</button>`);c.hidden=false;
 if(s.puzzle)c.querySelectorAll('.opts button').forEach(b=>b.onclick=()=>{c.querySelectorAll('.opts button').forEach(o=>o.classList.remove('sel'));b.classList.add('sel');$('#fb').textContent=fbText[b.dataset.o]});
 $('#next').onclick=()=>{c.hidden=true;cp++;hud();if(last){mode='menu';$('#hud').hidden=true;$('#start').hidden=false}else{mode='play';speed=4}};$('#next').focus()}
function openQuick(){prev=mode;mode='card';const q=$('#qv');
 q.innerHTML=sheet('<header><p>Full résumé</p><h2>Dishita Agarwal</h2></header>',stops.filter(s=>!s.puzzle).map(s=>`<h3 class="sec">${s.title}</h3>${body(s)}`).join(''),`<button id="qc" class="btn">${prev==='menu'?'Back':'Back to the game'}</button>`);q.hidden=false;
 $('#qc').onclick=()=>{q.hidden=true;mode=prev}}
['#quick','#quick2'].forEach(s=>$(s).onclick=openQuick);
$('#auto').onclick=()=>{auto=!auto;$('#auto').textContent='Autopilot: '+(auto?'on':'off');$('#auto').setAttribute('aria-pressed',auto)};

addEventListener('pointermove',e=>{if(mode==='play'&&!auto)tx=e.clientX});
addEventListener('keydown',e=>{const l=e.key==='ArrowLeft'||e.key==='a',r=e.key==='ArrowRight'||e.key==='d';if(l||r){if(auto)$('#auto').click();keys.l=l?1:keys.l;keys.r=r?1:keys.r}});
addEventListener('keyup',e=>{if(e.key==='ArrowLeft'||e.key==='a')keys.l=0;if(e.key==='ArrowRight'||e.key==='d')keys.r=0});

function pilot(){const bl=[0,0,0],co=[0,0,0];
 for(const o of objs){if(o.x)continue;const a=o.d-dist;if(a<-60||a>380)continue;o.t==='r'?bl[o.k]=1:co[o.k]++}
 const cur=[0,1,2].reduce((a,k)=>Math.abs(laneX(k)-carX)<Math.abs(laneX(a)-carX)?k:a,0);
 const ok=[0,1,2].filter(k=>!bl[k]).sort((a,b)=>co[b]-co[a]||Math.abs(a-cur)-Math.abs(b-cur));
 if(ok.length)tx=laneX(ok[0])}

function step(dt){
 if(mode==='menu'){dist=(dist+2*dt)%2000;return}
 if(mode!=='play')return;
 if(auto)pilot();else{if(keys.l)tx-=10*dt;if(keys.r)tx+=10*dt}
 tx=Math.max(rx+cw/2+8,Math.min(rx+rw-cw/2-8,tx));
 carX+=(tx-carX)*Math.min(1,.2*dt);
 speed+=(6.5-speed)*.03*dt;dist+=speed*dt;inv=Math.max(0,inv-dt);flash=Math.max(0,flash-dt);
 for(const o of objs){if(o.x)continue;const sy=cy-(o.d-dist);if(Math.abs(sy-cy)>90)continue;const ox=laneX(o.k),dy=Math.abs(sy-cy);
  if(o.t==='c'){if(dy<ch/2+10&&Math.abs(ox-carX)<cw/2+14){o.x=1;ins++;pv+=1;hud()}}
  else if(!inv&&dy<ch/2+16&&Math.abs(ox-carX)<(rw*.27+cw)/2-3){o.x=1;inv=60;flash=14;speed=2.5;pv=Math.max(0,pv-5);hud()}}
 if(cp<N&&dist>=gateD(cp))openCard(cp)}

function draw(){
 x.fillStyle='#0A1628';x.fillRect(0,0,W,H);
 const r0=Math.floor((dist+cy-H)/70)-1,r1=Math.floor((dist+cy)/70)+1;
 for(let r=r0;r<=r1;r++){const sy=cy-(r*70-dist);
  for(let s=0;s<2;s++){const w=s?W-rx-rw:rx;if(w<50)continue;
   const h=Math.abs((r*9301+s*49297+7)%233)/233,cx=(s?rx+rw+w/2:w/2)+(h-.5)*w*.5,bh=16+h*34;
   x.globalAlpha=.32;x.strokeStyle=x.fillStyle=h>.45?'#2E9E6B':'#C0444F';x.lineWidth=2;
   x.beginPath();x.moveTo(cx,sy-38);x.lineTo(cx,sy+38);x.stroke();x.fillRect(cx-7,sy-bh/2,14,bh);x.globalAlpha=1}}
 x.fillStyle='#13233D';x.fillRect(rx,0,rw,H);
 x.fillStyle='#C8A24A';x.fillRect(rx-4,0,4,H);x.fillRect(rx+rw,0,4,H);
 x.fillStyle='rgba(244,241,232,.3)';
 for(let y=dist%70-70;y<H;y+=70){x.fillRect(rx+rw/3-1.5,y,3,34);x.fillRect(rx+rw*2/3-1.5,y,3,34)}
 x.textAlign='center';x.textBaseline='middle';
 for(let i=0;i<N;i++){const sy=cy-(gateD(i)-dist);if(sy<-40||sy>H+40)continue;
  x.fillStyle='#C8A24A';x.fillRect(rx-4,sy-15,rw+8,30);
  x.fillStyle='#0A1628';x.font='600 13px "IBM Plex Mono",monospace';x.fillText(`${i+1}/${N}  ${stops[i].label}`,W/2,sy)}
 for(const o of objs){if(o.x)continue;const sy=cy-(o.d-dist);if(sy<-40||sy>H+40)continue;const ox=laneX(o.k);
  if(o.t==='c'){x.fillStyle='#C8A24A';x.beginPath();x.arc(ox,sy,11,0,7);x.fill();x.fillStyle='#0A1628';x.font='600 13px "IBM Plex Mono",monospace';x.fillText('i',ox,sy+1)}
  else{const w=rw*.27;x.fillStyle='#C0444F';x.fillRect(ox-w/2,sy-20,w,40);
   x.fillStyle='#8c2c36';for(let k=-w/2;k<w/2;k+=16)x.fillRect(ox+k,sy-20,8,5),x.fillRect(ox+k+8,sy+15,8,5);
   x.fillStyle='#F4F1E8';x.font='600 11px "IBM Plex Mono",monospace';x.fillText(o.l,ox,sy)}}
 if(!(inv>0&&Math.floor(inv/5)%2)){const px=carX-cw/2,py=cy-ch/2;
  x.fillStyle='#050c18';[[-4,.14],[cw-2,.14],[-4,.68],[cw-2,.68]].forEach(([a,b])=>x.fillRect(px+a,py+ch*b,6,ch*.2));
  x.fillStyle='#F4F1E8';x.beginPath();x.roundRect(px,py,cw,ch,8);x.fill();
  x.fillStyle='#C8A24A';x.fillRect(carX-3,py,6,ch);
  x.fillStyle='#0A1628';x.beginPath();x.roundRect(px+4,py+ch*.28,cw-8,ch*.2,3);x.fill();x.fillRect(px+5,py+ch*.72,cw-10,ch*.1)}
 if(flash>0){x.fillStyle=`rgba(192,68,79,${flash/40})`;x.fillRect(0,0,W,H)}}
let last=performance.now();
(function loop(n){const dt=Math.min(2.5,(n-last)/16.67);last=n;step(dt);draw();requestAnimationFrame(loop)})(last);
build();
