// ── MONTHLY DATA — 12 months ────────────────────────────────
const months=[
  {m:'Jan',full:'January',invested:98,roundup:28,suggestion:70,growth:4,txns:61,companies:[
    {n:'Royal Bank',t:'RY',amt:22,via:'XIU ETF + Round-ups',c:'#f5f5f7',tc:'#ec111a'},
    {n:'TD Bank',t:'TD',amt:18,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Apple',t:'AAPL',amt:16,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Enbridge',t:'ENB',amt:12,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:10,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'}]},
  {m:'Feb',full:'February',invested:112,roundup:31,suggestion:81,growth:6,txns:58,companies:[
    {n:'Apple',t:'AAPL',amt:24,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Royal Bank',t:'RY',amt:19,via:'XIU ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Microsoft',t:'MSFT',amt:17,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Shopify',t:'SHOP',amt:13,via:'Round-ups',c:'#ec111a',tc:'#fff'},
    {n:'TD Bank',t:'TD',amt:11,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Mar',full:'March',invested:134,roundup:34,suggestion:100,growth:9,txns:64,companies:[
    {n:'Microsoft',t:'MSFT',amt:28,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Apple',t:'AAPL',amt:25,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:19,via:'VFV ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Royal Bank',t:'RY',amt:14,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Amazon',t:'AMZN',amt:12,via:'XEQT ETF',c:'#ec111a',tc:'#fff'}]},
  {m:'Apr',full:'April',invested:128,roundup:36,suggestion:92,growth:7,txns:60,companies:[
    {n:'Apple',t:'AAPL',amt:26,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:21,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:18,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'},
    {n:'Amazon',t:'AMZN',amt:13,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Royal Bank',t:'RY',amt:10,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'May',full:'May',invested:145,roundup:38,suggestion:107,growth:11,txns:67,companies:[
    {n:'Nvidia',t:'NVDA',amt:30,via:'VFV ETF',c:'#ec111a',tc:'#fff'},
    {n:'Apple',t:'AAPL',amt:27,via:'XEQT ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:22,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'},
    {n:'Amazon',t:'AMZN',amt:15,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Tesla',t:'TSLA',amt:11,via:'Round-ups',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Jun',full:'June',invested:156,roundup:40,suggestion:116,growth:13,txns:71,companies:[
    {n:'Nvidia',t:'NVDA',amt:33,via:'VFV ETF',c:'#ec111a',tc:'#fff'},
    {n:'Apple',t:'AAPL',amt:28,via:'XEQT ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:24,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'},
    {n:'Amazon',t:'AMZN',amt:17,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Shopify',t:'SHOP',amt:13,via:'Round-ups',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Jul',full:'July',invested:168,roundup:42,suggestion:126,growth:14,txns:69,companies:[
    {n:'Apple',t:'AAPL',amt:34,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:31,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:26,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'},
    {n:'Amazon',t:'AMZN',amt:18,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Alphabet',t:'GOOGL',amt:14,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Aug',full:'August',invested:172,roundup:43,suggestion:129,growth:15,txns:72,companies:[
    {n:'Apple',t:'AAPL',amt:35,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:30,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:27,via:'VFV ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Amazon',t:'AMZN',amt:19,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Alphabet',t:'GOOGL',amt:15,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Sep',full:'September',invested:159,roundup:41,suggestion:118,growth:12,txns:66,companies:[
    {n:'Apple',t:'AAPL',amt:31,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:27,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Royal Bank',t:'RY',amt:22,via:'XIU ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Nvidia',t:'NVDA',amt:18,via:'VFV ETF',c:'#ec111a',tc:'#fff'},
    {n:'Amazon',t:'AMZN',amt:14,via:'XEQT ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Oct',full:'October',invested:164,roundup:42,suggestion:122,growth:13,txns:70,companies:[
    {n:'Apple',t:'AAPL',amt:32,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:28,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:25,via:'VFV ETF',c:'#f5f5f7',tc:'#1a1a2e'},
    {n:'Royal Bank',t:'RY',amt:19,via:'XIU ETF',c:'#ec111a',tc:'#fff'},
    {n:'Amazon',t:'AMZN',amt:16,via:'XEQT ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Nov',full:'November',invested:192,roundup:45,suggestion:147,growth:16,txns:78,companies:[
    {n:'Apple',t:'AAPL',amt:38,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:33,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:29,via:'VFV ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Amazon',t:'AMZN',amt:22,via:'XEQT ETF',c:'#ec111a',tc:'#fff'},
    {n:'Royal Bank',t:'RY',amt:18,via:'XIU ETF',c:'#1a1a2e',tc:'#fff'}]},
  {m:'Dec',full:'December',invested:219,roundup:48,suggestion:171,growth:19,txns:84,companies:[
    {n:'Apple',t:'AAPL',amt:44,via:'XEQT + direct + round-ups',c:'#ec111a',tc:'#fff'},
    {n:'Microsoft',t:'MSFT',amt:37,via:'VFV ETF',c:'#1a1a2e',tc:'#fff'},
    {n:'Nvidia',t:'NVDA',amt:32,via:'VFV ETF',c:'#f5f5f7',tc:'#ec111a'},
    {n:'Royal Bank',t:'RY',amt:26,via:'XIU ETF + round-ups',c:'#ec111a',tc:'#fff'},
    {n:'Amazon',t:'AMZN',amt:21,via:'XEQT ETF',c:'#1a1a2e',tc:'#fff'}]}
];

let selMonth=11; // Default to December (end of year for demo)

// ── TAB SWITCHING ────────────────────────────────────────────
function switchTab(tab){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+tab).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(n=>n.classList.remove('act'));
  document.getElementById('nav-'+tab).classList.add('act');
}

// ── TOGGLES ──────────────────────────────────────────────────
function toggleAction(key){
  const el=document.getElementById('tog-'+key);
  const nowOn=!el.classList.contains('on');
  el.classList.toggle('on');
  if(key==='roundup'){
    showPopup('ti-coin', nowOn?'Round-Up Investing on':'Round-Up Investing off',
      nowOn?'Every Scotia debit purchase now rounds up to the nearest dollar. The spare change goes straight into your TFSA.':'We\'ll stop rounding up your purchases. You can turn this back on anytime.');
  } else {
    showPopup('ti-bulb', nowOn?'Smart Suggestions on':'Smart Suggestions off',
      nowOn?'Scotia will review your spending patterns and suggest an amount to invest. You approve or decline each one — nothing happens automatically.':'We\'ll stop sending investment suggestions based on your spending.');
  }
}

// ── POPUP ────────────────────────────────────────────────────
function showPopup(icon,title,text){
  document.getElementById('popup-icon').innerHTML='<i class="ti '+icon+'"></i>';
  document.getElementById('popup-title').textContent=title;
  document.getElementById('popup-text').textContent=text;
  document.getElementById('popup-overlay').classList.add('show');
}
function closePopup(){document.getElementById('popup-overlay').classList.remove('show');}

// ── PROFILE ──────────────────────────────────────────────────
function openProfile(){
  document.getElementById('profile-overlay').classList.add('show');
  pfTab('details');
}
function closeProfile(){document.getElementById('profile-overlay').classList.remove('show');}
function pfTab(t){
  document.querySelectorAll('.pf-tab').forEach(x=>x.classList.remove('act'));
  document.querySelectorAll('.pf-section').forEach(x=>x.classList.remove('act'));
  document.getElementById('pftab-'+t).classList.add('act');
  document.getElementById('pfsec-'+t).classList.add('act');
  if(t==='monthly') buildMonthly();
}

// ── DETAILS FORM ─────────────────────────────────────────────
function openDetailsForm(){document.getElementById('details-overlay').classList.add('show');}
function closeDetailsForm(){document.getElementById('details-overlay').classList.remove('show');}
function saveProfile(){showPopup('ti-check','Profile saved','Your suggestions will now be tailored to your goal, timeline, risk level, and income.');}
function saveDetailsForm(){showPopup('ti-check','Details saved','Nice — the more you tell us, the smarter your suggestions get. You can update these anytime.');}

// ── PROFILE INPUTS ───────────────────────────────────────────
function selGoal(n,el){
  document.querySelectorAll('#pfsec-details .goal-btn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
}
function selTL(n,el){
  el.parentElement.querySelectorAll('.pill-sel').forEach(p=>p.classList.remove('act'));
  el.classList.add('act');
}
function selInc(n,el){
  el.parentElement.querySelectorAll('.pill-sel').forEach(p=>p.classList.remove('act'));
  el.classList.add('act');
}
function setRisk(n){
  const colors=['#ec111a','#D4A843','#16a34a'];
  const segs=document.querySelectorAll('#risk-track .risk-seg');
  segs.forEach((s,i)=>{ s.style.background = i<=n ? colors[n] : '#e5e5ea'; });
}

// ── MONTHLY DATA RENDER ──────────────────────────────────────
function buildMonthly(){
  const pills=document.getElementById('month-pills');
  pills.innerHTML='';
  months.forEach((mo,i)=>{
    const b=document.createElement('div');
    b.className='mp'+(i===selMonth?' act':'');
    b.textContent=mo.m;
    b.onclick=()=>{selMonth=i;buildMonthly();};
    pills.appendChild(b);
  });
  renderMonthBody();
}
function renderMonthBody(){
  const mo=months[selMonth];
  document.getElementById('sum-grid').innerHTML=
    sumCard('Invested','$'+mo.invested)+
    sumCard('Growth','+$'+mo.growth)+
    sumCard('Round-ups','$'+mo.roundup)+
    sumCard('Transactions',mo.txns);
  const list=document.getElementById('spot-list');
  list.innerHTML='';
  mo.companies.forEach((co,i)=>{
    const last=i===mo.companies.length-1;
    list.innerHTML+=
      '<div class="spot-row" style="cursor:default'+(last?';border-bottom:none':'')+'">'+
        '<div class="spot-rank">'+(i+1)+'</div>'+
        '<div class="spot-art" style="background:'+co.c+';color:'+co.tc+'">'+co.t+'</div>'+
        '<div class="spot-info"><div class="spot-name">'+co.n+'</div><div class="spot-sub">'+co.via+'</div></div>'+
        '<div class="spot-amt">$'+co.amt+'</div>'+
      '</div>';
  });
}
function sumCard(lbl,v){return '<div class="sum-card"><div class="lbl">'+lbl+'</div><div class="v">'+v+'</div></div>';}

// ── WRAP STORY ───────────────────────────────────────────────
let curSlide=0, slideTimer=null, fillTimer=null;
const SLIDE_MS=4200, NUM_SLIDES=7;

function openWrap(){
  document.getElementById('wrap-story').classList.add('show');
  buildProgressBar();
  goSlide(0);
}
function closeWrap(){
  document.getElementById('wrap-story').classList.remove('show');
  clearTimeout(slideTimer); clearInterval(fillTimer);
}
function buildProgressBar(){
  const bar=document.getElementById('sp-bar');
  bar.innerHTML='';
  for(let i=0;i<NUM_SLIDES;i++){
    bar.innerHTML+='<div class="sp-seg"><div class="sp-fill" id="fill-'+i+'"></div></div>';
  }
}
function goSlide(n){
  if(n<0)n=0;
  if(n>=NUM_SLIDES){closeWrap();return;}
  curSlide=n;
  document.querySelectorAll('.ss').forEach(s=>s.classList.remove('on'));
  document.getElementById('ss'+n).classList.add('on');
  // progress fills
  for(let i=0;i<NUM_SLIDES;i++){
    const f=document.getElementById('fill-'+i);
    f.style.transition='none';
    f.style.width = i<n ? '100%' : '0%';
  }
  // animate current fill
  clearInterval(fillTimer);
  const fill=document.getElementById('fill-'+n);
  let start=Date.now();
  fillTimer=setInterval(()=>{
    let p=Math.min((Date.now()-start)/SLIDE_MS,1);
    fill.style.width=(p*100)+'%';
    if(p>=1)clearInterval(fillTimer);
  },30);
  // auto-advance
  clearTimeout(slideTimer);
  slideTimer=setTimeout(()=>goSlide(curSlide+1),SLIDE_MS);
  // slide-specific animations
  if(n===1)doStats();
  if(n===2)doA1();
  if(n===5)doProgress();
  if(n===6)doConf();
}
function nextSlide(){goSlide(curSlide+1);}
function prevSlide(){goSlide(curSlide-1);}

// ── NUMBER COUNTER ───────────────────────────────────────────
function cnt(id,to,pre,ms){
  const el=document.getElementById(id);
  if(!el)return;
  const start=Date.now();
  const tick=()=>{
    let p=Math.min((Date.now()-start)/ms,1);
    p=1-(1-p)*(1-p); // ease-out
    el.textContent=pre+Math.round(to*p).toLocaleString();
    if(p<1)requestAnimationFrame(tick);
  };
  tick();
}

// ── WRAP SLIDE ANIMATIONS ────────────────────────────────────
function doStats(){
  cnt('ss1-total',1847,'$',1400);
  cnt('ss1-roundup',524,'$',1100);
  cnt('ss1-sugg',1200,'$',1100);
  cnt('ss1-growth',123,'$',1100);
  const streak=document.getElementById('ss1-streak');
  let s=0; const iv=setInterval(()=>{s+=1;streak.textContent=s+'d';if(s>=14)clearInterval(iv);},70);
}
function doA1(){cnt('ss2-amt',262,'$',1300);}
function doProgress(){
  const bar=document.getElementById('ss5-bar');
  bar.style.width='0%';
  setTimeout(()=>{bar.style.width='18%';},120);
}
function doConf(){
  const wrap=document.getElementById('cf-wrap');
  wrap.innerHTML='';
  const colors=['#fff','#ffd700','#1a1a2e','#ffb3b3'];
  for(let i=0;i<60;i++){
    const c=document.createElement('div');
    c.className='cf';
    const size=6+Math.random()*8;
    c.style.width=size+'px';
    c.style.height=size+'px';
    c.style.left=(Math.random()*100)+'%';
    c.style.top='0';
    c.style.background=colors[Math.floor(Math.random()*colors.length)];
    c.style.borderRadius=Math.random()>0.5?'50%':'2px';
    c.style.animationDuration=(2.5+Math.random()*2)+'s';
    c.style.animationDelay=(Math.random()*0.8)+'s';
    wrap.appendChild(c);
  }
}

function shareWrap(){
  showPopup('ti-brand-instagram','Posted to your story','Your 2025 Investment Wrap is live. Your friends can see how far you\'ve come — and start their own.');
}
