import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-banner">
        <div className="shell footer-banner__inner">
          <p>Advancing competence across the global maritime industry.</p>
          <Link to="/membership#apply" className="btn btn--red">Start your membership application →</Link>
        </div>
      </div>
      <div className="shell footer-main">
        <div>
          <BrandMark />
          <p className="footer-note">An independent international organisation dedicated to professional competence, lifelong learning and quality assurance across the global maritime industry.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/accreditation">Accreditation</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/knowledge-hub">Knowledge Hub</Link>
          <Link to="/awards">Awards</Link>
          <Link to="/verify-certificate">Certificate Verification</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} Maritime Continuing Professional Development Council (MCPDC).</span>
        <span>Independent professional membership and accreditation organisation.</span>
      </div>
    </footer>
  );
}
