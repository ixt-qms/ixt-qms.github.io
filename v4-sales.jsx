// V4 — Sales-driven landing
// Estructura narrativa: Dolor específico → Producto real (screenshots) → ROI tangible → Risk reversal → FAQ → CTA
// Usa screenshots REALES del producto. Honesto sobre proyecciones (no testimonios falsos).

// Tilted 3D screenshot with glow border + soft grounding shadow (NVIDIA-style hero treatment)
function V4TiltShot({ children, tilt = 'right', glow = '#1D4FD7' }) {
  const rotateY = tilt === 'right' ? -9 : 9;
  const cardTransform = `perspective(1600px) rotateY(${rotateY}deg) rotateX(3deg)`;
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        transform: cardTransform,
        borderRadius: 14,
        overflow: 'hidden',
        background: 'white',
        position: 'relative',
        zIndex: 1,
        boxShadow: `0 0 0 1.5px ${glow}, 0 40px 90px -25px rgba(8,20,45,0.55), 0 0 70px -12px ${glow}88`,
      }}>
        {children}
      </div>
      {/* soft grounding shadow blob */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '10%', right: '10%', bottom: -22, height: 40,
        background: `radial-gradient(ellipse, ${glow}55, transparent 72%)`,
        filter: 'blur(6px)', zIndex: 0, pointerEvents: 'none',
      }}/>
    </div>
  );
}

const v4S = {
  // Tokens
  ink: '#0A1F3D',
  ink2: '#1F3A5F',
  muted: '#5A6B82',
  line: '#E2E8F0',
  bg: '#FFFFFF',
  bgSoft: '#F6F8FB',
  bgCool: '#EEF3FA',
  primary: '#1D4FD7',
  primaryDark: '#0B3AAB',
  danger: '#DC2626',
  dangerBg: '#FEF2F2',
  warn: '#F59E0B',
  ok: '#059669',
  okBg: '#ECFDF5',
  accent: '#0EA5E9',
};

function V4Nav({ lang, setLang, t }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${v4S.line}`,
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, minWidth: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: `linear-gradient(135deg, ${v4S.primary}, ${v4S.primaryDark})`,
            display: 'grid', placeItems: 'center', color: 'white',
            fontWeight: 800, fontSize: 14, letterSpacing: -0.3,
          }}>IxT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: v4S.ink, letterSpacing: -0.3, lineHeight: 1 }}>IxT-QMS</div>
            <div style={{ fontWeight: 600, fontSize: 10, color: v4S.muted, letterSpacing: 0.5, textTransform: 'uppercase', lineHeight: 1 }}>Inspect. Then Trust.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 13, color: v4S.ink2, fontWeight: 500, whiteSpace: 'nowrap', minWidth: 0 }}>
          <a href="Nuestra Historia.html" style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'es' ? 'Nuestra historia' : 'Our story'}</a>
          <a href="#servicios" style={{ color: v4S.primary, textDecoration: 'none', fontWeight: 700 }}>{lang === 'es' ? 'Servicios' : 'Services'}</a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <div style={{ display: 'flex', border: `1px solid ${v4S.line}`, borderRadius: 8, overflow: 'hidden', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>
          <button onClick={() => setLang('es')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'es' ? v4S.ink : 'white', color: lang === 'es' ? 'white' : v4S.ink2, whiteSpace: 'nowrap' }}>ES</button>
          <button onClick={() => setLang('en')} style={{ padding: '6px 10px', border: 'none', cursor: 'pointer', background: lang === 'en' ? v4S.ink : 'white', color: lang === 'en' ? 'white' : v4S.ink2, whiteSpace: 'nowrap' }}>EN</button>
        </div>
        <button style={{
          padding: '9px 16px', borderRadius: 8, border: 'none', cursor: 'pointer',
          background: v4S.primary, color: 'white', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap',
        }}>{lang === 'es' ? 'Agendar consulta técnica' : 'Schedule technical consultation'}</button>
      </div>
    </nav>
  );
}

// --- HERO: dolor punzante + video placeholder con producto real ---
function V4Hero({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'ASESORÍA TÉCNICA EN CALIDAD PARA MANUFACTURA',
    title1: 'Ingeniería de calidad',
    title2: 'para tu operación,',
    title3: 'con evidencia',
    title4: 'trazable.',
    sub: '14 años de experiencia en calidad automotriz — liaison técnico, seguimiento a proveedores y capacitación — respaldados por IxT-QMS, el sistema de gestión que documenta y sustenta cada decisión frente a tu cliente OEM y tu auditor certificado.',
    cta1: 'Conocer el servicio de asesoría',
    cta2: 'Ver el sistema en operación',
    trust: 'Experiencia directa en Tier-1 y Tier-2 automotriz · ISO 9001 · IATF 16949',
    videoLabel: 'Sistema en operación',
    videoSub: 'Registro real de planta',
    videoCaption: 'Captura de defecto con evidencia fotográfica →',
  } : {
    eyebrow: 'TECHNICAL QUALITY ADVISORY FOR MANUFACTURING',
    title1: 'Quality engineering',
    title2: 'for your operation,',
    title3: 'backed by',
    title4: 'traceable evidence.',
    sub: '14 years of experience in automotive quality — technical liaison, supplier follow-up and training — supported by IxT-QMS, the management system that documents and substantiates every decision in front of your OEM customer and your certified auditor.',
    cta1: 'Learn about the advisory service',
    cta2: 'See the system in operation',
    trust: 'Direct experience in Tier-1 and Tier-2 automotive · ISO 9001 · IATF 16949',
    videoLabel: 'System in operation',
    videoSub: 'Real plant record',
    videoCaption: 'Defect capture with photographic evidence →',
  };
  return (
    <section style={{ padding: '88px 56px 72px', background: `linear-gradient(180deg, ${v4S.bgCool} 0%, white 100%)` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-block', padding: '6px 12px', borderRadius: 999,
              background: v4S.dangerBg, color: v4S.danger,
              fontSize: 11, fontWeight: 700, letterSpacing: 0.5, marginBottom: 24,
            }}>{t.eyebrow}</div>
            <h1 style={{
              fontSize: 48, lineHeight: 1.08, fontWeight: 800, color: v4S.ink,
              margin: '0 0 24px', letterSpacing: -1.4, fontFamily: '"Source Serif 4", Georgia, serif',
            }}>
              {t.title1} <span style={{ display: 'block' }}>{t.title2}{' '}
                <span style={{
                  fontStyle: 'italic',
                  background: `linear-gradient(180deg, transparent 60%, ${v4S.dangerBg} 60%)`,
                  padding: '0 4px',
                }}>{t.title3}</span>{t.title4}</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: v4S.muted, margin: '0 0 32px', maxWidth: 520 }}>
              {t.sub}
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              <button style={{
                padding: '14px 22px', borderRadius: 10, border: 'none', cursor: 'pointer',
                background: v4S.ink, color: 'white', fontWeight: 600, fontSize: 14.5,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 18, height: 18, borderRadius: 999, background: 'white', display: 'grid', placeItems: 'center' }}>
                  <span style={{ width: 0, height: 0, borderLeft: `6px solid ${v4S.ink}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', marginLeft: 2 }}/>
                </span>
                {t.cta1}
              </button>
              <button style={{
                padding: '14px 22px', borderRadius: 10, cursor: 'pointer',
                background: 'white', color: v4S.ink, fontWeight: 600, fontSize: 14.5,
                border: `1.5px solid ${v4S.line}`,
              }}>{t.cta2}</button>
            </div>
            <div style={{ fontSize: 12.5, color: v4S.muted, fontWeight: 500 }}>
              <span style={{ color: v4S.ok, marginRight: 6 }}>✓</span>{t.trust}
            </div>
          </div>
          {/* Video placeholder - real product screenshot, tilted 3D like reference */}
          <div style={{ position: 'relative', paddingTop: 52 }}>
            <div style={{
              position: 'absolute', top: 0, right: 8,
              background: v4S.ink, color: 'white',
              padding: '12px 18px', borderRadius: 10,
              fontSize: 13, fontWeight: 600,
              boxShadow: '0 12px 30px rgba(10,31,61,0.4)',
              fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: 'italic',
              zIndex: 2,
            }}>{t.videoCaption}</div>
            <V4TiltShot tilt="right" glow={v4S.primary}>
              <img src="screenshots/8d-dashboard.png" alt="8D Dashboard" style={{ width: '100%', display: 'block' }}/>
              {/* Play overlay */}
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(10,31,61,0.35)',
                display: 'grid', placeItems: 'center', cursor: 'pointer',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 999, background: 'white',
                  display: 'grid', placeItems: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}>
                  <span style={{
                    width: 0, height: 0,
                    borderLeft: `22px solid ${v4S.ink}`,
                    borderTop: '14px solid transparent',
                    borderBottom: '14px solid transparent',
                    marginLeft: 6,
                  }}/>
                </div>
              </div>
              <div style={{
                position: 'absolute', bottom: 14, left: 14,
                background: 'rgba(10,31,61,0.92)', color: 'white',
                padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ color: v4S.danger }}>●</span>{t.videoLabel} · {t.videoSub}
              </div>
            </V4TiltShot>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- DOLOR: 3 problemas con $$ específicos ---
