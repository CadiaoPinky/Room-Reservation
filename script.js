(function(){
  var F='Main bed for 2 • ', NOTE2='Rates are based on 2 guests. Additional guest fee applies beyond the included 2 guests, up to the maximum room capacity.';
  var EXTRA='Stove use — +₱500 • Collapsible tent + monoblock chairs — +₱1,500 • Extension — ₱500/hour';
  // ---- EDIT HERE: rooms, photos, prices and descriptions ----
  var ITEMS=[
   {id:'room1',nav:'Room 1',e:'Overnight Accommodation',t:'Room 1 – Mountain View',tag:'Good for 2 pax, max 4 pax',pr:['₱2,500','₱3,000'],
    ph:['r11.jpeg','r12.jpg','room1_img3.jpg*'],bl:[['Room features','Main bed for 2 • Sliding/pull-out bed for 2 • Air-conditioned • Mountain view • Pool access'],['Additional guest','₱400/person/night']],n:NOTE2,bk:'Room 1'},
   {id:'room2',nav:'Room 2',e:'Overnight Accommodation',t:'Room 2 – Mountain View + Balcony',tag:'Good for 2 pax, max 4 pax',pr:['₱3,000','₱3,500'],
    ph:['r21.jpg','r22.jpg','r23.jpg','r24.jpg'],bl:[['Room features','Main bed for 2 • Sofa bed for 2 • Air-conditioned • Spacious room • Private balcony • Mountain view • Pool access'],['Additional guest','₱400/person/night']],n:NOTE2,bk:'Room 2'},
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
    ph:['pev1.jpg','pev2.jpg','pev3.jpg','pev4.jpg'],tb:{h:['Schedule','Session','Rate'],r:[['Monday – Friday','Day · 9AM – 3PM','₱5,000'],['Monday – Friday','Night · 5PM – 11PM','₱5,500'],['Sat – Sun / Holiday','Day','₱6,000'],['Sat – Sun / Holiday','Night','₱6,500']]},
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