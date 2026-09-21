import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", subject: "General enquiry", message: "" });
  const [status, setStatus] = useState("");
  const submit = async (event) => {
    event.preventDefault(); setStatus("Submitting…");
    try { await api.submitEnquiry(form); setStatus("Thank you. Your enquiry has been received."); setForm({ name: "", email: "", organisation: "", subject: "General enquiry", message: "" }); }
    catch { setStatus("Something went wrong submitting your enquiry. Please try again."); }
  };
  return (
    <main>
      <PageHero eyebrow="Contact" title="Contact MCPDC" intro="Contact Us · Enquiry Form · Become an Accredited Institution · Support" />
      <section className="section section--white">
        <div className="shell contact-layout">
          <div className="contact-copy"><p className="eyebrow">Get in touch</p><h2>How can MCPDC help?</h2><p>Use the enquiry form for membership, accreditation, professional certification, directory, verification and general support questions.</p></div>
          <form className="site-form" onSubmit={submit}>
            <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            <label>Organisation<input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} /></label>
            <label>Enquiry type<select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}><option>General enquiry</option><option>Membership</option><option>Accreditation</option><option>Certification</option><option>Directory</option><option>Certificate Verification</option><option>Support</option></select></label>
            <label className="full">Message<textarea required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
            <button className="btn btn--red" type="submit">Send Enquiry <Icon name="arrow" size={16} /></button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
