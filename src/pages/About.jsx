import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import marinerPhoto from "../assets/site/organisation-worker-photo.png";
import { standards, disruptors } from "../data/siteContent";

const commitments = ["Institutional Recognition", "Course Accreditation", "Competency Recognition", "Professional Development"];

export default function About() {
  return (
    <main className="approved-page about-approved">
      <PageHero eyebrow="About MCPDC" title="An independent professional body for Maritime Continuing Professional Development" intro="The Maritime Continuing Professional Development Council (MCPDC) supports professional competence, lifelong learning and quality assurance across the global maritime industry." />

      <section id="about-us" className="approved-section section--white">
        <div className="shell">
          <div className="approved-about-intro">
            <div>
              <p className="eyebrow">About Us</p>
              <h2>Advancing standards. Supporting maritime professionals.</h2>
              <p>The Maritime Continuing Professional Development Council (MCPDC) is an independent international organisation dedicated to promoting professional competence, lifelong learning, and quality assurance across the global maritime industry.</p>
              <p>Our work supports maritime professionals beyond mandatory statutory training by promoting structured continuing professional development.</p>
              <p>We recognise institutions, accredit professional development programmes, certify learning excellence, and support maritime professionals throughout their careers.</p>
            </div>
            <div className="approved-photo-tile" style={{ backgroundImage: `linear-gradient(0deg, rgba(3,32,56,.78), transparent 75%), url(${marinerPhoto})` }} role="img" aria-label="Maritime professional at work">
              <span>OUR FOCUS<br /><strong>Competence · Recognition · Quality Learning</strong></span>
            </div>
          </div>
          <div className="approved-commitments" aria-label="Core activities">
            {commitments.map((text) => <span key={text}>{text}</span>)}
          </div>
        </div>
      </section>

      <section id="vision-mission" className="approved-section section--mist">
        <div className="shell">
          <div className="approved-section-heading"><div><p className="eyebrow">Our direction</p><h2>Vision &amp; Mission</h2></div><p>Our purpose is centred on internationally recognised standards, professional competence and a continuing culture of learning.</p></div>
          <div className="approved-twocards">
            <article className="approved-card"><p className="approved-card-label">Our Vision</p><h3>A globally respected professional body.</h3><p>To become the world's most respected independent professional body for Maritime Continuing Professional Development.</p></article>
            <article className="approved-card approved-card--navy"><p className="approved-card-label">Our Mission</p><h3>Continuous learning. Lasting excellence.</h3><p>To establish internationally recognised standards that promote continuous learning, professional competence, innovation, and excellence throughout the global maritime industry.</p></article>
          </div>
        </div>
      </section>

      <section id="governance" className="approved-section section--white">
        <div className="shell approved-governance">
          <div><p className="eyebrow">Accountability</p><h2>Governance</h2><p>Council leadership, committee responsibilities and approved governance documents will be presented here in one clear, accessible location.</p><p>The supplied project does not yet include approved governance details. This section is reserved for verified information rather than unconfirmed names or policies.</p></div>
          <div className="approved-governance-panel"><p className="eyebrow">Information for publication</p>{["Council Leadership", "Committees & Oversight", "Responsibilities & Documents"].map(label => <div key={label}>{label}</div>)}<p>Content will be added after the official details are provided and approved.</p></div>
        </div>
      </section>

      <section id="standards-policies" className="approved-section section--mist">
        <div className="shell">
          <div className="approved-section-heading"><div><p className="eyebrow">Quality framework</p><h2>Standards &amp; Policies</h2></div><p>MCPDC has developed quality standards covering key elements of maritime education, assessment and continuous improvement.</p></div>
          <div className="approved-standards">{standards.map((standard) => <div key={standard}><span className="approved-mini-rule" /><strong>{standard}</strong></div>)}</div>
          <div className="approved-notice"><strong>Policy documents</strong><span>Approved policy publications can be linked here when supplied. No unpublished policies are represented as final.</span></div>
        </div>
      </section>

      <section id="why-choose-mcpdc" className="approved-section approved-dark">
        <div className="shell approved-why">
          <div><p className="eyebrow eyebrow--light">Why MCPDC</p><h2>Built for a changing maritime industry.</h2><p>The maritime industry is changing rapidly. Professionals must continuously update their knowledge and competence beyond mandatory statutory training.</p><p>MCPDC provides an internationally recognised framework that enables organisations and maritime professionals to demonstrate their commitment to excellence through structured Continuing Professional Development.</p><Link className="btn btn--red" to="/accreditation">Explore Accreditation <Icon name="arrow" size={16}/></Link></div>
          <div className="approved-dark-panel"><p className="eyebrow eyebrow--light">Key areas of industry change</p><div>{disruptors.map(x => <span key={x}>{x}</span>)}</div></div>
        </div>
      </section>
    </main>
  );
}
