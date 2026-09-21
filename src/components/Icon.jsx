const icons = {
  institution: <><path d="M3 9h18"/><path d="M5 9V7l7-4 7 4v2"/><path d="M6 9v9M10 9v9M14 9v9M18 9v9"/><path d="M4 18h16v3H4z"/></>,
  course: <><path d="M5 3h11a2 2 0 0 1 2 2v13"/><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h13"/><path d="M8 7h6M8 10h6M8 13h4"/><path d="m16.5 18.5 2 2 3.5-4"/></>,
  members: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6"/><path d="M15 15c3.5 0 6 1.8 6 5"/></>,
  shield: <><path d="M12 3 20 6v6c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  recognition: <><circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/><path d="m10 9 1.3 1.3L14 7.5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
  target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m14 10 6-6M16 4h4v4"/></>,
  book: <><path d="M3 5a3 3 0 0 1 3-2h5v16H6a3 3 0 0 0-3 2z"/><path d="M21 5a3 3 0 0 0-3-2h-5v16h5a3 3 0 0 1 3 2z"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.5-2.4 1a8 8 0 0 0-1.8-1L14.4 3h-4.8l-.3 2.9a8 8 0 0 0-1.8 1l-2.4-1-2 3.5L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.5 2.4-1a8 8 0 0 0 1.8 1l.3 2.9h4.8l.3-2.9a8 8 0 0 0 1.8-1l2.4 1 2-3.5-2-1.6c.1-.3.1-.7.1-1z"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  arrow: <><path d="M5 12h14"/><path d="m15 8 4 4-4 4"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name] || icons.arrow}
    </svg>
  );
}
