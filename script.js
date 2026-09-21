const searchIndex=[
 {t:'Home',d:'Risk Engineers Botswana homepage',u:'index.html'},
 {t:'About Us',d:'Company profile, values and leadership',u:'about.html'},
 {t:'Value Proposition',d:'Risk-aware decision making approach',u:'about.html#value-proposition'},
 {t:'Executive Team',d:'Paul Ramokgalo, Mareledi Fantan, Thatayaone Sesinyi',u:'about.html#leadership'},
 {t:'Frequently Asked Questions',d:'Common risk management questions',u:'about.html#faq'},
 {t:'Services',d:'Risk management and engineering services',u:'services.html'},
 {t:'Enterprise Risk Management',d:'ERM assessments, strategies and frameworks',u:'services.html#erm'},
 {t:'Business Continuity Management',d:'ERP, crisis communication, DRP and BCP',u:'services.html#bcm'},
 {t:'Risk Engineering & Insurance Advisory',d:'Risk surveys, loss prevention and financing',u:'services.html#engineering'},
 {t:'ESG Framework & Reporting',d:'Material ESG issues, risks and reporting',u:'services.html#esg'},
 {t:'Risk Management Training',d:'Risk capability and organisational culture',u:'services.html#training'},
 {t:'Integrated Risk Reporting',d:'Risk models, dashboards and scenario analysis',u:'services.html#reporting'},
 {t:'Team',d:'Full REB team members',u:'team.html'},
 {t:'Paul G. Ramokgalo',d:'Founder & Managing Director',u:'team.html#paul'},
 {t:'Mareledi M. Fantan',d:'Executive Chairman',u:'team.html#fantan'},
 {t:'Thatayaone Sesinyi',d:'Chief Operations Officer',u:'team.html#thatayaone'},
 {t:'Tshepo Monare',d:'Electrical Engineer / Risk Consultant',u:'team.html#tshepo'},
 {t:'Sillas Molosiwa',d:'Mining Engineer / Risk Consultant',u:'team.html#sillas'},
 {t:'Chantal Moemedi',d:'Chemical Engineer / Risk Consultant',u:'team.html#chantal'},
 {t:'Tevin Ditshweu',d:'Mechanical & Energy Engineer / Risk Consultant',u:'team.html#tevin'},
 {t:'Resources',d:'Risk readiness tools',u:'resources.html'},
 {t:'Contact',d:'Contact REB or request a risk assessment',u:'contact.html'},
 {t:'Botswana Oil',d:'Business Continuity Management project',u:'index.html#track-record'},
 {t:'Botswana Power Corporation',d:'Strategic risk impact assessments',u:'index.html#track-record'},
 {t:'Ambatovy Nickel & Cobalt Mine',d:'Risk engineering and insurance tender',u:'index.html#track-record'},
 {t:'Debswana',d:'Orapa Cut 3 project risk management',u:'index.html#track-record'}
];
function initNav(){const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.main-nav');if(menu){menu.addEventListener('click',()=>{menu.classList.toggle('open');nav.classList.toggle('open')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');nav.classList.remove('open')}))}}
function initSearch(){document.querySelectorAll('.search-wrap').forEach(w=>{const i=w.querySelector('.site-search'),r=w.querySelector('.search-results');if(!i||!r)return;function render(){const q=i.value.trim().toLowerCase();if(q.length<2){r.classList.remove('open');r.innerHTML='';return}const hits=searchIndex.filter(x=>(x.t+' '+x.d).toLowerCase().includes(q)).slice(0,6);r.innerHTML=hits.length?hits.map(x=>`<a href="${x.u}"><strong>${x.t}</strong><span>${x.d}</span></a>`).join(''):'<a><strong>No results</strong><span>Try another search term.</span></a>';r.classList.add('open')}i.addEventListener('input',render);i.addEventListener('focus',render);document.addEventListener('click',e=>{if(!w.contains(e.target))r.classList.remove('open')});i.addEventListener('keydown',e=>{if(e.key==='Enter'){const a=r.querySelector('a[href]');if(a)location.href=a.href}})})}
function initFaq(){document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item'),was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));if(!was)item.classList.add('open')}))}
function initCarousel(){const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];if(!slides.length)return;let cur=0,t;function show(n){cur=(n+slides.length)%slides.length;slides.forEach((s,j)=>s.classList.toggle('active',j===cur));dots.forEach((d,j)=>d.classList.toggle('active',j===cur));clearInterval(t);t=setInterval(()=>show(cur+1),6500)};dots.forEach((d,j)=>d.addEventListener('click',()=>show(j)));document.querySelector('.prev')?.addEventListener('click',()=>show(cur-1));document.querySelector('.next')?.addEventListener('click',()=>show(cur+1));show(0)}
function initModals(){document.querySelectorAll('.member').forEach(m=>m.addEventListener('click',()=>{const id=m.dataset.modal;document.getElementById(id)?.classList.add('open');document.body.style.overflow='hidden'}));document.querySelectorAll('.close-modal,.modal').forEach(el=>el.addEventListener('click',e=>{if(el.classList.contains('modal')&&e.target!==el)return;document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}})}
function initContact(){const f=document.getElementById('contactForm');if(!f)return;const status=document.getElementById('formStatus');f.addEventListener('submit',()=>{status.textContent='Submitting your enquiry…'})}
document.addEventListener('DOMContentLoaded',()=>{initNav();initSearch();initFaq();initCarousel();initModals();initContact();document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear())});