function V4Pain({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'COSTO DE LA FALTA DE TRAZABILIDAD',
    title: 'El costo de no-calidad cuando el control es manual.',
    sub: 'Cifras de referencia para una planta automotriz Tier-2 típica (45 inspectores, 3 turnos), consistentes con benchmarks de costo de calidad de la industria.',
    pains: [
      {
        cost: '$40-120K',
        period: 'por contracargo',
        title: 'PPM mal capturado = contracargo del cliente',
        body: 'Un defecto que llega al cliente Tier-1 sin disposición ni 8D documentado se vuelve contracargo. Un cliente automotriz típico cobra de $40K a $120K por incidente — más penalización por reincidencia.',
        tag: 'PROBLEMA #1',
      },
      {
        cost: '$18K',
        period: 'por inspector nuevo',
        title: '4-6 meses para entrenar un inspector',
        body: 'Sin specs digitales por número de parte, el inspector nuevo aprende por memoria y repetición. Costo de curva de aprendizaje: 4-6 meses de productividad reducida y errores caros que pasan al siguiente proceso.',
        tag: 'PROBLEMA #2',
      },
      {
        cost: '$35K',
        period: 'por auditoría sorpresa',
        title: '60+ horas extra por cada auditoría IATF',
        body: 'Reconstruir trazabilidad de un lote desde Excels, papeles y WhatsApp toma a tu equipo de calidad 60+ horas extra. Si fallas la auditoría, pierdes la certificación — y al cliente.',
        tag: 'PROBLEMA #3',
      },
    ],
    note: 'Fuentes: estimaciones basadas en costo de no-calidad típico de la industria (5–8% de ventas según ASQ Quality Cost Benchmarks). Reemplaza con tus números reales en la calculadora ↓',
  } : {
    eyebrow: 'COST OF LACKING TRACEABILITY',
    title: 'The cost of poor quality when control is manual.',
    sub: 'Reference figures for a typical Tier-2 automotive plant (45 inspectors, 3 shifts), consistent with industry cost-of-quality benchmarks.',
    pains: [
      {
        cost: '$40-120K',
        period: 'per chargeback',
        title: 'Mis-logged PPM = customer chargeback',
        body: 'A defect that reaches your Tier-1 customer without disposition or documented 8D becomes a chargeback. Typical automotive customer charges $40K-$120K per incident — plus repeat-offense penalties.',
        tag: 'PROBLEM #1',
      },
      {
        cost: '$18K',
        period: 'per new inspector',
        title: '4-6 months to train a new inspector',
        body: 'Without digital specs by part number, new inspectors learn by memory and repetition. Learning-curve cost: 4-6 months of reduced productivity and expensive errors that propagate downstream.',
        tag: 'PROBLEM #2',
      },
      {
        cost: '$35K',
        period: 'per surprise audit',
        title: '60+ extra hours per IATF audit',
        body: 'Rebuilding lot traceability from Excels, paper and WhatsApp takes your quality team 60+ extra hours. Fail the audit and you lose certification — and the customer.',
        tag: 'PROBLEM #3',
      },
    ],
    note: 'Sources: estimates based on typical industry cost-of-poor-quality (5–8% of sales per ASQ Quality Cost Benchmarks). Replace with your real numbers in the calculator ↓',
  };
  return (
    <section style={{ padding: '88px 56px', background: 'white' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: 1,
            color: v4S.danger, marginBottom: 14,
          }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 48, lineHeight: 1.1, fontWeight: 700, color: v4S.ink,
            margin: '0 0 18px', letterSpacing: -1, maxWidth: 760, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, maxWidth: 620, margin: '0 auto', lineHeight: 1.55 }}>
            {t.sub}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {t.pains.map((p, i) => (
            <div key={i} style={{
              background: 'white', border: `1px solid ${v4S.line}`,
              borderRadius: 14, padding: 28, position: 'relative',
              borderTop: `4px solid ${v4S.danger}`,
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: v4S.danger, marginBottom: 18 }}>{p.tag}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: v4S.ink, letterSpacing: -1.2, fontFamily: '"Source Serif 4", Georgia, serif' }}>{p.cost}</div>
                <div style={{ fontSize: 13, color: v4S.muted, fontWeight: 500 }}>{p.period}</div>
              </div>
              <h3 style={{ fontSize: 18, lineHeight: 1.3, color: v4S.ink, margin: '0 0 12px', fontWeight: 700 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: v4S.muted, margin: 0, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 28, padding: '14px 18px', background: v4S.bgSoft,
          borderRadius: 10, fontSize: 12.5, color: v4S.muted, lineHeight: 1.55, textAlign: 'center',
          maxWidth: 800, marginInline: 'auto',
        }}>
          <span style={{ fontStyle: 'italic' }}>{t.note}</span>
        </div>
      </div>
    </section>
  );
}

