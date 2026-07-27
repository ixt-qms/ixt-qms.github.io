// Home V5 — posicionamiento: lanzamiento de nuevos modelos y gestión de cambios de ingeniería
// Reusa v4S, V4TiltShot, V4Product, V4AuditSim, V4Risk, V4Footer definidos en v4-sales.jsx

const v5CSS = `
@keyframes v5up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
.v5-hero-in{opacity:0;animation:v5up .7s cubic-bezier(.2,.7,.3,1) forwards}
.v5-reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.3,1),transform .7s cubic-bezier(.2,.7,.3,1)}
.v5-reveal.on{opacity:1;transform:none}
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
@media(max-width:1024px){
 .g6{grid-template-columns:repeat(3,1fr)!important}
 .g5{grid-template-columns:repeat(3,1fr)!important}
 .g4{grid-template-columns:repeat(2,1fr)!important}
 .g3{grid-template-columns:repeat(2,1fr)!important}
 section{padding-left:32px!important;padding-right:32px!important}
}
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
    const ids = ['servicios', 'formacion', 'plataforma', 'diagnostico'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-30% 0px -60% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const links = L
    ? [['#servicios','Servicios'],['#formacion','Formación'],['#plataforma','Plataforma'],['Nuestra Historia.html','Perfil']]
    : [['#servicios','Services'],['#formacion','Training'],['#plataforma','Platform'],['Nuestra Historia.html','Profile']];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${v4S.line}`, padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, minWidth: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: `linear-gradient(135deg, ${v4S.primary}, ${v4S.primaryDark})`, display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 14, letterSpacing: -0.3 }}>IxT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: v4S.ink, letterSpacing: -0.3, lineHeight: 1 }}>IxT-QMS</div>
            <div style={{ fontWeight: 600, fontSize: 10, color: v4S.muted, letterSpacing: 0.5, textTransform: 'uppercase', lineHeight: 1 }}>Inspect. Then Trust.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 13, color: v4S.ink2, fontWeight: 500, whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none', minWidth: 0, flex: '1 1 auto' }}>
          {links.map(([href, label]) => {
            const isActive = href === '#' + active;
            return <a key={href} href={href} style={{ color: isActive ? v4S.primary : 'inherit', textDecoration: 'none', fontWeight: isActive ? 700 : 500, borderBottom: isActive ? `2px solid ${v4S.primary}` : '2px solid transparent', paddingBottom: 2, transition: 'color 0.2s, border-color 0.2s' }}>{label}</a>;
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <div style={{ display: 'flex', border: `1px solid ${v4S.line}`, borderRadius: 8, overflow: 'hidden', fontSize: 12, fontWeight: 600 }}>
          <button onClick={() => setLang('es')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'es' ? v4S.ink : 'white', color: lang === 'es' ? 'white' : v4S.ink2 }}>ES</button>
          <button onClick={() => setLang('en')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'en' ? v4S.ink : 'white', color: lang === 'en' ? 'white' : v4S.ink2 }}>EN</button>
        </div>
        <a href="#diagnostico" style={{ padding: '9px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', background: v4S.primary, color: 'white', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', textDecoration: 'none' }}>{L ? 'Reunión de descubrimiento' : 'Discovery meeting'}</a>
      </div>
    </nav>
  );
}

function V5Hero({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'CONSULTORÍA Y FORMACIÓN · INDUSTRIA AUTOMOTRIZ',
    title: 'Experiencia de lanzamiento en OEM y Tier 1, del lado de tu planta.',
    sub: 'Consultoría y formación en lanzamiento de nuevos modelos, gestión de cambios de ingeniería y confirmación de calidad para la industria automotriz.',
    quote: 'Conocemos los dos lados de la mesa: el criterio con el que el OEM juzga tu breakpoint y tu paquete de aprobación, y la presión del proveedor dentro de la planta de su cliente.',
    cta1: 'Agendar reunión de descubrimiento', cta2: 'Ver líneas de servicio',
    proof: 'Respaldo: instrucción en Universidad Nissan · desarrollo de hojas de operación estándar y evaluación de personal de planta',
  } : {
    eyebrow: 'CONSULTING & TRAINING · AUTOMOTIVE INDUSTRY',
    title: 'OEM and Tier 1 launch experience, on your plant\'s side.',
    sub: 'Consulting and training in new model launches, engineering change management and quality confirmation for the automotive industry.',
    quote: 'We know both sides of the table: the criteria the OEM uses to judge your breakpoint and approval package, and the supplier\'s pressure inside their customer\'s plant.',
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
    ['82', 'personas coordinadas en alto volumen'], ['250K USD', 'de ahorro anual documentado en campañas de calidad'],
  ] : [
    ['52', 'vehicle programs launched'], ['98', 'homologation countries managed'],
    ['14', 'years across OEM and Tier 1'], ['2', 'new plant start-ups'],
    ['82', 'people coordinated in high-volume manufacturing'], ['250K USD', 'documented annual savings in quality campaigns'],
  ];
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
    </section>
  );
}

