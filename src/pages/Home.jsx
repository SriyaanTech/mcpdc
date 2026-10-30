import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Icon from "../components/Icon";
import organisationWorker from "../assets/site/organisation-worker-photo.png";
import professionalOfficer from "../assets/site/professional-officer-photo.png";
import { quickActions, overviewCards, organisationBenefits, professionalBenefits, standards } from "../data/siteContent";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <section className="quick-strip shell" aria-label="Quick access">
        {quickActions.map(([icon, title, text, to]) => (
          <Link to={to} className="quick-card" key={title}>
            <Icon name={icon} size={40} />
            <span><strong>{title}</strong><small>{text}</small></span>
            <Icon name="arrow" size={20} />
          </Link>
        ))}
      </section>

      <section className="section section--white">
        <div className="shell purpose-grid">
          <div className="purpose-intro">
            <p className="eyebrow">Trusted globally</p>
            <h2>Why MCPDC?</h2>
            <p>Professionals must continuously update their knowledge and competence beyond mandatory statutory training.</p>
            <p>MCPDC provides an internationally recognised framework that enables organisations and maritime professionals to demonstrate their commitment to excellence through structured Continuing Professional Development.</p>
            <Link className="btn btn--red" to="/about#why-choose-mcpdc">Learn More About Us <Icon name="arrow" size={17} /></Link>
          </div>
          <article className="purpose-card"><Icon name="globe" size={46} /><h3>Our Vision</h3><p>To become the world's most respected independent professional body for Maritime Continuing Professional Development.</p></article>
          <article className="purpose-card"><Icon name="target" size={46} /><h3>Our Mission</h3><p>To establish internationally recognised standards that promote continuous learning, professional competence, innovation, and excellence throughout the global maritime industry.</p></article>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell what-grid">
          <div className="what-intro">
            <p className="eyebrow">Our core activities</p>
            <h2>What We Do</h2>
            <p>We recognise institutions, accredit professional development programmes, certify learning excellence, and support maritime professionals throughout their careers.</p>
          </div>
          <div className="what-cards">
            {overviewCards.map((card) => (
              <Link to={card.to} className="service-card" key={card.title}>
                <Icon name={card.icon} size={44} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span>Find Out More <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="benefit-split">
        <BenefitPanel image={organisationWorker} title="Benefits for Organisations" items={organisationBenefits} cta="Institutional Membership" to="/accreditation#institutional-membership" />
        <BenefitPanel image={professionalOfficer} title="Benefits for Maritime Professionals" items={professionalBenefits} cta="Professional Membership" to="/membership#professional-membership" />
      </section>

      <section className="standards-section section section--white">
        <div className="shell standards-layout">
          <div className="standards-copy">
            <p className="eyebrow">Setting higher standards</p>
            <h2>Maritime Learning Standards</h2>
            <p>MCPDC has developed quality standards covering the full learning lifecycle. These standards provide confidence to employers, regulators, and learners.</p>
          </div>
          <div className="standards-grid">
            {standards.map((label, i) => (
              <div className="standard-item" key={label}>
                <Icon name={i % 4 === 0 ? "book" : i % 4 === 1 ? "target" : i % 4 === 2 ? "shield" : "gear"} size={36} />
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BenefitPanel({ image, title, items, cta, to }) {
  return (
    <article className="benefit-panel" style={{ backgroundImage: `linear-gradient(90deg, rgba(3,28,50,.94), rgba(3,35,61,.72)), url(${image})` }}>
      <div className="benefit-panel__inner">
        <h2>{title}</h2>
        <ul>{items.slice(0, 5).map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
        <Link className="btn btn--outline-light" to={to}>{cta} <Icon name="arrow" size={16} /></Link>
      </div>
    </article>
  );
}