// --- COMPARATIVA: Excel vs IxT-QMS ---
function V4Comparison({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'MÉTODO DE CONTROL',
    title: 'Control documental manual frente a un sistema de soporte digital.',
    sub: 'Comparación de método de trabajo — no un reemplazo de tu sistema de gestión, sino la herramienta de evidencia que lo sustenta.',
    cols: ['', 'Excel + Papel', 'IxT-QMS'],
    rows: [
      ['Capturar un defecto', '3-5 min, papel + transcripción', '12 segundos en tablet'],
      ['Trazabilidad de un lote', 'Imposible o 3 días buscando', '1 click — historial completo'],
      ['Preparar auditoría IATF', '60+ horas extra', '2 horas — todo ya está'],
      ['Entrenar inspector nuevo', '4-6 meses', '2 días — specs guían'],
      ['Detectar reincidencias', 'Cuando el cliente reclama', 'Alerta automática (QAR)'],
      ['Generar 8D', 'Word + horas de captura', 'Pre-llenado desde el defecto'],
      ['Reportes para gerencia', 'Capturista hace Excel cada lunes', 'Dashboard en vivo, 24/7'],
      ['Costo de no-calidad', '5-8% de ventas (estándar ASQ)', 'Reducción típica 40-60%'],
    ],
  } : {
    eyebrow: 'THE SHIFT',
    title: 'Your competition isn\'t another ERP. It\'s Excel + paper + WhatsApp.',
    sub: 'And that\'s how you win: you go from "impossible" to "1 click".',
    cols: ['', 'Excel + Paper', 'IxT-QMS'],
    rows: [
      ['Log a defect', '3-5 min, paper + transcription', '12 seconds on tablet'],
      ['Lot traceability', 'Impossible or 3 days digging', '1 click — full history'],
      ['Prep an IATF audit', '60+ extra hours', '2 hours — already there'],
      ['Train a new inspector', '4-6 months', '2 days — specs guide them'],
      ['Detect recurrences', 'When customer complains', 'Auto alert (QAR)'],
      ['Generate 8D', 'Word + hours of typing', 'Pre-filled from the defect'],
      ['Management reports', 'Clerk builds Excel weekly', 'Live dashboard, 24/7'],
      ['Cost of poor quality', '5-8% of sales (ASQ standard)', 'Typical reduction 40-60%'],
    ],
  };
  return (
    <section style={{ padding: '80px 56px', background: v4S.bgSoft }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 44, lineHeight: 1.1, fontWeight: 700, color: v4S.ink,
            margin: '0 0 14px', letterSpacing: -1, maxWidth: 800, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: 0 }}>{t.sub}</p>
        </div>
        <div style={{
          background: 'white', borderRadius: 14, overflow: 'hidden',
          border: `1px solid ${v4S.line}`,
          boxShadow: '0 10px 40px -10px rgba(11,29,61,0.1)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr' }}>
            {t.cols.map((c, i) => (
              <div key={i} style={{
                padding: '18px 24px', fontSize: 12, fontWeight: 700, letterSpacing: 0.8,
                color: i === 2 ? v4S.primary : v4S.muted,
                background: i === 2 ? v4S.bgCool : v4S.bgSoft,
                borderBottom: `1px solid ${v4S.line}`,
                textTransform: 'uppercase',
              }}>{c}</div>
            ))}
            {t.rows.map((row, ri) => (
              <React.Fragment key={ri}>
                <div style={{ padding: '18px 24px', fontSize: 14, fontWeight: 600, color: v4S.ink, borderBottom: ri === t.rows.length - 1 ? 'none' : `1px solid ${v4S.line}` }}>{row[0]}</div>
                <div style={{ padding: '18px 24px', fontSize: 14, color: v4S.muted, borderBottom: ri === t.rows.length - 1 ? 'none' : `1px solid ${v4S.line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: v4S.danger, fontSize: 16 }}>✕</span>{row[1]}
                </div>
                <div style={{ padding: '18px 24px', fontSize: 14, color: v4S.ink, fontWeight: 500, background: v4S.bgCool, borderBottom: ri === t.rows.length - 1 ? 'none' : `1px solid ${v4S.line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: v4S.ok, fontSize: 16 }}>✓</span>{row[2]}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- PRODUCTO REAL: screenshots con narrativa ---
function V4Product({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'HERRAMIENTA DE SOPORTE, NO UN ERP INDEPENDIENTE',
    title: 'El sistema que sustenta la evidencia detrás de la asesoría.',
    sub: 'IxT-QMS opera hoy en plantas reales como herramienta de soporte de nuestro servicio de asesoría — no se comercializa como producto de software independiente. Estas son capturas reales del sistema, no renders.',
    blocks: [
      {
        tag: 'CAPTURA DE DEFECTO',
        title: 'El inspector escanea, elige el defecto, asigna severidad. 12 segundos.',
        body: 'La spec del cliente está cargada por número de parte. El inspector ve solo los defectos válidos para esa pieza. Sin papel, sin Excel, sin error de captura.',
        img: 'screenshots/inspeccion-defectos.png',
        align: 'right',
      },
      {
        tag: 'ALERTA AUTOMÁTICA · QAR',
        title: 'Si pasa el umbral, el sistema dispara la alerta antes de que escale al cliente.',
        body: 'Tu reglas de severidad disparan un Quality Alert Report automático. El equipo se entera en segundos, no en la junta del jueves.',
        img: 'screenshots/alerta-qar.png',
        align: 'left',
      },
      {
        tag: 'RESOLUCIÓN DE PROBLEMAS · 8D',
        title: 'Dashboard ejecutivo en tiempo real. Sin más capturistas armando Excels.',
        body: 'KPIs de severidad, SLA D4, costo total, días promedio de cierre, departamentos lentos. Todo lo que tu cliente Tier-1 te pide en auditoría — ya construido.',
        img: 'screenshots/8d-dashboard.png',
        align: 'right',
      },
      {
        tag: 'MATERIAL REVIEW BOARD',
        title: 'Yield, PPM, costo de scrap y mano de obra. Por mes, por departamento, por cliente.',
        body: 'MRB integrado al flujo de defectos. Cuando un lote va a hold, el costo se calcula solo. La gerencia ve PPM real — no el que recuerda el ingeniero.',
        img: 'screenshots/mrb-dashboard.png',
        align: 'left',
      },
      {
        tag: 'WORKLOAD MANAGER',
        title: 'Cada actividad de calidad tiene dueño, fecha y % de avance.',
        body: 'Gantt y vista de equipo. Ves al instante quién va atrasado, quién está sobrecargado y qué se va a vencer esta semana. Adiós al status report manual.',
        img: 'screenshots/workload-gantt.png',
        align: 'right',
      },
      {
        tag: 'AUDITORÍAS IATF / 5S',
        title: 'Calendario anual con auditor líder, co-auditores y estado en vivo.',
        body: 'Programa, ejecuta y cierra cada auditoría desde un solo lugar. Histórico completo para mostrarle al certificador — sin abrir un solo folder.',
        img: 'screenshots/auditorias-calendario.png',
        align: 'left',
      },
    ],
  } : {
    eyebrow: 'SUPPORT TOOL, NOT A STANDALONE ERP',
    title: 'The system that substantiates the evidence behind the advisory.',
    sub: 'IxT-QMS runs today on real plants as a supporting tool for our advisory service — it is not marketed as a standalone software product. These are real screenshots, not renders.',
    blocks: [
      {
        tag: 'DEFECT CAPTURE',
        title: 'Inspector scans, picks the defect, sets severity. 12 seconds.',
        body: 'Customer spec is loaded by part number. Inspector sees only valid defects for that part. No paper, no Excel, no capture errors.',
        img: 'screenshots/inspeccion-defectos.png',
        align: 'right',
      },
      {
        tag: 'AUTO ALERT · QAR',
        title: 'If it crosses threshold, the system fires the alert before it escalates to the customer.',
        body: 'Your severity rules trigger an automatic Quality Alert Report. The team knows in seconds — not in Thursday\'s meeting.',
        img: 'screenshots/alerta-qar.png',
        align: 'left',
      },
      {
        tag: 'PROBLEM SOLVING · 8D',
        title: 'Live executive dashboard. No more clerks building Excels.',
        body: 'Severity KPIs, D4 SLA, total cost, avg close days, slow departments. Everything your Tier-1 customer asks for in audit — already built.',
        img: 'screenshots/8d-dashboard.png',
        align: 'right',
      },
      {
        tag: 'MATERIAL REVIEW BOARD',
        title: 'Yield, PPM, scrap and labor cost. By month, department, customer.',
        body: 'MRB integrated to the defect flow. When a lot goes to hold, the cost computes itself. Management sees real PPM — not what the engineer remembers.',
        img: 'screenshots/mrb-dashboard.png',
        align: 'left',
      },
      {
        tag: 'WORKLOAD MANAGER',
        title: 'Every quality task has an owner, due date and progress %.',
        body: 'Gantt and team view. Instantly see who\'s late, who\'s overloaded, and what\'s due this week. Goodbye manual status reports.',
        img: 'screenshots/workload-gantt.png',
        align: 'right',
      },
      {
        tag: 'IATF / 5S AUDITS',
        title: 'Annual calendar with lead auditor, co-auditors and live status.',
        body: 'Schedule, run and close every audit from one place. Full history to show the certifier — without opening a single folder.',
        img: 'screenshots/auditorias-calendario.png',
        align: 'left',
      },
    ],
  };
  return (
    <section style={{ padding: '88px 56px', background: 'white' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 48, lineHeight: 1.1, fontWeight: 700, color: v4S.ink,
            margin: '0 0 14px', letterSpacing: -1, maxWidth: 780, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: 0 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 88 }}>
          {t.blocks.map((b, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 56, alignItems: 'center',
              direction: b.align === 'left' ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{b.tag}</div>
                <h3 style={{
                  fontSize: 28, lineHeight: 1.2, fontWeight: 700, color: v4S.ink,
                  margin: '0 0 16px', letterSpacing: -0.6,
                  fontFamily: '"Source Serif 4", Georgia, serif',
                }}>{b.title}</h3>
                <p style={{ fontSize: 15.5, color: v4S.muted, lineHeight: 1.65, margin: 0 }}>{b.body}</p>
              </div>
              <div style={{ direction: 'ltr' }}>
                <V4TiltShot tilt={b.align === 'left' ? 'left' : 'right'} glow={v4S.primary}>
                  <div style={{
                    height: 28, background: '#F1F5F9',
                    borderBottom: `1px solid ${v4S.line}`,
                    display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 12,
                  }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: '#EF4444' }}/>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: '#F59E0B' }}/>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: '#10B981' }}/>
                  </div>
                  <img src={b.img} alt={b.tag} style={{ width: '100%', display: 'block' }}/>
                </V4TiltShot>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ROI Calculator interactivo ---
function V4ROI({ lang }) {
  const [inspectors, setInspectors] = React.useState(45);
  const [plants, setPlants] = React.useState(2);
  const [salesM, setSalesM] = React.useState(80); // sales in $M

  // Honest, simple model:
  // - CoPQ baseline 6% of sales (ASQ)
  // - Typical reduction 1.5-2.5% of sales after Year 1
  const coPQBaseline = salesM * 1_000_000 * 0.06;
  const coPQReduction = salesM * 1_000_000 * 0.018; // conservative 1.8%
  const auditSavings = plants * 35_000 * 2; // 2 audits/yr/plant
  const trainingSavings = inspectors * 0.25 * 18_000; // 25% turnover * 18K each
  const totalSavings = coPQReduction + auditSavings + trainingSavings;
  const fcCost = plants * 649 * 12; // pro plan
  const roiMonths = Math.max(1, Math.round((fcCost / totalSavings) * 12));

  const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');

  const t = lang === 'es' ? {
    eyebrow: 'CALCULADORA DE ROI',
    title: 'Mete tus números. El sistema se paga solo en meses, no en años.',
    sub: 'Modelo conservador basado en estudios públicos de ASQ. Sin promesas infladas.',
    inspectors: 'Inspectores en tu planta',
    plants: 'Plantas',
    sales: 'Ventas anuales (USD millones)',
    output: 'AHORRO ANUAL ESTIMADO',
    breakdown: 'Desglose conservador',
    items: [
      ['Reducción de costo de no-calidad (1.8% de ventas)', coPQReduction],
      ['Auditorías eficientes (2/año/planta)', auditSavings],
      ['Menor curva de aprendizaje en rotación', trainingSavings],
    ],
    fcLabel: 'Costo anual IxT-QMS Pro',
    paybackLabel: 'Recuperas la inversión en',
    paybackUnit: roiMonths === 1 ? 'mes' : 'meses',
    cta: 'Quiero esta calculadora con MIS números reales →',
    note: 'Asume Plan Pro ($649/planta/mes). El modelo es conservador: no incluye contracargos evitados ni penalizaciones por reincidencia.',
  } : {
    eyebrow: 'ROI CALCULATOR',
    title: 'Plug in your numbers. The system pays for itself in months, not years.',
    sub: 'Conservative model based on public ASQ studies. No inflated promises.',
    inspectors: 'Inspectors at your plant',
    plants: 'Plants',
    sales: 'Annual sales (USD millions)',
    output: 'ESTIMATED ANNUAL SAVINGS',
    breakdown: 'Conservative breakdown',
    items: [
      ['Cost of poor quality reduction (1.8% of sales)', coPQReduction],
      ['Efficient audits (2/yr/plant)', auditSavings],
      ['Lower turnover learning curve', trainingSavings],
    ],
    fcLabel: 'IxT-QMS Pro annual cost',
    paybackLabel: 'Payback in',
    paybackUnit: roiMonths === 1 ? 'month' : 'months',
    cta: 'I want this calculator with MY real numbers →',
    note: 'Assumes Pro Plan ($649/plant/month). Conservative model: excludes avoided chargebacks and repeat-offense penalties.',
  };

  return (
    <section style={{ padding: '88px 56px', background: v4S.ink, color: 'white' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 44, lineHeight: 1.1, fontWeight: 700, color: 'white',
            margin: '0 0 14px', letterSpacing: -1, maxWidth: 780, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: '#94A6C7', margin: 0 }}>{t.sub}</p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48,
        }}>
          {/* Inputs */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <Slider label={t.inspectors} value={inspectors} setValue={setInspectors} min={5} max={300} unit=""/>
              <Slider label={t.plants} value={plants} setValue={setPlants} min={1} max={15} unit=""/>
              <Slider label={t.sales} value={salesM} setValue={setSalesM} min={5} max={500} unit="$M"/>
            </div>
          </div>
          {/* Output */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(125,183,255,0.1), rgba(29,79,215,0.05))',
            border: '1px solid rgba(125,183,255,0.2)',
            borderRadius: 12, padding: 32,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 8 }}>{t.output}</div>
            <div style={{
              fontSize: 56, fontWeight: 800, letterSpacing: -1.5,
              fontFamily: '"Source Serif 4", Georgia, serif',
              background: 'linear-gradient(135deg, #fff, #7DB7FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 4,
            }}>{fmt(totalSavings)}</div>
            <div style={{ fontSize: 13, color: '#94A6C7', marginBottom: 24 }}>USD / {lang === 'es' ? 'año' : 'year'}</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18, marginBottom: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#94A6C7', marginBottom: 12 }}>{t.breakdown}</div>
              {t.items.map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, color: '#C7D3E8' }}>
                  <span>{label}</span>
                  <span style={{ fontWeight: 600, color: 'white' }}>{fmt(val)}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, color: '#FCA5A5', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 4, paddingTop: 12 }}>
                <span>− {t.fcLabel}</span>
                <span style={{ fontWeight: 600 }}>−{fmt(fcCost)}</span>
              </div>
            </div>
            <div style={{
              padding: '16px 20px', background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ fontSize: 13, color: '#A7F3D0', fontWeight: 500 }}>{t.paybackLabel}</span>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#6EE7B7', fontFamily: '"Source Serif 4", Georgia, serif' }}>
                {roiMonths} <span style={{ fontSize: 14, fontWeight: 500 }}>{t.paybackUnit}</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button style={{
            padding: '14px 26px', borderRadius: 10, border: 'none', cursor: 'pointer',
            background: 'white', color: v4S.ink, fontWeight: 700, fontSize: 14.5,
          }}>{t.cta}</button>
          <div style={{ marginTop: 16, fontSize: 12, color: '#7B8AA8', fontStyle: 'italic', maxWidth: 700, marginInline: 'auto', lineHeight: 1.5 }}>
            {t.note}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, setValue, min, max, unit }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <label style={{ fontSize: 13, color: '#C7D3E8', fontWeight: 500 }}>{label}</label>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'white', fontFamily: '"Source Serif 4", Georgia, serif' }}>
          {unit === '$M' ? `$${value}M` : value}
        </div>
      </div>
      <input
        type="range" min={min} max={max} value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        style={{ width: '100%', accentColor: '#7DB7FF', cursor: 'pointer' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5A6B82', marginTop: 4 }}>
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );
}

