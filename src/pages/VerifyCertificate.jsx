import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";

export default function VerifyCertificate() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setMessage(""); setResult(null);
    try { const response = await api.verifyCertificate(number); setResult(response.data); }
    catch(error) { setMessage(error.message || "Certificate number not found."); }
    finally { setBusy(false); }
  }
  return <main className="approved-page real-page">
    <PageHero eyebrow="Certificate Verification" title="Verify an MCPDC certificate" intro="Look up a certificate number and view its available status and record details." />
    <section className="approved-section section--white"><div className="shell real-verify-layout"><div><p className="eyebrow">Certificate Verification</p><h2>Look up a certificate number</h2><p>Enter the number exactly as printed on your certificate. The current interface uses sample records for demonstration only.</p><form className="approved-form real-verify-form" onSubmit={submit}><label>Certificate number<input value={number} onChange={e=>setNumber(e.target.value)} required placeholder="MCPDC-2026-0001" /></label><button className="btn btn--red" type="submit" disabled={busy}>{busy?"Checking…":"Verify certificate"} <Icon name="arrow" size={16}/></button><p className="real-demo-note">Demo examples: MCPDC-2026-0001 (active), MCPDC-2024-0932 (expired).</p>{message && <p className="real-form-status" role="status">{message}</p>}</form></div><div className="real-verification-panel" aria-live="polite"><span className="real-verify-icon"><Icon name="shield" size={28}/></span>{result ? <><span className="real-example-badge">Example record · {result.status}</span><h3>{result.holder_name}</h3><dl><div><dt>Certificate number</dt><dd>{result.certificate_number}</dd></div><div><dt>Programme</dt><dd>{result.programme_name}</dd></div><div><dt>Status</dt><dd>{result.status}</dd></div><div><dt>Issued on</dt><dd>{result.issued_date}</dd></div></dl><p>This is demo data, not verification of a real certificate.</p></> : <><h3>Verification result</h3><p>Your sample lookup details will appear here once you enter a certificate number.</p></>}</div></div></section>
    <section className="approved-section section--mist"><div className="shell real-two-column"><div><p className="eyebrow">Public Verification</p><h2>Confidence through clear records</h2><p>A live certificate verification service should display the status only from authorised MCPDC certificate records.</p></div><div className="real-soft-panel"><h3>Important</h3><p>This project currently uses a mock certificate dataset. A real MCPDC backend is necessary before any results can be used for official verification.</p></div></div></section>
  </main>;
}
