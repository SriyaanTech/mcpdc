import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";

export default function OverviewPage({ data }) {
  return (
    <main>
      <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <section className="section section--white">
        <div className="shell overview-layout">
          <div className="prose-card"><p>{data.body}</p></div>
          <div className="overview-links">
            {data.links.map(([label, to], index) => (
              <Link to={to} key={to} className="overview-link-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <Icon name="arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
