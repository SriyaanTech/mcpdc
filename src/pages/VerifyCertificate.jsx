import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";

export default function VerifyCertificate() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const submit = async (event) => {
    event.preventDefault();
    setMessage("Checking…"); setResult(null);
    try {
      const data = await api.verifyCertificate(number);
      setResult(data.data); setMessage("");
    } catch (error) { setMessage(error.message); }
  };
  return (
    <main>
      <PageHero eyebrow="Certificate Verification" title="Verify an MCPDC certificate" intro="Verify the authenticity of MCPDC certificates through the public verification service." />
      <section className="section section--white">
        <div className="shell verify-layout">
          <form className="verify-card" onSubmit={submit}>
            <Icon name="shield" size={56} />
            <h2>Certificate Verification</h2>
            <p>Enter the certificate number exactly as shown on the MCPDC document.</p>
            <div className="verify-input"><input required value={number} onChange={(e) => setNumber(e.target.value)} placeholder="e.g. MCPDC-2026-0001" /><button className="btn btn--red">Verify</button></div>
            {message && <p className="form-status">{message}</p>}
            <p className="form-status">Try a sample: MCPDC-2026-0001, MCPDC-2025-0148 or MCPDC-2024-0932.</p>
          </form>
          {result && <article className="certificate-result"><span className="status-badge">{result.status}</span><h3>{result.holder_name}</h3><dl><div><dt>Certificate</dt><dd>{result.certificate_number}</dd></div><div><dt>Programme</dt><dd>{result.programme_name}</dd></div><div><dt>Status</dt><dd>{result.status}</dd></div></dl></article>}
        </div>
      </section>
    </main>
  );
}
