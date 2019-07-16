
  
  var s = 'Jul 4 2019 01:00:00 GMT-0700'; var e = 'Jul 7 2019 09:00:00 GMT-0700';
  
  var ds = new Date(s); var dend = new Date(e); var dn = new Date(); var o = false; var d = ''; var t = ''; var eda = true;

 /* new_offset */
  var js_debug = true;
  var offset_2 = new Date().getTimezoneOffset();
  var offstart = (offset_2/60)*-1;
  var ooup = 0;
  
  if(ooup != 0) {
    if (parseFloat(offstart) >= parseFloat(ooup)) {
      ds.setDate(ds.getDate() + 1);
      dend.setDate(dend.getDate() + 1);
      
      //dateobj.toString();
      s = ds.toString();
      e = dend.toString();
      //alert('done');
    }
    //if (js_debug) { alert(parseFloat(offstart) + ' ' + parseFloat(ooup)); }
  }
   
  /* end */
  
  
  
  if (e.length < 10) { console.log('hello there'); eda = false; }
  if (Date.parse(ds)-Date.parse(new Date())<0 && eda) { deadline = e; o = true; } else { deadline = s; o = false; }
  
  var m = 'Candella Quest Event';
  t = m.toLowerCase()
  t = t.replace('-', ' '); 
  t = t.replace('mz', ' '); 

  var arr = t.split('');
  var lastItem = arr[arr.length - 1];

  if ( t.includes('raids') || lastItem == 's' ) { if (o) { d=t+' End'; f=t+' have finished'; } else { d=t+' Start'; f=t+' Started';} }
  else if ( t.includes('community day') ) { if (o) { d=t+' End'; f=t+' has finished'; } else { d=t+' Starts'; f=t+' has Started';} }
  else { if (o) { d=t+' Ends'; f=t+' is over'; } else { d=t+' Starts'; f=t+' started';} }
  
  if ( eda == false ) { d=t+''; f=t+' Started'; }
  
  d = toTitleCase(d);  f = toTitleCase(f); 
  //alert(d);
  if ( document.getElementById('candella_quest_event_mz_l') ) { document.getElementById('candella_quest_event_mz_l').innerHTML = d; } 
  
  var stop_clock_id = '';
  var offset = new Date().getTimezoneOffset();
  var offset_hours = offset/60;
  var offset_miliseconds = 0;
  if (offset_hours < 0) { offset_miliseconds = 100; }
  if ( document.getElementById('candella_quest_event_mz_countdown') ) {
    stop_clock_id = initializeClock('candella_quest_event_mz_countdown', deadline, 0, f);
    var local_date = new Date(deadline);
    local_date.setTime(local_date.getTime() + (offset_hours+offset_miliseconds));
    var local_date_string = format_date(local_date,true);
    document.getElementById('candella_quest_event_mz_time').innerHTML = local_date_string;
  }