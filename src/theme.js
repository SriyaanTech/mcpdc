export const theme = {
  color: {
    navyDeep: "#0a1f38",
    navyMid: "#123058",
    navySoft: "#1c3f6e",
    paper: "#f2ede0",
    paperDim: "#e7dfcc",
    ink: "#0e1c2f",
    inkSoft: "rgba(14, 28, 47, 0.68)",
    brass: "#b98a34",
    brassLight: "#dcb45f",
    lineOnPaper: "rgba(14, 28, 47, 0.14)",
    lineOnNavy: "rgba(242, 237, 224, 0.16)",
    white: "#ffffff",
  },
  font: {
    display: '"Fraunces", Georgia, serif',
    body: '"IBM Plex Sans", -apple-system, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
  layout: {
    maxWidth: "1180px",
    radius: "2px",
  },
};

export const globalStyles = `
:root {
  --navy-deep: ${theme.color.navyDeep};
  --navy-mid: ${theme.color.navyMid};
  --navy-soft: ${theme.color.navySoft};
  --paper: ${theme.color.paper};
  --paper-dim: ${theme.color.paperDim};
  --ink: ${theme.color.ink};
  --ink-soft: ${theme.color.inkSoft};
  --brass: ${theme.color.brass};
  --brass-light: ${theme.color.brassLight};
  --line-on-paper: ${theme.color.lineOnPaper};
  --line-on-navy: ${theme.color.lineOnNavy};
  --white: ${theme.color.white};

  --font-display: ${theme.font.display};
  --font-body: ${theme.font.body};
  --font-mono: ${theme.font.mono};

  --max-width: ${theme.layout.maxWidth};
  --radius: ${theme.layout.radius};
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; }
img { max-width: 100%; display: block; }
button { font-family: inherit; }
:focus-visible { outline: 2px solid var(--brass); outline-offset: 3px; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass);
}
.eyebrow--on-navy { color: var(--brass-light); }

/* ============================== NAVBAR ============================== */

.navbar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(242, 237, 224, 0.94);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line-on-paper);
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  gap: 16px;
}
.navbar__mark {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--ink);
  flex-shrink: 0;
}
.navbar__crest { width: 34px; height: 34px; flex-shrink: 0; }
.navbar__wordmark { display: flex; flex-direction: column; line-height: 1.05; }
.navbar__wordmark strong { font-family: var(--font-display); font-size: 19px; font-weight: 600; letter-spacing: 0.01em; }
.navbar__wordmark span { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }

.navbar__links {
  display: flex;
  align-items: center;
  gap: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  overflow: hidden;
}
.navbar__links a {
  font-size: 14px;
  text-decoration: none;
  color: var(--ink-soft);
  position: relative;
  padding-bottom: 4px;
  white-space: nowrap;
}
.navbar__links a:hover, .navbar__links a.active { color: var(--ink); }
.navbar__links a::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: var(--brass);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}
.navbar__links a:hover::after, .navbar__links a.active::after { transform: scaleX(1); }

.navbar__actions { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }

.navbar__toggle {
  display: none;
  background: none;
  border: 1px solid var(--line-on-paper);
  border-radius: var(--radius);
  width: 40px; height: 40px;
  align-items: center; justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}
.navbar__toggle span, .navbar__toggle span::before, .navbar__toggle span::after {
  content: ""; display: block; width: 18px; height: 1.5px; background: var(--ink);
  position: relative; transition: transform 0.2s ease;
}
.navbar__toggle span::before { position: absolute; top: -6px; }
.navbar__toggle span::after { position: absolute; top: 6px; }

.navbar__mobile {
  display: none;
  flex-direction: column;
  gap: 2px;
  padding: 8px 0 20px;
  border-top: 1px solid var(--line-on-paper);
}
.navbar__mobile a {
  padding: 12px 4px;
  font-size: 15px;
  text-decoration: none;
  color: var(--ink-soft);
  border-bottom: 1px solid var(--line-on-paper);
}
.navbar--open .navbar__mobile { display: flex; }

/* ============================== BUTTONS ============================== */

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 22px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}
.btn--brass { background: var(--brass); color: var(--navy-deep); border-color: var(--brass); }
.btn--brass:hover { background: var(--brass-light); border-color: var(--brass-light); }
.btn--outline-navy { background: transparent; color: var(--ink); border-color: var(--ink); }
.btn--outline-navy:hover { background: var(--ink); color: var(--paper); }
.btn--outline-paper { background: transparent; color: var(--paper); border-color: var(--line-on-navy); }
.btn--outline-paper:hover { background: var(--paper); color: var(--navy-deep); border-color: var(--paper); }
.btn--sm { padding: 10px 16px; font-size: 11.5px; }

/* ============================== HERO (home) ============================== */

.hero {
  position: relative;
  background: var(--navy-deep);
  color: var(--paper);
  overflow: hidden;
  padding: 96px 0 64px;
}
.hero::before {
  content: "";
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--line-on-navy) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-on-navy) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.35;
  pointer-events: none;
}
.hero__inner { position: relative; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
.hero__eyebrow-row { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.hero__eyebrow-row .rule { width: 40px; height: 1px; background: var(--brass); }
.hero h1 { font-family: var(--font-display); font-weight: 500; font-size: clamp(30px, 4.4vw, 54px); line-height: 1.1; margin: 0 0 22px; letter-spacing: -0.01em; }
.hero h1 em { font-style: italic; color: var(--brass-light); }
.hero p.lede { font-size: 17px; line-height: 1.65; color: rgba(242, 237, 224, 0.78); max-width: 46ch; margin: 0 0 30px; }
.hero__pillars { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.03em; color: rgba(242, 237, 224, 0.55); margin: 0 0 34px; display: flex; flex-wrap: wrap; gap: 6px 0; }
.hero__pillars span:not(:last-child)::after { content: "/"; margin: 0 10px; color: var(--brass); }
.hero__ctas { display: flex; gap: 14px; flex-wrap: wrap; }

.chart { position: relative; aspect-ratio: 4 / 5; border: 1px solid var(--line-on-navy); background: linear-gradient(160deg, rgba(242, 237, 224, 0.04), transparent 60%); width: 100%; max-width: 420px; margin: 0 auto; }
.chart__coord { position: absolute; top: 14px; left: 16px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.08em; color: rgba(242, 237, 224, 0.4); }
.chart__coord--br { top: auto; left: auto; bottom: 14px; right: 16px; }
.chart svg { width: 100%; height: 100%; }
.chart__waypoint-label { position: absolute; font-family: var(--font-mono); font-size: 10px; color: var(--brass-light); letter-spacing: 0.03em; white-space: nowrap; }

/* ============================== INNER-PAGE HERO ============================== */

.page-hero { background: var(--navy-deep); color: var(--paper); padding: 68px 0 52px; position: relative; overflow: hidden; }
.page-hero::before {
  content: "";
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--line-on-navy) 1px, transparent 1px), linear-gradient(90deg, var(--line-on-navy) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.25;
  pointer-events: none;
}
.page-hero__inner { position: relative; }
.page-hero .crumb { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.06em; color: rgba(242, 237, 224, 0.5); margin-bottom: 16px; }
.page-hero .crumb a { text-decoration: none; color: rgba(242, 237, 224, 0.5); }
.page-hero .crumb a:hover { color: var(--brass-light); }
.page-hero h1 { font-family: var(--font-display); font-weight: 500; font-size: clamp(28px, 4vw, 44px); margin: 0 0 14px; letter-spacing: -0.01em; }
.page-hero p { font-size: 15.5px; color: rgba(242, 237, 224, 0.75); max-width: 62ch; margin: 0; line-height: 1.6; }

/* ============================== SECTION SCAFFOLDING ============================== */

section { padding: 88px 0; }
.section--tight { padding: 64px 0; }
.section--paper { background: var(--paper); }
.section--dim { background: var(--paper-dim); }
.section--navy { background: var(--navy-deep); color: var(--paper); }

.section-head { max-width: 640px; margin-bottom: 48px; }
.section-head h2 { font-family: var(--font-display); font-weight: 500; font-size: clamp(26px, 3.2vw, 36px); margin: 14px 0 16px; letter-spacing: -0.01em; }
.section-head p { font-size: 15.5px; line-height: 1.65; color: var(--ink-soft); margin: 0; }
.section--navy .section-head p { color: rgba(242, 237, 224, 0.72); }

/* ============================== WHY / TERM DRIFT ============================== */

.why { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.term-drift { display: flex; flex-wrap: wrap; gap: 10px; }
.term-drift span { font-family: var(--font-mono); font-size: 12px; padding: 8px 14px; border: 1px solid var(--line-on-paper); border-radius: 999px; color: var(--ink-soft); }
.why__copy p { font-size: 15.5px; line-height: 1.7; color: var(--ink-soft); margin: 0 0 18px; }
.why__copy strong { color: var(--ink); font-weight: 600; }

/* ============================== VISION / MISSION ============================== */

.vm { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line-on-navy); border: 1px solid var(--line-on-navy); }
.vm__panel { background: var(--navy-deep); padding: 44px; }
.vm__panel h3 { font-family: var(--font-display); font-weight: 500; font-size: 23px; margin: 16px 0 14px; }
.vm__panel p { font-size: 15px; line-height: 1.7; color: rgba(242, 237, 224, 0.72); margin: 0; }
.vm__index { font-family: var(--font-mono); font-size: 12px; color: var(--brass-light); letter-spacing: 0.08em; }

/* ============================== OFFER GRID ============================== */

.offer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line-on-paper); border: 1px solid var(--line-on-paper); }
.offer-card { background: var(--paper); padding: 34px 30px; }
.offer-card__num { font-family: var(--font-mono); font-size: 12px; color: var(--brass); letter-spacing: 0.08em; display: block; margin-bottom: 16px; }
.offer-card h3 { font-family: var(--font-display); font-weight: 500; font-size: 20px; margin: 0 0 10px; }
.offer-card p { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); margin: 0 0 18px; }
.offer-card ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 10px; }
.offer-card li { font-size: 12.5px; color: var(--ink-soft); font-family: var(--font-mono); }
.offer-card li::before { content: "\\00b7 "; color: var(--brass); }

/* ============================== BENEFITS ============================== */

.benefits { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.benefit-block__label { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brass); margin-bottom: 10px; display: block; }
.benefit-block h3 { font-family: var(--font-display); font-weight: 500; font-size: 23px; margin: 0 0 12px; }
.benefit-block > p { font-size: 14.5px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 20px; }
.benefit-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.benefit-list li { display: flex; align-items: baseline; gap: 10px; font-size: 14.5px; color: var(--ink); padding-bottom: 12px; border-bottom: 1px solid var(--line-on-paper); }
.benefit-list li::before { content: "\\2713"; color: var(--brass); font-family: var(--font-mono); font-size: 12px; }

/* ============================== STANDARDS / STAT GRID ============================== */

.standards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px 22px; }
.standard-item { border-top: 1px solid var(--line-on-paper); padding-top: 16px; }
.standard-item span { font-family: var(--font-mono); font-size: 11px; color: var(--brass); }
.standard-item p { margin: 8px 0 0; font-size: 14px; color: var(--ink); }

.stat-row { display: flex; gap: 44px; flex-wrap: wrap; margin-top: 6px; }
.stat-row div { display: flex; flex-direction: column; gap: 4px; }
.stat-row strong { font-family: var(--font-display); font-size: 30px; color: var(--brass); font-weight: 500; }
.stat-row span { font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.06em; }

/* ============================== LINK GRID (directory / hub style pages) ============================== */

.link-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line-on-paper); border: 1px solid var(--line-on-paper); }
.link-card { background: var(--paper); padding: 28px; text-decoration: none; color: var(--ink); display: flex; flex-direction: column; gap: 8px; transition: background 0.15s ease; }
.link-card:hover { background: var(--paper-dim); }
.link-card .tag { font-family: var(--font-mono); font-size: 11px; color: var(--brass); }
.link-card h3 { font-family: var(--font-display); font-weight: 500; font-size: 18.5px; margin: 0; }
.link-card p { font-size: 13.5px; color: var(--ink-soft); margin: 0; line-height: 1.5; }

/* ============================== PROCESS STEPS ============================== */

.process-steps { list-style: none; margin: 0; padding: 0; counter-reset: step; }
.process-steps li { display: grid; grid-template-columns: 56px 1fr; gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--line-on-paper); }
.process-steps li:first-child { border-top: 1px solid var(--line-on-paper); }
.process-steps span.num { counter-increment: step; font-family: var(--font-mono); color: var(--brass); font-size: 19px; }
.process-steps span.num::before { content: counter(step, decimal-leading-zero); }
.process-steps h4 { margin: 0 0 6px; font-family: var(--font-display); font-weight: 500; font-size: 16.5px; }
.process-steps p { margin: 0; font-size: 14px; color: var(--ink-soft); line-height: 1.55; }

/* ============================== FORMS ============================== */

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 760px; }
.form-grid .full { grid-column: 1 / -1; }
.field label { display: block; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px; }
.field input, .field select, .field textarea {
  width: 100%;
  border: 1px solid var(--line-on-paper);
  background: var(--white);
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 14.5px;
  border-radius: var(--radius);
  color: var(--ink);
}
.field textarea { resize: vertical; min-height: 120px; }
.field input:focus, .field textarea:focus, .field select:focus { outline: 2px solid var(--brass); outline-offset: 2px; border-color: var(--brass); }

.verify-box { max-width: 560px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line-on-paper); padding: 40px; text-align: center; }
.verify-box .field { text-align: left; margin-bottom: 18px; }

/* ============================== CTA BAND ============================== */

.cta-band { background: var(--brass); color: var(--navy-deep); padding: 60px 0; }
.cta-band__inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.cta-band h2 { font-family: var(--font-display); font-weight: 500; font-size: clamp(22px, 3vw, 30px); margin: 0; max-width: 480px; }
.cta-band .btn--outline-navy:hover { background: var(--navy-deep); color: var(--paper); border-color: var(--navy-deep); }

/* ============================== FOOTER ============================== */

.footer { background: var(--navy-deep); color: rgba(242, 237, 224, 0.6); padding: 68px 0 32px; }
.footer__top { display: grid; grid-template-columns: 1.4fr repeat(4, 1fr); gap: 28px; padding-bottom: 44px; border-bottom: 1px solid var(--line-on-navy); }
.footer__brand { display: flex; flex-direction: column; gap: 14px; }
.footer__brand strong { font-family: var(--font-display); font-size: 19px; color: var(--paper); }
.footer__brand p { font-size: 13.5px; line-height: 1.6; max-width: 28ch; margin: 0; }
.footer__col h4 { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brass-light); margin: 0 0 16px; }
.footer__col ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.footer__col a { text-decoration: none; font-size: 13.5px; color: rgba(242, 237, 224, 0.62); }
.footer__col a:hover { color: var(--paper); }
.footer__bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 26px; font-family: var(--font-mono); font-size: 11px; color: rgba(242, 237, 224, 0.4); flex-wrap: wrap; gap: 12px; }

/* ==========================================================================
   RESPONSIVE
   Breakpoints: 1440 (large desktop) / 1200 (small desktop) / 1080 (nav
   tightening) / 960 (tablet landscape) / 860 (nav collapse) / 640 (tablet
   portrait / large phone) / 480 (phone) / 360 (small phone)
   ========================================================================== */

@media (min-width: 1440px) {
  .container { max-width: 1280px; }
  .hero h1 { font-size: 58px; }
}

@media (max-width: 1200px) {
  .container { padding: 0 28px; }
  .offer-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1080px) {
  .navbar__links { gap: 16px; }
  .navbar__links a { font-size: 13.2px; }
  .hero__inner { gap: 40px; }
}

@media (max-width: 960px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__inner > div:first-child { order: 1; }
  .chart { order: 2; max-width: 380px; }
  .why, .vm, .benefits { grid-template-columns: 1fr; }
  .why { gap: 36px; }
  .offer-grid, .link-grid { grid-template-columns: 1fr 1fr; }
  .standards { grid-template-columns: repeat(2, 1fr); }
  .footer__top { grid-template-columns: 1fr 1fr; gap: 32px 24px; }
  .form-grid { grid-template-columns: 1fr; }
  .vm__panel { padding: 36px; }
}

@media (max-width: 860px) {
  .navbar__links { display: none; }
  .navbar__actions .btn--sm.btn--outline-navy { display: none; }
  .navbar__toggle { display: flex; }
  .navbar--open .navbar__toggle span { background: transparent; }
  .navbar--open .navbar__toggle span::before { transform: rotate(45deg) translate(4px, 4px); }
  .navbar--open .navbar__toggle span::after { transform: rotate(-45deg) translate(4px, -4px); }
  section { padding: 72px 0; }
}

@media (max-width: 640px) {
  .container { padding: 0 20px; }
  section { padding: 56px 0; }
  .hero { padding: 64px 0 44px; }
  .page-hero { padding: 52px 0 40px; }
  .hero h1 { font-size: 30px; }
  .hero p.lede { font-size: 15.5px; }
  .offer-grid, .link-grid, .standards { grid-template-columns: 1fr; }
  .footer__top { grid-template-columns: 1fr; gap: 28px; }
  .cta-band__inner { flex-direction: column; align-items: flex-start; }
  .cta-band h2 { font-size: 22px; }
  .stat-row { gap: 28px; }
  .navbar__wordmark span { display: none; }
  .process-steps li { grid-template-columns: 40px 1fr; }
  .vm__panel { padding: 28px; }
  .offer-card, .link-card { padding: 26px 22px; }
  .hero__ctas, .hero__ctas .btn { width: 100%; }
  .hero__ctas { flex-direction: column; }
}

@media (max-width: 480px) {
  .navbar__inner { height: 66px; }
  .navbar__crest { width: 28px; height: 28px; }
  .navbar__wordmark strong { font-size: 16.5px; }
  .navbar__actions { gap: 8px; }
  .btn--sm { padding: 9px 12px; font-size: 10.5px; }
  .hero__eyebrow-row .eyebrow { font-size: 10.5px; letter-spacing: 0.1em; }
  .hero h1 { font-size: 26px; }
  .section-head h2 { font-size: 23px; }
  .term-drift span { font-size: 11px; padding: 7px 12px; }
  .chart { aspect-ratio: 1 / 1.05; max-width: 320px; }
  .chart__waypoint-label { font-size: 9px; }
  .stat-row { flex-direction: column; gap: 18px; }
  .verify-box { padding: 28px 22px; }
}

@media (max-width: 360px) {
  .container { padding: 0 16px; }
  .navbar__actions .btn--brass.btn--sm { padding: 8px 10px; font-size: 9.5px; }
  .hero h1 { font-size: 23px; }
  .hero__pillars { font-size: 10.5px; }
  .offer-card, .link-card, .vm__panel { padding: 22px 18px; }
}
`;