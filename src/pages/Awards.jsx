import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";
import awardsPhoto from "../assets/site/carousel-3.jpg";

const initial = { nominee: "", role: "", organisation: "", nominator: "", email: "", reason: "" };
function NominationForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const update = key => e=>setForm(prev=>({...prev,[key]:e.target.value}));
  async function submit(e) {
    e.preventDefault(); setLoading(true);setStatus("");
    try {
      await api.submitAwardNomination(form);
      setStatus("Demo submission complete. Connect the live MCPDC nomination service before accepting official entries.");
      setForm(initial);
    } catch { setStatus("Unable to submit the nomination. Please try again."); }
    finally { setLoading(false); }
  }
  return <form className="approved-form real-award-form" onSubmit={submit}>
    <p className="eyebrow">Nomination enquiry</p><h3>Submit a nomination</h3><p>Enter the proposed nominee's details. Official categories, rules and submission dates must be confirmed before nominations go live.</p>
    <div className="approved-form-row"><label>Nominee name<input required value={form.nominee} onChange={update("nominee")} placeholder="Nominee's full name" /></label><label>Nominee role<input value={form.role} onChange={update("role")} placeholder="Maritime role or position" /></label></div>
    <label>Organisation<input value={form.organisation} onChange={update("organisation")} placeholder="Organisation or employer" /></label>
    <div className="approved-form-row"><label>Your name<input required value={form.nominator} onChange={update("nominator")} placeholder="Person making nomination" /></label><label>Your email<input required type="email" value={form.email} onChange={update("email")} placeholder="name@example.com" /></label></div>
    <label>Reason for nomination<textarea required rows={5} value={form.reason} onChange={update("reason")} placeholder="Describe the person's contribution" /></label>
    <div className="approved-form-actions"><button className="btn btn--red" disabled={loading} type="submit">{loading?"Submitting…":"Submit nomination enquiry"} <Icon name="arrow" size={16}/></button><small>Demonstration form. It does not create an official nomination.</small></div>
    {status && <p className="real-form-status" role="status">{status}</p>}
  </form>;
}
export default function Awards() {
  return <main className="approved-page real-page">
    <PageHero eyebrow="Annual Maritime Excellence Awards" title="Recognising excellence in the maritime community" intro="Celebrating contribution, professional learning and innovation across the maritime sector." />
    <section className="approved-section section--white" id="about"><div className="shell approved-about-intro"><div><p className="eyebrow">About the Awards</p><h2>Recognising contribution to maritime excellence</h2><p>The Annual Maritime Excellence Awards are part of MCPDC's wider commitment to professional competence, lifelong learning and excellence across the maritime sector.</p><p>This page will provide official awards information, categories, nominations and past recognition records as they become available.</p><Link className="approved-inline-link" to="/awards#nomination-process">Explore the nomination process <Icon name="arrow" size={16}/></Link></div><div className="approved-photo-tile real-photo" role="img" aria-label="Maritime vessel" style={{backgroundImage:`linear-gradient(0deg,rgba(3,32,56,.78),transparent 75%),url(${awardsPhoto})`}}><span>MARITIME EXCELLENCE<br/><strong>Recognising contribution and professional commitment.</strong></span></div></div></section>
    <section className="approved-section section--mist" id="categories"><div className="shell real-two-column"><div><p className="eyebrow">Award Categories</p><h2>Categories announced by MCPDC</h2><p>Awards categories should make it clear what achievements are being recognised and how nominations are assessed.</p><p>The supplied project does not include approved categories or judging criteria, so no award names or promises have been invented.</p></div><div className="real-soft-panel"><h3>Category information</h3><p>When confirmed, each category can show its eligibility criteria, nomination requirements and key dates here.</p></div></div></section>
    <section className="approved-section section--white" id="nomination-process"><div className="shell real-two-column real-align-start"><div><p className="eyebrow">Nomination Process</p><h2>A straightforward nomination enquiry</h2><p>The single form alongside this section collects the basic details needed to express interest in recognising an individual or organisation.</p><p>Official eligibility, deadlines and review stages must be published before launching a live nomination process.</p><div className="approved-notice"><strong>Preview functionality</strong><span>The current project API stores nothing. Sending this form cannot submit an official nomination.</span></div></div><NominationForm/></div></section>
    <section className="approved-section section--mist" id="previous-winners"><div className="shell real-two-column"><div><p className="eyebrow">Previous Winners</p><h2>Celebrating previous achievements</h2><p>Once validated award records are supplied, past award recipients can be displayed by year and category.</p></div><div className="real-soft-panel"><h3>Official winners archive</h3><p>No verified winners have been supplied in the current project. This area will remain unpopulated until records are approved.</p></div></div></section>
  </main>;
}
