import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router updates the URL without the browser doing a normal anchor jump.
// Scroll once the destination page has rendered, including on direct URL loads.
export default function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      const id = decodeURIComponent(hash.slice(1));
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
