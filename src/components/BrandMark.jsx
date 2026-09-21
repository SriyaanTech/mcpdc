import { Link } from "react-router-dom";

export default function BrandMark({ compact = false }) {
  return (
    <Link to="/" className={`brand ${compact ? "brand--compact" : ""}`} aria-label="MCPDC home">
      <svg className="brand__seal" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth=".8" opacity=".55" />
        <path d="M32 3 36 26 61 32 36 38 32 61 28 38 3 32 28 26z" fill="currentColor" opacity=".95" />
        <circle cx="32" cy="32" r="5.5" fill="#fff" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="brand__type">
        <strong>MCPDC</strong>
        {!compact && <span>Maritime Continuing<br />Professional Development Council</span>}
      </span>
    </Link>
  );
}
