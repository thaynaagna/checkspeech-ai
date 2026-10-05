/* CheckSpeech AI - scripts:
   idiomas, menu, demo do hero, preços,
   cookies, formulário e reconhecimento de voz
*/

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];


/* =========================================================
   IDIOMAS
   ========================================================= */

const T = {

  pt: {},

  en: {

    n1:"Solutions",
    n2:"Customers",
    n3:"Pricing",
    n4:"Contact",

    h1:"Your voice becomes text. And becomes decisions.",

    lead:"Transcribe audio, caption live events, identify 52 languages and uncover the sentiment behind every statement. All by API, trained on over 500,000 hours of human-transcribed audio.",

    cta1:"Talk to us",
    cta2:"See solutions",

    s1:"hours of audio",
    s2:"languages",

    speech_tag:"LIVE TEST",
    speech_title:"Turn your voice into text 🎙️",
    speech_description:"Click the button, allow microphone access and speak. CheckSpeech AI will recognize your voice in real time.",
    speech_start:"🎙️ Start speaking",
    speech_stop:"⏹️ Stop",
    speech_idle:'Click "Start speaking" to begin.',
    speech_result_title:"Recognized text",
    speech_placeholder:"Your text will appear here...",
    speech_listening:"🎙️ Listening... speak now!",
    speech_finished:"Speech recognition finished.",
    speech_error:"We could not recognize your speech. Please try again.",
    speech_permission:"⚠️ Microphone permission was blocked. Allow microphone access in your browser.",
    speech_unsupported:"Your browser does not support speech recognition.",

    h_cl:"Who already uses CheckSpeech AI",
    p_cl:"Education, health, media and support teams turn voice into data with us.",

    h_sol:"Four solutions, one API",
    p_sol:"Pick what you need. Tap each item for details.",

    a1t:"Asynchronous audio transcription",
    a1:"Transcription API for pre-recorded audio, at scale. Extract insights from meetings, calls and interviews with one of the best speech recognition engines in the world.",

    a2t:"Real-time transcription",
    a2:"Live captions for talks and training sessions. They make content accessible and can be archived for later use.",

    a3t:"Language identification",
    a3:"Find out which language is spoken and gain global reach. Supports 52 languages.",

    a4t:"Sentiment analysis",
    a4:"Find the key moments in a speech, tell positive from negative and decide with confidence. Works with pre-recorded audio.",

    h_pr:"Pricing",
    mes:"Monthly",
    ano:"Yearly",

    p1:"Starter",
    p2:"Business",
    p3:"Enterprise",
    sob:"Custom quote",

    ex:"extra minute",

    e1:"Special prices for large volumes",
    e2:"Priority technical support",
    e3:"Dedicated account manager",

    cta3:"Request a quote",

    h_ct:"Let's talk",
    p_ct:"Tell us what you need and we'll reply within one business day.",

    l_n:"Name *",
    l_e:"Email *",
    l_t:"Phone",
    l_p:"Country *",
    sel:"Select",
    l_m:"Message",

    l_c:"I agree to the Privacy Policy. *",

    send:"Send",

    ok:"Message sent! We'll be in touch soon.",

    rights:"© 2026 CheckSpeech AI. All rights reserved.",

    ck:"We use cookies to improve your experience. See our <a href='#contato'>Privacy Policy</a>.",

    ckb:"Accept",

    m_req:"Required field",
    m_mail:"Enter a valid email",
    m_tel:"Enter a valid phone number",
    m_cap:"Wrong answer"
  }

};


/* Guarda os textos originais em português */

$$('[data-i]').forEach(el => {

  T.pt[el.dataset.i] ??= el.innerHTML;

});


Object.assign(T.pt, {

  m_req:"Campo obrigatório",
  m_mail:"Informe um e-mail válido",
  m_tel:"Informe um telefone válido",
  m_cap:"Resposta incorreta"

});


let L = 'pt';


