// Home V5 — posicionamiento: lanzamiento de nuevos modelos y gestión de cambios de ingeniería
// Reusa v4S y V4Footer definidos en v4-sales.jsx

const v5CSS = `
@keyframes v5up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
.v5-hero-in{opacity:0;animation:v5up .7s cubic-bezier(.2,.7,.3,1) forwards}
.v5-reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.3,1),transform .7s cubic-bezier(.2,.7,.3,1)}
.v5-reveal.on{opacity:1;transform:none}
/* --- reveal elegante por elemento (estilo invitación) --- */
.ixr{opacity:0;transform:translateY(30px) scale(.985);filter:blur(7px);transition:opacity .9s cubic-bezier(.16,.84,.3,1),transform .9s cubic-bezier(.16,.84,.3,1),filter .9s ease}
.ixr.on{opacity:1;transform:none;filter:none}
.ixr.ixh{transition:opacity .9s cubic-bezier(.16,.84,.3,1),transform .5s cubic-bezier(.16,.84,.3,1),filter .9s ease,box-shadow .5s ease}
.ixr.ixh.on:hover{transform:translateY(-6px);box-shadow:0 18px 42px rgba(11,37,69,.11)}
.ixdark.ixr.ixh.on:hover{box-shadow:0 18px 42px rgba(0,0,0,.35)}
@keyframes ixline{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.ixstep0{text-decoration:none;transition:transform .35s ease,box-shadow .35s ease}
.ixstep0:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(11,37,69,.12)}
.ixmobcta{display:none}
@media(max-width:760px){.ixmobcta{display:block;position:fixed;left:14px;right:14px;bottom:14px;z-index:60;text-align:center;padding:15px 18px;border-radius:12px;background:#0B2545;color:#fff;font-weight:700;font-size:15px;text-decoration:none;box-shadow:0 10px 30px rgba(11,37,69,.32)}}
@media print{.ixmobcta{display:none}}
@media(prefers-reduced-motion:reduce){.ixr{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}}
@keyframes v5grow{0%{transform:scaleX(0)}18%,100%{transform:scaleX(1)}}
@keyframes v5pop{0%,60%{opacity:0;transform:scale(.5)}70%,100%{opacity:1;transform:scale(1)}}
@keyframes v5dot{0%{offset-distance:0%;opacity:0}8%{opacity:1}45%{offset-distance:100%;opacity:1}50%{opacity:0}55%{offset-distance:100%;opacity:0}60%{opacity:1;offset-distance:100%}95%{offset-distance:0%;opacity:1}100%{opacity:0}}
@keyframes v5draw{0%{stroke-dashoffset:220}30%,100%{stroke-dashoffset:0}}
@keyframes v5bary{0%{transform:scaleY(0)}25%,100%{transform:scaleY(1)}}
@keyframes v5fadein{0%{opacity:0}12%,100%{opacity:1}}
@keyframes v5pulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.25);opacity:1}}
@keyframes v5ring{0%{stroke-dashoffset:151}40%,100%{stroke-dashoffset:0}}
.v5v{position:relative;border-radius:10px;overflow:hidden;background:linear-gradient(160deg,#0A1F3D 0%,#0B2545 45%,#123566 100%);aspect-ratio:16/7.5;cursor:pointer}
.v5v svg{position:absolute;inset:0;width:100%;height:100%}
.v5v .anim{visibility:hidden}
.v5v.playing .anim{visibility:visible}
.v5v .poster{visibility:visible;transition:opacity .35s}
.v5v.playing .poster{visibility:hidden}
.v5v .ov{position:absolute;right:10px;bottom:8px;display:flex;transition:opacity .3s}
.v5v.playing .ov{opacity:0;pointer-events:none}
.v5v .pb{display:inline-flex;align-items:center;gap:7px;height:28px;padding:0 12px;border-radius:999px;background:rgba(255,255,255,.92);box-shadow:0 4px 16px rgba(0,0,0,.35);transition:transform .2s;font-size:10.5px;font-weight:700;color:#1D4FD7;letter-spacing:.5px;white-space:nowrap}
.v5v:hover .pb{transform:scale(1.06)}
@keyframes pGlowPulse{0%,100%{opacity:.55}50%{opacity:1}}
@keyframes pFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes pNode{0%{opacity:.25}6%,100%{opacity:1}}
@keyframes pFill{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes pCap{0%,2%{opacity:0;transform:translateY(6px)}6%,22%{opacity:1;transform:none}26%,100%{opacity:0;transform:translateY(-6px)}}
@keyframes pDot{0%{offset-distance:0%}100%{offset-distance:100%}}
@keyframes pRing{0%,88%{opacity:0;transform:scale(.4)}94%,100%{opacity:1;transform:scale(1)}}
@keyframes pBlink{0%,100%{opacity:1}50%{opacity:.35}}

/* --- responsive --- */
@media(max-width:1120px){.v5nav-links{gap:12px!important;font-size:12.5px!important}}
@media(max-width:720px){.v5nav-links{width:100%;order:3;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}.v5nav-links::-webkit-scrollbar{display:none}}
@media(max-width:1024px){
 .g6{grid-template-columns:repeat(3,1fr)!important}
 .g5{grid-template-columns:repeat(3,1fr)!important}
 .g4{grid-template-columns:repeat(2,1fr)!important}
 .g3{grid-template-columns:repeat(2,1fr)!important}
 .g2{grid-template-columns:1fr!important;gap:26px!important}
 section{padding-left:32px!important;padding-right:32px!important}
}
@media(max-width:900px){.gsplit{grid-template-columns:1fr!important;gap:26px!important}}
@media(max-width:720px){
 .g6,.g5,.g4,.g3,.g2,.gform{grid-template-columns:1fr!important}
 .g6>div{border-left:none!important;border-top:1px solid rgba(0,0,0,.08)}
 .g6>div:first-child{border-top:none}
 section{padding-left:18px!important;padding-right:18px!important}
 h1{font-size:34px!important;line-height:1.18!important}
 h2{font-size:26px!important}
 h3{font-size:17px!important}
 nav{padding-left:16px!important;padding-right:16px!important}
}
/* --- intro cinemático --- */
.v5intro{position:fixed;inset:0;z-index:9999;background:radial-gradient(ellipse at 50% 40%,#0D2B52 0%,#071A33 60%,#040F20 100%);display:grid;place-items:center;transition:opacity .8s ease;overflow:hidden}
.v5intro.out{opacity:0;pointer-events:none}
.v5intro::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(77,127,232,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(77,127,232,0.07) 1px,transparent 1px);background-size:44px 44px;animation:iGrid 8s linear both}
@keyframes iGrid{0%{opacity:0;transform:scale(1.15)}12%{opacity:1}88%{opacity:1}100%{opacity:0;transform:scale(1)}}
.v5intro .skip{position:absolute;bottom:28px;right:32px;color:#5A7BA6;font-size:12px;font-weight:600;letter-spacing:1px;cursor:pointer;background:none;border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:7px 14px;z-index:2}
.v5intro .skip:hover{color:#fff;border-color:rgba(255,255,255,0.4)}
@keyframes iBox{0%{opacity:0;transform:scale(.7)}8%,100%{opacity:1;transform:scale(1)}}
@keyframes iLine{0%{stroke-dashoffset:120}20%,100%{stroke-dashoffset:0}}
@keyframes iFlow{0%{offset-distance:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{offset-distance:100%;opacity:0}}
@keyframes iCheck{0%,70%{opacity:0;transform:scale(.4)}80%,100%{opacity:1;transform:scale(1)}}
@keyframes iLogo{0%{opacity:0;transform:translateY(14px)}100%{opacity:1;transform:none}}
@keyframes iBar{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes iScan{0%{transform:translateY(-8px);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(46px);opacity:0}}
@keyframes iPhase{0%{opacity:0;transform:translateY(20px) scale(.96)}10%,80%{opacity:1;transform:none}94%,100%{opacity:0;transform:translateY(-16px) scale(1.02);visibility:hidden}}
@keyframes iChip{0%{opacity:0;transform:translateY(12px) scale(.85)}100%{opacity:1;transform:none}}
@keyframes iChipGlow{0%,100%{box-shadow:0 0 0 rgba(125,183,255,0)}50%{box-shadow:0 0 18px rgba(125,183,255,0.35)}}
.v5intro .ichip{display:inline-flex;align-items:center;gap:8px}
.v5intro .ichip svg{flex:none;opacity:.95}
@keyframes iSweep{0%{transform:translateX(-110%)}100%{transform:translateX(110%)}}
.iph{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;opacity:0}
.iph .ttl{color:#5A7BA6;font-size:11px;font-weight:700;letter-spacing:5px;font-family:monospace}
.ichips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:640px}
.ichip{position:relative;overflow:hidden;font-size:12.5px;font-weight:600;color:#C7D3E8;border:1px solid rgba(125,183,255,0.35);border-radius:999px;padding:8px 18px;background:rgba(77,127,232,0.08);backdrop-filter:blur(4px);opacity:0;animation:iChip .5s cubic-bezier(.2,.9,.3,1.4) both,iChipGlow 2.4s ease-in-out infinite}
.ichip::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%);animation:iSweep 2.8s linear infinite}
.ichip.svc{border-color:rgba(110,231,183,0.45);background:rgba(110,231,183,0.07);color:#A9F0D3;font-size:14px;padding:11px 24px}
.ichip.crs{border-color:rgba(245,184,77,0.4);background:rgba(245,184,77,0.06);color:#F0D9A8}
`;

function V5Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="v5-reveal" style={{ transitionDelay: delay + 'ms' }}>{children}</div>;
}

