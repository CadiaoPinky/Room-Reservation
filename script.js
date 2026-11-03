(function(){
  var F='Main bed for 2 • ', NOTE2='Rates are based on 2 guests. Additional guest fee applies beyond the included 2 guests, up to the maximum room capacity.';
  var EXTRA='Stove use — +₱500 • Collapsible tent + monoblock chairs — +₱1,500 • Extension — ₱500/hour';
  // ---- EDIT HERE: rooms, photos, prices and descriptions ----
  var ITEMS=[
   {id:'room1',nav:'Room 1',e:'Overnight Accommodation',t:'Room 1 – Mountain View',tag:'Good for 2 pax, max 4 pax',pr:['₱2,500','₱3,000'],
    ph:['r11.jpeg','r12.jpg','room1_img3.jpg*'],bl:[['Room features','Main bed for 2 • Sliding/pull-out bed for 2 • Air-conditioned • Mountain view • Pool access'],['Additional guest','₱400/person/night']],n:NOTE2,bk:'Room 1'},
   {id:'room2',nav:'Room 2',e:'Overnight Accommodation',t:'Room 2 – Mountain View + Balcony',tag:'Good for 2 pax, max 4 pax',pr:['₱3,000','₱3,500'],
    ph:['r21.jpg','r22.jpg*','r23.jpg*','r24.jpg'],bl:[['Room features','Main bed for 2 • Sofa bed for 2 • Air-conditioned • Spacious room • Private balcony • Mountain view • Pool access'],['Additional guest','₱400/person/night']],n:NOTE2,bk:'Room 2'},
   {id:'kubo',nav:'Kubo Stay',e:'A stay of its own',t:'Kubo Stay',tag:'Good for up to 3 guests',pr:['₱1,300','₱1,800'],
    ph:['kubostay1.jpg','kubostay2.png'],bl:[['Room features','Lower bed for 2 • Upper bed for 1 • Air-conditioned • Pool access'],['Additional guest','₱400/person/night']],n:'Rate includes up to 3 guests. Additional guest fee applies beyond the included capacity, subject to available sleeping space and approval.',bk:'Kubo Stay'},
   {id:'pool',nav:'Pool Cottages &amp; Kubo',e:'For guests who mainly want to swim',t:'Pool Cottages &amp; Kubo',tag:'Pool access: Infinity Pool • Jacuzzi • Kiddie Pool',
    ph:['pck1.png','pck2.jpg','pck3.jpg'],tb:{h:['Cottage','Capacity','Weekdays','Weekends / Holiday'],r:[['Regular Kubo','Up to 9 pax','₱500','₱700'],['Large Kubo','Up to 12 pax','₱800','₱1,000']]},
    bl:[['Pool entrance','Adult — ₱120/person • Children — ₱100/person • Senior Citizen — ₱100/person'],['Cottage features','Covered seating area • Table &amp; seating • Poolside access • Mountain &amp; countryside view']],
    n:'Pool entrance is charged separately from the cottage rental. Cottage rates cover the use of the reserved kubo only. For groups exceeding the cottage capacity, an additional cottage or larger arrangement may be required depending on availability.',bk:'Pool Cottages &amp; Kubo'},
   {id:'villa',nav:'Whole Villa',e:'Our strongest package',t:'Whole Villa',tag:'2 private rooms + entire ground-floor venue',
    ph:['wv1.jpg','wv2.jpg','wv3.jpg'],tb:{h:['Schedule','Session','Rate'],r:[['Monday–Friday','2:00 PM – 11:00 AM','₱13,000'],['Saturday–Sunday / Holidays','2:00 PM – 11:00 AM','₱15,000']]},
    bl:[['Villa features','2 private air-conditioned rooms • Mountain views • Private balcony • Entire ground-floor venue • Tables &amp; chairs • Kitchen access • Private CR • TV &amp; karaoke • Griller • Electric fan • Parking area • Private pool access'],['Other add-ons',EXTRA]],
    n:'Whole Villa rental gives your group exclusive use of both private rooms and the main venue for the duration of your stay. Additional arrangements for larger gatherings may be subject to applicable event rates.',bk:'Whole Villa'},
   {id:'venue',nav:'Venue',e:'Gatherings',t:'Private Event Venue',tag:'Good for up to 20 guests',
    ph:['pev1.jpg*','pev2.jpg','pev3.jpg','pev4.jpg*'],tb:{h:['Schedule','Session','Rate'],r:[['Monday – Friday','Day · 9AM – 3PM','₱5,000'],['Monday – Friday','Night · 5PM – 11PM','₱5,500'],['Sat – Sun / Holiday','Day','₱6,000'],['Sat – Sun / Holiday','Night','₱6,500']]},
    bl:[['Venue features','Tables &amp; chairs • Kitchen access • Private CR • TV &amp; karaoke • Griller • Electric fan • Mountain &amp; countryside view'],['Optional add-ons','Private Pool Package (Infinity Pool • Jacuzzi • Kiddie Pool): Day/Night tour +₱1,500 • Overnight +₱2,500'],['More add-ons',EXTRA]],
    n:'Cookware and cooking utensils are not included. Guests may bring their own. Standard rates include up to 20 guests. For gatherings of more than 50–100 guests, customized event rates apply based on the total number of guests and required setup. Please contact us for a quotation.',bk:'Venue'}
  ];
  var PK=[['Classic',['₱15,000','₱15,500','₱16,000','₱16,500'],'Our essential food selection for simple celebrations and gatherings.','+₱500/person'],
          ['Signature',['₱16,500','₱17,000','₱17,500','₱18,000'],'An upgraded food selection with more variety for your celebration.','+₱570/person'],
          ['Premium',['₱17,000','₱17,500','₱18,000','₱18,500'],'A fuller selection suited for birthdays, reunions, and special occasions.','+₱600/person'],
          ['Deluxe',['₱18,000','₱18,500','₱19,000','₱19,500'],'Our most complete food selection for bigger celebrations and special gatherings.','+₱660/person']];
  var PL=['Weekday Day','Weekday Night','Weekend/Holiday Day','Weekend/Holiday Night'];
  var ROOMS=['Room 1','Room 2','Kubo Stay','Pool Cottages &amp; Kubo','Whole Villa','Venue','Event Package'];
  // ---------------------------------------------------------
  var h='';
  ITEMS.forEach(function(it){
    h+='<section id="'+it.id+'"><p class="eyebrow">'+it.e+'</p><h2>'+it.t+'</h2><div class="gal">';
    it.ph.forEach(function(s,i){var t=s.slice(-1)==='*'; h+='<img'+(t?' class="t"':'')+' loading="lazy" src="'+(t?s.slice(0,-1):s)+'" alt="'+it.t.replace(/&amp;/g,'and')+' photo '+(i+1)+'">';});
    h+='</div><article class="info"><div class="top"><div><h3>'+it.t+'</h3><span class="chip">'+it.tag+'</span></div>';
    if(it.pr) h+='<div class="price"><small>Weekday / Weekend</small><b>'+it.pr[0]+' / '+it.pr[1]+'</b></div>';
    h+='</div>';
    if(it.tb){ h+='<div class="tw"><table><tr>'+it.tb.h.map(function(x){return '<th>'+x+'</th>';}).join('')+'</tr>'+it.tb.r.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>';}).join('')+'</tr>';}).join('')+'</table></div>'; }
    it.bl.forEach(function(b){ h+='<div class="bl"><h4>'+b[0]+'</h4><p>'+b[1]+'</p></div>'; });
    h+='<p class="note">'+it.n+'</p><a class="btn" href="#book" data-room="'+it.bk+'">Book '+(it.id.indexOf('room')===0?'this room':'now')+'</a></article></section>';
  });
  h+='<section id="packages"><p class="eyebrow">All-in experience</p><h2>Event Packages</h2><div class="pk">';
  PK.forEach(function(p){
    h+='<article class="info"><h3>'+p[0]+' Event Package</h3><span class="chip">Venue + food for 20 guests</span><ul>'+p[1].map(function(v,i){return '<li><span>'+PL[i]+'</span><b>'+v+'</b></li>';}).join('')+'</ul><p class="note">'+p[2]+'<br>Additional guest with food: '+p[3]+'</p><a class="btn" href="#book" data-room="Event Package">Book now</a></article>';
  });
  h+='</div><div class="info"><div class="bl" style="margin-top:0"><h4>All event packages include</h4><p>Private Event Venue • Food for 20 Guests • Tables &amp; Chairs • Kitchen Access • Private CR • TV &amp; Karaoke • Griller • Electric Fan • Electric Kettle • Mountain &amp; Countryside View</p></div><div class="bl"><h4>Optional pool access — +₱2,000</h4><p>Infinity Pool • Jacuzzi • Kiddie Pool</p></div><p class="note" style="margin-bottom:0">For the complete menu available under each package, please message us.</p></div></section>';
  document.getElementById('sections').innerHTML=h;

  // menu
  var links=[['top','Home']].concat(ITEMS.map(function(i){return [i.id,i.nav];}),[['packages','All Packages'],['book','Book Now'],['contact','Contact']]);
  var menu=document.getElementById('menu'), mb=document.getElementById('mb');
  menu.innerHTML=links.map(function(l){return '<a href="#'+l[0]+'">'+l[1]+'</a>';}).join('');
  function tog(o){menu.classList.toggle('open',o); mb.setAttribute('aria-expanded',o); mb.textContent=o?'Close':'Menu';}
  mb.onclick=function(){tog(!menu.classList.contains('open'));};
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')tog(false);});

  // booking form
  var $=function(i){return document.getElementById(i);}, f=$('bk'), pax=2, paxEl=$('bpax'), msg=$('bmsg'), inEl=$('bin'), outEl=$('bout'), room=$('broom');
  room.insertAdjacentHTML('beforeend',ROOMS.map(function(r){return '<option>'+r+'</option>';}).join(''));
  var t=new Date(); t.setMinutes(t.getMinutes()-t.getTimezoneOffset()); var iso=t.toISOString().slice(0,10); inEl.min=iso; outEl.min=iso;
  inEl.addEventListener('change',function(){outEl.min=inEl.value||iso;});
  function showPax(){paxEl.textContent=pax+(pax===1?' guest':' guests');}
  $('bminus').onclick=function(){if(pax>1){pax--;showPax();}};
  $('bplus').onclick=function(){if(pax<100){pax++;showPax();}};
  function setErr(el,x){el.parentNode.querySelector('.err').textContent=x||''; el.setAttribute('aria-invalid',x?'true':'false');}
  function fmt(d){return new Date(d+'T00:00').toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});}
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-room]'); if(a){var d=document.createElement('textarea'); d.innerHTML=a.dataset.room; room.value=d.value; setErr(room,'');}});
  f.addEventListener('submit',function(e){
    e.preventDefault(); msg.classList.remove('show');
    var name=$('bname'), phone=$('bphone'), email=$('bemail'), time=$('btime');
    setErr(name,name.value.trim().length<2?'Enter your full name.':'');
    setErr(phone,/^[+\d][\d\s\-()]{6,}$/.test(phone.value.trim())?'':'Enter a valid phone number.');
    setErr(email,/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())?'':'Enter a valid email address.');
    setErr(room,room.value?'':'Please choose a room.');
    setErr(inEl,inEl.value?'':'Choose a check-in date.');
    setErr(outEl,!outEl.value?'Choose a check-out date.':(inEl.value&&outEl.value<=inEl.value?'Check-out must be after check-in.':''));
    setErr(time,time.value?'':'Choose an arrival time.');
    var bad=f.querySelector('[aria-invalid="true"]'); if(bad){bad.focus(); return;}
    var b=$('bgo'); b.disabled=true; b.textContent='Sending…';
    setTimeout(function(){
      $('bdetail').textContent='Thanks, '+name.value.trim().split(' ')[0]+'! You booked '+room.value+' for '+pax+(pax===1?' guest':' guests')+', '+fmt(inEl.value)+' to '+fmt(outEl.value)+', arriving at '+time.value+'. We’ll contact you at '+email.value.trim()+'.';
      msg.classList.add('show'); b.disabled=false; b.textContent='Book Now'; f.reset(); pax=2; showPax();
    },700);
  });
})();