function setLang(l){

  L = l;

  document.documentElement.lang =
    l === 'pt' ? 'pt-BR' : 'en';

  $$('[data-i]').forEach(el => {

    const v = T[l][el.dataset.i];

    if(v){
      el.innerHTML = v;
    }

  });

  priceUpd();

  $('#lang').value = l;

  try{
    localStorage.lang = l;
  }catch(e){}

}


$('#lang').onchange = e => setLang(e.target.value);


/* =========================================================
   MENU MOBILE
   ========================================================= */

$('#burger').onclick = () => {

  const o = $('#menu').classList.toggle('open');

  $('#burger').setAttribute(
    'aria-expanded',
    o
  );

};


$$('#menu a').forEach(a => {

  a.onclick = () => {
    $('#menu').classList.remove('open');
  };

});


/* =========================================================
   HERO DEMO
   ========================================================= */

const w = $('#wave');


for(let i = 0; i < 40; i++){

  const b = document.createElement('b');

  b.style.animationDelay =
    (i * .07) % 1.1 + 's';

  b.style.animationDuration =
    (.7 + Math.random() * .8) + 's';

  w.appendChild(b);

}


const D = [

  [
    "Adorei o atendimento, resolveram tudo rápido!",
    "😊 Positivo · pt-BR"
  ],

  [
    "I've been waiting for an hour and nobody answered.",
    "😠 Negative · en"
  ],

  [
    "Gracias, el producto llegó bien.",
    "🙂 Positivo · es"
  ]

];


let k = 0;


function demo(){

  const [t,c] = D[k++ % 3];

  let i = 0;

  $('#chip').textContent = c;
  $('#tx').textContent = '';

  const id = setInterval(() => {

    $('#tx').textContent =
      t.slice(0, ++i);

    if(i >= t.length){

      clearInterval(id);

      setTimeout(
        demo,
        2200
      );

    }

  },35);

}


demo();


/* =========================================================
   PREÇOS
   ========================================================= */

let annual = false;


function priceUpd(){

  $$('.price[data-m]').forEach(p => {

    p.textContent =
      annual
        ? p.dataset.a
        : p.dataset.m;

  });

  $('#bm').classList.toggle(
    'on',
    !annual
  );

  $('#ba').classList.toggle(
    'on',
    annual
  );

}


$('#bm').onclick = () => {

  annual = false;

  priceUpd();

};


$('#ba').onclick = () => {

  annual = true;

  priceUpd();

};


/* =========================================================
   COOKIES
   ========================================================= */

try{

  if(!localStorage.ck){

    $('#ck').style.display = 'flex';

  }

}catch(e){

  $('#ck').style.display = 'flex';

}


$('#ckb').onclick = () => {

  $('#ck').style.display = 'none';

  try{
    localStorage.ck = 1;
  }catch(e){}

};


/* =========================================================
   FORMULÁRIO
   ========================================================= */

const a =
  1 + Math.floor(Math.random() * 9);

const b =
  1 + Math.floor(Math.random() * 9);


$('#cq').textContent =
  `Captcha: ${a} + ${b} = ? *`;


$('#c').onclick = () => {

  $('#send').disabled = false;

};


$('#t').oninput = e => {

  let v = e.target.value;

  if(v.trim().startsWith('+')){

    e.target.value =
      '+' +
      v
        .replace(/[^\d ]/g,'')
        .replace(/^ /,'')
        .slice(0,20);

  }else{

    let d =
      v.replace(/\D/g,'').slice(0,11);

    e.target.value =
      d.length > 10
        ? d.replace(
            /(\d\d)(\d{5})(\d{0,4})/,
            '($1) $2-$3'
          )
        : d.length > 6
        ? d.replace(
            /(\d\d)(\d{4})(\d{0,4})/,
            '($1) $2-$3'
          )
        : d.length > 2
        ? d.replace(
            /(\d\d)(\d*)/,
            '($1) $2'
          )
        : d;

  }

};