function V5SvcAnim({ i }) {
  const [playing, setPlaying] = React.useState(false);
  const D = 14; // segundos por loop
  const scenes = [
    { title: 'PROCESO DE LANZAMIENTO', steps: ['Confirmación virtual', 'Corrida piloto', 'Buy-off multiárea', 'Safe Launch', 'SOP'],
      caps: ['Especificación validada contra BOM', 'Unidades piloto en línea de prueba', 'Estampado · pintura · ensamble firman', 'Contención reforzada de arranque', 'Entrega a régimen de producción'] },
    { title: 'PROCESO DE CONTENCIÓN', steps: ['Detección', 'Contención', 'Análisis', 'Contramedida', 'Cierre'],
      caps: ['Defecto detectado en planta del cliente', 'Sorteo y retrabajo autorizados en sitio', 'Causa raíz con evidencia técnica', 'Acción corregida y verificada en línea', 'Reporte cerrado frente al cliente'] },
    { title: 'FLUJO EN LA PLATAFORMA', steps: ['Captura', 'Alerta', 'Acción correctiva', 'Aprobación', 'KPI'],
      caps: ['Registro con evidencia fotográfica', 'Notificación inmediata al área responsable', '8D en curso con responsables y fechas', 'Firma digital multinivel', 'Indicador actualizado en tablero'] },
    { title: 'PROCESO DE FORMACIÓN', steps: ['Diagnóstico', 'Aula', 'Práctica en piso', 'Evaluación', 'Certificado'],
      caps: ['Detección de necesidades del equipo', 'Teoría con casos reales de planta', 'Aplicación directa en la línea', 'Matriz ILU actualizada', 'Constancia de participación emitida'] },
  ];
  const s = scenes[i];
  const n = s.steps.length;
  const x0 = 34, x1 = 286;
  const xs = s.steps.map((_, k) => x0 + (x1 - x0) * k / (n - 1));
  // Iconos de póster (paths simples, trazo blanco) por servicio
  const posterIcons = [
    // Launch: cohete central; gantt, check, engrane, bandera
    { label: 'LAUNCH EXCELLENCE', main: <path d="M0 -11c4 3 6 9 4 16h-8c-2-7 0-13 4-16zM-4 5l-4 5m12-5l4 5M0 5v7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>, side: [
      <g key="a"><rect x="-7" y="-5" width="9" height="3" rx="1.5" fill="#fff"/><rect x="-7" y="0" width="13" height="3" rx="1.5" fill="#fff" opacity=".7"/><rect x="-7" y="5" width="6" height="3" rx="1.5" fill="#fff" opacity=".45"/></g>,
      <path key="b" d="M-5 0l3.5 3.5L6 -5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/>,
      <g key="c"><circle r="4.5" fill="none" stroke="#fff" strokeWidth="2"/><path d="M0 -8v3M0 5v3M-8 0h3M5 0h3M-6 -6l2 2M4 4l2 2M-6 6l2-2M4 -4l2-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></g>,
      <path key="d" d="M-4 -8v16M-4 -8h9l-2.5 4L5 0h-9" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    ]},
    // Representation: personas centro; escudo, lupa, globo/chat, llave
    { label: 'TECHNICAL REPRESENTATION', main: <g><circle cx="-4" cy="-5" r="4" fill="#fff"/><path d="M-11 9c0-5 3-8 7-8s7 3 7 8z" fill="#fff"/><circle cx="6" cy="-4" r="3.2" fill="#fff" opacity=".75"/><path d="M1 9c.5-4 2.5-6.5 5-6.5S10.5 5 11 9z" fill="#fff" opacity=".75"/></g>, side: [
      <path key="a" d="M0 -9l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10v-5z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>,
      <g key="b"><circle cx="-2" cy="-2" r="5.5" stroke="#fff" strokeWidth="2.2" fill="none"/><path d="M2.5 2.5L8 8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/></g>,
      <g key="c"><rect x="-8" y="-7" width="16" height="11" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><path d="M-3 4l-2 5 6-5" fill="#fff"/></g>,
      <path key="d" d="M4 -8a6 6 0 0 0-8 8L-9 5l3 3 5-5a6 6 0 0 0 8-8L4 -2 1 -5z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>,
    ]},
    // IxT-QMS: engrane-check centro; gráfica, nube-servidor, campana, doc
    { label: 'IxT-QMS', main: <g><circle r="9" fill="none" stroke="#fff" strokeWidth="2.2"/><path d="M0 -13v3M0 10v3M-13 0h3M10 0h3M-9.5 -9.5l2.2 2.2M7.3 7.3l2.2 2.2M-9.5 9.5l2.2-2.2M7.3 -7.3l2.2-2.2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M-4 0l3 3 6-7" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></g>, side: [
      <g key="a"><path d="M-7 6V-1M-2 6v-9M3 6V0M8 6v-12" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"/></g>,
      <g key="b"><rect x="-8" y="-8" width="16" height="5" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/><rect x="-8" y="0" width="16" height="5" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/><circle cx="-5" cy="-5.5" r="1" fill="#fff"/><circle cx="-5" cy="2.5" r="1" fill="#fff"/></g>,
      <path key="c" d="M0 -8c-3.5 0-5 3-5 6 0 3-1 4-2.5 5h15C6 2 5 1 5 -2c0-3-1.5-6-5-6zM-2 5a2 2 0 0 0 4 0" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>,
      <g key="d"><path d="M-5 -8h7l4 4v12h-11z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M-2 -1h5M-2 3h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></g>,
    ]},
    // Training: birrete centro; pizarrón, personas, medalla, foco
    { label: 'TRAINING', main: <g><path d="M0 -8l12 5-12 5-12-5z" fill="#fff"/><path d="M-7 0v6c0 2 3.5 4 7 4s7-2 7-4V0" stroke="#fff" strokeWidth="2" fill="none"/><path d="M12 -3v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></g>, side: [
      <g key="a"><rect x="-8" y="-7" width="16" height="11" rx="1.5" stroke="#fff" strokeWidth="1.8" fill="none"/><path d="M-5 -3h7M-5 0h10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/><path d="M0 4v4M-3 8h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></g>,
      <g key="b"><circle cx="-4" cy="-4" r="3.5" fill="#fff"/><path d="M-10 8c0-4.5 2.5-7 6-7s6 2.5 6 7z" fill="#fff"/><circle cx="5" cy="-3" r="2.8" fill="#fff" opacity=".7"/><path d="M1 8c.4-3.5 2-5.5 4.5-5.5S9.6 4.5 10 8z" fill="#fff" opacity=".7"/></g>,
      <g key="c"><circle cy="-2" r="5.5" stroke="#fff" strokeWidth="2" fill="none"/><path d="M-3 2l-2 7 5-3 5 3-2-7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></g>,
      <g key="d"><path d="M0 -9a6 6 0 0 1 3 11c-1 .7-1.5 1.5-1.5 3h-3c0-1.5-.5-2.3-1.5-3a6 6 0 0 1 3-11z" stroke="#fff" strokeWidth="1.8" fill="none"/><path d="M-2 8h4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></g>,
    ]},
  ];
  const P = posterIcons[i];
  const sideX = [-96, -52, 52, 96];
  return (
    <div className={'v5v' + (playing ? ' playing' : '')} onClick={() => setPlaying(p => !p)}>
      <svg viewBox="0 0 320 150">
        <g className="poster">
          <defs>
            <radialGradient id={`pg${i}`} cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#2C6BE8" stopOpacity="0.55"/>
              <stop offset="55%" stopColor="#1D4FD7" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#1D4FD7" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="320" height="150" fill={`url(#pg${i})`} style={{ animation: 'pGlowPulse 3.5s ease-in-out infinite' }}/>
          <line x1="36" y1="63" x2="284" y2="63" stroke="rgba(125,183,255,0.25)" strokeWidth="1"/>
          {sideX.map((dx, k) => (
            <g key={k} transform={`translate(${160 + dx} 63)`}>
              <g style={{ animation: `pFloat 3.2s ${k * 0.4}s ease-in-out infinite` }}>
                <circle r="17" fill="rgba(125,183,255,0.10)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
                <g opacity="0.9" transform="scale(0.85)">{P.side[k]}</g>
              </g>
            </g>
          ))}
          <g transform="translate(160 63)">
            <g style={{ animation: 'pFloat 3.2s .8s ease-in-out infinite' }}>
              <circle r="26" fill="rgba(125,183,255,0.14)" stroke="#fff" strokeWidth="1.6"/>
              <circle r="31" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              {P.main}
            </g>
          </g>
          <text x="160" y="116" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" letterSpacing="3">{P.label}</text>
          <line x1="110" y1="124" x2="210" y2="124" stroke="rgba(125,183,255,0.5)" strokeWidth="1"/>
        </g>
        <text className="anim" x="18" y="24" fill="#7DB7FF" fontSize="9" fontWeight="700" letterSpacing="2" fontFamily="monospace" style={{ visibility: playing ? 'visible' : 'hidden' }}>{s.title}</text>
        <circle className="anim" cx="298" cy="20" r="4" fill="#F55" style={{ animation: playing ? 'pBlink 1.2s infinite' : 'none' }}/>
        <text className="anim" x="290" y="24" textAnchor="end" fill="#8AA5CC" fontSize="8" fontFamily="monospace" style={{ animation: playing ? 'pBlink 1.2s infinite' : 'none' }}>REC</text>
        <line x1={x0} y1="62" x2={x1} y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round"/>
        <line className="anim" x1={x0} y1="62" x2={x1} y2="62" stroke="#7DB7FF" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: `${x0}px 62px`, transformBox: 'view-box', animation: playing ? `pFill ${D}s linear infinite` : 'none' }}/>
        <circle className="anim" r="6" fill="#F5B84D" stroke="#0B2545" strokeWidth="2" style={{ offsetPath: `path("M ${x0} 62 L ${x1} 62")`, animation: playing ? `pDot ${D}s linear infinite` : 'none' }}/>
        {xs.map((x, k) => (
          <g key={k}>
            <circle className="anim" cx={x} cy="62" r="8" fill={k === n - 1 ? '#6EE7B7' : '#4C7FE8'} style={{ animation: playing ? `pNode ${D}s ${k * D / n}s infinite` : 'none', opacity: 0.25 }}/>
            <circle cx={x} cy="62" r="8" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <text className="anim" x={x} y="86" textAnchor="middle" fill="#C7D3E8" fontSize="7.5" fontWeight="600" style={{ animation: playing ? `pNode ${D}s ${k * D / n}s infinite` : 'none', opacity: 0.25 }}>{s.steps[k]}</text>
          </g>
        ))}
        {s.caps.map((c, k) => (
          <text key={k} className="anim" x="160" y="122" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="500" fontStyle="italic" style={{ animation: playing ? `pCap ${D}s ${k * D / n}s infinite` : 'none', opacity: 0 }}>"{c}"</text>
        ))}
        <g className="anim" style={{ animation: playing ? `pRing ${D}s infinite` : 'none', transformOrigin: `${x1}px 62px`, transformBox: 'view-box', opacity: 0 }}>
          <circle cx={x1} cy="62" r="13" fill="none" stroke="#6EE7B7" strokeWidth="2"/>
          <path d={`M${x1 - 5} 62l3.5 3.5 7-8`} stroke="#6EE7B7" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </g>
      </svg>
      <div className="ov">
        <div className="pb">
          <svg width="11" height="11" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6z" fill="#1D4FD7"/></svg>
          VER PROCESO
        </div>
      </div>
    </div>
  );
}