/* ==================== ADD-ON 1: hover effects + gallery styles (injected CSS) ==================== */
(function(){var s=document.createElement("style");s.textContent=`
/* =====================================================================
   NAZKA Villea – ADD-ON STYLES (hover effects + photo gallery lightbox)
   Load AFTER style.css. Nothing in style.css is changed.
   ===================================================================== */

/* ---------- Room photos: zoom + glow on hover ---------- */
.gal img{cursor:zoom-in; transition:transform .5s cubic-bezier(.2,.7,.2,1), filter .4s, box-shadow .4s}
.gal{position:relative}
.gal figure,.gal .ph{margin:0}

/* "View photos" hint badge on each gallery */
.gal-badge{position:absolute; right:12px; bottom:12px; z-index:2; display:inline-flex; gap:8px; align-items:center;
  background:rgba(28,26,12,.78); color:#efe9d3; border:1px solid rgba(239,233,211,.35); border-radius:999px;
  padding:7px 14px; font:500 .72rem 'Roboto Mono',monospace; letter-spacing:.06em; cursor:pointer;
  backdrop-filter:blur(6px); transition:background .25s, transform .25s}
.gal-badge:hover{background:var(--accent); color:var(--accent-ink); transform:translateY(-2px)}

@media (hover:hover){
  /* hovered photo rises, others softly dim so the focus is clear */
  .gal:hover img{filter:brightness(.72) saturate(.9)}
  .gal img:hover{filter:brightness(1.06) saturate(1.12); transform:scale(1.035); z-index:1;
    box-shadow:0 18px 40px rgba(0,0,0,.45)}

  /* cards lift gently */
  .info{transition:transform .35s ease, box-shadow .35s ease, border-color .35s}
  .info:hover{transform:translateY(-4px); box-shadow:0 18px 40px rgba(0,0,0,.28); border-color:var(--accent)}

  /* buttons */
  .btn{transition:transform .25s, box-shadow .25s, filter .2s, background .25s, color .25s}
  .btn:hover{transform:translateY(-3px); box-shadow:0 10px 22px rgba(0,0,0,.35)}
  .btn:active{transform:translateY(-1px)}
  .btn.ghost:hover{background:rgba(246,241,222,.16)}
  .hbtn{transition:background .25s, color .25s, transform .25s}
  .hbtn:hover{background:var(--accent); color:#2b2812; transform:translateY(-1px)}

  /* header logo + menu links */
  .brand img{transition:transform .5s}
  .brand:hover img{transform:rotate(-8deg) scale(1.1)}
  #menu a{transition:padding-left .25s, color .25s, border-color .25s}
  #menu a:hover{padding-left:12px; border-bottom-color:var(--accent)}

  /* hero */
  .hlogo{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
  .hero:hover .hlogo{transform:scale(1.03)}
  .scroll{transition:opacity .3s, letter-spacing .3s}
  .scroll:hover{opacity:1; letter-spacing:.16em}
  .loc a{transition:color .25s}
  .loc a:hover{color:var(--accent)}

  /* price tables & package lists */
  tr:not(:first-child){transition:background .2s}
  tr:not(:first-child):hover{background:var(--chip)}
  .pk li{transition:background .2s, padding .2s}
  .pk li:hover{background:var(--chip); padding-left:8px; padding-right:8px}
  .chip{transition:background .25s, color .25s}
  .info:hover .chip{background:var(--accent); color:var(--accent-ink)}
  .price b{transition:color .25s}
  .info:hover .price b{color:var(--accent)}

  /* contact cards */
  .c{transition:transform .3s, border-color .3s, background .3s}
  .c:hover{transform:translateY(-4px); border-color:var(--accent); background:var(--chip)}

  /* booking form */
  .bk input:hover,.bk select:hover{border-color:var(--line)}
  .pax button{transition:background .2s, color .2s, transform .15s}
  .pax button:hover{background:var(--accent); color:var(--accent-ink)}
  .pax button:active{transform:scale(.9)}
}

/* ---------- Lightbox (click any room photo) ---------- */
#lb{position:fixed; inset:0; z-index:100; display:none; flex-direction:column; align-items:center; justify-content:center;
  background:rgba(14,13,6,.94); backdrop-filter:blur(8px); padding:56px 16px 20px; opacity:0; transition:opacity .3s}
#lb.open{display:flex} #lb.show{opacity:1}
#lb .stage{position:relative; width:min(1100px,100%); flex:1; min-height:0; display:flex; align-items:center; justify-content:center}
#lb .stage img{max-width:100%; max-height:100%; object-fit:contain; border-radius:14px; box-shadow:0 30px 80px rgba(0,0,0,.6);
  transition:opacity .3s, transform .4s cubic-bezier(.2,.7,.2,1)}
#lb .stage img.swap{opacity:0; transform:scale(.97)}
#lb button{border:1px solid rgba(239,233,211,.35); background:rgba(44,41,19,.8); color:#efe9d3; cursor:pointer;
  font:500 1.2rem 'Roboto Mono',monospace; transition:background .25s, color .25s, transform .25s}
#lb button:hover{background:var(--accent); color:var(--accent-ink)}
#lb .x{position:absolute; top:max(14px,env(safe-area-inset-top)); right:16px; width:44px; height:44px; border-radius:50%}
#lb .nav{position:absolute; top:50%; width:48px; height:48px; border-radius:50%; margin-top:-24px}
#lb .prev{left:6px} #lb .next{right:6px}
@media (hover:hover){#lb .nav:hover{transform:scale(1.1)}}
#lb .cap{margin:12px 0 8px; text-align:center; color:#efe9d3; font-size:.8rem; letter-spacing:.08em}
#lb .cap b{font-family:'Cormorant Garamond',serif; font-size:1.3rem; font-weight:600; letter-spacing:.04em; display:block}
#lb .thumbs{display:flex; gap:8px; overflow-x:auto; max-width:100%; padding:4px}
#lb .thumbs img{height:54px; width:80px; object-fit:cover; border-radius:8px; opacity:.5; cursor:pointer; border:2px solid transparent;
  transition:opacity .25s, border-color .25s, transform .25s}
#lb .thumbs img:hover{opacity:.9; transform:translateY(-2px)}
#lb .thumbs img.on{opacity:1; border-color:var(--accent)}

/* ---------- Soft fade-in for the first view of each section ---------- */
.rv{opacity:0; transform:translateY(18px); transition:opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)}
.rv.in{opacity:1; transform:none}

@media (prefers-reduced-motion:reduce){
  .gal img,.info,.btn,.c,#lb,#lb .stage img,.rv{transition:none!important}
  .gal img:hover,.info:hover,.btn:hover,.c:hover{transform:none!important}
  .rv{opacity:1; transform:none}
}

`;document.head.appendChild(s);})();


