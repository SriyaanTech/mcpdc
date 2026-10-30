import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import photo from "../assets/site/carousel-2.jpg";

const preparation = [
  ["Relevant experience", "Role-specific professional background may form part of the eligibility review."],
  ["Learning evidence", "Records of learning, development and applicable training can support a review."],
  ["Competence evidence", "Professional achievements and practical learning may be considered where relevant."],
  ["Programme requirements", "Any final eligibility standards will be confirmed separately for each approved programme."],
];
const steps = [
  ["Choose a programme", "Review published programme requirements when available."],
  ["Prepare evidence", "Collect the relevant learning and experience records."],
  ["Competence assessment", "Evidence is considered under the applicable, confirmed assessment criteria."],
  ["Outcome & recognition", "Results and any certification decision are communicated through the official process."],
];
export default function Certifications() {
  return <main className="approved-page real-page">
    <PageHero eyebrow="Professional Certifications" title="Recognising competence through continuous professional development" intro="Explore MCPDC's certification framework, eligibility considerations, assessment pathways and ongoing professional learning." />
    <section id="programs" className="approved-section section--white"><div className="shell approved-about-intro"><div><p className="eyebrow">Certification Programs</p><h2>Professional development with a focus on competence</h2><p>MCPDC supports the recognition of professional development through structured certification pathways. These pathways are intended to complement maritime learning, documented competence and ongoing skills development.</p><p>Programme names, awards and the applicable requirements will be published only once approved by MCPDC.</p><Link className="approved-inline-link" to="/contact#enquiry">Enquire about certification <Icon name="arrow" size={16}/></Link></div><div className="approved-photo-tile real-photo" role="img" aria-label="Maritime training vessel" style={{backgroundImage:`linear-gradient(0deg,rgba(3,32,56,.75),transparent 75%),url(${photo})`}}><span>PROFESSIONAL COMPETENCE<br/><strong>Learning that supports performance and progress.</strong></span></div></div></section>
    <section id="eligibility" className="approved-section section--mist"><div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">Eligibility Criteria</p><h2>Preparing for professional recognition</h2></div><p>Eligibility depends on each approved programme. The following are useful areas to consider before making an enquiry.</p></div><div className="real-card-grid">{preparation.map(([title,body])=><article key={title}><span className="approved-mini-rule"/><h3>{title}</h3><p>{body}</p></article>)}</div><div className="approved-notice"><strong>Criteria awaiting approval</strong><span>No programme-specific eligibility thresholds or certification grades are assumed here.</span></div></div></section>
    <section id="assessment" className="approved-section section--white"><div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">Assessment Process</p><h2>A clear pathway from learning to recognition</h2></div><p>A proposed overview of how certification could be approached. The approved process and assessment methods will be published separately.</p></div><div className="approved-stages">{steps.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div className="approved-notice"><strong>Illustrative only</strong><span>This sequence is not a published assessment policy or a guarantee of certification.</span></div></div></section>
    <section id="renewal" className="approved-section section--mist"><div className="shell real-two-column"><div><p className="eyebrow">Certification Renewal</p><h2>Keep your professional competence current</h2><p>Continuing professional development helps maritime professionals remain aware of new practices, evolving standards and technology.</p><p>Renewal periods, evidence requirements and fees will depend on the individual certification programme and will be confirmed by MCPDC.</p><Link className="btn btn--red" to="/contact#enquiry">Ask about renewal <Icon name="arrow" size={16}/></Link></div><div className="real-soft-panel"><h3>Before requesting renewal</h3><ul><li>Keep a record of completed professional learning.</li><li>Review relevant programme conditions when published.</li><li>Have your existing certificate reference available.</li><li>Contact MCPDC for programme-specific guidance.</li></ul></div></div></section>
  </main>;
}
