import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

export default function SectionIndex({ links, title = "On this page" }) {
  const { pathname, hash } = useLocation();

  return (
    <nav className="section-index" aria-label="Page sections">
      <div className="shell section-index__inner">
        <span className="section-index__label">{title}</span>
        <div className="section-index__links">
          {links.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className={`section-index__link${hash && to.endsWith(hash) && to.startsWith(pathname + "#") ? " is-current" : ""}`}
              onClick={() => {
                // Repeated clicks on the same hash do not change router location.
                if (`${pathname}${hash}` === to) {
                  const id = to.split("#")[1];
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {label} <Icon name="arrow" size={13} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
