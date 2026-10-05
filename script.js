:root{
  --bg:#f7f8fc;
  --ink:#151833;
  --mut:#626982;
  --blue:#315cff;
  --blue-dark:#2448d8;
  --mint:#19c58a;
  --card:#ffffff;
  --line:#e2e5ef;
  --dark:#12162d;
  --soft-blue:#eef2ff;
  --danger:#d6336c;
  --success:#0b7a56;
}

*{
  box-sizing:border-box;
  margin:0;
}

body{
  font-family:'Bricolage Grotesque',system-ui,sans-serif;
  background:var(--bg);
  color:var(--ink);
  line-height:1.6;
}

a{
  color:inherit;
}

:focus-visible{
  outline:3px solid rgba(49,92,255,.35);
  outline-offset:3px;
}

.wrap{
  max-width:1100px;
  margin:auto;
  padding:0 20px;
}

section{
  padding:78px 0;
}

h1{
  font-size:clamp(2.3rem,5.5vw,4.2rem);
  line-height:1.04;
  font-weight:800;
  letter-spacing:-.045em;
}

h2{
  font-size:clamp(1.7rem,3.5vw,2.5rem);
  line-height:1.12;
  font-weight:800;
  letter-spacing:-.035em;
  margin-bottom:14px;
}

p.lead{
  color:var(--mut);
  max-width:62ch;
  font-size:1.08rem;
}

/* BOTÕES */

.btn{
  display:inline-block;
  background:var(--blue);
  color:#fff;
  border:1px solid var(--blue);
  border-radius:10px;
  padding:13px 24px;
  font:600 1rem inherit;
  font-family:inherit;
  text-decoration:none;
  cursor:pointer;
  box-shadow:0 7px 18px rgba(49,92,255,.16);
  transition:
    background .2s ease,
    border-color .2s ease,
    box-shadow .2s ease;
}

.btn:hover{
  background:var(--blue-dark);
  border-color:var(--blue-dark);
  box-shadow:0 9px 22px rgba(49,92,255,.22);
}

.btn:disabled{
  background:#aeb7d6;
  border-color:#aeb7d6;
  cursor:not-allowed;
  box-shadow:none;
}

.btn.ghost{
  background:transparent;
  color:var(--ink);
  border:1px solid #c8ccda;
  box-shadow:none;
}

.btn.ghost:hover{
  background:#fff;
  border-color:var(--ink);
}

/* HEADER */

header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:50;
  background:rgba(247,248,252,.94);
  backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(226,229,239,.9);
}

nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:64px;
  gap:12px;
}

.logo{
  font-weight:800;
  font-size:1.25rem;
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:9px;
  letter-spacing:-.02em;
}

.logo i{
  display:inline-flex;
  gap:3px;
  align-items:center;
  height:20px;
}

.logo i b{
  width:3px;
  background:var(--blue);
  border-radius:3px;
}

.menu{
  display:flex;
  gap:25px;
  align-items:center;
  list-style:none;
  padding:0;
}

.menu a{
  text-decoration:none;
  font-weight:600;
  color:#343950;
  transition:color .2s ease;
}

.menu a:hover{
  color:var(--blue);
}

select.lang{
  font:inherit;
  border:1px solid var(--line);
  border-radius:8px;
  padding:6px 9px;
  background:#fff;
  color:var(--ink);
  cursor:pointer;
}

#burger{
  display:none;
  background:none;
  border:0;
  font-size:1.6rem;
  cursor:pointer;
  color:var(--ink);
}

/* HERO */