// --- RISK REVERSAL ---
function V4Risk({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'COMPROMISO CLARO, SIN SORPRESAS',
    title: 'Contrato anual con alcance definido desde el inicio.',
    sub: 'Formalizamos el alcance de asesoría, entregables y calendario en un contrato anual — sin ambigüedades para ninguna de las partes.',
    items: [
      { num: '1', unit: 'año', title: 'de vigencia contractual', body: 'Alcance, entregables y calendario de servicio definidos por escrito antes de iniciar.' },
      { num: '14', unit: 'días', title: 'para arranque en planta', body: 'Tiempo promedio de arranque tras firma: configuración inicial del sistema y primera visita técnica.' },
      { num: '1:1', unit: '', title: 'soporte directo', body: 'Contacto directo con el consultor asignado durante toda la vigencia del contrato, sin mesa de ayuda genérica.' },
    ],
  } : {
    eyebrow: 'CLEAR COMMITMENT, NO SURPRISES',
    title: 'Annual contract with defined scope from day one.',
    sub: 'We formalize the advisory scope, deliverables and schedule in an annual contract — no ambiguity for either party.',
    items: [
      { num: '1', unit: 'year', title: 'contract term', body: 'Scope, deliverables and service schedule defined in writing before starting.' },
      { num: '14', unit: 'days', title: 'to plant kickoff', body: 'Average time to start after signing: initial system setup and first technical visit.' },
      { num: '1:1', unit: '', title: 'direct support', body: 'Direct contact with your assigned consultant for the full contract term — no generic help desk.' },
    ],
  };
  return (
    <section style={{ padding: '88px 56px', background: 'white' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.ok, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 44, lineHeight: 1.1, fontWeight: 700, color: v4S.ink,
            margin: '0 0 14px', letterSpacing: -1, maxWidth: 740, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, maxWidth: 620, margin: '0 auto', lineHeight: 1.55 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {t.items.map((it, i) => (
            <div key={i} style={{
              padding: 28, borderRadius: 14,
              background: v4S.okBg, border: `1px solid #BBF7D0`,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 18 }}>
                <div style={{
                  fontSize: 56, fontWeight: 800, color: v4S.ok,
                  letterSpacing: -2, lineHeight: 1,
                  fontFamily: '"Source Serif 4", Georgia, serif',
                }}>{it.num}</div>
                <div style={{ fontSize: 14, color: v4S.ok, fontWeight: 600 }}>{it.unit}</div>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: v4S.ink, margin: '0 0 8px', lineHeight: 1.3 }}>{it.title}</h3>
              <p style={{ fontSize: 13.5, color: v4S.muted, margin: 0, lineHeight: 1.55 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function V4FAQ({ lang }) {
  const [open, setOpen] = React.useState(0);
  const t = lang === 'es' ? {
    eyebrow: 'PREGUNTAS REALES DE CLIENTES REALES',
    title: 'Las dudas que frenan a un Director de Calidad antes de comprar.',
    items: [
      {
        q: '¿Cuánto tarda implementarlo? Mi planta no puede parar.',
        a: 'Implementación típica: 14 días sin parar producción. Día 1-3: importamos tu catálogo de partes y specs. Día 4-7: configuramos defectos, severidades y umbrales QAR. Día 8-14: piloto en una línea, después escalas tú al resto al ritmo que quieras. No hay "go live" traumático.',
      },
      {
        q: '¿Migran nuestro Excel histórico? Tenemos años de datos ahí.',
        a: 'Sí, es parte del proceso de implementación. Nos mandas tus archivos (Excel, Access, CSV, lo que sea) y te ayudamos a normalizarlos e importarlos. Conservas todo el histórico de defectos, lotes, dispositions y firmas. El costo se define según volumen y complejidad de tu data. Si tienes datos en papel, te damos plantilla para digitalizar lo crítico.',
      },
      {
        q: '¿On-premise o cloud? Mi cliente Tier-1 no quiere datos afuera.',
        a: 'Ambos. Plan Pro y Starter corren en cloud privado certificado SOC2 con servidores en la región que elijas. Plan Enterprise puede ser on-premise o cloud privado tuyo (AWS, Azure, GCP). Tú eliges; los datos son tuyos siempre.',
      },
      {
        q: '¿Funciona offline? Mi piso de planta tiene zonas sin WiFi.',
        a: 'Sí. La app del inspector cachea localmente y sincroniza cuando vuelve la red. Las inspecciones críticas nunca se pierden. Tablets Android/iOS, lectores de código de barras y básculas certificadas conectan vía Bluetooth.',
      },
      {
        q: '¿Cumple realmente IATF 16949 o solo "se dice ISO compliant"?',
        a: 'Cumple. Cada módulo está mapeado a las cláusulas específicas (8D → 10.2, MRB → 8.7, Auditorías → 9.2, etc.). Te entregamos la matriz de trazabilidad para tu auditor. Varios clientes nuestros pasaron auditorías IATF de re-certificación con IxT-QMS como evidencia principal.',
      },
      {
        q: '¿Se integra con SAP / Odoo / nuestro ERP?',
        a: 'Sí. API REST documentada en Plan Pro. Conectores nativos para SAP S/4HANA, Odoo, QAD y Plex en Plan Enterprise. Si tu ERP no está en la lista, lo construimos sin costo si firmas anual.',
      },
      {
        q: '¿Qué pasa con los datos si nos vamos?',
        a: 'Te los llevas. Exportación completa en Excel, JSON o SQL en 1 click — incluyendo histórico, archivos adjuntos y firmas digitales. Sin "lock-in" de datos. Tu información es tuya, siempre.',
      },
      {
        q: '¿Cuántos usuarios incluye? Tengo 80 inspectores en 3 turnos.',
        a: 'Plan Pro = inspectores ilimitados. No cobramos "por silla", lo cual rompe en planta. Cobramos por planta. Si tienes 3 turnos, cada turno usa el sistema sin costo extra. Solo pagas por las plantas que activas.',
      },
    ],
  } : {
    eyebrow: 'REAL QUESTIONS FROM REAL CUSTOMERS',
    title: 'The doubts that stop a Quality Director before they buy.',
    items: [
      {
        q: 'How long does it take to implement? My plant can\'t stop.',
        a: 'Typical implementation: 14 days with zero production downtime. Day 1-3: we import your part catalog and specs. Day 4-7: we configure defects, severity and QAR thresholds. Day 8-14: pilot on one line, then you scale at your own pace. No traumatic "go live".',
      },
      {
        q: 'Do you migrate our historical Excel? We have years of data.',
        a: 'Yes, it\'s part of the implementation process. Send us your files (Excel, Access, CSV, anything) and we help you normalize and import them. You keep all defect, lot, disposition and signature history. Cost depends on the volume and complexity of your data. If you have paper data, we give you a template to digitize the critical pieces.',
      },
      {
        q: 'On-premise or cloud? My Tier-1 customer doesn\'t want data outside.',
        a: 'Both. Pro and Starter run on SOC2-certified private cloud in your chosen region. Enterprise can be on-premise or your own private cloud (AWS, Azure, GCP). You pick; data is yours always.',
      },
      {
        q: 'Does it work offline? My plant floor has dead zones.',
        a: 'Yes. Inspector app caches locally and syncs when network returns. Critical inspections never lost. Android/iOS tablets, barcode scanners and certified scales connect via Bluetooth.',
      },
      {
        q: 'Does it really comply with IATF 16949 or just "says ISO compliant"?',
        a: 'It complies. Each module maps to specific clauses (8D → 10.2, MRB → 8.7, Audits → 9.2, etc.). We deliver the traceability matrix for your auditor. Several customers passed IATF re-certification audits with IxT-QMS as primary evidence.',
      },
      {
        q: 'Does it integrate with SAP / Odoo / our ERP?',
        a: 'Yes. Documented REST API on Pro Plan. Native connectors for SAP S/4HANA, Odoo, QAD and Plex on Enterprise. If your ERP isn\'t on the list, we build it for free if you sign annual.',
      },
      {
        q: 'What happens to our data if we leave?',
        a: 'You take it. Full export in Excel, JSON or SQL in 1 click — including history, attachments and digital signatures. No data lock-in. Your information is yours, always.',
      },
      {
        q: 'How many users included? I have 80 inspectors in 3 shifts.',
        a: 'Pro Plan = unlimited inspectors. We don\'t charge "per seat" — that breaks on the plant floor. We charge per plant. If you have 3 shifts, every shift uses it at no extra cost. You only pay for active plants.',
      },
    ],
  };
  return (
    <section style={{ padding: '88px 56px', background: v4S.bgSoft }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 40, lineHeight: 1.15, fontWeight: 700, color: v4S.ink,
            margin: 0, letterSpacing: -0.8,
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {t.items.map((it, i) => (
            <div key={i} style={{
              background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 10,
              overflow: 'hidden',
            }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '20px 24px', border: 'none', background: 'transparent',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: v4S.ink, paddingRight: 24 }}>{it.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 999,
                  background: open === i ? v4S.ink : v4S.bgCool,
                  color: open === i ? 'white' : v4S.ink,
                  display: 'grid', placeItems: 'center',
                  fontSize: 18, fontWeight: 600, flexShrink: 0,
                  transition: 'all 0.2s',
                }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div style={{
                  padding: '0 24px 22px', fontSize: 14.5, color: v4S.muted, lineHeight: 1.65,
                  borderTop: `1px solid ${v4S.line}`, paddingTop: 18,
                }}>{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA Final ---
function V4CTAFinal({ lang }) {
  const t = lang === 'es' ? {
    title: 'Refuerza tu sistema de calidad con criterio de ingeniería, no con más Excels.',
    sub: 'Agenda una consulta técnica de 30 minutos. Revisamos tu proceso actual y qué alcance de asesoría y soporte de sistema aplica a tu planta.',
    cta1: 'Agendar consulta de 30 min',
    cta2: 'Ver el sistema en operación',
    bullets: [
      'Revisamos TU proceso, no un caso genérico',
      'Definimos el alcance de asesoría que aplica',
      'Recibes una propuesta técnica en la misma llamada',
      'Sin compromiso de contratación en la consulta inicial',
    ],
  } : {
    title: 'Reinforce your quality system with engineering judgment, not more spreadsheets.',
    sub: 'Book a 30-minute technical consultation. We review your current process and the advisory and system-support scope that applies to your plant.',
    cta1: 'Book 30-min consultation',
    cta2: 'See the system in operation',
    bullets: [
      'We review YOUR process, not a generic case',
      'We define the advisory scope that applies',
      'You receive a technical proposal in the same call',
      'No commitment required for the initial consultation',
    ],
  };
  return (
    <section style={{ padding: '100px 56px', background: `linear-gradient(135deg, ${v4S.ink} 0%, #0F2756 100%)`, color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 500, height: 500,
        borderRadius: 999, background: 'radial-gradient(circle, rgba(125,183,255,0.15), transparent 70%)',
      }}/>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontSize: 56, lineHeight: 1.05, fontWeight: 700, color: 'white',
              margin: '0 0 22px', letterSpacing: -1.5,
              fontFamily: '"Source Serif 4", Georgia, serif',
            }}>{t.title}</h2>
            <p style={{ fontSize: 18, color: '#94A6C7', margin: '0 0 32px', lineHeight: 1.55 }}>{t.sub}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{
                padding: '16px 26px', borderRadius: 10, border: 'none', cursor: 'pointer',
                background: 'white', color: v4S.ink, fontWeight: 700, fontSize: 15,
              }}>{t.cta1} →</button>
              <button style={{
                padding: '16px 26px', borderRadius: 10, cursor: 'pointer',
                background: 'transparent', color: 'white', fontWeight: 600, fontSize: 15,
                border: '1.5px solid rgba(255,255,255,0.25)',
              }}>{t.cta2}</button>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14, padding: 32,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 18 }}>
              {lang === 'es' ? 'EN LA LLAMADA' : 'IN THE CALL'}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {t.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#E2E8F0', lineHeight: 1.5 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 999, background: 'rgba(16,185,129,0.2)',
                    display: 'grid', placeItems: 'center', flexShrink: 0,
                    color: '#6EE7B7', fontSize: 12, fontWeight: 700, marginTop: 2,
                  }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- ASESORÍA TÉCNICA Y CAPACITACIONES ---
function V4Services({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'SERVICIO PRINCIPAL',
    title: 'Asesoría técnica, liaison y capacitación — el sistema acompaña el servicio.',
    sub: 'Contratas experiencia de planta real para reforzar tu equipo de calidad. IxT-QMS se proporciona sin costo adicional como herramienta de soporte durante el servicio, para documentar y sustentar el trabajo realizado — no se vende ni licencia por separado como producto de software.',
    items: [
      { h: 'Temporary Liaison', b: 'Representación técnica temporal ante tu cliente OEM — cubrimos el puesto en campo mientras contratas o durante picos de producción.' },
      { h: 'Seguimiento a proveedores', b: 'Seguimiento a problemas de calidad, verificación de contramedidas y seguimiento al desarrollo de partes con tus proveedores Tier 1/2.' },
      { h: 'Cursos para la industria', b: 'Plan de cursos ya armado: Quality Control & SPC, 8D, criterios de inspección y preparación de auditoría — para tu equipo de piso y mandos medios.' },
      { h: 'Asesoría QMS para facilitar auditorías ISO 9001:2015', b: 'Preparamos y acompañamos tu próxima auditoría IATF 16949 o ISO 9001, apoyándonos en IxT-QMS —nuestro sistema de gestión de calidad, incluido sin costo al contratar el servicio— para documentar y sustentar la evidencia frente al auditor.' },
    ],
    cta: 'Cotizar servicios industriales',
  } : {
    eyebrow: 'CORE SERVICE',
    title: 'Technical advisory, liaison and training — the system supports the engagement.',
    sub: 'You contract real plant-floor experience to reinforce your quality team. IxT-QMS is provided at no additional cost as a supporting tool during the engagement, to document and substantiate the work performed — it is not sold or licensed separately as a software product.',
    items: [
      { h: 'Temporary Liaison', b: 'Temporary technical representation in front of your OEM customer — we cover the seat while you hire, or during production peaks.' },
      { h: 'Supplier follow-up', b: 'Follow-up on quality issues, countermeasure verification, and part development tracking with your Tier 1/2 suppliers.' },
      { h: 'Industry training courses', b: 'A ready-made course plan: Quality Control & SPC, 8D, inspection criteria and audit prep — for your floor team and middle management.' },
      { h: 'QMS Advisory to facilitate ISO 9001:2015 audits', b: 'We prepare and accompany your next IATF 16949 or ISO 9001 audit, supported by IxT-QMS —our quality management system, included at no extra cost when you engage the service— to document and substantiate the evidence in front of the auditor.' },
    ],
    cta: 'Get an industry services quote',
  };
  return (
    <section id="servicios" style={{ padding: '88px 56px', background: 'white', borderTop: `1px solid ${v4S.line}` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 42, lineHeight: 1.15, fontWeight: 700, color: v4S.ink,
            margin: '0 0 14px', letterSpacing: -1, maxWidth: 740, marginInline: 'auto',
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 16, color: v4S.muted, margin: 0 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
          {t.items.map((it, i) => (
            <div key={i} style={{ padding: 26, borderRadius: 14, background: v4S.bgSoft, border: `1px solid ${v4S.line}` }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8, marginBottom: 16,
                background: `${v4S.primary}14`, color: v4S.primary,
                display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14,
              }}>{i + 1}</div>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, color: v4S.ink, margin: '0 0 8px', lineHeight: 1.3 }}>{it.h}</h3>
              <p style={{ fontSize: 13.5, color: v4S.muted, margin: 0, lineHeight: 1.55 }}>{it.b}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{
            padding: '14px 24px', borderRadius: 10, border: 'none', cursor: 'pointer',
            background: v4S.ink, color: 'white', fontWeight: 700, fontSize: 14.5,
          }}>{t.cta} →</button>
        </div>
      </div>
    </section>
  );
}

function V4Footer({ lang }) {
  return (
    <footer style={{ padding: '40px 56px', background: '#06142E', color: '#7B8AA8', fontSize: 13 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: `linear-gradient(135deg, ${v4S.primary}, ${v4S.primaryDark})`,
            display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 11,
          }}>IxT</div>
          <span style={{ color: '#C7D3E8', fontWeight: 600 }}>IxT-QMS</span>
          <span>·</span>
          <span>{lang === 'es' ? 'Consultoría y formación · Industria automotriz' : 'Consulting & training · Automotive industry'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <a href="Nuestra Historia.html" style={{ color: '#C7D3E8', textDecoration: 'none', fontWeight: 600 }}>{lang === 'es' ? 'Perfil' : 'Profile'}</a>
          <a href="Escalera Comercial.html" style={{ color: '#C7D3E8', textDecoration: 'none', fontWeight: 600 }}>{lang === 'es' ? 'Niveles de servicio' : 'Service levels'}</a>
          <a href="Aviso de Privacidad.html" style={{ color: '#7B8AA8', textDecoration: 'none' }}>{lang === 'es' ? 'Aviso de privacidad' : 'Privacy notice'}</a>
          <span>© 2026 IxT-QMS. {lang === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}.</span>
        </div>
      </div>
    </footer>
  );
}

// --- SIMULADOR DE AUDITORÍA — preguntas de auditor con evidencia en IxT-QMS ---
function V4AuditSim({ lang }) {
  const [open, setOpen] = React.useState(0);
  const t = lang === 'es' ? {
    eyebrow: 'PREPARACIÓN PARA AUDITORÍA',
    title: 'Así respondes cuando el auditor pregunta.',
    sub: 'Preguntas típicas de una auditoría ISO 9001:2015 y dónde queda la evidencia dentro de la plataforma. Cada respuesta apunta al módulo donde queda registrada la evidencia.',
    items: [
      { clause: '8.5.2', q: 'Muéstrenme la trazabilidad completa de este lote específico, estación por estación.', a: 'Inspección de defectos: historial del lote — quién inspeccionó, cuándo, qué se encontró y con qué evidencia fotográfica.' },
      { clause: '8.7', q: '¿Cómo identifican y controlan el producto no conforme mientras se decide su disposición?', a: 'Hospital de defectos: unidades retenidas con su defecto, ubicación y estado de liberación.' },
      { clause: '8.7', q: '¿Cómo disponen del material no conforme y quién lo autoriza?', a: 'MRB: flujo de disposición del material con ubicación física, evidencia y aprobación registrada.' },
      { clause: '10.2', q: '¿Qué pasó la última vez que un defecto crítico llegó al cliente? Muéstrenme el 8D.', a: 'Alertas QAR y 8D: la alerta emitida al momento del defecto, y el reporte 8D con causa raíz, acciones y verificación de eficacia.' },
      { clause: '8.4', q: '¿Cómo controlan la especificación vigente de cada parte de su cliente?', a: 'BOM de cliente: jerarquía cliente-proyecto-parte con la especificación confirmada que se usa para inspeccionar.' },
      { clause: '9.2', q: '¿Cuál es su programa de auditorías internas y el estatus de los hallazgos abiertos?', a: 'Auditorías: calendario, checklist aplicada y hallazgos con su seguimiento.' },
      { clause: '7.2', q: '¿Cómo verifican que el inspector está calificado para esta operación?', a: 'Matriz de habilidades: nivel de competencia por persona y operación.' },
      { clause: '9.1.3', q: '¿Cómo analizan los datos para decidir dónde atacar un problema recurrente?', a: 'Taguchi y DOE: diseño de experimentos y análisis sobre los datos capturados en inspección.' },
      { clause: '9.1', q: '¿Cómo saben si el plan de contención o de inspección se está ejecutando en tiempo?', a: 'Carga de trabajo: Gantt de actividades asignadas con avance real contra plan.' },
      { clause: '7.5', q: '¿Dónde está la instrucción de trabajo vigente para esta operación, y cómo saben que el operador la leyó?', a: 'Hojas de operación: versión vigente con control de cambios y firma de lectura por operador con fecha y hora.' },
      { clause: '6.1 / 6.3', q: '¿Cómo evalúan el riesgo antes de implementar un cambio de ingeniería?', a: 'Cambios de ingeniería (ECR): análisis de impacto documentado antes de aprobar el cambio, con trazabilidad por revisión.' },
      { clause: '6.1', q: '¿Cómo deciden qué nivel de validación aplica a un cambio — desde revisión documental hasta validación completa?', a: 'Matriz de riesgo: severidad × ocurrencia que sugiere la validación requerida por tipo de cambio.' },
      { clause: '8.5.1 / 8.7', q: '¿Cómo gestionan una excepción temporal a una especificación, con fecha de vigencia?', a: 'Desviaciones: desviaciones de producto o proceso con aprobación multinivel y vencimiento controlado por fecha.' },
      { clause: '9.3', q: '¿Tienen evidencia de la última revisión por la dirección, con las entradas y salidas que pide la norma?', a: 'Revisión por la dirección: KPIs agregados automáticamente, checklist de 9.3.2/9.3.3 y firma digital de los asistentes.' },
      { clause: '10.3 / 10.2', q: '¿Cómo evitan que se repita un problema ya resuelto en otro proyecto o cliente?', a: 'Lecciones aprendidas: registro obligatorio al cerrar cada 8D, consultable por tipo de defecto y cliente.' },
      { clause: '8.5.2', q: '¿Cómo saben qué porcentaje de su producción ya fue inspeccionado y qué falta?', a: 'Registro de producción y unidades: importación de seriales con cálculo automático de cobertura de inspección.' },
      { clause: '7.1.5', q: '¿Cómo controlan la confirmación de especificaciones por parte y por cliente?', a: 'Confirmación de especificaciones: catálogo de specs por parte y cliente con tolerancias, y evidencia fotográfica OK/NOK de cada inspección.' },
    ],
    note: 'Basado en la estructura de ISO/TS 9002:2016 (guía de aplicación de ISO 9001:2015). Esto es preparación de evidencia, no auditoría de certificación de tercera parte.',
  } : {
    eyebrow: 'AUDIT READINESS',
    title: 'This is how you answer when the auditor asks.',
    sub: 'Typical ISO 9001:2015 audit questions and where the evidence sits inside the platform. Each answer points to the module where the evidence is recorded.',
    items: [
      { clause: '8.5.2', q: 'Show me the complete traceability of this specific lot, station by station.', a: 'Defect inspection: lot history — who inspected, when, what was found and with what photo evidence.' },
      { clause: '8.7', q: 'How do you identify and control nonconforming product while its disposition is decided?', a: 'Defect hospital: units on hold with their defect, location and release status.' },
      { clause: '8.7', q: 'How do you disposition non-conforming material and who authorizes it?', a: 'MRB: material disposition flow with physical location, evidence and recorded approval.' },
      { clause: '10.2', q: 'What happened the last time a critical defect reached the customer? Show me the 8D.', a: 'QAR alerts and 8D: the alert issued at the moment of the defect, and the 8D report with root cause, actions and effectiveness verification.' },
      { clause: '8.4', q: 'How do you control the current specification for each of your customer parts?', a: 'Customer BOM: client-project-part hierarchy with the confirmed specification used to inspect.' },
      { clause: '9.2', q: 'What is your internal audit program and the status of open findings?', a: 'Audits: calendar, checklist applied and findings with their follow-up.' },
      { clause: '7.2', q: 'How do you verify the inspector is qualified for this operation?', a: 'Skills matrix: competency level per person and operation.' },
      { clause: '9.1.3', q: 'How do you analyze data to decide where to attack a recurring problem?', a: 'Taguchi and DOE: design of experiments and analysis over the data captured at inspection.' },
      { clause: '9.1', q: 'How do you know the containment or inspection plan is being executed on time?', a: 'Workload: Gantt of assigned activities with actual progress against plan.' },
      { clause: '7.5', q: 'Where is the current work instruction for this operation, and how do you know the operator read it?', a: 'Operation sheets: current version with change control and read-receipt sign-off by operator with date and time.' },
      { clause: '6.1 / 6.3', q: 'How do you assess risk before implementing an engineering change?', a: 'Engineering changes (ECR): documented impact analysis before approving the change, with traceability per revision.' },
      { clause: '6.1', q: 'How do you decide what validation level applies to a change — from document review to full validation?', a: 'Risk matrix: severity × occurrence that suggests the required validation by change type.' },
      { clause: '8.5.1 / 8.7', q: 'How do you manage a temporary exception to a specification, with a validity date?', a: 'Deviations: product or process deviations with multi-level approval and date-controlled expiration.' },
      { clause: '9.3', q: 'Do you have evidence of the last management review, with the inputs and outputs the standard requires?', a: 'Management review: KPIs auto-aggregated, 9.3.2/9.3.3 checklist and digital sign-off from attendees.' },
      { clause: '10.3 / 10.2', q: 'How do you keep a problem already solved on one project from recurring on another?', a: 'Lessons learned: mandatory entry at every 8D closure, searchable by defect type and customer.' },
      { clause: '8.5.2', q: 'How do you know what percentage of your production has been inspected and what is still pending?', a: 'Production and unit registry: serial import with automatic inspection-coverage calculation.' },
      { clause: '7.1.5', q: 'How do you control specification confirmation by part and by customer?', a: 'Spec confirmation: spec catalog by part and customer with tolerances, and OK/NOK photo evidence for every inspection.' },
    ],
    note: 'Based on the structure of ISO/TS 9002:2016 (application guidance for ISO 9001:2015). This is evidence preparation, not a third-party certification audit.',
  };
  return (
    <section id="auditoria" style={{ padding: '88px 56px', background: v4S.bgSoft }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: v4S.primary, marginBottom: 14 }}>{t.eyebrow}</div>
          <h2 style={{
            fontSize: 40, lineHeight: 1.15, fontWeight: 700, color: v4S.ink,
            margin: '0 0 14px', letterSpacing: -0.9,
            fontFamily: '"Source Serif 4", Georgia, serif',
          }}>{t.title}</h2>
          <p style={{ fontSize: 15.5, color: v4S.muted, maxWidth: 640, margin: '0 auto', lineHeight: 1.6 }}>{t.sub}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {t.items.map((it, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${v4S.line}`, borderRadius: 10, overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', padding: '18px 22px', border: 'none', background: 'transparent',
                display: 'flex', alignItems: 'center', gap: 14,
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: v4S.primary, fontFamily: 'ui-monospace, monospace',
                  background: `${v4S.primary}14`, padding: '4px 8px', borderRadius: 6, flexShrink: 0,
                }}>{it.clause}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: v4S.ink, flex: 1, fontStyle: 'italic' }}>"{it.q}"</span>
                <span style={{
                  width: 26, height: 26, borderRadius: 999,
                  background: open === i ? v4S.ink : v4S.bgCool,
                  color: open === i ? 'white' : v4S.ink,
                  display: 'grid', placeItems: 'center',
                  fontSize: 16, fontWeight: 600, flexShrink: 0,
                }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div style={{
                  padding: '0 22px 20px 22px', display: 'flex', gap: 12, alignItems: 'flex-start',
                  borderTop: `1px solid ${v4S.line}`, paddingTop: 16,
                }}>
                  <span style={{ color: v4S.ok, fontSize: 16, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <p style={{ fontSize: 14, color: v4S.muted, lineHeight: 1.6, margin: 0 }}>{it.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, fontSize: 12.5, color: v4S.muted, fontStyle: 'italic', textAlign: 'center', maxWidth: 760, marginInline: 'auto', lineHeight: 1.55 }}>{t.note}</div>
      </div>
    </section>
  );
}

// --- SEGURIDAD Y DESPLIEGUE: cloud SaaS vs on-premise ---
function V4Deployment({ lang }) {
  const t = lang === 'es' ? {
    eyebrow: 'SEGURIDAD DE DATOS',
    title: 'Tus specs de cliente no tienen por qué salir de tu planta.',
    sub: 'La mayoría de los ERPs de calidad son 100% cloud — tus datos viven en un servidor de un tercero, expuestos cada vez que tu red se conecta a internet. IxT-QMS te da la opción de que no sea así.',
    col1h: 'Cloud / SaaS típico',
    col2h: 'IxT-QMS On-Premise',
    rows: [
      ['Dónde viven tus datos', 'En la nube de un tercero, fuera de tu control directo', 'En tu propio servidor, dentro de tu planta'],
      ['Exposición a internet', 'Tu información sensible depende de la seguridad de otro', 'Operación crítica funciona sin salir a internet'],
      ['Riesgo de tu red interna', 'Cada conexión al SaaS es una puerta abierta hacia afuera', 'Superficie de ataque mínima — sin dependencia externa'],
      ['Specs e info de tu cliente OEM', 'Compartidas con la infraestructura del proveedor SaaS', '100% dentro de tu perímetro, nunca sale de tu red'],
      ['Modelo comercial', 'Renta mensual por usuario, de por vida', 'Licencia de renta anual, alojada en tu propio servidor'],
    ],
    note: 'Disponible en Plan Enterprise. Nosotros instalamos, configuramos y damos soporte remoto — tú controlas dónde vive la información.',
  } : {
    eyebrow: 'DATA SECURITY',
    title: 'Your customer specs don\'t have to leave your plant.',
    sub: 'Most quality ERPs are 100% cloud — your data lives on a third party\'s server, exposed every time your network connects to the internet. IxT-QMS gives you the option not to.',
    col1h: 'Typical Cloud / SaaS',
    col2h: 'IxT-QMS On-Premise',
    rows: [
      ['Where your data lives', 'On a third party\'s cloud, outside your direct control', 'On your own server, inside your plant'],
      ['Internet exposure', 'Your sensitive data depends on someone else\'s security', 'Critical operation runs without reaching the internet'],
      ['Internal network risk', 'Every SaaS connection is an open door outward', 'Minimal attack surface — no external dependency'],
      ['Your OEM customer\'s specs', 'Shared with the SaaS provider\'s infrastructure', '100% inside your perimeter, never leaves your network'],
      ['Commercial model', 'Monthly per-user rent, forever', 'Annual license fee, hosted on your own server'],
    ],
    note: 'Available on the Enterprise Plan. We install, configure and provide remote support — you control where the information lives.',
  };
  return (
    <section style={{ padding: '88px 56px', background: v4S.ink, color: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#7DB7FF', marginBottom: 14 }}>{t.eyebrow}</div>
            <h2 style={{
              fontSize: 38, lineHeight: 1.15, fontWeight: 700, color: 'white',
              margin: 0, letterSpacing: -0.8,
              fontFamily: '"Source Serif 4", Georgia, serif',
            }}>{t.title}</h2>
          </div>
          <p style={{ fontSize: 15.5, color: '#94A6C7', margin: 0, lineHeight: 1.6 }}>{t.sub}</p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14, overflow: 'hidden',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr' }}>
            <div style={{ padding: '16px 22px', fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: '#94A6C7', borderBottom: '1px solid rgba(255,255,255,0.1)' }}/>
            <div style={{ padding: '16px 22px', fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: '#94A6C7', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{t.col1h}</div>
            <div style={{ padding: '16px 22px', fontSize: 12, fontWeight: 700, letterSpacing: 0.6, color: '#6EE7B7', textTransform: 'uppercase', background: 'rgba(16,185,129,0.08)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{t.col2h}</div>
            {t.rows.map((row, ri) => (
              <React.Fragment key={ri}>
                <div style={{ padding: '18px 22px', fontSize: 13.5, fontWeight: 600, color: 'white', borderBottom: ri === t.rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>{row[0]}</div>
                <div style={{ padding: '18px 22px', fontSize: 13.5, color: '#94A6C7', borderBottom: ri === t.rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.4 }}>
                  <span style={{ color: v4S.danger, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✕</span>{row[1]}
                </div>
                <div style={{ padding: '18px 22px', fontSize: 13.5, color: '#E2E8F0', fontWeight: 500, background: 'rgba(16,185,129,0.05)', borderBottom: ri === t.rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.4 }}>
                  <span style={{ color: '#6EE7B7', fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>{row[2]}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 20, fontSize: 12.5, color: '#7B8AA8', fontStyle: 'italic', textAlign: 'center' }}>{t.note}</div>
      </div>
    </section>
  );
}

function V4Landing() {
  const [lang, setLang] = React.useState('es');
  return (
    <div style={{ background: 'white', color: v4S.ink, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <V4Nav lang={lang} setLang={setLang}/>
      <V4Hero lang={lang}/>
      <V4Services lang={lang}/>
      <V4Pain lang={lang}/>
      <V4Product lang={lang}/>
      <V4AuditSim lang={lang}/>
      <V4Risk lang={lang}/>
      <V4FAQ lang={lang}/>
      <V4CTAFinal lang={lang}/>
      <V4Footer lang={lang}/>
    </div>
  );
}
