const searchIndex=[
 {t:'Home',d:'Risk Engineers Botswana homepage',u:'index.html'},
 {t:'About Us',d:'Company profile, values and leadership',u:'about.html'},
 {t:'Value Proposition',d:'Risk-aware decision making approach',u:'about.html#value-proposition'},
 {t:'Executive Team',d:'Paul Ramokgalo, Thatayaone Sesinyi',u:'about.html#leadership'},
 {t:'Testimonials',d:'What REB clients say',u:'about.html#testimonials'},
 {t:'Frequently Asked Questions',d:'Common risk management questions',u:'about.html#faq'},
 {t:'Projects',d:'REB proven track record: BPC, Premium Nickel, Botswana Oil, Ambatovy, Debswana',u:'projects.html'},
 {t:'Services',d:'Risk management and engineering services',u:'services.html'},
 {t:'Enterprise Risk Management',d:'ERM assessments, strategies and frameworks',u:'services.html#erm'},
 {t:'Business Continuity Management',d:'ERP, crisis communication, DRP and BCP',u:'services.html#bcm'},
 {t:'Risk Engineering & Insurance Advisory',d:'Risk surveys, loss prevention and financing',u:'services.html#engineering'},
 {t:'ESG Framework & Reporting',d:'Material ESG issues, risks and reporting',u:'services.html#esg'},
 {t:'Risk Management Training',d:'Risk capability and organisational culture',u:'services.html#training'},
 {t:'Integrated Risk Reporting',d:'Risk models, dashboards and scenario analysis',u:'services.html#reporting'},
 {t:'Team',d:'Full REB team members',u:'team.html'},
 {t:'Paul G. Ramokgalo',d:'Founder & Managing Director',u:'team.html#paul'},
 {t:'Thatayaone Sesinyi',d:'Chief Operations Officer',u:'team.html#thatayaone'},
 {t:'Tshepo Monare',d:'Electrical Engineer / Risk Consultant',u:'team.html#tshepo'},
 {t:'Sillas Molosiwa',d:'Mining Engineer / Risk Consultant',u:'team.html#sillas'},
 {t:'Chantal Moemedi',d:'Chemical Engineer / Risk Consultant',u:'team.html#chantal'},
 {t:'Resources',d:'Risk readiness checklist and mini risk assessment app',u:'resources.html'},
 {t:'Contact',d:'Contact REB or request a risk assessment',u:'contact.html'},
 {t:'Botswana Oil',d:'Business Continuity Management project',u:'projects.html#botswana-oil'},
 {t:'Botswana Power Corporation',d:'Strategic risk impact assessments',u:'projects.html#bpc'},
 {t:'Ambatovy Nickel & Cobalt Mine',d:'Risk engineering and insurance tender',u:'projects.html#ambatovy'},
 {t:'Debswana',d:'Orapa Cut 3 project risk management',u:'projects.html#debswana'},
 {t:'Premium Nickel Resources Botswana',d:'Risk-based plant and machinery valuation',u:'projects.html#premium-nickel'}
];
function initNav(){const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.main-nav');if(menu){menu.addEventListener('click',()=>{menu.classList.toggle('open');nav.classList.toggle('open')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');nav.classList.remove('open')}))}}
function initSearch(){document.querySelectorAll('.search-wrap').forEach(w=>{const i=w.querySelector('.site-search'),r=w.querySelector('.search-results');if(!i||!r)return;function render(){const q=i.value.trim().toLowerCase();if(q.length<2){r.classList.remove('open');r.innerHTML='';return}const hits=searchIndex.filter(x=>(x.t+' '+x.d).toLowerCase().includes(q)).slice(0,6);r.innerHTML=hits.length?hits.map(x=>`<a href="${x.u}"><strong>${x.t}</strong><span>${x.d}</span></a>`).join(''):'<a><strong>No results</strong><span>Try another search term.</span></a>';r.classList.add('open')}i.addEventListener('input',render);i.addEventListener('focus',render);document.addEventListener('click',e=>{if(!w.contains(e.target))r.classList.remove('open')});i.addEventListener('keydown',e=>{if(e.key==='Enter'){const a=r.querySelector('a[href]');if(a)location.href=a.href}})})}
function initFaq(){document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item'),was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));if(!was)item.classList.add('open')}))}
function initCarousel(){const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];if(!slides.length)return;let cur=0,t;function show(n){cur=(n+slides.length)%slides.length;slides.forEach((s,j)=>s.classList.toggle('active',j===cur));dots.forEach((d,j)=>d.classList.toggle('active',j===cur));clearInterval(t);t=setInterval(()=>show(cur+1),6500)};dots.forEach((d,j)=>d.addEventListener('click',()=>show(j)));document.querySelector('.prev')?.addEventListener('click',()=>show(cur-1));document.querySelector('.next')?.addEventListener('click',()=>show(cur+1));show(0)}
function initModals(){document.querySelectorAll('.member').forEach(m=>m.addEventListener('click',()=>{const id=m.dataset.modal;document.getElementById(id)?.classList.add('open');document.body.style.overflow='hidden'}));document.querySelectorAll('.close-modal,.modal').forEach(el=>el.addEventListener('click',e=>{if(el.classList.contains('modal')&&e.target!==el)return;document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}})}
function initContact(){
 const f=document.getElementById('contactForm');if(!f)return;
 const status=document.getElementById('formStatus');
 f.querySelectorAll('[required]').forEach(field=>field.addEventListener('input',()=>field.closest('.field')?.classList.remove('invalid')));
 f.addEventListener('submit',e=>{
  e.preventDefault();
  const honey=f.querySelector('.hp-field input');
  if(honey && honey.value)return; // honeypot tripped: silently drop likely spam
  let valid=true;
  f.querySelectorAll('[required]').forEach(field=>{
   const wrap=field.closest('.field');
   const ok=field.value.trim().length>0 && (field.type!=='email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));
   if(wrap)wrap.classList.toggle('invalid',!ok);
   if(!ok)valid=false;
  });
  if(!valid){status.textContent='Please complete the required fields correctly before submitting.';status.className='form-status show error';return}
  status.textContent='Submitting your enquiry…';status.className='form-status show';
  const ajaxUrl=f.action.replace('https://formsubmit.co/','https://formsubmit.co/ajax/');
  fetch(ajaxUrl,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)})
   .then(r=>{if(!r.ok)throw new Error('submit failed');return r.json()})
   .then(()=>{status.textContent='Thank you — your enquiry has been sent. REB will be in touch shortly.';status.className='form-status show success';f.reset()})
   .catch(()=>{status.textContent='Something went wrong sending your enquiry. Please email info@reb.co.bw directly.';status.className='form-status show error'});
 });
}
function initMiniApp(){
 const start=document.getElementById('miniAppStart');if(!start)return;
 const progressBar=document.getElementById('miniAppProgressBar');
 const question=document.getElementById('miniAppQuestion');
 start.addEventListener('click',()=>{
  // UI shell only — REB's actual questions and scoring logic plug in here.
  start.disabled=true;start.textContent='Assessment In Progress…';
  progressBar.style.width='15%';
  question.textContent='Question content and scoring logic to be supplied by REB.';
 });
}
document.addEventListener('DOMContentLoaded',()=>{initNav();initSearch();initFaq();initCarousel();initModals();initContact();initMiniApp();document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear())});