(function(){

  var ROOM_PHOTOS = {
    room1: [],
    room2:  [],
    kubo:   [],
    pool:   [],
    villa:  [],
    venue:  []
  };
  /* ------------------------------------------------------------- */

  var gals = document.querySelectorAll('.gal');

  // Replace photos where you listed your own
  gals.forEach(function(g){
    var sec = g.closest('section'), list = sec && ROOM_PHOTOS[sec.id];
    if(list && list.length){
      var title = (sec.querySelector('h2')||{}).textContent || 'Room';
      g.innerHTML = list.map(function(s,i){
        var t = s.slice(-1)==='*';
        return '<img'+(t?' class="t"':'')+' loading="lazy" src="'+(t?s.slice(0,-1):s)+'" alt="'+title+' photo '+(i+1)+'">';
      }).join('');
    }
  });

  // Lightbox markup
  var lb = document.createElement('div');
  lb.id = 'lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML = '<button class="x" type="button" aria-label="Close">✕</button>'+
    '<div class="stage"><button class="nav prev" type="button" aria-label="Previous photo">‹</button><img alt="">'+
    '<button class="nav next" type="button" aria-label="Next photo">›</button></div>'+
    '<div class="cap"><b></b><span></span></div><div class="thumbs"></div>';
  document.body.appendChild(lb);

  var big = lb.querySelector('.stage img'), capT = lb.querySelector('.cap b'), capN = lb.querySelector('.cap span'),
      thumbs = lb.querySelector('.thumbs'), cur = 0, set = [], title = '', opener = null;

  function show(i, instant){
    cur = (i + set.length) % set.length;
    function apply(){
      big.src = set[cur].src; big.alt = set[cur].alt;
      capT.textContent = title; capN.textContent = (cur+1)+' / '+set.length;
      thumbs.querySelectorAll('img').forEach(function(t,k){
        t.classList.toggle('on',k===cur);
        if(k===cur && t.scrollIntoView) t.scrollIntoView({inline:'center',block:'nearest'});
      });
      big.classList.remove('swap');
    }
    if(instant){ apply(); } else { big.classList.add('swap'); setTimeout(apply,180); }
  }

  function open(g, i){
    set = Array.prototype.slice.call(g.querySelectorAll('img'));
    title = (g.closest('section').querySelector('h2')||{}).textContent || '';
    thumbs.innerHTML = set.map(function(s,k){return '<img src="'+s.src+'" alt="Photo '+(k+1)+'" data-i="'+k+'">';}).join('');
    thumbs.style.display = set.length>1 ? 'flex' : 'none';
    lb.classList.toggle('single', set.length<2);
    lb.querySelectorAll('.nav').forEach(function(n){n.style.display = set.length>1?'':'none';});
    opener = document.activeElement;
    lb.classList.add('open'); requestAnimationFrame(function(){lb.classList.add('show');});
    document.body.style.overflow = 'hidden';
    show(i,true); lb.querySelector('.x').focus();
  }
  function close(){
    lb.classList.remove('show'); document.body.style.overflow='';
    setTimeout(function(){lb.classList.remove('open');},300);
    if(opener && opener.focus) opener.focus();
  }

  // Click a photo -> open viewer
  gals.forEach(function(g){
    var imgs = g.querySelectorAll('img');
    imgs.forEach(function(im,i){
      im.tabIndex = 0; im.setAttribute('role','button');
      im.addEventListener('click',function(){open(g,i);});
      im.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault(); open(g,i);}});
    });
  });

  lb.querySelector('.x').onclick = close;
  lb.querySelector('.prev').onclick = function(){show(cur-1);};
  lb.querySelector('.next').onclick = function(){show(cur+1);};
  thumbs.addEventListener('click',function(e){var i=e.target.dataset&&e.target.dataset.i; if(i!=null) show(+i);});
  lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('stage')) close();});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') show(cur-1);
    if(e.key==='ArrowRight') show(cur+1);
  });
  // swipe on phones
  var sx=null;
  lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
  lb.addEventListener('touchend',function(e){
    if(sx===null) return; var dx=e.changedTouches[0].clientX-sx; sx=null;
    if(Math.abs(dx)>50) show(cur+(dx<0?1:-1));
  });

  // Gentle fade-in once per section (skipped if reduced motion / no support)
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    var io = new IntersectionObserver(function(en){
      en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in'); io.unobserve(x.target);}});
    },{threshold:.08});
    document.querySelectorAll('#sections section, #book, #contact').forEach(function(s){s.classList.add('rv'); io.observe(s);});
  }
})();