function bad(el,key){

  el.classList.toggle(
    'bad',
    !!key
  );

  el.parentNode.querySelector(
    '.err'
  ).textContent =
    key ? T[L][key] : '';

  return !!key;

}


$('#f').onsubmit = ev => {

  ev.preventDefault();

  const n = $('#n');
  const e = $('#e');
  const t = $('#t');
  const p = $('#p');
  const cap = $('#cap');

  let err = false;


  err =
    bad(
      n,
      n.value.trim().length < 2
        ? 'm_req'
        : ''
    ) || err;


  err =
    bad(
      e,
      !e.value.trim()
        ? 'm_req'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.value)
        ? 'm_mail'
        : ''
    ) || err;


  const dg =
    t.value.replace(/\D/g,'').length;


  err =
    bad(
      t,
      t.value &&
      (dg < 8 || dg > 15)
        ? 'm_tel'
        : ''
    ) || err;


  err =
    bad(
      p,
      !p.value
        ? 'm_req'
        : ''
    ) || err;


  err =
    bad(
      cap,
      +cap.value !== a + b
        ? 'm_cap'
        : ''
    ) || err;


  if(
    err ||
    !$('#c').checked
  ){
    return;
  }


  $('#ok').style.display =
    'block';

  $('#f').reset();

  $('#send').disabled =
    true;

};


/* =========================================================
   RECONHECIMENTO DE VOZ
   Web Speech API
   ========================================================= */

const startSpeech =
  $('#startSpeech');

const stopSpeech =
  $('#stopSpeech');

const speechText =
  $('#speechText');

const speechStatus =
  $('#speechStatus');


const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;


if(!SpeechRecognition){

  speechStatus.textContent =
    T[L].speech_unsupported;

  startSpeech.disabled = true;

}else{

  const recognition =
    new SpeechRecognition();


  recognition.lang =
    L === 'pt'
      ? 'pt-BR'
      : 'en-US';


  recognition.continuous = true;

  recognition.interimResults = true;


  let finalTranscript = '';


  recognition.onstart = () => {

    speechStatus.textContent =
      T[L].speech_listening;

    startSpeech.disabled = true;

    stopSpeech.disabled = false;

    startSpeech.classList.add(
      'listening'
    );

    startSpeech.textContent =
      L === 'pt'
        ? '🎙️ Ouvindo...'
        : '🎙️ Listening...';

  };


  recognition.onresult = event => {

    let interimTranscript = '';


    for(
      let i = event.resultIndex;
      i < event.results.length;
      i++
    ){

      const transcript =
        event.results[i][0].transcript;


      if(
        event.results[i].isFinal
      ){

        finalTranscript +=
          transcript + ' ';

      }else{

        interimTranscript +=
          transcript;

      }

    }


    speechText.textContent =
      finalTranscript +
      interimTranscript;

  };


  recognition.onerror = event => {

    if(
      event.error === 'not-allowed'
    ){

      speechStatus.textContent =
        T[L].speech_permission;

    }else{

      speechStatus.textContent =
        T[L].speech_error;

    }

  };


  recognition.onend = () => {

    speechStatus.textContent =
      T[L].speech_finished;

    startSpeech.disabled = false;

    stopSpeech.disabled = true;

    startSpeech.classList.remove(
      'listening'
    );

    startSpeech.textContent =
      T[L].speech_start;

  };


  startSpeech.onclick = () => {

    finalTranscript = '';

    speechText.textContent =
      T[L].speech_placeholder;

    try{

      recognition.lang =
        L === 'pt'
          ? 'pt-BR'
          : 'en-US';

      recognition.start();

    }catch(error){

      console.log(
        'Reconhecimento já iniciado.'
      );

    }

  };


  stopSpeech.onclick = () => {

    recognition.stop();

  };

}


/* =========================================================
   IDIOMA SALVO
   ========================================================= */

try{

  if(localStorage.lang){

    setLang(
      localStorage.lang
    );

  }

}catch(e){}
