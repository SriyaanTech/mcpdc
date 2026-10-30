import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark";
import Icon from "./Icon";
import { mainNav } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const followSection = (destination) => {
    setOpen(false);
    if (`${location.pathname}${location.hash}` === destination && destination.includes("#")) {
      const id = destination.slice(destination.indexOf("#") + 1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span>Independent · International · Maritime CPD</span>
          <span>Global Standards. Professional Recognition. Lifelong Learning.</span>
        </div>
      </div>
      <div className="main-nav-wrap">
        <div className="shell main-nav">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainNav.map((item) => (
              <div className="nav-item" key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map(([label, to]) => <Link key={to} to={to} onClick={() => followSection(to)}>{label}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="member-login" to="/membership">Member Area</Link>
            <Link className="btn btn--red btn--small" to="/membership#apply">Join MCPDC <Icon name="arrow" size={16} /></Link>
            <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav shell" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <div key={item.to} className="mobile-nav__group">
                <NavLink to={item.to} end={item.to === "/"} onClick={() => setOpen(false)}>{item.label}</NavLink>
                {item.children && <div className="mobile-nav__children">{item.children.map(([label, to]) => <Link key={to} to={to} onClick={() => followSection(to)}>{label}</Link>)}</div>}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
