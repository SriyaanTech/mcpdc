import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";

export default function DetailPage({ data }) {
  return (
    <main>
      <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.paragraphs?.[0]} />
      <section className="section section--white">
        <div className="shell detail-page">
          <div className="detail-prose">
            {data.paragraphs?.map((text, index) => <p key={index}>{text}</p>)}
            {data.sections?.map(([heading, text]) => <section key={heading} className="detail-block"><h2>{heading}</h2><p>{text}</p></section>)}
            {data.subheading && <h2>{data.subheading}</h2>}
            {data.list && <div className="detail-list">{data.list.map((item) => <div key={item}><Icon name="check" size={18} /><span>{item}</span></div>)}</div>}
          </div>
          <aside className="detail-aside">
            <p className="eyebrow">MCPDC</p>
            <h3>Global Standards.<br />Professional Recognition.<br />Lifelong Learning.</h3>
            <p>Advancing Competence Across the Global Maritime Industry.</p>
          </aside>
        </div>
        {data.formType && <ApplicationForm type={data.formType} />}
      </section>
    </main>
  );
}

export function ApplicationForm({ type, embedded = false }) {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });
  const [status, setStatus] = useState("");
  const submit = async (event) => {
    event.preventDefault();
    setStatus("Submitting…");
    try {
      if (type === "award") await api.submitAwardNomination({ ...form, category: "General" });
      else await api.submitApplication({ ...form, applicationType: type });
      setStatus("Thank you. Your submission has been received.");
      setForm({ name: "", email: "", organisation: "", message: "" });
    } catch {
      setStatus("Something went wrong submitting the form. Please try again.");
    }
  };
  return (
    <div className={embedded ? "form-section form-section--embedded" : "shell form-section"}>
      <div><p className="eyebrow">Online submission</p><h2>Submit your details</h2><p>Your submission is logged for council review.</p></div>
      <form className="site-form" onSubmit={submit}>
        <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label>Organisation<input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} /></label>
        <label className="full">Message<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
        <button className="btn btn--red" type="submit">Submit <Icon name="arrow" size={16} /></button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}
