import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";

const blank = { name: "", email: "", organisation: "", subject: "General enquiry", message: "" };
const subjects = ["General enquiry", "Professional Membership", "Accreditation", "Certifications", "Directory", "Certificate Verification", "Support"];
export default function Contact() {
  const { hash } = useLocation();
  const [form, setForm] = useState({...blank,subject:""});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const subject = form.subject || (hash === "#become-accredited" ? "Accreditation" : hash === "#support" ? "Support" : "General enquiry");
  const chooseSubject = subject => {setForm(prev=>({...prev,subject})); document.getElementById("enquiry")?.scrollIntoView({behavior:"smooth",block:"start"});};
  async function submit(e){
    e.preventDefault(); setLoading(true); setStatus("");
    try { await api.submitEnquiry({...form,subject}); setStatus("Demo submitted locally. A connected MCPDC backend is required to deliver enquiries."); setForm({...blank,subject:""}); }
    catch { setStatus("Unable to send the enquiry. Please try again."); }
    finally { setLoading(false); }
  }
  return <main className="approved-page real-page">
    <PageHero eyebrow="Contact" title="Get in touch with MCPDC" intro="Enquiries about maritime professional development, accreditation, membership, certification, directory records and support." />
    <section className="approved-section section--white" id="contact-us"><div className="shell real-two-column"><div><p className="eyebrow">Contact MCPDC</p><h2>Find the right team for your enquiry</h2><p>MCPDC welcomes questions from maritime professionals, institutions and organisations interested in continuing professional development.</p><p>Use the single enquiry form below and select the topic that best matches your request.</p><Link className="btn btn--red" to="/contact#enquiry">Send an enquiry <Icon name="arrow" size={16}/></Link></div><div className="real-soft-panel"><h3>We can help with</h3><ul>{subjects.slice(1).map(subject=><li key={subject}>{subject}</li>)}</ul></div></div></section>
    <section className="approved-section section--mist" id="enquiry"><div className="shell real-two-column real-align-start"><div><p className="eyebrow">Enquiry Form</p><h2>Send your message</h2><p>All contact requests start with one form. Selecting an enquiry type helps route your message to the correct team when the website is connected to the live service.</p></div>
      <form className="approved-form" onSubmit={submit}><h3>Contact enquiry</h3><p>Tell us how we can help.</p><div className="approved-form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name"/></label><label>Email address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="name@example.com"/></label></div><label>Organisation (optional)<input value={form.organisation} onChange={e=>setForm({...form,organisation:e.target.value})} placeholder="Company or institution"/></label><label>Enquiry type<select value={subject} onChange={e=>setForm({...form,subject:e.target.value})}>{subjects.map(subject=><option key={subject}>{subject}</option>)}</select></label><label>Your message<textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Please share a few details"/></label><div className="approved-form-actions"><button className="btn btn--red" disabled={loading} type="submit">{loading?"Submitting…":"Send enquiry"} <Icon name="arrow" size={16}/></button><small>Live message delivery requires a backend integration.</small></div>{status && <p role="status" className="real-form-status">{status}</p>}</form>
    </div></section>
    <section className="approved-section section--white" id="become-accredited"><div className="shell real-two-column"><div><p className="eyebrow">Become an Accredited Institution</p><h2>Interested in institutional recognition?</h2><p>Maritime academies, universities, training providers and other organisations can learn about institutional membership or course accreditation.</p><Link className="approved-inline-link" to="/accreditation#institutional-membership">Learn about accreditation <Icon name="arrow" size={16}/></Link></div><div className="real-soft-panel"><h3>Speak to the accreditation team</h3><p>Use the main enquiry form and select Accreditation. There's no need to complete a second form here.</p><button className="real-text-button" type="button" onClick={()=>chooseSubject("Accreditation")}>Ask about accreditation <Icon name="arrow" size={16}/></button></div></div></section>
    <section className="approved-section section--mist" id="support"><div className="shell real-two-column"><div><p className="eyebrow">Support</p><h2>Already working with MCPDC?</h2><p>For application status, directory records, membership questions or certificate verification assistance, provide the details of your enquiry to the support team.</p></div><div className="real-soft-panel"><h3>How to get help</h3><p>Select Support in the shared enquiry form. Include relevant reference numbers, but do not include passwords or private account information.</p><button className="real-text-button" type="button" onClick={()=>chooseSubject("Support")}>Contact support <Icon name="arrow" size={16}/></button></div></div></section>
  </main>;
}
