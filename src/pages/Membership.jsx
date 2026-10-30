import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { professionalBenefits } from "../data/siteContent";
import { api } from "../lib/api";
import photo from "../assets/site/carousel-1.jpg";

const benefitDescriptions = [
  "A structured way to demonstrate your ongoing commitment to professional maritime competence.",
  "Maintain a record of professional learning and continuing development throughout the year.",
  "A convenient digital record of professional membership, subject to issuance by MCPDC.",
  "Bring your learning and competence development into one evolving professional record.",
  "Connect with peers across the international maritime professional community.",
  "Support career development with a focus on learning, skills and professional progress.",
  "Explore maritime learning materials and professional development guidance.",
  "Follow relevant industry developments and emerging areas of practice.",
];

const initial = { name: "", email: "", organisation: "", memberNumber: "", interest: "", message: "" };
function MembershipForm() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const mode = hash === "#renew" ? "renew" : "apply";
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setLoading(true); setStatus("");
    try {
      await api.submitApplication({
        applicationType: mode === "renew" ? "membership-renewal" : "membership",
        name: form.name, email: form.email, organisation: form.organisation,
        message: `${mode === "renew" ? `Membership number: ${form.memberNumber}\n` : ""}Area of interest: ${form.interest}\n${form.message}`,
      });
      setStatus("Demo submitted locally. Connect the MCPDC application API to receive real requests.");
      setForm(initial);
    } catch {
      setStatus("Unable to submit. Please try again.");
    } finally { setLoading(false); }
  }
  return <div className="real-membership-application" id="apply">
    <div className="real-tab-row" role="tablist" aria-label="Membership application type">
      <button type="button" role="tab" aria-selected={mode === "apply"} className={mode === "apply" ? "is-current" : ""} onClick={() => { navigate("/membership#apply"); setStatus(""); }}>Apply for Membership</button>
      <button type="button" role="tab" aria-selected={mode === "renew"} className={mode === "renew" ? "is-current" : ""} onClick={() => { navigate("/membership#renew"); setStatus(""); }}>Renew Membership</button>
    </div>
    <form className="approved-form real-membership-form" onSubmit={submit}>
      <p className="eyebrow">{mode === "renew" ? "For existing members" : "For prospective members"}</p>
      <h3>{mode === "renew" ? "Renew your membership" : "Start your membership enquiry"}</h3>
      <p>Share a few details and the MCPDC team can guide you through the next steps once the live application service is connected.</p>
      <div className="approved-form-row">
        <label>Full name<input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Your full name" /></label>
        <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="name@example.com" /></label>
      </div>
      <div className="approved-form-row">
        <label>Organisation (optional)<input value={form.organisation} onChange={e => setForm({...form,organisation:e.target.value})} placeholder="Employer or organisation" /></label>
        {mode === "renew" ? <label>Membership number<input required value={form.memberNumber} onChange={e => setForm({...form,memberNumber:e.target.value})} placeholder="Your membership reference" /></label> :
          <label>Area of interest<input value={form.interest} onChange={e => setForm({...form,interest:e.target.value})} placeholder="Role or professional interest" /></label>}
      </div>
      <label>Additional details<textarea rows={4} value={form.message} onChange={e => setForm({...form,message:e.target.value})} placeholder="Tell us how we can help" /></label>
      <div className="approved-form-actions"><button className="btn btn--red" type="submit" disabled={loading}>{loading ? "Submitting…" : "Send membership enquiry"} <Icon name="arrow" size={16}/></button><small>Demo interface: current API stores no applications.</small></div>
      {status && <p role="status" className="real-form-status">{status}</p>}
    </form>
  </div>;
}

export default function Membership() {
  return <main className="approved-page real-page">
    <PageHero eyebrow="Membership" title="Professional recognition throughout your maritime career" intro="Build a recognised record of professional development through continuing learning, competence and an active connection to the maritime community." />
    <section className="approved-section section--white" id="professional-membership"><div className="shell approved-about-intro">
      <div><p className="eyebrow">Professional Membership</p><h2>Keep developing. Keep progressing.</h2><p>Maritime roles evolve with technology, regulations and industry expectations. MCPDC Professional Membership provides a framework for professionals who want to demonstrate a commitment to lifelong learning.</p><p>Membership is designed to connect professional recognition, continuing development and practical learning resources over the course of a maritime career.</p><Link className="approved-inline-link" to="/membership#apply">Explore membership application <Icon name="arrow" size={16}/></Link></div>
      <div className="approved-photo-tile real-photo" style={{ backgroundImage: `linear-gradient(0deg,rgba(3,32,56,.78),transparent 75%),url(${photo})` }} role="img" aria-label="Maritime professional learning"><span>PROFESSIONAL DEVELOPMENT<br/><strong>Supporting a lifetime of maritime learning.</strong></span></div>
    </div></section>
    <section className="approved-section section--mist" id="categories"><div className="shell real-two-column"><div><p className="eyebrow">Membership Categories</p><h2>A membership pathway for maritime professionals</h2><p>MCPDC's membership structure is intended to reflect different stages of professional development, from building knowledge to demonstrating ongoing competence.</p></div><div className="real-soft-panel"><h3>Official categories &amp; eligibility</h3><p>Membership grade names, eligibility criteria and applicable fees have not yet been confirmed in the supplied project. These will be displayed here when formally approved.</p><Link className="approved-inline-link" to="/contact#enquiry">Ask about eligibility <Icon name="arrow" size={16}/></Link></div></div></section>
    <section className="approved-section section--white" id="benefits"><div className="shell"><div className="approved-section-heading"><div><p className="eyebrow">Membership Benefits</p><h2>Benefits that support a developing career</h2></div><p>A single view of the professional membership benefits currently listed in the MCPDC project.</p></div><div className="real-benefit-grid">{professionalBenefits.map((name,i)=><article key={name}><span className="approved-mini-rule"/><h3>{name}</h3><p>{benefitDescriptions[i]}</p></article>)}</div></div></section>
    <section className="approved-section section--mist" aria-label="Applications and renewals"><div className="shell real-two-column real-align-start"><div><p className="eyebrow">Applications &amp; Renewals</p><h2>Manage your membership enquiry in one place</h2><p>There is one form for both new applications and renewals. Choose the appropriate tab to show the relevant details.</p><div id="renew" className="real-anchor"/><p className="real-note">The live membership workflow, fees and payments will require a connected backend. The interface does not process payment or issue memberships.</p></div><MembershipForm /></div></section>
  </main>;
}