.hero{
  padding-top:132px;
  background:
    radial-gradient(circle at 80% 20%,rgba(49,92,255,.10),transparent 28%),
    linear-gradient(180deg,#edf2ff 0%,var(--bg) 100%);
}

.hero .wrap{
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:48px;
  align-items:center;
}

.hero h1{
  max-width:700px;
}

.hero p.lead{
  margin:22px 0 30px;
  font-size:1.12rem;
}

.hero .row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.stats{
  display:flex;
  gap:36px;
  margin-top:38px;
  flex-wrap:wrap;
  color:var(--mut);
}

.stats span{
  display:block;
}

.stats strong{
  display:block;
  color:var(--ink);
  font-size:1.55rem;
  line-height:1.1;
  margin-bottom:3px;
}

/* DEMO */

.demo{
  background:
    radial-gradient(circle at 80% 15%,rgba(49,92,255,.25),transparent 30%),
    var(--dark);
  color:#fff;
  border-radius:20px;
  padding:28px;
  border:1px solid rgba(255,255,255,.06);
  box-shadow:
    0 24px 60px rgba(18,22,45,.18),
    0 5px 15px rgba(18,22,45,.08);
}

.wave{
  display:flex;
  align-items:center;
  gap:3px;
  height:82px;
}

.wave b{
  flex:1;
  background:var(--mint);
  border-radius:4px;
  height:20%;
  animation:w 1.1s ease-in-out infinite;
}

@keyframes w{
  50%{
    height:100%;
  }
}

.demo q{
  display:block;
  margin:18px 0;
  font-size:1.05rem;
  min-height:3.2em;
  quotes:none;
  color:#f6f7ff;
}

.chip{
  display:inline-block;
  padding:5px 12px;
  border-radius:99px;
  background:var(--mint);
  color:#05261c;
  font-weight:600;
  font-size:.85rem;
}


/* =========================================================
   TESTE DE VOZ - NOVA FUNCIONALIDADE
   ========================================================= */

.speech-section{
  background:
    linear-gradient(
      180deg,
      var(--bg) 0%,
      #eef2ff 100%
    );
}

.speech-section .wrap{
  text-align:center;
}

.speech-tag{
  display:inline-block;
  color:var(--blue);
  font-size:.8rem;
  font-weight:800;
  letter-spacing:.12em;
  margin-bottom:12px;
}

.speech-lead{
  margin-left:auto;
  margin-right:auto;
}

.speech-card{
  max-width:760px;
  margin:30px auto 0;
  padding:30px;
  background:#fff;
  border:1px solid var(--line);
  border-radius:18px;
  box-shadow:0 12px 35px rgba(21,24,51,.055);
}

.speech-controls{
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
}

.speech-status{
  margin:22px 0;
  color:var(--mut);
  font-weight:600;
  min-height:28px;
}

.speech-result{
  margin-top:20px;
  padding:22px;
  background:var(--soft-blue);
  border-radius:14px;
  text-align:left;
}

.speech-result h3{
  margin-bottom:8px;
  font-size:1.05rem;
}

#speechText{
  color:var(--ink);
  min-height:50px;
  line-height:1.7;
}

#startSpeech.listening{
  background:var(--mint);
  border-color:var(--mint);
  color:#05261c;
}


/* CLIENTES */

.logos{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:16px;
  margin-top:30px;
}

.logos div{
  border:1px solid var(--line);
  border-radius:14px;
  background:#fff;
  padding:22px 18px;
  text-align:center;
  font-weight:800;
  font-size:1.1rem;
  color:#5b6080;
  box-shadow:0 5px 18px rgba(21,24,51,.035);
  transition:
    border-color .2s ease,
    box-shadow .2s ease;
}

.logos div:hover{
  border-color:#cbd3f3;
  box-shadow:0 9px 25px rgba(21,24,51,.07);
}

.logos span{
  color:var(--blue);
}

/* SOLUÇÕES */

.acc{
  margin-top:30px;
  display:grid;
  gap:12px;
}

.acc details{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:14px;
  padding:0 22px;
  box-shadow:0 5px 18px rgba(21,24,51,.025);
  transition:
    border-color .2s ease,
    box-shadow .2s ease;
}

.acc details:hover{
  border-color:#cfd5e7;
  box-shadow:0 8px 24px rgba(21,24,51,.05);
}

.acc summary{
  cursor:pointer;
  font-weight:700;
  font-size:1.08rem;
  padding:19px 0;
  list-style:none;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.acc summary::after{
  content:"+";
  font-size:1.5rem;
  line-height:1;
  color:var(--blue);
  transition:transform .25s ease;
}

.acc details[open] summary::after{
  transform:rotate(45deg);
}

.acc p{
  padding-bottom:20px;
  color:var(--mut);
  max-width:70ch;
}

/* PREÇOS */

#precos{
  background:#fff;
}

.toggle{
  display:inline-flex;
  border:1px solid #cfd4e3;
  border-radius:99px;
  margin:22px 0;
  overflow:hidden;
  padding:3px;
  background:#f6f7fb;
}

.toggle button{
  border:0;
  background:none;
  color:var(--mut);
  font:600 .95rem inherit;
  font-family:inherit;
  padding:8px 20px;
  border-radius:99px;
  cursor:pointer;
  transition:
    background .2s ease,
    color .2s ease;
}

.toggle .on{
  background:var(--ink);
  color:#fff;
}

.tw{
  overflow-x:auto;
  border:1px solid var(--line);
  border-radius:16px;
  background:#fff;
  box-shadow:0 10px 30px rgba(21,24,51,.05);
}

table{
  width:100%;
  border-collapse:collapse;
  min-width:680px;
}

th,
td{
  padding:17px;
  border-bottom:1px solid var(--line);
  text-align:left;
  vertical-align:top;
}

th{
  font-size:1.05rem;
  background:#fbfcff;
}

th:first-child{
  border-radius:15px 0 0 0;
}

.price{
  font-size:1.8rem;
  font-weight:800;
  display:block;
  margin-top:4px;
  letter-spacing:-.025em;
}

td small{
  display:block;
  color:var(--mut);
  margin-top:3px;
}