(function(){

  var LIMITS = {
    'Room 1':               {good:2,  max:4},
    'Room 2':               {good:2,  max:4},
    'Kubo Stay':            {good:3,  max:3},
    'Pool Cottages & Kubo': {good:9,  max:12, note:'Regular Kubo up to 9, Large Kubo up to 12'},
    'Whole Villa':          {good:10, max:20},   // <-- PLACEHOLDER: change to your real numbers
    'Venue':                {good:20, max:100, note:'More than 20 guests needs a custom quotation'},
    'Event Package':        {good:20, max:100, note:'Food is for 20 guests, extra guests are added to the rate'}
  };

  var room = document.getElementById('broom'),
      plus = document.getElementById('bplus'),
      minus = document.getElementById('bminus'),
      out = document.getElementById('bpax'),
      box = document.querySelector('.pax');
  if(!room || !plus || !minus || !out || !box) return;

  // small hint line under the guest counter
  var st = document.createElement('style');
  st.textContent = '.pax-hint{display:block;margin:5px 0 0 3px;font-size:.72rem;color:var(--muted);line-height:1.4}'+
                   '.pax-hint.full{color:var(--err)}'+
                   '.pax button:disabled{opacity:.35;cursor:not-allowed}';
  document.head.appendChild(st);
  var hint = document.createElement('small');
  hint.className = 'pax-hint'; hint.setAttribute('aria-live','polite');
  box.parentNode.appendChild(hint);

  function cur(){ return parseInt(out.textContent,10) || 1; }
  function lim(){ return LIMITS[room.value] || null; }

  function refresh(){
    var l = lim(), n = cur();
    hint.classList.remove('full');
    plus.disabled = n >= l.max;
    if(n >= l.max){
      hint.classList.add('full');
      hint.textContent = 'Maximum of '+l.max+' guests reached for '+room.value+'.';
    } else {
      hint.textContent = 'Good for '+l.good+' guests, maximum '+l.max+'.'+(l.note ? ' '+l.note+'.' : '');
    }
  }

  // if the room changes to one with a lower limit, bring the count down
  function clamp(){
    var l = lim(), guard = 0;
    if(l) while(cur() > l.max && guard++ < 200) minus.onclick();
    refresh();
  }

  room.addEventListener('change', clamp);
  // the "Book this room" buttons set the room without a change event
  document.addEventListener('click', function(e){
    if(e.target.closest && e.target.closest('[data-room]')) setTimeout(clamp,0);
  });
  // after the form is sent / reset
  document.getElementById('bk').addEventListener('reset', function(){ setTimeout(refresh,0); });
  // whenever the counter changes (+ / −)
  new MutationObserver(refresh).observe(out,{childList:true,characterData:true,subtree:true});

  refresh();
})();