function V5Nav({ lang, setLang }) {
  const L = lang === 'es';
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const ids = ['kaizen', 'servicios', 'formacion', 'plataforma', 'diagnostico'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-30% 0px -60% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const links = L
    ? [['#servicios','Servicios'],['#formacion','Formación'],['#plataforma','Método'],['Nuestra Historia.html','Perfil'],['#form-contacto','Contacto']]
    : [['#servicios','Services'],['#formacion','Training'],['#plataforma','Method'],['Nuestra Historia.html','Profile'],['#form-contacto','Contact']];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${v4S.line}`, padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: `linear-gradient(135deg, ${v4S.primary}, ${v4S.primaryDark})`, display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 14, letterSpacing: -0.3 }}>IxT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: v4S.ink, letterSpacing: -0.3, lineHeight: 1 }}>IxT-QMS</div>
            <div style={{ fontWeight: 600, fontSize: 10, color: v4S.muted, letterSpacing: 0.5, textTransform: 'uppercase', lineHeight: 1 }}>Inspect. Then Trust.</div>
          </div>
        </div>
        <div className="v5nav-links" style={{ display: 'flex', gap: 16, fontSize: 13, color: v4S.ink2, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0 }}>
          {links.map(([href, label]) => {
            const isActive = href === '#' + active;
            return <a key={href} href={href} style={{ color: isActive ? v4S.primary : 'inherit', textDecoration: 'none', fontWeight: isActive ? 700 : 500, borderBottom: isActive ? `2px solid ${v4S.primary}` : '2px solid transparent', paddingBottom: 2, transition: 'color 0.2s, border-color 0.2s' }}>{label}</a>;
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', border: `1px solid ${v4S.line}`, borderRadius: 8, overflow: 'hidden', fontSize: 12, fontWeight: 600 }}>
          <button onClick={() => setLang('es')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'es' ? v4S.ink : 'white', color: lang === 'es' ? 'white' : v4S.ink2 }}>ES</button>
          <button onClick={() => setLang('en')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'en' ? v4S.ink : 'white', color: lang === 'en' ? 'white' : v4S.ink2 }}>EN</button>
        </div>
        <a href="#diagnostico" style={{ padding: '9px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', background: v4S.primary, color: 'white', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', textDecoration: 'none' }}>{L ? 'Agendar reunión de descubrimiento' : 'Schedule discovery meeting'}</a>
      </div>
    </nav>
  );
}
function V5Hero({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'REPRESENTACIÓN TÉCNICA · CONSULTORÍA · FORMACIÓN',
    title: 'Lo que funciona en plantas con estándares exigentes, adaptado a la realidad de su operación.',
    sub: 'Representación técnica, apoyo en lanzamientos, cambios de ingeniería y formación de equipos. Todo respaldado por una metodología propia de control de proceso y trazabilidad.',
    quote: '14 años en manufactura, entre operaciones que están construyendo su sistema de calidad y plantas auditadas con criterio severo. Conocemos los dos lados de la mesa: el criterio con el que el OEM juzga su paquete de aprobación, y la presión del proveedor dentro de la planta de su cliente. No importa de qué lado esté: recibe el beneficio de ambos.',
    cta1: 'Agendar reunión de descubrimiento', cta2: 'Ver líneas de servicio',
    proof: 'Respaldo: instrucción en Universidad Nissan · desarrollo de hojas de operación estándar y evaluación de personal de planta',
  } : {
    eyebrow: 'TECHNICAL REPRESENTATION · CONSULTING · TRAINING',
    title: 'What works in plants held to demanding standards, adapted to the reality of yours.',
    sub: 'On-site technical representation, support on launches and engineering changes, and training for your teams — backed by our own methodology for process control and traceability.',
    quote: '14 years in manufacturing, across operations still building their quality system and plants audited to severe criteria. We know both sides of the table: the criteria the OEM uses to judge your approval package, and the supplier\'s pressure inside their customer\'s plant. Whichever side you are on, you get the benefit of both.',
    cta1: 'Schedule discovery meeting', cta2: 'View service lines',
    proof: 'Backed by: instruction at Nissan University · standard operation sheet development and plant staff assessment',
  };
  return (
    <section style={{ padding: '96px 56px 64px', background: `linear-gradient(180deg, ${v4S.bgCool} 0%, white 100%)` }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
        <div className="v5-hero-in" style={{ animationDelay: '0ms', display: 'inline-block', padding: '6px 14px', borderRadius: 999, background: '#E8EFFC', color: v4S.primary, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 26 }}>{t.eyebrow}</div>
        <h1 className="v5-hero-in" style={{ animationDelay: '120ms', fontSize: 52, lineHeight: 1.1, fontWeight: 700, color: v4S.ink, margin: '0 0 22px', letterSpacing: -1.4, fontFamily: '"Source Serif 4", Georgia, serif', textWrap: 'balance' }}>{t.title}</h1>
        <p className="v5-hero-in" style={{ animationDelay: '240ms', fontSize: 18, color: v4S.ink2, lineHeight: 1.6, margin: '0 auto 30px', maxWidth: 720 }}>{t.sub}</p>
        <div className="v5-hero-in" style={{ animationDelay: '360ms', display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <a href="#diagnostico" style={{ padding: '13px 26px', borderRadius: 9, background: v4S.primary, color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>{t.cta1}</a>
          <a href="#servicios" style={{ padding: '13px 26px', borderRadius: 9, background: 'white', color: v4S.ink, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: `1px solid ${v4S.line}` }}>{t.cta2}</a>
        </div>
        <blockquote className="v5-hero-in" style={{ animationDelay: '480ms', margin: '0 auto', maxWidth: 760, padding: '22px 30px', borderLeft: `3px solid ${v4S.primary}`, background: 'white', borderRadius: '0 12px 12px 0', boxShadow: '0 4px 20px rgba(11,37,69,0.06)', textAlign: 'left' }}>
          <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: v4S.ink, fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic' }}>"{t.quote}"</p>
        </blockquote>
        <div className="v5-hero-in" style={{ animationDelay: '600ms', marginTop: 26, fontSize: 12.5, color: v4S.muted, fontWeight: 600, letterSpacing: 0.3 }}>{t.proof}</div>
      </div>
    </section>
  );
}

function V5Creds({ lang }) {
  const L = lang === 'es';
  const stats = L ? [
    ['52', 'programas vehiculares lanzados'], ['98', 'países de homologación gestionados'],
    ['14', 'años en OEM y Tier 1'], ['2', 'arranques de planta nueva'],
    ['82', 'personas coordinadas en alto volumen'], ['$250K', 'USD de ahorro anual documentado en campañas de calidad'],
  ] : [
    ['52', 'vehicle programs launched'], ['98', 'homologation countries managed'],
    ['14', 'years across OEM and Tier 1'], ['2', 'new plant start-ups'],
    ['82', 'people coordinated in high-volume manufacturing'], ['$250K', 'USD documented annual savings in quality campaigns'],
  ];
  const geo = L
    ? ['Aguascalientes, México', 'Cobertura en planta: Bajío, Norte y Centro del país. Proyectos internacionales bajo acuerdo.']
    : ['Aguascalientes, Mexico', 'On-site coverage: Bajío, Northern and Central Mexico. International projects by agreement.'];
  const kz = L
    ? 'Dos kaizen registrados en la base global de mejores prácticas de Nissan'
    : "Two kaizen registered in Nissan's global best practices database";
  return (
    <section style={{ padding: '0 56px 72px', background: 'white' }}>
      <div className="g6" style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, border: `1px solid ${v4S.line}`, borderRadius: 14, overflow: 'hidden' }}>
        {stats.map(([num, label], i) => (
          <div key={i} style={{ padding: '26px 18px', borderLeft: i > 0 ? `1px solid ${v4S.line}` : 'none', textAlign: 'center' }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: v4S.primary, letterSpacing: -1, fontFamily: '"JetBrains Mono", monospace' }}>{num}</div>
            <div style={{ fontSize: 11.5, color: v4S.ink2, lineHeight: 1.4, marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1140, margin: '16px auto 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: v4S.ink2, border: `1px solid ${v4S.line}`, borderRadius: 999, padding: '9px 18px' }}>
          <svg width="15" height="15" viewBox="-11 -11 22 22" style={{ color: v4S.primary, flexShrink: 0 }}><g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 9c4-4.6 6.2-7.7 6.2-10.4A6.2 6.2 0 0 0 0-7.6a6.2 6.2 0 0 0-6.2 6.2C-6.2 1.3-4 4.4 0 9z"/><circle r="2.3" cy="-1.6"/></g></svg>
          <strong style={{ color: v4S.ink, fontWeight: 700 }}>{geo[0]}</strong>
          <span style={{ color: v4S.line }}>|</span>{geo[1]}
        </span>
        <a href="#kaizen" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 600, color: v4S.ink2, textDecoration: 'none', border: `1px solid ${v4S.line}`, borderRadius: 999, padding: '9px 18px' }}>
          <svg width="16" height="16" viewBox="-11 -11 22 22" style={{ color: v4S.primary, flexShrink: 0 }}><g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle r="8"/><path d="M-3.4 0l2.4 2.4 4.4-5.2"/></g></svg>
          {kz}<span style={{ color: v4S.primary, fontWeight: 700 }}>→</span>
        </a>
      </div>
      <div style={{ maxWidth: 820, margin: '52px auto 0', textAlign: 'center', paddingTop: 40, borderTop: `1px solid ${v4S.line}` }}>
        <p style={{ fontSize: 21, lineHeight: 1.55, color: v4S.ink, margin: 0, fontFamily: '"Source Serif 4", Georgia, serif' }}>{L
          ? 'Ese criterio no se transfiere en una presentación. Se transfiere trabajando en su planta, junto a su equipo, sobre su proceso.'
          : 'That judgement does not transfer in a presentation. It transfers by working in your plant, alongside your team, on your process.'}</p>
        <div style={{ fontSize: 13, color: v4S.muted, marginTop: 14, fontFamily: '"JetBrains Mono", monospace', letterSpacing: 0.5 }}>{L ? 'CUATRO FORMAS DE HACERLO ↓' : 'FOUR WAYS TO DO IT ↓'}</div>
      </div>
    </section>
  );
}
function V5Kaizen({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'DOS KAIZEN REGISTRADOS EN NISSAN',
    title: 'Resultados medidos, no promesas.',
    sub: 'Registrados en la base global de mejores prácticas de Nissan.',
    lp: 'PROBLEMA', lm: 'MÉTODO', lr: 'RESULTADO',
    items: [
      { h: 'Método de Confirmación Virtual ECR → BOM 360 (Q, MFG, R&D)',
        r: '250 mil USD anuales en costo de campañas de calidad, y prevención de retiros por desajuste de especificación.' },
      { h: 'Análisis de fuga de agua con termografía infrarroja',
        r: 'Reducción de manpower y del tiempo de reacción del análisis de paso de agua: de 24 horas a 2 horas.' },
    ],
    close: 'Los módulos de BOM de cliente, auditorías, inspección de defectos y control de material de la plataforma son los nodos que correlacionan el dibujo, la especificación y la hoja de operación. La plataforma no es un producto aparte: es este kaizen automatizado.',
  } : {
    eyebrow: 'TWO KAIZEN REGISTERED AT NISSAN',
    title: 'Measured results, not promises.',
    sub: "Registered in Nissan's global best practices database.",
    lp: 'PROBLEM', lm: 'METHOD', lr: 'RESULT',
    items: [
      { h: 'Virtual Confirmation Method ECR → BOM 360 (Q, MFG, R&D)',
        r: '250K USD in annual quality campaign cost, and prevention of recalls from specification mismatch.' },
      { h: 'Water leak analysis with infrared thermography',
        r: 'Reduced manpower and water-path analysis reaction time: from 24 hours down to 2 hours.' },
    ],
    close: 'The platform\'s customer BOM, audit, defect inspection and material control modules are the nodes correlating drawing, specification and operation sheet. The platform is not a separate product: it is this kaizen, automated.',
  };
  const Row = ({ label, body, accent }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '84px 1fr', gap: 16, alignItems: 'start' }}>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, color: accent || v4S.muted, fontFamily: '"JetBrains Mono", monospace', paddingTop: 3 }}>{label}</div>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: v4S.ink2 }}>{body}</p>
    </div>
  );
  return (
    <section id="kaizen" style={{ padding: '88px 56px', background: 'white', borderTop: `1px solid ${v4S.line}` }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: '0 auto', maxWidth: 700, lineHeight: 1.6 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {t.items.map((k, i) => (
            <div key={i} style={{ border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '30px 34px', background: i === 0 ? v4S.bgCool : 'white' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, fontWeight: 700, color: v4S.primary }}>{'0' + (i + 1)}</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.4, fontFamily: '"Source Serif 4", Georgia, serif' }}>{k.h}</h3>
              </div>
              <Row label={t.lr} body={<span style={{ color: v4S.ink, fontWeight: 600 }}>{k.r}</span>} accent={v4S.primary}/>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, padding: '22px 30px', borderLeft: `3px solid ${v4S.primary}`, background: v4S.bgCool, borderRadius: '0 12px 12px 0', fontSize: 15.5, lineHeight: 1.65, color: v4S.ink, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.close}</p>
      </div>
    </section>
  );
}

function V5Services({ lang }) {
  const L = lang === 'es';
  const [exp, setExp] = React.useState({});
  const moreT = L ? ['Ver todo', 'Ver menos'] : ['Show all', 'Show less'];
  const t = L ? {
    eyebrow: 'CUATRO LÍNEAS DE SERVICIO', title: 'Si alguna de estas escenas le suena, ya sabe para qué servimos.',
    sub: 'Cada línea nace de un problema concreto y se contrata con alcance y entregables definidos por escrito.', cta: 'Solicitar propuesta',
    cards: [
      { k: 'Lanzamiento de nuevos modelos', h: 'Que el arranque no se detenga por un cambio de ingeniería', sc: 'El cambio estaba liberado en el sistema, pero el documento que viajó con la unidad traía la versión anterior. Se descubre en la línea de pruebas, con la unidad ya armada.', d: 'Acompañamos el arranque desde la planeación hasta la producción estable: llevamos el control de los cambios de ingeniería, dejamos definidos los estándares de inspección y el plan de contención antes del primer embarque.', items: ['Planeación y ejecución de lanzamientos (SOP Readiness y Safe Launch)', 'Coordinación de cambios de ingeniería, BOM y validación de especificaciones', 'Soporte en corridas piloto, buy-offs y resolución de problemas durante el arranque', 'Auditoría de preparación para lanzamiento', 'Definición del plan de contención y de los estándares de inspección de arranque', 'Programa de evaluaciones del evento: ajuste y acabado, apariencia, NVH, hermeticidad y ADAS', 'Consolidación de los reportes de prueba en el formato que su cliente va a pedir'], badge: 'Respaldo: 52 programas vehiculares lanzados, y programas de desarrollo de Mercedes-Benz y Volkswagen en IDIADA Applus.', link: ['Preparacion de Lanzamiento.html', 'Ver qué cubre una preparación de lanzamiento →'] },
      { k: 'Representación técnica en planta del cliente', h: 'Reaccionar dentro del plazo, y con la contramedida correcta', sc: 'Su contrato le da 24 horas para responder un reclamo. La aprobación del viaje tarda otras 24. Cuando alguien suyo llega, el cliente ya montó la contención, se la está cobrando, y de su lado nadie vio la pieza.', d: 'Ponemos un ingeniero en la planta de su cliente que describe técnicamente lo que está pasando el mismo día. Con eso reacciona al problema real y no al que se supone — y tiene con qué disputar lo que no le corresponde.', items: ['Respuesta dentro de la ventana contractual, sin depender de un viaje autorizado', 'Descripción técnica del modo de falla real, con evidencia de la pieza en sitio', 'Dirección de la contramedida al problema correcto: reaccionar mal mantiene el defecto en camino y sube el scrap', 'Soporte técnico para disputar cargos: qué es atribuible al proveedor y qué no', 'Contención, clasificación y retrabajo en sitio bajo autorización del cliente', 'Gestión de RMA y disposición de material no conforme', 'Canal técnico entre OEM y proveedor, con juntas y documentación en inglés', 'Respuesta durante crisis de calidad'] },
      { k: 'Trazabilidad de inspección y contención', h: 'Que cada pieza salga de planta con su acta de nacimiento', sc: 'Su cliente pide el alcance de afectación de un lote. La contención se montó con un formato en papel, y la sospecha es incómoda: no hay forma de saber si el inspector confirmó pieza por pieza o solo pegó la hoja a la caja.', d: 'Acompañamos el diseño del flujo de inspección, contención, reparación y liberación en piso, y lo digitalizamos: cada pieza queda con su registro de quién la revisó, contra qué criterio y con qué resultado — configurable a lo que su cliente exige.', items: ['Diseño del flujo de inspección, retención, reparación, revalidación y liberación', 'Definición del criterio de retención y de quién autoriza la liberación o el desecho', 'Trazabilidad por pieza, lote y número de serie, con evidencia adjunta al registro', 'Registro de reparación: causa, responsable, reinspección y confirmación de efectividad', 'Respuesta a solicitudes de alcance de afectación: qué piezas, qué lotes, qué embarques', 'Formación del inspector en el criterio de juicio, no solo en el llenado del formato', 'Correlación entre dibujo, especificación en BOM, norma de inspección y hoja de operación'], badge: 'Respaldo: los dos kaizen registrados en la base global de mejores prácticas de Nissan, y el diseño del flujo de hospital de defectos que opera hoy en la plataforma.' },
      { k: 'Auditoría y seguimiento a proveedores', h: 'Verificar en el piso lo que el 8D dice que ya está resuelto', sc: 'Un SQE lleva decenas de proveedores repartidos en varios países. El 8D regresó cerrado, con fotos y firma. Nadie fue a confirmar que el dispositivo esté instalado, dado de alta y funcionando — y el siguiente embarque trae el mismo defecto.', d: 'Trabajamos como extensión de su equipo de calidad de proveedores: vamos a la planta en su nombre, damos seguimiento al APQP y validamos físicamente que lo declarado en el 8D exista y funcione. Entendemos automotriz, así que también resolvemos las dudas técnicas del proveedor en sitio.', items: ['Seguimiento de APQP a petición del OEM: entregables, fechas y evidencia por fase', 'Validación física de las contramedidas declaradas en el 8D: que existan en el piso y que funcionen', 'Verificación de contención: cobertura real, criterio del inspector y registro', 'Auditoría de proceso y de estándar de inspección con criterio de OEM', 'Auditoría de preparación del proveedor para lanzamiento o incremento de volumen', 'Auditoría del manejo, empaque y uso del producto', 'Resolución de dudas técnicas del proveedor en sitio, sin esperar a la siguiente visita del SQE', 'Seguimiento del plan de acción con responsable y fecha comprometida'], note: 'No incluye auditoría de certificación de tercera parte.' },
    ],
  } : {
    eyebrow: 'FOUR SERVICE LINES', title: 'If any of these scenes sounds familiar, you already know what we are for.',
    sub: 'Every line comes from a concrete problem and is contracted with scope and deliverables defined in writing.', cta: 'Request proposal',
    cards: [
      { k: 'New model launch', h: 'A ramp-up that is not stopped by an engineering change', sc: 'The change was released in the system, but the document that travelled with the unit carried the previous version. It surfaces on the test line, with the unit already built.', d: 'We support the ramp-up from planning through stable production: controlling engineering changes and defining inspection standards and the containment plan before the first shipment.', items: ['Launch planning and execution (SOP Readiness and Safe Launch)', 'Engineering change, BOM and specification validation coordination', 'Support in pilot runs, buy-offs and problem solving during ramp-up', 'Launch readiness audit', 'Definition of the containment plan and start-up inspection standards', 'Event evaluation program: fit and finish, appearance, NVH, water tightness and ADAS', 'Consolidation of test reports in the format your customer will ask for'], badge: 'Backed by: 52 vehicle programs launched, and Mercedes-Benz and Volkswagen development programs at IDIADA Applus.', link: ['Preparacion de Lanzamiento.html', 'See what a launch preparation covers →'] },
      { k: 'Technical representation at your customer plant', h: 'Reacting inside the window — and with the right countermeasure', sc: 'Your contract gives you 24 hours to answer a claim. Travel approval takes another 24. By the time someone of yours arrives, the customer has already set up containment, is charging you for it, and nobody on your side has seen the part.', d: 'We put an engineer inside your customer plant who describes technically what is happening the same day. With that you react to the real problem instead of the assumed one — and you have grounds to dispute what is not yours.', items: ['Response inside the contractual window, without depending on an approved trip', 'Technical description of the real failure mode, with evidence from the part on site', 'Countermeasure aimed at the right problem: reacting wrong keeps the defect shipping and raises scrap', 'Technical support to dispute chargebacks: what is attributable to the supplier and what is not', 'On-site containment, sorting and rework under customer authorization', 'RMA management and disposition of non-conforming material', 'Technical channel between OEM and supplier, with meetings and documentation in English', 'Response during quality crises'] },
      { k: 'Inspection traceability and containment', h: 'Every part leaves the plant with its birth certificate', sc: 'Your customer asks for the affected scope of a lot. Containment was set up on a paper form, and the suspicion is uncomfortable: there is no way to know whether the inspector confirmed part by part or just taped the sheet to the box.', d: 'We support the design of the inspection, containment, repair and release flow on the floor, and digitalize it: every part carries a record of who checked it, against which criteria and with what result — configurable to what your customer demands.', items: ['Design of the inspection, hold, repair, revalidation and release flow', 'Definition of hold criteria and who authorizes release or scrap', 'Traceability by part, lot and serial number, with evidence attached to the record', 'Repair record: cause, owner, reinspection and effectiveness confirmation', 'Response to affected-scope requests: which parts, which lots, which shipments', 'Inspector training on judgement criteria, not just on filling in the form', 'Correlation between drawing, BOM specification, inspection standard and operation sheet'], badge: "Backed by: the two kaizen registered in Nissan's global best practices database, and the design of the defect hospital flow running in the platform today." },
      { k: 'Supplier audits and follow-up', h: 'Verify on the floor what the 8D says is already solved', sc: 'An SQE carries dozens of suppliers spread across several countries. The 8D came back closed, with photos and a signature. Nobody went to confirm the device is installed, set up and working — and the next shipment brings the same defect.', d: 'We work as an extension of your supplier quality team: we go to the plant on your behalf, follow up APQP and physically validate that what the 8D declares exists and works. We know automotive, so we also resolve the supplier technical questions on site.', items: ['APQP follow-up at OEM request: deliverables, dates and evidence by phase', 'Physical validation of the countermeasures declared in the 8D: that they exist on the floor and work', 'Containment verification: real coverage, inspector judgement and record', 'Process and inspection standard audit with OEM judgement', 'Supplier readiness audit for launch or volume increase', 'Audit of product handling, packaging and use', 'On-site resolution of supplier technical questions, without waiting for the next SQE visit', 'Action plan follow-up with owner and committed date'], note: 'Does not include third-party certification audits.' },
    ],
  };
  const P = { stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const svcIc = [
    <g key="0" {...P}><path d="M0 -9c3.2 2.4 4.8 7 3.2 12h-6.4C-4.8 -2 -3.2 -6.6 0 -9z"/><path d="M-3.2 3.4l-3 3.8m9.6-3.8l3 3.8M0 3.4V9"/></g>,
    <g key="1" {...P}><circle cx="-3" cy="-3.5" r="3"/><path d="M-8 7c0-3.6 2.2-5.8 5-5.8S2 3.4 2 7"/><circle cx="4.5" cy="-3" r="2.4"/><path d="M3.5 7c.3-2.7 1.8-4.3 4-4.3"/></g>,
    <g key="2" {...P}><rect x="-8" y="-8.5" width="12" height="16" rx="2"/><path d="M-4.5 -4h5M-4.5 -0.5h5M-4.5 3h3"/><circle cx="5" cy="4.5" r="4"/><path d="M3 4.5l1.5 1.5 3-3.4" strokeWidth="1.9"/></g>,
    <g key="3" {...P}><rect x="-7" y="-8" width="14" height="16" rx="2"/><path d="M-3 -8v-2h6v2"/><path d="M-3.5 -2l2 2 4.5-4.5" strokeWidth="1.9"/><path d="M-3.5 4.5h7"/></g>,
  ];
  return (
    <section id="servicios" style={{ padding: '88px 56px', background: v4S.bgCool }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: 0 }}>{t.sub}</p>
        </div>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, alignItems: 'stretch' }}>
          {t.cards.map((c, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '22px 26px 24px', display: 'flex', flexDirection: 'column', gap: 11 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: '#EDF3FE', color: v4S.primary, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="-11 -11 22 22">{svcIc[i]}</svg>
                </div>
                <div style={{ flex: 1 }}>
                  {c.k && <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase', color: v4S.muted, marginBottom: 4, fontFamily: '"JetBrains Mono", monospace' }}>{c.k}</div>}
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.4, lineHeight: 1.25 }}>{c.h}</h3>
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, color: v4S.muted, fontFamily: '"JetBrains Mono", monospace' }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              {c.sc && <p style={{ fontSize: 14.5, color: v4S.ink, margin: 0, lineHeight: 1.6, fontFamily: '"Source Serif 4", Georgia, serif', background: v4S.bgCool, borderLeft: `3px solid ${v4S.primary}`, borderRadius: '0 8px 8px 0', padding: '13px 16px' }}>{c.sc}</p>}
              <p style={{ fontSize: 14, color: v4S.ink2, margin: 0, lineHeight: 1.5 }}>{c.d}</p>
              <div style={{ position: 'relative' }}>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, maxHeight: exp[i] ? 900 : 132, overflow: 'hidden', transition: 'max-height .35s ease' }}>
                  {c.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 13.5, color: v4S.ink2, lineHeight: 1.5, display: 'flex', gap: 9 }}>
                      <span style={{ color: v4S.primary, fontWeight: 700, flexShrink: 0 }}>·</span>{it}
                    </li>
                  ))}
                </ul>
                {!exp[i] && c.items.length > 4 && <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, background: 'linear-gradient(transparent, white)', pointerEvents: 'none' }}></div>}
              </div>
              {c.items.length > 4 && <button onClick={() => setExp(s => ({ ...s, [i]: !s[i] }))} style={{ alignSelf: 'flex-start', marginBottom: 'auto', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', fontSize: 13, fontWeight: 700, color: v4S.primary }}>{exp[i] ? moreT[1] + ' ↑' : moreT[0] + ' ↓'}</button>}
              {c.note && <div style={{ fontSize: 12, color: v4S.muted, lineHeight: 1.5, background: v4S.bgCool, borderRadius: 8, padding: '10px 13px' }}>{c.note}</div>}
              {c.badge && <div style={{ fontSize: 11.5, color: v4S.muted, fontWeight: 600, lineHeight: 1.5, borderTop: `1px solid ${v4S.line}`, paddingTop: 12 }}>{c.badge}</div>}
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 2, alignItems: 'center' }}>
                <a href="#diagnostico" style={{ fontSize: 13.5, fontWeight: 700, color: v4S.primary, textDecoration: 'none', whiteSpace: 'nowrap' }}>{t.cta} →</a>
                {c.link && <a href={c.link[0]} style={{ fontSize: 13, fontWeight: 700, color: v4S.primary, textDecoration: 'none', border: `1px solid ${v4S.primary}`, borderRadius: 8, padding: '7px 14px' }}>{c.link[1]}</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function V5Training({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'FORMACIÓN', title: 'Dos formatos: aula y piso.',
    sub: 'Los títulos de módulo se publican aquí; el índice detallado se envía por correo al prospecto interesado. Sin versión en línea ni material descargable.',
    flagship: 'PROGRAMA INSIGNIA',
    programs: [
      { h: 'Formación teórica', tag: 'AULA', d: 'Marco conceptual y método, en su sala de juntas o en sede.', mods: ['Sistema de producción ideal y condición ideal de producción', 'Just in Time (JIT)', 'Los 7 desperdicios', 'Fundamentos de Kaizen y principios de economía de movimientos', 'Liderazgo y gestión de equipos', 'Selección de personal de proyecto y job allocation', 'Estandarización de proceso'] },
      { h: 'Formación en planta', tag: 'PRÁCTICA', flag: true, d: 'Se imparte sobre el proceso real, con la línea y las piezas del cliente.', mods: ['Control intensivo de arranque y Safe Launch', 'Control de campo', 'Capacitación del personal', 'Confirmación de equipo e instalaciones', 'Flujo y áreas de trabajo para Kaizen', 'Práctica con maqueta', 'Gestión de equipos en piso'] },
    ],
    extraH: 'Cursos adicionales del catálogo',
    extra: 'Resolución de problemas 8D y QA · QC Story · Quality Control & SPC · técnicas de confirmación de calidad · poka-yoke · formación de instructores y desarrollo de hojas de operación estándar',
    delivery: 'La formación teórica puede impartirse en su sede o en la nuestra; la formación en planta se imparte sobre el proceso del cliente. El índice detallado se envía por correo.',
    cta: 'Solicitar propuesta de formación',
  } : {
    eyebrow: 'TRAINING', title: 'Two formats: classroom and shop floor.',
    sub: 'Module titles are published here; the detailed index is emailed to interested prospects. No online version, no downloadable material.',
    flagship: 'FLAGSHIP PROGRAM',
    programs: [
      { h: 'Classroom training', tag: 'CLASSROOM', d: 'Concepts and method, in your meeting room or at our venue.', mods: ['Ideal production system and ideal production condition', 'Just in Time (JIT)', 'The 7 wastes', 'Kaizen fundamentals and motion economy principles', 'Leadership and team management', 'Project staff selection and job allocation', 'Process standardization'] },
      { h: 'In-plant training', tag: 'HANDS-ON', flag: true, d: 'Delivered on the real process, with the customer\'s line and parts.', mods: ['Intensive ramp-up control and Safe Launch', 'Field control', 'Staff training', 'Equipment and facilities confirmation', 'Work areas and flow for Kaizen', 'Hands-on mockup practice', 'Team management on the floor'] },
    ],
    extraH: 'Additional catalog courses',
    extra: '8D and QA problem solving · QC Story · Quality Control & SPC · quality confirmation techniques · poka-yoke · train-the-trainer and standard operation sheet development',
    delivery: "Classroom training can be delivered at your site or ours; in-plant training is delivered on the customer's process. The detailed syllabus is sent by email.",
    cta: 'Request training proposal',
  };
  return (
    <section id="formacion" style={{ padding: '88px 56px', background: 'white' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          <p style={{ fontSize: 15.5, color: v4S.muted, margin: '0 auto', maxWidth: 680, lineHeight: 1.6 }}>{t.sub}</p>
        </div>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, marginBottom: 30 }}>
          {t.programs.map((p, i) => (
            <div key={i} style={{ border: p.flag ? `2px solid ${v4S.primary}` : `1px solid ${v4S.line}`, borderRadius: 14, padding: '28px 30px', background: p.flag ? '#F5F8FE' : 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 19.5, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.3, lineHeight: 1.3 }}>{p.h}</h3>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, color: v4S.primary, background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 5, padding: '3px 8px', fontFamily: '"JetBrains Mono", monospace' }}>{p.tag}</span>
              </div>
              <p style={{ fontSize: 13.5, color: v4S.muted, margin: '0 0 16px', lineHeight: 1.55, fontStyle: 'italic' }}>{p.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'stretch' }}>
                {p.mods.map((m, j) => (
                  <span key={j} style={{ fontSize: 12.5, color: v4S.ink2, background: p.flag ? 'white' : v4S.bgCool, border: `1px solid ${v4S.line}`, borderRadius: 999, padding: '6px 13px', lineHeight: 1.4, display: 'inline-flex', alignItems: 'center' }}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '24px 30px', marginBottom: 26 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: v4S.muted, textTransform: 'uppercase', marginBottom: 8 }}>{t.extraH}</div>
          <p style={{ margin: 0, fontSize: 14, color: v4S.ink2, lineHeight: 1.7 }}>{t.extra}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: v4S.muted, margin: '0 0 18px', fontStyle: 'italic' }}>{t.delivery}</p>
          <a href="#diagnostico" style={{ display: 'inline-block', padding: '13px 26px', borderRadius: 9, background: v4S.primary, color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>{t.cta}</a>
        </div>
      </div>
    </section>
  );
}

function V5Platform({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'ASÍ TRABAJAMOS', title: 'Nuestro método sigue cada pieza, no cada documento.',
    sub: 'Un sistema de calidad tradicional administra papeles. Nosotros seguimos la pieza inspeccionada desde que se detecta hasta su disposición final — y esa metodología está digitalizada en IxT-QMS, la herramienta con la que trabajamos. No se vende por separado: se incluye en los programas y se instala en el servidor del cliente.',
    flowH: 'EL CICLO DE VIDA DE LA PIEZA',
    flow: ['Inspección', 'Declaración de defecto', 'Reparación', 'Validación', 'MRB / Hospital de defectos', 'Reinspección', 'Liberación o scrap autorizado'],
    flowNote: 'El documento es el resultado. El flujo operativo es el valor.',
    points: [
      ['Instalada en su servidor', 'Sin base de datos compartida con nadie, sin proveedor externo que auditar.'],
      ['Opera sin internet', 'La operación crítica funciona aunque se caiga el enlace.'],
      ['Se incluye en el programa', 'No estamos tomando instalaciones nuevas este trimestre. Trabajamos con un número limitado de socios iniciales mientras se cierra funcionalidad.'],
    ],
    shotsH: 'Evidencia: cuatro módulos en operación',
    shots: [
      ['8d-dashboard.png', '8D · resolución de problemas', 'Tablero de reportes 8D con estado, responsable y avance por disciplina.'],
      ['alerta-qar.png', 'Alertas QAR', 'Alerta de calidad emitida con evidencia, área responsable y seguimiento.'],
      ['hospital-defectos.png', 'Hospital de defectos', 'Registro de unidades retenidas con defecto, disposición y liberación.'],
      ['mrb-dashboard.png', 'MRB · control de material', 'Control de material no conforme con ubicación física y disposición.'],
    ],
    note: 'Requisitos técnicos para el departamento de TI del cliente disponibles a solicitud: sistema operativo, recursos de servidor, base de datos, puertos, respaldos y autenticación.',
  } : {
    eyebrow: 'HOW WE WORK', title: 'Our method follows every part, not every document.',
    sub: 'A traditional quality system manages paperwork. We follow the inspected part from detection through to final disposition — and that methodology is digitalized in IxT-QMS, the tool we work with. It is not sold separately: it is included in the programs and installed on the customer server.',
    flowH: 'THE LIFECYCLE OF THE PART',
    flow: ['Inspection', 'Defect declaration', 'Repair', 'Validation', 'MRB / Defect hospital', 'Reinspection', 'Release or authorized scrap'],
    flowNote: 'The document is the result. The operational workflow is the value.',
    points: [
      ['Installed on your server', 'No shared database with anyone, no external vendor to audit.'],
      ['Runs without internet', 'Critical operation keeps working even if the link goes down.'],
      ['Included in the program', 'We are not taking new installations this quarter. We work with a limited number of early partners while functionality is finalized.'],
    ],
    shotsH: 'Evidence: four modules in operation',
    shots: [
      ['8d-dashboard.png', '8D · problem solving', '8D report board with status, owner and progress per discipline.'],
      ['alerta-qar.png', 'QAR alerts', 'Quality alert issued with evidence, responsible area and follow-up.'],
      ['hospital-defectos.png', 'Defect hospital', 'Log of units held with a defect, disposition and release.'],
      ['mrb-dashboard.png', 'MRB · material control', 'Non-conforming material control with physical location and disposition.'],
    ],
    note: "Technical requirements for the customer's IT department available on request: operating system, server resources, database, ports, backups and authentication.",
  };
  return (
    <section id="plataforma" style={{ padding: '88px 56px', background: v4S.ink, color: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 14 }}>{t.eyebrow}</div>
            <h2 style={{ fontSize: 38, lineHeight: 1.15, fontWeight: 700, margin: 0, letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          </div>
          <p style={{ fontSize: 15.5, color: '#94A6C7', margin: 0, lineHeight: 1.65 }}>{t.sub}</p>
        </div>
        <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '24px 26px', marginBottom: 34, background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: '#7DB7FF', marginBottom: 16, fontFamily: '"JetBrains Mono", monospace' }}>{t.flowH}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 16 }}>
            {t.flow.map((f, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ color: '#4C7FE8', fontWeight: 700, fontSize: 13 }}>→</span>}
                <span style={{ fontSize: 13, fontWeight: 600, color: 'white', background: 'rgba(76,127,232,0.16)', border: '1px solid rgba(125,183,255,0.3)', borderRadius: 999, padding: '7px 15px' }}>{f}</span>
              </React.Fragment>
            ))}
          </div>
          <div style={{ fontSize: 14, color: '#94A6C7', fontStyle: 'italic' }}>{t.flowNote}</div>
        </div>
        <div className="g3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 46 }}>
          {t.points.map(([h, b], i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 26px' }}>
              <div style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 10 }}>{h}</div>
              <div style={{ fontSize: 13.5, color: '#94A6C7', lineHeight: 1.6 }}>{b}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: '#94A6C7', textTransform: 'uppercase', marginBottom: 18 }}>{t.shotsH}</div>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, marginBottom: 26 }}>
          {t.shots.map(([src, h, alt], i) => (
            <figure key={i} style={{ margin: 0, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, overflow: 'hidden' }}>
              <img src={'screenshots/' + src} alt={alt} loading="lazy" style={{ width: '100%', display: 'block', borderBottom: '1px solid rgba(255,255,255,0.1)' }}/>
              <figcaption style={{ padding: '14px 18px 16px' }}>
                <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 5 }}>{h}</div>
                <div style={{ fontSize: 12.5, color: '#94A6C7', lineHeight: 1.5 }}>{alt}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{ fontSize: 12.5, color: '#7B8AA8', fontStyle: 'italic' }}>{t.note}</div>
      </div>
    </section>
  );
}
function V5Diagnostico({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'CÓMO EMPEZAR', title: 'Un camino claro, paso a paso.',
    sub: 'La primera conversación no tiene costo. El trabajo técnico siempre tiene alcance, entregable y cotización.',
    steps: [
      { n: '0', h: 'Primer contacto', tag: 'Sin costo', tagC: '#0E9F6E',
        items: ['Llamada de calificación de 30 minutos', 'Demostración de la plataforma con datos ficticios', 'White papers de metodología'] },
      { n: '1', h: 'Quick Assessment', tag: 'Remoto', tagC: '#1D4FD7',
        items: ['Evaluación de procesos de calidad y principales riesgos operativos', 'Identificación de oportunidades de mejora y prioridades', 'Reporte ejecutivo con recomendaciones y siguientes pasos'],
        foot: 'Se realiza de forma remota. Si se requiere visita a planta fuera de Aguascalientes, pasa a Nivel 2.' },
      { n: '2', h: 'Diagnóstico en planta', tag: 'Con cotización', tagC: '#1D4FD7',
        items: ['Visita a planta con alcance y entregable definidos', 'Propuesta técnica detallada', 'Índice detallado de formación'],
        foot: 'Acreditable contra el programa si se contrata dentro de 30 días.' },
      { n: '3', h: 'Programa', tag: 'Contrato anual', tagC: '#0B2545',
        items: ['Implementación, formación privada, representación técnica o digitalización', 'Acceso a la plataforma IxT-QMS incluido, instalada en su servidor', 'Seguimiento continuo con entregables por periodo'] },
    ],
    costH: 'ANTES DE ESCRIBIR',
    costT: 'Ponga números a lo que ya está pagando.',
    costS: 'No necesitamos estas cifras. Le sirven a usted para justificar el proyecto ante su dirección.',
    costs: [
      'Cargos del cliente por contención y clasificación hechas en su planta',
      'Scrap producido entre que apareció el defecto y se encontró la causa real',
      'Viajes de emergencia, tiempo de ingeniería fuera de plan y horas extra',
      'Piezas retenidas sin disposición: capital detenido en el piso',
      'Paros de línea de su cliente y la penalización asociada',
      'Reincidencia: el mismo defecto que regresa tres meses después',
      'Horas del equipo reconstruyendo evidencia que el cliente pide',
      'Estar en escalamiento con su cliente: seguimiento ejecutivo, reportes extra, reuniones y auditorías fuera de plan',
    ],
    costF: 'Si tres o más de estos rubros le resultan difíciles de estimar, ese es en sí mismo el hallazgo.',
    levels: 'Ver los niveles de servicio →',
    cta: 'Agendar reunión de descubrimiento', contact: 'ixt.qms@gmail.com · +52 449 415 8248 · Aguascalientes, México',
    note: 'Todos los servicios se cotizan de acuerdo con el alcance del proyecto. Los viáticos y gastos de viaje se cotizan por separado para servicios fuera de Aguascalientes.',
    priv: ['El envío de este formulario se procesa mediante Web3Forms. Consulte el ', 'aviso de privacidad', '.'],
  } : {
    eyebrow: 'HOW TO START', title: 'A clear path, step by step.',
    sub: 'The first conversation has no cost. Technical work always has scope, deliverable and quote.',
    steps: [
      { n: '0', h: 'First contact', tag: 'No cost', tagC: '#0E9F6E',
        items: ['30-minute qualification call', 'Platform demo with sample data', 'Methodology white papers'] },
      { n: '1', h: 'Quick Assessment', tag: 'Remote', tagC: '#1D4FD7',
        items: ['Review of quality processes and main operational risks', 'Identification of improvement opportunities and priorities', 'Executive report with recommendations and next steps'],
        foot: 'Delivered remotely. If a plant visit outside Aguascalientes is required, it moves to Level 2.' },
      { n: '2', h: 'On-site assessment', tag: 'Quoted', tagC: '#1D4FD7',
        items: ['Plant visit with defined scope and deliverable', 'Detailed technical proposal', 'Detailed training syllabus'],
        foot: 'Creditable against the program if contracted within 30 days.' },
      { n: '3', h: 'Program', tag: 'Annual contract', tagC: '#0B2545',
        items: ['Implementation, private training, technical representation or digitalization', 'IxT-QMS platform included, installed on your server', 'Ongoing follow-up with deliverables per period'] },
    ],
    costH: 'BEFORE YOU WRITE',
    costT: 'Put numbers on what you are already paying.',
    costS: 'We do not need these figures. They are for you, to justify the project to your management.',
    costs: [
      'Customer chargebacks for containment and sorting done at their plant',
      'Scrap produced between the defect appearing and the real cause being found',
      'Emergency travel, unplanned engineering time and overtime',
      'Held parts with no disposition: capital sitting on the floor',
      'Customer line stoppages and the associated penalty',
      'Recurrence: the same defect coming back three months later',
      'Team hours spent rebuilding evidence the customer asks for',
      'Sitting at an escalation level: executive follow-up, extra reporting, meetings and unplanned audits',
    ],
    costF: 'If three or more of these are hard for you to estimate, that is the finding in itself.',
    levels: 'See the service levels →',
    cta: 'Schedule discovery meeting', contact: 'ixt.qms@gmail.com · +52 449 415 8248 · Aguascalientes, Mexico',
    note: 'All services are quoted according to project scope. Travel expenses are quoted separately for services outside Aguascalientes.',
    priv: ['This form is processed through Web3Forms. See the ', 'privacy notice', '.'],
  };
  return (
    <section id="diagnostico" style={{ padding: '88px 56px', background: v4S.bgCool }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
        <p style={{ fontSize: 16, color: v4S.ink2, margin: '0 auto 20px', maxWidth: 640, lineHeight: 1.6 }}>{t.sub}</p>
        <div style={{ marginBottom: 34 }}>
          <a href="#form-contacto" style={{ display: 'inline-block', padding: '13px 26px', borderRadius: 10, background: v4S.primary, color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>{L ? 'Ir al formulario de contacto ↓' : 'Go to the contact form ↓'}</a>
        </div>
        <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24, textAlign: 'left' }}>
          {t.steps.map((s, i) => {
            const first = i === 0;
            const Tag = first ? 'a' : 'div';
            const extra = first ? { href: '#form-contacto', className: 'ixstep0' } : {};
            return (
            <Tag key={i} {...extra} style={{ background: 'white', border: `1px solid ${first ? s.tagC : v4S.line}`, borderRadius: 14, padding: '22px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12, borderTop: `3px solid ${s.tagC}`, color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, fontWeight: 700, color: s.tagC }}>N{s.n}</span>
                <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 0.7, textTransform: 'uppercase', color: 'white', background: s.tagC, borderRadius: 4, padding: '3px 8px' }}>{s.tag}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.3 }}>{s.h}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 13, color: v4S.ink2, lineHeight: 1.5, display: 'flex', gap: 8 }}>
                    <span style={{ color: s.tagC, fontWeight: 700, flexShrink: 0 }}>·</span>{it}
                  </li>
                ))}
              </ul>
              {s.foot && <p style={{ margin: 0, paddingTop: 10, borderTop: `1px solid ${v4S.line}`, fontSize: 11.5, color: v4S.muted, lineHeight: 1.5, fontStyle: 'italic' }}>{s.foot}</p>}
              {first && <span style={{ marginTop: 2, paddingTop: 10, borderTop: `1px solid ${v4S.line}`, fontSize: 12.5, fontWeight: 700, color: s.tagC }}>{L ? 'Empieza aquí — abrir formulario ↓' : 'Start here — open the form ↓'}</span>}
            </Tag>
          );})}
        </div>
        <p style={{ fontSize: 12.5, color: v4S.muted, fontStyle: 'italic', margin: '0 0 32px' }}>{t.note}</p>
        <div id="form-contacto" style={{ scrollMarginTop: 80 }}></div>
        <div className="gsplit" style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 22, textAlign: 'left', alignItems: 'start' }}>
          <aside style={{ background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '26px 26px 24px' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 12 }}>{t.costH}</div>
            <h3 style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 21, fontWeight: 700, color: v4S.ink, margin: '0 0 10px', letterSpacing: -0.4, lineHeight: 1.3 }}>{t.costT}</h3>
            <p style={{ fontSize: 13, color: v4S.muted, margin: '0 0 18px', lineHeight: 1.55 }}>{t.costS}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 11 }}>
              {t.costs.map((c, i) => (
                <li key={i} style={{ fontSize: 13.5, color: v4S.ink2, lineHeight: 1.5, display: 'flex', gap: 10 }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, fontWeight: 700, color: v4S.primary, flexShrink: 0, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>{c}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: v4S.ink, margin: '18px 0 0', paddingTop: 16, borderTop: `1px solid ${v4S.line}`, lineHeight: 1.55, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.costF}</p>
          </aside>
          <V5Form L={L}/>
        </div>
        <div style={{ fontSize: 12, color: v4S.muted, marginTop: 16 }}>
          {t.priv[0]}<a href="Aviso de Privacidad.html" style={{ color: v4S.primary, fontWeight: 600 }}>{t.priv[1]}</a>{t.priv[2]}
        </div>
        <div style={{ fontSize: 13, color: v4S.muted, marginTop: 16 }}>{t.contact}</div>
      </div>
    </section>
  );
}
// ── Configuración de envío del formulario ────────────────────────────────
// Pega UNA de las dos. Ambas son gratis y envían el mensaje directo a tu correo.
//  A) Web3Forms  → web3forms.com  (solo pide tu correo, sin cuenta · 250 envíos/mes)
//     Ej: const IXT_WEB3FORMS_KEY = 'a1b2c3d4-0000-0000-0000-abcdef123456';
const IXT_WEB3FORMS_KEY = 'fd036c2c-dee1-4306-ba3f-b6c26193e9ad';
//  B) Formspree  → formspree.io   (requiere cuenta · 50 envíos/mes)
//     Ej: const IXT_FORM_ENDPOINT = 'https://formspree.io/f/xabcdefg';
const IXT_FORM_ENDPOINT = '';
const IXT_POST_URL = IXT_WEB3FORMS_KEY ? 'https://api.web3forms.com/submit' : IXT_FORM_ENDPOINT;

function V5Form({ L }) {
  const [state, setState] = React.useState('idle');
  const [err, setErr] = React.useState('');
  const t = L ? {
    h: 'Agendar reunión de descubrimiento', sub: 'Respondemos en menos de 24 horas hábiles con propuesta de agenda.',
    name: 'Nombre', company: 'Empresa', role: 'Puesto', email: 'Correo corporativo', phone: 'Teléfono (opcional)',
    tier: 'Tipo de organización', tierOpts: ['OEM', 'Tier 1', 'Tier 2', 'Tier 3', 'Otro'],
    svc: 'Servicio de interés', svcOpts: ['Lanzamiento de nuevos modelos', 'Representación técnica en planta del cliente', 'Trazabilidad de inspección y contención', 'Auditoría y seguimiento a proveedores', 'Formación en planta', 'No estoy seguro'],
    msg: 'Contexto del proyecto', msgPh: 'Lanzamiento próximo, problema de calidad abierto, alcance estimado, plantas involucradas…',
    link: 'Enlace a documentación (opcional)', linkPh: 'Drive, SharePoint o WeTransfer con presentación, planos o reporte del problema',
    send: 'Enviar solicitud', sending: 'Enviando…',
    okH: 'Solicitud enviada', okB: 'Gracias. Recibirá una respuesta en su correo con propuesta de horarios.',
    fbH: 'Se abrió su cliente de correo', fbB: 'Verifique que el mensaje se haya enviado. Si no se abrió, escríbanos directo a ixt.qms@gmail.com',
    errB: 'No se pudo enviar. Escríbanos directo a ixt.qms@gmail.com',
    priv: 'La información se usa únicamente para responder su solicitud. No compartimos datos con terceros.',
  } : {
    h: 'Schedule a discovery meeting', sub: 'We reply within one business day with proposed times.',
    name: 'Name', company: 'Company', role: 'Job title', email: 'Work email', phone: 'Phone (optional)',
    tier: 'Organization type', tierOpts: ['OEM', 'Tier 1', 'Tier 2', 'Tier 3', 'Other'],
    svc: 'Service of interest', svcOpts: ['New model launch', 'Technical representation at your customer plant', 'Inspection traceability and containment', 'Supplier audits and follow-up', 'In-plant training', 'Not sure yet'],
    msg: 'Project context', msgPh: 'Upcoming launch, open quality issue, estimated scope, plants involved…',
    link: 'Link to documentation (optional)', linkPh: 'Drive, SharePoint or WeTransfer with a deck, drawings or issue report',
    send: 'Send request', sending: 'Sending…',
    okH: 'Request sent', okB: 'Thank you. You will receive a reply with proposed times.',
    fbH: 'Your email client was opened', fbB: 'Please confirm the message was actually sent. If nothing opened, email us directly at ixt.qms@gmail.com',
    errB: 'Could not send. Email us directly at ixt.qms@gmail.com',
    priv: 'Information is used only to answer your request. We do not share data with third parties.',
  };
  const lbl = { display: 'block', fontSize: 11.5, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color: v4S.muted, marginBottom: 6 };
  const fld = { width: '100%', boxSizing: 'border-box', padding: '11px 13px', border: `1px solid ${v4S.line}`, borderRadius: 8, fontSize: 14, fontFamily: 'inherit', color: v4S.ink, background: 'white', outline: 'none' };
  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (!IXT_POST_URL) {
      const body = [...fd.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
      window.location.href = `mailto:ixt.qms@gmail.com?subject=${encodeURIComponent((L ? 'Reunión de descubrimiento — ' : 'Discovery meeting — ') + (fd.get('company') || 'IxT-QMS'))}&body=${encodeURIComponent(body)}`;
      setState('fallback');
      return;
    }
    setState('sending');
    try {
      if (IXT_WEB3FORMS_KEY) {
        fd.append('access_key', IXT_WEB3FORMS_KEY);
        fd.append('subject', (L ? 'Nueva solicitud de reunión — ' : 'New meeting request — ') + (fd.get('company') || 'IxT-QMS'));
        fd.append('from_name', 'IxT-QMS · Sitio web');
      }
      const r = await fetch(IXT_POST_URL, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error('http ' + r.status);
      setState('ok');
    } catch (ex) { setErr(String(ex.message || ex)); setState('error'); }
  };
  if (state === 'ok' || state === 'fallback') {
    const ok = state === 'ok';
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '36px 32px', textAlign: 'center' }}>
        <svg width="44" height="44" viewBox="-11 -11 22 22" style={{ marginBottom: 14 }}><circle r="9.2" fill="none" stroke={ok ? '#16A34A' : '#B45309'} strokeWidth="1.8"/>{ok ? <path d="M-4 0l3 3 5.2-6" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/> : <g fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round"><path d="M0 -4.6v5.4"/><path d="M0 4.3v.2"/></g>}</svg>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: v4S.ink, margin: '0 0 8px' }}>{ok ? t.okH : t.fbH}</h3>
        <p style={{ fontSize: 14, color: v4S.ink2, margin: 0, lineHeight: 1.6 }}>{ok ? t.okB : t.fbB}</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} style={{ maxWidth: 720, margin: '0 auto', background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '30px 32px', textAlign: 'left' }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: v4S.ink, margin: '0 0 6px', letterSpacing: -0.3 }}>{t.h}</h3>
      <p style={{ fontSize: 13.5, color: v4S.ink2, margin: '0 0 24px' }}>{t.sub}</p>
      <div className="gform" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div><label style={lbl} htmlFor="f-name">{t.name}</label><input style={fld} id="f-name" name="nombre" required/></div>
        <div><label style={lbl} htmlFor="f-company">{t.company}</label><input style={fld} id="f-company" name="company" required/></div>
        <div><label style={lbl} htmlFor="f-role">{t.role}</label><input style={fld} id="f-role" name="puesto"/></div>
        <div><label style={lbl} htmlFor="f-email">{t.email}</label><input style={fld} id="f-email" name="email" type="email" required/></div>
        <div><label style={lbl} htmlFor="f-phone">{t.phone}</label><input style={fld} id="f-phone" name="telefono"/></div>
        <div><label style={lbl} htmlFor="f-tier">{t.tier}</label><select style={fld} id="f-tier" name="tipo" required defaultValue=""><option value="" disabled></option>{t.tierOpts.map(o => <option key={o} value={o}>{o}</option>)}</select></div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={lbl} htmlFor="f-svc">{t.svc}</label>
        <select style={fld} id="f-svc" name="servicio" required defaultValue=""><option value="" disabled></option>{t.svcOpts.map(o => <option key={o} value={o}>{o}</option>)}</select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={lbl} htmlFor="f-msg">{t.msg}</label>
        <textarea style={{ ...fld, minHeight: 104, resize: 'vertical', lineHeight: 1.5 }} id="f-msg" name="mensaje" placeholder={t.msgPh}></textarea>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={lbl} htmlFor="f-link">{t.link}</label>
        <input style={fld} id="f-link" name="enlace_documentacion" type="url" placeholder={t.linkPh}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
        <button type="submit" disabled={state === 'sending'} style={{ padding: '13px 30px', borderRadius: 9, border: 'none', background: v4S.primary, color: 'white', fontWeight: 700, fontSize: 15, fontFamily: 'inherit', cursor: state === 'sending' ? 'wait' : 'pointer', whiteSpace: 'nowrap' }}>{state === 'sending' ? t.sending : t.send}</button>
        <p style={{ fontSize: 11.5, color: v4S.muted, margin: 0, lineHeight: 1.5, flex: 1, minWidth: 220 }}>{t.priv}</p>
      </div>
      {state === 'error' && <p style={{ fontSize: 13, color: '#B42318', margin: '14px 0 0' }}>{t.errB}</p>}
    </form>
  );
}

function V5Intro({ onDone, L }) {
  const [out, setOut] = React.useState(false);
  const finish = React.useCallback(() => { setOut(true); setTimeout(onDone, 800); }, [onDone]);
  React.useEffect(() => {
    const t = setTimeout(finish, 2000);
    return () => clearTimeout(t);
  }, [finish]);
  const mods = L
    ? ['8D', 'Alertas QAR', 'Auditorías', 'BOM de cliente', 'Hospital de defectos', 'Inspección de defectos', 'MRB · material', 'Matriz de habilidades', 'Carga de trabajo']
    : ['8D', 'QAR alerts', 'Audits', 'Customer BOM', 'Defect hospital', 'Defect inspection', 'MRB · material', 'Skills matrix', 'Workload'];
  const svcs = L
    ? ['Representación técnica', 'Confirmación de producto', 'Pruebas vehiculares', 'Auditoría a proveedores']
    : ['Technical representation', 'Product confirmation', 'Vehicle testing', 'Supplier audits'];
  const crs = L
    ? ['Safe Launch · Control de arranque', 'Control de campo', 'Kaizen', 'Liderazgo', '8D · QA', 'Quality Control · SPC']
    : ['Safe Launch · Ramp-up control', 'Field control', 'Kaizen', 'Leadership', '8D · QA', 'Quality Control · SPC'];
  const tI = L
    ? { svc: 'SERVICIOS', trn: 'FORMACIÓN', mod: 'MÓDULOS DEL PROGRAMA', skip: 'SALTAR →' }
    : { svc: 'SERVICES', trn: 'TRAINING', mod: 'PROGRAM MODULES', skip: 'SKIP →' };
  // fase 1: fábrica 0-3.4s · fase 2: módulos 3.4-5.8s · fase 3: servicios+cursos 5.8-8.4s · logo 8.4s+
  const ico = (k) => {
    const p = { stroke: 'currentColor', strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
    const g = {
      seal: <g {...p}><circle r="7"/><path d="M-3 0l2.2 2.2 4-4.6"/></g>,
      ecr: <g {...p}><path d="M-7 -4h8l4 4-4 4h-8z"/><path d="M-3.5 0h4M-1 -2.5L1.5 0 -1 2.5"/></g>,
      alert: <g {...p}><path d="M0 -7.5l7.5 13h-15z"/><path d="M0 -2v4"/><circle cx="0" cy="4.6" r="0.4" fill="currentColor"/></g>,
      audit: <g {...p}><rect x="-6.5" y="-8" width="13" height="16" rx="2"/><path d="M-3 -3.5h6M-3 0h6"/><path d="M-3 4l1.8 1.8 3.5-4"/></g>,
      doc: <g {...p}><path d="M-5.5 -8h7l4 4v12h-11z"/><path d="M-2.5 -1h5M-2.5 2.5h5M-2.5 6h3"/></g>,
      hosp: <g {...p}><path d="M-8 1h4l2-6 4 11 2-5h4"/></g>,
      grid: <g {...p}><rect x="-7.5" y="-7.5" width="15" height="15" rx="2"/><path d="M-7.5 -2.5h15M-7.5 2.5h15M-2.5 -7.5v15M2.5 -7.5v15" opacity=".7"/></g>,
      kpi: <g {...p}><path d="M-6.5 7V1M-2.2 7v-8M2.2 7V-1M6.5 7v-12" strokeWidth="2.2"/></g>,
      flow: <g {...p}><circle cx="0" cy="-5" r="2.4"/><circle cx="-5" cy="4" r="2.4"/><circle cx="5" cy="4" r="2.4"/><path d="M-1.6 -3.2l-2.3 4.4M1.6 -3.2l2.3 4.4"/></g>,
      rocket: <g {...p}><path d="M0 -9c3.5 2.6 5 8 3.5 13.5h-7C-5 -1 -3.5 -6.4 0 -9z"/><path d="M-3.5 4.5l-3 4M3.5 4.5l3 4M0 4.5V9"/></g>,
      people: <g {...p}><circle cx="-2.5" cy="-3.5" r="2.6"/><path d="M-7.5 6c0-3.4 2.2-5.4 5-5.4s5 2 5 5.4"/><circle cx="4.5" cy="-2.8" r="2" opacity=".7"/><path d="M2.5 6c.3-2.6 1.7-4.2 4-4.2 1.6 0 2.9.8 3.5 2.2" opacity=".7"/></g>,
      gear: <g {...p}><circle r="3"/><circle r="6.8" strokeDasharray="2.6 2.8"/></g>,
      grad: <g {...p}><path d="M-8 -2l8-3.5L8 -2 0 1.5z"/><path d="M-4.5 0v4c0 1.6 2 2.8 4.5 2.8S4.5 5.6 4.5 4V0"/><path d="M8 -2v5"/></g>,
      flag: <g {...p}><path d="M-4.5 -8v16"/><path d="M-4.5 -6.5h9.5l-2.5 3.2 2.5 3.2h-9.5"/></g>,
      eye: <g {...p}><path d="M-8 0C-5.5 -4 -2.8 -5.5 0 -5.5S5.5 -4 8 0C5.5 4 2.8 5.5 0 5.5S-5.5 4 -8 0z"/><circle r="2.2"/></g>,
      bulb: <g {...p}><path d="M0 -8.5a5.5 5.5 0 0 1 2.8 10.2c-.9.6-1.3 1.3-1.3 2.6h-3c0-1.3-.4-2-1.3-2.6A5.5 5.5 0 0 1 0 -8.5z"/><path d="M-1.8 7.5h3.6"/></g>,
      tools: <g {...p}><path d="M-8 -8l9 9"/><circle cx="4" cy="-4" r="3.2"/><path d="M-5 5l-3 3M1 1l7 7"/></g>,
    };
    return <svg width="15" height="15" viewBox="-11 -11 22 22">{g[k]}</svg>;
  };
  const modIco = ['seal', 'alert', 'audit', 'doc', 'hosp', 'eye', 'grid', 'people', 'kpi'];
  const svcIco2 = ['people', 'seal', 'gear', 'audit'];
  const crsIco = ['flag', 'eye', 'bulb', 'people', 'tools', 'gear'];
  return (
    <div className={'v5intro' + (out ? ' out' : '')}>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', animation: 'iLogo 1s .15s both', pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'linear-gradient(135deg,#1D4FD7,#0B2545)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 22, boxShadow: '0 0 60px rgba(29,79,215,0.55)' }}>IxT</div>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>IxT-QMS</div>
          <div style={{ color: '#7DB7FF', fontSize: 13, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase' }}>Inspect. Then Trust.</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.08)' }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg,#1D4FD7,#7DB7FF)', transformOrigin: 'left', animation: 'iBar 9.6s linear both' }}></div>
      </div>
      <button className="skip" onClick={finish}>{tI.skip}</button>
    </div>
  );
}

// memoria de animación: una sola vez por sesión (y nunca cuando se llega con #ancla)
const IX_SEEN = (() => { try { return sessionStorage.getItem('ixSeenAnim') === '1'; } catch (e) { return false; } })();
try { sessionStorage.setItem('ixSeenAnim', '1'); } catch (e) {}
const IX_SKIP = IX_SEEN || !!location.hash;

function HomeLanding() {
  const [lang, setLang] = React.useState(() => {
    const n = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return /^es/i.test(n) ? 'es' : 'en';
  });
  const [intro, setIntro] = React.useState(!IX_SKIP);
  React.useEffect(() => {
    if (intro) return;
    const root = document.getElementById('root'); if (!root) return;
    if (IX_SKIP) {
      const h = location.hash && document.querySelector(location.hash);
      if (h) requestAnimationFrame(() => window.scrollTo(0, h.getBoundingClientRect().top + window.pageYOffset - 70));
      return;
    }
    const targets = [];
    const isGrid = (el) => /grid/.test(getComputedStyle(el).display);
    root.querySelectorAll('section').forEach((sec) => {
      if (sec.querySelector('.v5-hero-in')) return; // el hero ya tiene su propia entrada
      const dark = /rgb\(1?[0-9], ?[0-9]/.test(getComputedStyle(sec).backgroundColor);
      const inner = sec.firstElementChild; if (!inner) return;
      Array.from(inner.children).forEach((ch) => {
        if (isGrid(ch) && ch.children.length > 1) {
          Array.from(ch.children).forEach((c, i) => {
            c.classList.add('ixr', 'ixh'); if (dark) c.classList.add('ixdark');
            c.style.transitionDelay = Math.min(i, 6) * 90 + 'ms';
            targets.push(c);
          });
        } else { ch.classList.add('ixr'); targets.push(ch); }
      });
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [intro]);
  return (
    <div style={{ background: 'white', color: v4S.ink, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{v5CSS}</style>
      {intro && <V5Intro L={lang === 'es'} onDone={() => setIntro(false)}/>}
      <V5Nav lang={lang} setLang={setLang}/>
      <V5Hero lang={lang}/>
      <V5Creds lang={lang}/>
      <V5Services lang={lang}/>
      <V5Training lang={lang}/>
      <V5Platform lang={lang}/>
      <V5Kaizen lang={lang}/>
      <V4AuditSim lang={lang}/>
      <V5Diagnostico lang={lang}/>
      <V4Footer lang={lang}/>
      <a className="ixmobcta" href="#form-contacto">{lang === 'es' ? 'Agendar reunión de descubrimiento' : 'Book a discovery call'}</a>
    </div>
  );
}