th.hl,
td.hl{
  background:var(--soft-blue);
}

tbody tr:last-child td{
  border-bottom:0;
}

/* CONTATO */

#contato{
  background:#fff;
}

form{
  background:#fff;
  border:1px solid var(--line);
  border-radius:18px;
  padding:30px;
  display:grid;
  gap:17px;
  max-width:640px;
  margin-top:26px;
  box-shadow:0 12px 35px rgba(21,24,51,.055);
}

label{
  font-weight:600;
  display:grid;
  gap:7px;
}

input,
select,
textarea{
  font:inherit;
  padding:12px 13px;
  border:1px solid #c7ccdb;
  border-radius:9px;
  width:100%;
  background:#fff;
  color:var(--ink);
  transition:
    border-color .2s ease,
    box-shadow .2s ease;
}

input::placeholder,
textarea::placeholder{
  color:#9298aa;
}

input:focus,
select:focus,
textarea:focus{
  outline:none;
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(49,92,255,.10);
}

input.bad,
select.bad,
textarea.bad{
  border-color:var(--danger);
}

.err{
  color:var(--danger);
  font-weight:400;
  font-size:.85rem;
  min-height:1em;
}

.consent{
  display:flex;
  gap:10px;
  align-items:flex-start;
  font-weight:400;
}

.consent input{
  width:auto;
  margin-top:5px;
}

#ok{
  display:none;
  color:var(--success);
  font-weight:600;
}

/* FOOTER */

footer{
  background:var(--dark);
  color:#cfd4f0;
  padding:44px 0;
}

footer .wrap{
  display:flex;
  flex-wrap:wrap;
  gap:25px;
  justify-content:space-between;
  align-items:center;
}

footer strong{
  color:#fff;
  font-size:1.05rem;
}

footer small{
  color:#9299b8;
}

footer ul{
  display:flex;
  gap:20px;
  list-style:none;
  padding:0;
  flex-wrap:wrap;
}

footer ul a{
  text-decoration:none;
  transition:color .2s ease;
}

footer ul a:hover{
  color:#fff;
}

.soc{
  display:flex;
  gap:10px;
}

.soc a{
  width:38px;
  height:38px;
  border:1px solid #41486f;
  border-radius:50%;
  display:grid;
  place-items:center;
  transition:
    background .2s ease,
    border-color .2s ease;
}

.soc a:hover{
  background:#252b4a;
  border-color:#68719e;
}

.soc svg{
  width:18px;
  height:18px;
  fill:#fff;
}

/* COOKIES */

#ck{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  background:var(--dark);
  color:#fff;
  padding:16px 20px;
  z-index:60;
  display:none;
  gap:16px;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  border-top:1px solid #292f50;
  box-shadow:0 -8px 25px rgba(18,22,45,.12);
}

#ck a{
  color:#9db4ff;
}

/* RESPONSIVO */

@media(max-width:820px){

  .hero .wrap{
    grid-template-columns:1fr;
    gap:35px;
  }

  #burger{
    display:block;
  }

  .menu{
    display:none;
    position:absolute;
    top:64px;
    left:0;
    right:0;
    background:var(--bg);
    flex-direction:column;
    align-items:stretch;
    padding:20px;
    border-bottom:1px solid var(--line);
    box-shadow:0 12px 25px rgba(21,24,51,.08);
  }

  .menu.open{
    display:flex;
  }

  .menu li{
    width:100%;
  }

  .menu a{
    display:block;
    padding:7px 0;
  }

  .menu .lang{
    width:100%;
  }

  section{
    padding:58px 0;
  }

  .hero{
    padding-top:112px;
  }

  .stats{
    gap:25px;
  }

  form{
    padding:23px;
  }

  .speech-card{
    padding:24px;
  }

}

@media(max-width:520px){

  .wrap{
    padding:0 16px;
  }

  h1{
    font-size:2.35rem;
  }

  .hero p.lead{
    font-size:1rem;
  }

  .demo{
    padding:20px;
  }

  .wave{
    height:65px;
  }

  .row .btn{
    width:100%;
    text-align:center;
  }

  .logos{
    grid-template-columns:repeat(2,1fr);
  }

  .logos div{
    padding:18px 10px;
    font-size:1rem;
  }

  .acc details{
    padding:0 17px;
  }

  .acc summary{
    font-size:1rem;
  }

  .price{
    font-size:1.5rem;
  }

  footer .wrap{
    align-items:flex-start;
    flex-direction:column;
  }

  .speech-card{
    padding:20px;
  }

  .speech-controls{
    flex-direction:column;
  }

  .speech-controls .btn{
    width:100%;
  }

}

@media(prefers-reduced-motion:reduce){

  .wave b{
    animation:none;
    height:50%;
  }

  .btn,
  .logos div,
  .acc details,
  .soc a,
  input,
  select,
  textarea{
    transition:none;
  }

}
