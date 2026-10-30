import { Link } from "react-router-dom";
import oceanBannerPhoto from "../assets/site/carousel-1.jpg";

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero">
      <div className="page-hero__image" style={{ backgroundImage: `url(${oceanBannerPhoto})` }} />
      <div className="shell page-hero__content">
        <div>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </div>
        <div className="page-hero__crumbs"><Link to="/">Home</Link><span>/</span><span>{eyebrow}</span></div>
      </div>
    </section>
  );
}
