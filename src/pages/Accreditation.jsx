import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";
import marinerPhoto from "../assets/site/organisation-worker-photo.png";
import { standards } from "../data/siteContent";

const organisations = ["Maritime Academies", "Universities", "Training Centres", "Shipping Companies", "Marine Consultants", "Port Organisations", "Marine Survey Firms", "Maritime Technology Companies"];
const coursePillars = [
  ["Learning design", "Well-structured programmes", "Course content, objectives and learning outcomes should support professional development in the maritime sector."],
  ["Delivery & assessment", "Learning that can be evaluated", "Instructor competence and assessment methods are considered alongside relevant digital and simulator-based delivery."],
  ["Quality & improvement", "Continual assurance", "The quality framework also looks at ongoing review and improvement of learning provision."],
];
const stages = [
  ["Choose an accreditation route", "Select institutional membership, course accreditation, or both."],
  ["Submit your application", "Provide organisation details and the relevant supporting documentation."],
  ["Quality review", "Applications are evaluated against the appropriate learning standards."],
  ["Outcome & listing", "Approved records can be published in the MCPDC directory."],
];
const standardExplanations = [
  "A coherent course structure with purposeful content.", "Clear learning objectives and expected achievements.",
  "Appropriate methods to assess learning.", "Suitable trainer knowledge and instructional capability.",
  "Consistent quality across online learning formats.", "Effective use of simulation where relevant.",
  "Processes that support reliable learning delivery.", "Regular review and improvement of learning outcomes."
];

function AccreditationEnquiry() {
  const [form, setForm] = useState({ interest: "", name: "", email: "", organisation: "", message: "" });
  const [status, setStatus] = useState("");
  const submit = async (event) => {
    event.preventDefault();
    setStatus("Submitting…");
    try {
      await api.submitApplication({ name: form.name, email: form.email, organisation: form.organisation, message: `Accreditation interest: ${form.interest}\n${form.message}`, applicationType: "accreditation" });
      setStatus("Thank you. Your enquiry has been received.");
      setForm({ interest: "", name: "", email: "", organisation: "", message: "" });
    } catch {
      setStatus("Unable to submit at the moment. Please try again later.");
    }
  };
  return (
    <form className="approved-form" onSubmit={submit}>
      <h3>Accreditation Enquiry</h3><p>Tell us what you would like to apply for. One form covers both accreditation routes.</p>
      <label>Accreditation interest<select required value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}><option value="">Select an option</option><option>Institutional Membership</option><option>Course Accreditation</option><option>Both</option></select></label>
      <div className="approved-form-row"><label>Your name<input required placeholder="Full name" value={form.name} onChange={e => setForm({...form,name:e.target.value})}/></label><label>Work email<input required type="email" placeholder="name@organisation.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})}/></label></div>
      <label>Organisation name<input required placeholder="Organisation / Institution" value={form.organisation} onChange={e => setForm({...form,organisation:e.target.value})}/></label>
      <label>How can we help?<textarea rows={4} placeholder="Briefly describe your organisation or course" value={form.message} onChange={e => setForm({...form,message:e.target.value})}/></label>
      <div className="approved-form-actions"><button className="btn btn--red" type="submit">Submit enquiry <Icon name="arrow" size={16}/></button><small>HTML form submission requires the project API to be available.</small></div>
      {status && <p role="status" className="approved-form-status">{status}</p>}
    </form>
  );
}

export default function Accreditation() {
  return (
    <main className="approved-page accreditation-approved">
      <PageHero eyebrow="Accreditation" title="Setting a higher standard for maritime learning" intro="Independent recognition for maritime organisations and professional development programmes committed to quality learning, clear standards and continual improvement." />
      <section className="approved-section section--white" id="institutional-membership">
        <div className="shell">
          <div className="approved-about-intro">
            <div><p className="eyebrow">For maritime organisations</p><h2>Institutional Membership</h2><p><strong>Recognition for organisations committed to quality maritime education, professional development and learning excellence.</strong></p><p>MCPDC's institutional recognition framework is intended for organisations that support structured continuing professional development. It provides a route to demonstrate commitment to sound learning practices and professional standards.</p><Link className="approved-inline-link" to="/accreditation#fees-application">Enquire about accreditation <Icon name="arrow" size={16}/></Link></div>
            <div className="approved-photo-tile" style={{ backgroundImage: `linear-gradient(0deg,rgba(3,32,56,.82),transparent 75%),url(${marinerPhoto})` }} role="img" aria-label="Maritime training professional"><span>INSTITUTIONAL RECOGNITION<br/><strong>Building confidence in professional maritime learning.</strong></span></div>
          </div>
          <div className="approved-eligible"><div><p className="eyebrow">Who can apply</p><small>Potential organisation types</small></div><div>{organisations.map(o => <span key={o}>{o}</span>)}</div></div>
        </div>
      </section>
      <section className="approved-section section--mist" id="course-accreditation">
        <div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">For learning programmes</p><h2>Course Accreditation</h2></div><p>Professional development programmes may be assessed under MCPDC's learning quality framework, with attention to educational outcomes, delivery and assurance.</p></div>
          <div className="approved-threecards">{coursePillars.map(([tag,title,body]) => <article key={tag}><span className="approved-mini-rule"/><p className="eyebrow">{tag}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <section className="approved-section section--white" id="process">
        <div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">From enquiry to recognition</p><h2>Accreditation Process</h2></div><p>One clear application journey, whether you are seeking institutional recognition or course accreditation.</p></div>
          <div className="approved-stages">{stages.map(([title,body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="approved-notice"><strong>Proposed process</strong><span>This illustrates the proposed application journey. Official assessment stages, requirements and decision timelines will be confirmed before publication.</span></div>
        </div>
      </section>
      <section className="approved-section section--mist" id="standards">
        <div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">The quality framework</p><h2>Accreditation Standards</h2></div><p>MCPDC's eight quality areas cover the design, delivery, assessment and ongoing improvement of professional maritime learning.</p></div>
          <div className="approved-accreditation-standards">{standards.map((label,i) => <article key={label}><span className="approved-standard-icon"><Icon name={i%4===0?"book":i%4===1?"target":i%4===2?"shield":"gear"} size={20}/></span><h3>{label}</h3><p>{standardExplanations[i]}</p></article>)}</div>
          <p className="approved-footnote">Detailed assessment requirements and policy documents will be linked once official versions are supplied.</p>
        </div>
      </section>
      <section className="approved-section section--white" id="fees-application">
        <div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">Get started</p><h2>Fees &amp; Application</h2></div><p>Submit a single enquiry for either type of accreditation. The final fee schedule has not yet been provided.</p></div>
          <div className="approved-application-grid"><aside><p className="eyebrow eyebrow--light">Fees &amp; eligibility</p><h3>Clear information before you apply.</h3><p>Accreditation fees and detailed submission requirements will be published here after MCPDC confirms the official schedule.</p><div><span>Institutional Membership</span><small>Fees to be confirmed</small></div><div><span>Course Accreditation</span><small>Fees to be confirmed</small></div><p className="approved-aside-note">No placeholder prices or unapproved fee amounts are displayed.</p></aside><AccreditationEnquiry/></div>
        </div>
      </section>
    </main>
  );
}