function V5Services({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'CUATRO LÍNEAS DE SERVICIO', title: 'Del programa de lanzamiento al piso de tu cliente.',
    sub: 'Cada línea se contrata con alcance y entregables definidos por escrito.', cta: 'Solicitar propuesta',
    cards: [
      { h: 'Launch Excellence', d: 'Asesoría especializada para lanzamientos de nuevos modelos y arranques de producción.', items: ['Planeación y ejecución de lanzamientos (SOP Readiness y Safe Launch)', 'Coordinación de cambios de ingeniería, BOM y validación de especificaciones', 'Soporte en corridas piloto, buy-offs y resolución de problemas durante el arranque'] },
      { h: 'Technical Representation', d: 'Representación técnica para OEM, Tier 1, Tier 2 y Tier 3.', items: ['Ingenieros residentes para representar a tu organización en planta', 'Contención, análisis y seguimiento de problemas de calidad con clientes y proveedores', 'Respuesta rápida durante crisis de calidad y soporte operativo'] },
      { h: 'IxT-QMS', d: 'Digitalización de procesos de calidad mediante una plataforma integrada.', items: ['Acceso a la plataforma durante la vigencia del programa · renovación anual de soporte y mantenimiento', 'Digitalización de procesos, indicadores y flujo de acciones correctivas', 'Capacitación y soporte para la adopción de la plataforma'] },
      { h: 'Training', d: 'Capacitación privada para su organización, basada en experiencia en la industria automotriz.', items: ['Programas de Safe Launch, resolución de problemas y calidad en producción', 'Cursos personalizados para supervisores, ingenieros y personal operativo', 'Talleres prácticos orientados a la aplicación inmediata en planta'] },
    ],
  } : {
    eyebrow: 'FOUR SERVICE LINES', title: 'From the launch program to your customer\'s floor.',
    sub: 'Every line is contracted with scope and deliverables defined in writing.', cta: 'Request proposal',
    cards: [
      { h: 'Launch Excellence', d: 'Specialized advisory for new model launches and production ramp-ups.', items: ['Launch planning and execution (SOP Readiness and Safe Launch)', 'Engineering change, BOM and specification validation coordination', 'Support in pilot runs, buy-offs and problem solving during ramp-up'] },
      { h: 'Technical Representation', d: 'Technical representation for OEM, Tier 1, Tier 2 and Tier 3.', items: ['Resident engineers representing your organization in plant', 'Containment, analysis and follow-up of quality issues with customers and suppliers', 'Rapid response during quality crises and operational support'] },
      { h: 'IxT-QMS', d: 'Digitalization of quality processes through an integrated platform.', items: ['Platform access for the duration of the program · annual support and maintenance renewal', 'Digitalization of processes, KPIs and corrective action flow', 'Training and support for platform adoption'] },
      { h: 'Training', d: 'Private training for your organization, grounded in automotive industry experience.', items: ['Safe Launch, problem solving and production quality programs', 'Tailored courses for supervisors, engineers and operators', 'Practical workshops aimed at immediate application in plant'] },
    ],
  };
  return (
    <section id="servicios" style={{ padding: '88px 56px', background: v4S.bgCool }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: 0 }}>{t.sub}</p>
        </div>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }}>
          {t.cards.map((c, i) => {
            const svcIc = [
              <path key="l" d="M0 -8c3 2.2 4.5 6.6 3 11.7h-6C-4.5 -1.4 -3 -5.8 0 -8zM-3 3.7l-3 3.7m9-3.7l3 3.7M0 3.7V9" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round"/>,
              <g key="r"><circle cx="-3" cy="-3.5" r="3" stroke="currentColor" strokeWidth="1.7" fill="none"/><path d="M-8 7c0-3.6 2.2-5.8 5-5.8S2 3.4 2 7" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round"/><circle cx="4.5" cy="-3" r="2.4" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M3.5 7c.3-2.7 1.8-4.3 4-4.3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></g>,
              <g key="q"><circle r="6.5" stroke="currentColor" strokeWidth="1.7" fill="none"/><path d="M0 -9.5v2M0 7.5v2M-9.5 0h2M7.5 0h2M-6.7 -6.7l1.4 1.4M5.3 5.3l1.4 1.4M-6.7 6.7l1.4-1.4M5.3 -5.3l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M-2.8 0l2.1 2.1 4.2-4.9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/></g>,
              <g key="t"><path d="M0 -6.5l9 3.7-9 3.7-9-3.7z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round"/><path d="M-5 0.5v4.2c0 1.6 2.6 3 5 3s5-1.4 5-3V0.5" stroke="currentColor" strokeWidth="1.7" fill="none"/><path d="M9 -2.2v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></g>,
            ];
            return (
            <div key={i} style={{ background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: '#EDF3FE', color: v4S.primary, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="-11 -11 22 22">{svcIc[i]}</svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.4, flex: 1 }}>{c.h}</h3>
                <div style={{ fontSize: 12, fontWeight: 800, color: v4S.muted, fontFamily: '"JetBrains Mono", monospace' }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <p style={{ fontSize: 14, color: v4S.ink2, margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>{c.d}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
                {c.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 13.5, color: v4S.ink2, lineHeight: 1.5, display: 'flex', gap: 9 }}>
                    <span style={{ color: v4S.primary, fontWeight: 700, flexShrink: 0 }}>·</span>{it}
                  </li>
                ))}
              </ul>
              {c.badge && <div style={{ fontSize: 11.5, color: v4S.muted, fontWeight: 600, borderTop: `1px solid ${v4S.line}`, paddingTop: 12 }}>{c.badge}</div>}
              <a href="#diagnostico" style={{ alignSelf: 'flex-start', fontSize: 13.5, fontWeight: 700, color: v4S.primary, textDecoration: 'none' }}>{t.cta} →</a>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}

function V5Training({ lang }) {
  const L = lang === 'es';
  const t = L ? {
    eyebrow: 'FORMACIÓN PRESENCIAL', title: 'Programas en aula, en tu planta o en sede.',
    sub: 'Sin versión en línea ni material descargable. En el sitio se publican los títulos de módulo; el índice detallado se envía por correo al prospecto interesado.',
    flagship: 'PROGRAMA INSIGNIA',
    programs: [
      { h: 'Control de lanzamiento — Shoki Ryudo y Safe Launch', flag: true, mods: ['Selección de personal de proyecto', 'Estandarización de proceso', 'Job allocation', 'Entrenamiento del personal y confirmación de equipo e instalaciones', 'Shoki Ryudo', 'Control de Safe Launch'] },
      { h: 'Sistema de producción y Control de Campo', mods: ['Sistema de producción ideal', 'Condición ideal de producción', 'Comportamientos básicos', 'Douki Seisan', 'Control de Campo', 'Los 7 desperdicios'] },
      { h: 'Kaizen y economía de movimientos', mods: ['Fundamentos de Kaizen', 'Áreas de trabajo y práctica', 'Principios de economía de movimientos', 'Flujo para iniciar actividades de Kaizen', 'Práctica con maqueta'] },
      { h: 'Liderazgo y gestión de equipos', mods: ['Liderazgo o gestión', 'Tipos de liderazgo', 'Dinámicas de aplicación', 'Gestión de equipos en piso'] },
    ],
    extraH: 'Cursos adicionales del catálogo',
    extra: 'Resolución de problemas 8D y QA · QC Story · Quality Control & SPC · técnicas de confirmación de calidad · poka-yoke · formación de instructores y desarrollo de hojas de operación estándar',
    delivery: 'Cada participante recibe cuaderno de trabajo impreso, foliado y con su nombre, más constancia de participación. Los cursos se cotizan por evento cerrado, no por asiento.',
    cta: 'Solicitar propuesta de formación',
  } : {
    eyebrow: 'IN-PERSON TRAINING', title: 'Classroom programs, at your plant or at our facility.',
    sub: 'No online version, no downloadable material. Module titles are published on the site; the detailed index is emailed to interested prospects.',
    flagship: 'FLAGSHIP PROGRAM',
    programs: [
      { h: 'Launch control — Shoki Ryudo and Safe Launch', flag: true, mods: ['Project staff selection', 'Process standardization', 'Job allocation', 'Staff training and equipment/facilities confirmation', 'Shoki Ryudo', 'Safe Launch control'] },
      { h: 'Production system and Field Control', mods: ['Ideal production system', 'Ideal production condition', 'Basic behaviors', 'Douki Seisan', 'Field Control', 'The 7 wastes'] },
      { h: 'Kaizen and motion economy', mods: ['Kaizen fundamentals', 'Work areas and practice', 'Motion economy principles', 'Flow to start Kaizen activities', 'Hands-on mockup practice'] },
      { h: 'Leadership and team management', mods: ['Leadership vs management', 'Leadership types', 'Application dynamics', 'Team management on the floor'] },
    ],
    extraH: 'Additional catalog courses',
    extra: '8D and QA problem solving · QC Story · Quality Control & SPC · quality confirmation techniques · poka-yoke · train-the-trainer and standard operation sheet development',
    delivery: 'Each participant receives a printed, numbered workbook with their name, plus a certificate of participation. Courses are quoted per closed event, not per seat.',
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
              {p.flag && <div style={{ position: 'absolute', top: -11, left: 26, background: v4S.primary, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: 1, padding: '4px 10px', borderRadius: 6 }}>{t.flagship}</div>}
              <h3 style={{ fontSize: 18.5, fontWeight: 700, color: v4S.ink, margin: '0 0 16px', letterSpacing: -0.3 }}>{p.h}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.mods.map((m, j) => (
                  <span key={j} style={{ fontSize: 12.5, color: v4S.ink2, background: p.flag ? 'white' : v4S.bgCool, border: `1px solid ${v4S.line}`, borderRadius: 999, padding: '5px 12px' }}>{m}</span>
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
    eyebrow: 'LA PLATAFORMA', title: 'La información no sale de tu planta.',
    sub: 'IxT-QMS no se vende como software. El acceso se otorga durante la vigencia del programa de acompañamiento, con renovación anual de soporte y mantenimiento — instalada en tu propio servidor.',
    points: [
      ['Instalada en tu servidor', 'Sin base de datos compartida con nadie, sin proveedor externo que auditar.'],
      ['Opera sin internet', 'La operación crítica funciona aunque se caiga el enlace.'],
      ['Al vencer la licencia', 'El sistema pasa a modo solo lectura: no crea registros nuevos, pero todo el histórico sigue consultable y exportable. Tu información nunca queda secuestrada.'],
    ],
    modsH: 'Módulos incluidos',
    mods: ['8D', 'ECR', 'Alertas de calidad', 'Auditorías y LPA', 'Hojas de operación', 'Hospital de defectos', 'Matriz de habilidades ILU', 'Evaluaciones de seguridad', 'Tableros de KPI', 'Motor de aprobaciones multinivel'],
    note: 'Página de requisitos técnicos disponible para tu departamento de TI: sistema operativo, recursos de servidor, base de datos, puertos, respaldos y autenticación.',
  } : {
    eyebrow: 'THE PLATFORM', title: 'Your information never leaves your plant.',
    sub: 'IxT-QMS is not sold as software. Access is granted for the duration of the support program, with annual support and maintenance renewal — installed on your own server.',
    points: [
      ['Installed on your server', 'No shared database with anyone, no external vendor to audit.'],
      ['Runs without internet', 'Critical operation keeps working even if the link goes down.'],
      ['When the license expires', 'The system switches to read-only mode: no new records, but the full history remains viewable and exportable. Your information is never held hostage.'],
    ],
    modsH: 'Included modules',
    mods: ['8D', 'ECR', 'Quality alerts', 'Audits & LPA', 'Operation sheets', 'Defect hospital', 'ILU skills matrix', 'Safety assessments', 'KPI boards', 'Multi-level approval engine'],
    note: 'Technical requirements page available for your IT department: operating system, server resources, database, ports, backups and authentication.',
  };
  return (
    <section id="plataforma" style={{ padding: '88px 56px', background: v4S.ink, color: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 14 }}>{t.eyebrow}</div>
            <h2 style={{ fontSize: 38, lineHeight: 1.15, fontWeight: 700, margin: 0, letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
          </div>
          <p style={{ fontSize: 15.5, color: '#94A6C7', margin: 0, lineHeight: 1.65 }}>{t.sub}</p>
        </div>
        <div className="g3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 36 }}>
          {t.points.map(([h, b], i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 26px' }}>
              <div style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 10 }}>{h}</div>
              <div style={{ fontSize: 13.5, color: '#94A6C7', lineHeight: 1.6 }}>{b}</div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: '#94A6C7', textTransform: 'uppercase', marginBottom: 16 }}>{t.modsH}</div>
          <div className="g5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            {t.mods.map((m, i) => {
              const p = { stroke: '#7DB7FF', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
              const ics = [
                <g key="0" {...p}><circle r="7.5"/><path d="M-3 0l2.2 2.2 4-4.9"/><path d="M0 -10v2M0 8v2"/></g>,
                <g key="1" {...p}><path d="M-7 -5h9l5 5-5 5h-9z"/><path d="M-3.5 0h5M1.5 -2.5L4 0 1.5 2.5"/></g>,
                <g key="2" {...p}><path d="M0 -8l8 14h-16z"/><path d="M0 -2v4"/><circle cx="0" cy="4.3" r="0.4" fill="#7DB7FF"/></g>,
                <g key="3" {...p}><rect x="-7" y="-8" width="14" height="16" rx="2"/><path d="M-3.5 -3h7M-3.5 0.5h7M-3.5 4h4"/><path d="M2.5 4.5l1.7 1.7 3-3.4" strokeWidth="1.9"/></g>,
                <g key="4" {...p}><path d="M-6 -8h8l4 4v12h-12z"/><path d="M-3 -1h6M-3 2.5h6M-3 6h3.5"/></g>,
                <g key="5" {...p}><path d="M-8 2h4l2-6 4 10 2-4h4"/><path d="M0 -9c-4.5 0-7.5 3-7.5 6.5C-7.5 3 -4 8 0 10c4-2 7.5-7 7.5-12.5C7.5 -6 4.5 -9 0 -9z" opacity="0.45"/></g>,
                <g key="6" {...p}><rect x="-8" y="-8" width="16" height="16" rx="2"/><path d="M-8 -2.7h16M-8 2.7h16M-2.7 -8v16M2.7 -8v16" opacity="0.7"/><rect x="-8" y="-8" width="5.3" height="5.3" fill="#7DB7FF" opacity="0.5" stroke="none"/></g>,
                <g key="7" {...p}><path d="M0 -9l7 3v4c0 5-3 8-7 10-4-2-7-5-7-10v-4z"/><path d="M-2.8 0l2.1 2.1 4-4.6"/></g>,
                <g key="8" {...p}><path d="M-7 7V0M-2.3 7v-9M2.3 7V-2M7 7v-13" strokeWidth="2.2"/></g>,
                <g key="9" {...p}><circle cx="0" cy="-5" r="2.6"/><circle cx="-5.5" cy="4" r="2.6"/><circle cx="5.5" cy="4" r="2.6"/><path d="M-1.8 -3l-2.5 4.5M1.8 -3l2.5 4.5M-2.9 4h5.8"/></g>,
              ];
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '18px 10px 14px' }}>
                  <svg width="34" height="34" viewBox="-11 -11 22 22">{ics[i]}</svg>
                  <span style={{ fontSize: 12, color: '#C7D3E8', textAlign: 'center', lineHeight: 1.35 }}>{m}</span>
                </div>
              );
            })}
          </div>
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
    sub: 'Cada nivel es un filtro que aumenta el compromiso — el trabajo técnico siempre tiene alcance, entregable y cotización.',
    steps: [
      { n: '0', h: 'Reunión de descubrimiento', tag: 'Sin costo', tagC: '#0E9F6E', items: ['Llamada de 30 minutos para comprender su necesidad y determinar si podemos ayudarle', 'Demostración de la plataforma con datos ficticios', 'Whitepapers de la industria'] },
      { n: '1', h: 'Quick Assessment', tag: 'Servicio de entrada', tagC: '#C2620A', items: ['Evaluación de procesos de calidad y principales riesgos operativos', 'Identificación de oportunidades de mejora y prioridades', 'Reporte ejecutivo con recomendaciones y siguientes pasos — en 1 día', 'Remoto fuera de Aguascalientes; en sitio se cotiza como proyecto'] },
      { n: '2', h: 'Diagnóstico técnico en planta', tag: 'Acreditable al proyecto', tagC: '#1D4FD7', items: ['Evaluación documental, revisión de procesos y plan de acciones priorizado', 'La propuesta técnica detallada se elabora únicamente después del diagnóstico', 'Si contrata un programa dentro de 30 días, el costo del diagnóstico se acredita al proyecto'] },
      { n: '3', h: 'Programa', tag: 'Contrato anual', tagC: '#0B2545', items: ['Implementación, formación privada, representación técnica o digitalización', 'Acceso a la plataforma durante la vigencia del programa · renovación anual de soporte y mantenimiento', 'Respuesta de emergencia y soporte prioritario disponibles como servicios premium'] },
    ],
    cta: 'Agendar reunión de descubrimiento', contact: 'ixt.qms@gmail.com · +52 449 415 8248 · Aguascalientes, México',
    note: 'Todos los servicios se cotizan de acuerdo con el alcance del proyecto. Los viáticos y gastos de viaje se cotizan por separado para servicios fuera de Aguascalientes.',
  } : {
    eyebrow: 'HOW TO START', title: 'A clear path, step by step.',
    sub: 'Each level is a filter that raises commitment — technical work always has scope, deliverable and quote.',
    steps: [
      { n: '0', h: 'Discovery meeting', tag: 'No cost', tagC: '#0E9F6E', items: ['30-minute call to understand your need and determine whether we can help', 'Platform demonstration with fictitious data', 'Industry whitepapers'] },
      { n: '1', h: 'Quick Assessment', tag: 'Entry service', tagC: '#C2620A', items: ['Assessment of quality processes and main operational risks', 'Identification of improvement opportunities and priorities', 'Executive report with recommendations and next steps — in 1 day', 'Remote outside Aguascalientes; on-site is quoted as a project'] },
      { n: '2', h: 'On-site technical diagnostic', tag: 'Credited to the project', tagC: '#1D4FD7', items: ['Document evaluation, process review and prioritized action plan', 'The detailed technical proposal is prepared only after the diagnostic', 'If you contract a program within 30 days, the diagnostic cost is credited to the project'] },
      { n: '3', h: 'Program', tag: 'Annual contract', tagC: '#0B2545', items: ['Implementation, private training, technical representation or digitalization', 'Platform access for the duration of the program · annual support and maintenance renewal', 'Emergency response and priority support available as premium services'] },
    ],
    cta: 'Schedule discovery meeting', contact: 'ixt.qms@gmail.com · +52 449 415 8248 · Aguascalientes, Mexico',
    note: 'All services are quoted according to project scope. Travel expenses are quoted separately for services outside Aguascalientes.',
  };
  return (
    <section id="diagnostico" style={{ padding: '88px 56px', background: v4S.bgCool }}>
      <div style={{ maxWidth: 1020, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: v4S.ink, margin: '0 0 14px', letterSpacing: -0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{t.title}</h2>
        <p style={{ fontSize: 16, color: v4S.ink2, margin: '0 auto 44px', maxWidth: 620, lineHeight: 1.6 }}>{t.sub}</p>
        <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginBottom: 40, textAlign: 'left' }}>
          {t.steps.map((s, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 14, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, fontWeight: 700, color: v4S.muted }}>N{s.n}</span>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 0.6, textTransform: 'uppercase', color: 'white', background: s.tagC, borderRadius: 5, padding: '3px 8px' }}>{s.tag}</span>
              </div>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: v4S.ink, margin: 0, letterSpacing: -0.2 }}>{s.h}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 12.5, color: v4S.ink2, lineHeight: 1.5, display: 'flex', gap: 8 }}>
                    <span style={{ color: s.tagC, fontWeight: 700, flexShrink: 0 }}>·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: v4S.muted, fontStyle: 'italic', margin: '0 0 32px' }}>{t.note}</p>
        <V5Form L={L}/>
        <div style={{ fontSize: 13, color: v4S.muted, marginTop: 22 }}>{t.contact}</div>
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
    svc: 'Servicio de interés', svcOpts: ['Launch Excellence', 'Technical Representation', 'IxT-QMS (plataforma)', 'Training', 'No estoy seguro'],
    msg: 'Contexto del proyecto', msgPh: 'Lanzamiento próximo, problema de calidad abierto, alcance estimado, plantas involucradas…',
    link: 'Enlace a documentación (opcional)', linkPh: 'Drive, SharePoint o WeTransfer con presentación, planos o reporte del problema',
    send: 'Enviar solicitud', sending: 'Enviando…',
    okH: 'Solicitud enviada', okB: 'Gracias. Recibirás una respuesta en tu correo con propuesta de horarios.',
    fbH: 'Se abrió tu cliente de correo', fbB: 'Verifica que el mensaje se haya enviado. Si no se abrió, escríbenos directo a ixt.qms@gmail.com',
    errB: 'No se pudo enviar. Escríbenos directo a ixt.qms@gmail.com',
    priv: 'La información se usa únicamente para responder tu solicitud. No compartimos datos con terceros.',
  } : {
    h: 'Schedule a discovery meeting', sub: 'We reply within one business day with proposed times.',
    name: 'Name', company: 'Company', role: 'Job title', email: 'Work email', phone: 'Phone (optional)',
    tier: 'Organization type', tierOpts: ['OEM', 'Tier 1', 'Tier 2', 'Tier 3', 'Other'],
    svc: 'Service of interest', svcOpts: ['Launch Excellence', 'Technical Representation', 'IxT-QMS (platform)', 'Training', 'Not sure yet'],
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
    const t = setTimeout(finish, 9600);
    return () => clearTimeout(t);
  }, [finish]);
  const mods = L
    ? ['8D', 'ECR', 'Alertas de calidad', 'Auditorías · LPA', 'Hojas de operación', 'Hospital de defectos', 'Matriz ILU', 'KPI en vivo', 'Aprobaciones multinivel']
    : ['8D', 'ECR', 'Quality alerts', 'Audits · LPA', 'Operation sheets', 'Defect hospital', 'ILU matrix', 'Live KPIs', 'Multilevel approvals'];
  const svcs = ['Launch Excellence', 'Technical Representation', 'IxT-QMS', 'Training'];
  const crs = L
    ? ['Safe Launch · Shoki Ryudo', 'Control de Campo', 'Kaizen', 'Liderazgo', '8D · QA', 'Quality Control · SPC']
    : ['Safe Launch · Shoki Ryudo', 'Field Control', 'Kaizen', 'Leadership', '8D · QA', 'Quality Control · SPC'];
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
  const modIco = ['seal', 'ecr', 'alert', 'audit', 'doc', 'hosp', 'grid', 'kpi', 'flow'];
  const svcIco2 = ['rocket', 'people', 'gear', 'grad'];
  const crsIco = ['flag', 'eye', 'bulb', 'people', 'tools', 'gear'];
  return (
    <div className={'v5intro' + (out ? ' out' : '')}>
      <div className="iph" style={{ animation: 'iPhase 4.2s .1s both' }}>
        <div className="ttl">{tI.svc}</div>
        <div className="ichips">
          {svcs.map((m, i) => <span key={m} className="ichip svc" style={{ animationDelay: `${0.3 + i * 0.22}s, ${0.3 + i * 0.22}s` }}>{ico(svcIco2[i])}{m}</span>)}
        </div>
        <div className="ttl" style={{ marginTop: 6 }}>{tI.trn}</div>
        <div className="ichips">
          {crs.map((m, i) => <span key={m} className="ichip crs" style={{ animationDelay: `${1.2 + i * 0.18}s, ${1.2 + i * 0.18}s` }}>{ico(crsIco[i])}{m}</span>)}
        </div>
      </div>
      <div className="iph" style={{ animation: 'iPhase 4.2s 4.4s both' }}>
        <div className="ttl">{tI.mod}</div>
        <div className="ichips">
          {mods.map((m, i) => <span key={m} className="ichip" style={{ animationDelay: `${4.6 + i * 0.18}s, ${4.6 + i * 0.18}s` }}>{ico(modIco[i])}{m}</span>)}
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', animation: 'iLogo 1s 8.7s both', pointerEvents: 'none' }}>
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

function HomeLanding() {
  const [lang, setLang] = React.useState(() => {
    const n = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return /^es/i.test(n) ? 'es' : 'en';
  });
  const [intro, setIntro] = React.useState(true);
  return (
    <div style={{ background: 'white', color: v4S.ink, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{v5CSS}</style>
      {intro && <V5Intro L={lang === 'es'} onDone={() => setIntro(false)}/>}
      <V5Nav lang={lang} setLang={setLang}/>
      <V5Hero lang={lang}/>
      <V5Reveal><V5Creds lang={lang}/></V5Reveal>
      <V5Reveal><V5Services lang={lang}/></V5Reveal>
      <V5Reveal><V5Training lang={lang}/></V5Reveal>
      <V5Reveal><V5Platform lang={lang}/></V5Reveal>
      <V5Reveal><V4Product lang={lang}/></V5Reveal>
      <V5Reveal><V4AuditSim lang={lang}/></V5Reveal>
      <V5Reveal><V5Diagnostico lang={lang}/></V5Reveal>
      <V4Footer lang={lang}/>
    </div>
  );
}
