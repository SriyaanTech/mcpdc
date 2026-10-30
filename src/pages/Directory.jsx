import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { api } from "../lib/api";
import portPhoto from "../assets/site/carousel-1.jpg";

const options = [
  { type: "institutions", id: "approved-institutions", name: "Approved Institutions", placeholder: "Search institution name or location" },
  { type: "courses", id: "accredited-courses", name: "Accredited Courses", placeholder: "Search course or provider name" },
  { type: "members", id: "global-member-directory", name: "Global Member Directory", placeholder: "Search member name or professional role" },
];
const fromHash = hash => options.find(x=>`#${x.id}` === hash)?.type;
export default function Directory() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const type = fromHash(hash) || "institutions";
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [message, setMessage] = useState("");
  const selected = options.find(x=>x.type===type);
  const choose = value => { navigate(`/directory#${options.find(o => o.type === value).id}`); setQuery(""); setRecords([]); setSearched(false); setMessage(""); };
  async function search(event) {
    event.preventDefault(); setLoading(true); setMessage("");
    try { const response = await api.listDirectory(type, query); setRecords(response.data || []); setSearched(true); }
    catch { setRecords([]); setMessage("Unable to load records. Please try again."); setSearched(true); }
    finally { setLoading(false); }
  }
  return <main className="approved-page real-page">
    <PageHero eyebrow="Public Directory" title="A single place to explore recognised maritime learning" intro="Browse institutions, professional development programmes and published member records in one directory interface." />
    <section className="approved-section section--white" id="directory-search"><div className="shell real-two-column real-align-start"><div><p className="eyebrow">Public Directory</p><h2>One search. Three directory types.</h2><p>Choose the type of directory you need, then search by name, role or location. You won't need to complete separate searches on three different pages.</p><div className="real-photo-tile"><img src={portPhoto} alt="Maritime vessel" loading="lazy" /></div></div>
      <div className="real-directory-tool"><div className="real-tab-row real-directory-tabs" role="tablist" aria-label="Directory type">{options.map(o=><button type="button" key={o.type} role="tab" aria-selected={type===o.type} className={type===o.type?"is-current":""} onClick={()=>choose(o.type)}>{o.name}</button>)}</div><form onSubmit={search} role="search" className="real-search-form"><label htmlFor="directory-search-input">{selected.name}</label><div><input id="directory-search-input" value={query} onChange={e=>setQuery(e.target.value)} placeholder={selected.placeholder}/><button type="submit" className="btn btn--red" disabled={loading}>{loading?"Searching…":"Search"} <Icon name="arrow" size={16}/></button></div></form><p className="real-demo-note">Example records only. The live directory must use verified, published MCPDC records.</p><div className="real-directory-results" aria-live="polite">{message && <p role="status">{message}</p>}{!searched && <p>Enter a search term or select Search to explore sample records.</p>}{searched && !message && records.length === 0 && <p>No sample records matched your search.</p>}{records.map(record=><article key={`${record.type}-${record.id}`}><span className="real-result-mark"><Icon name="shield" size={20}/></span><div><strong>{record.name}</strong><small>{record.subtitle}</small><em>Example record — not verified</em></div></article>)}</div></div>
    </div></section>
    <section className="approved-section section--mist" id="approved-institutions"><div className="shell real-two-column"><div><p className="eyebrow">Approved Institutions</p><h2>Find maritime learning providers</h2><p>Look for organisations in maritime education and professional training. Official recognition status should always be verified against MCPDC's published records.</p><button type="button" className="real-text-button" onClick={()=>{ choose("institutions");document.getElementById("directory-search")?.scrollIntoView({behavior:"smooth"}); }}>Search institutions <Icon name="arrow" size={16}/></button></div><div className="real-soft-panel"><h3>Institution records</h3><p>Search by institution or city, and review each listed organisation's public details once the live directory is connected.</p></div></div></section>
    <section className="approved-section section--white" id="accredited-courses"><div className="shell real-two-column"><div><p className="eyebrow">Accredited Courses</p><h2>Explore professional development programmes</h2><p>Locate maritime learning and professional development programmes in the course directory and check relevant provider information.</p><button type="button" className="real-text-button" onClick={()=>{choose("courses");document.getElementById("directory-search")?.scrollIntoView({behavior:"smooth"});}}>Search courses <Icon name="arrow" size={16}/></button></div><div className="real-soft-panel"><h3>Course listings</h3><p>Use the course search to filter by programme title or provider. Sample results are labeled until verified data is available.</p></div></div></section>
    <section className="approved-section section--mist" id="global-member-directory"><div className="shell real-two-column"><div><p className="eyebrow">Global Member Directory</p><h2>Professional recognition and public records</h2><p>Browse approved public member information. The published directory should display only authorised details and protect private information.</p><button type="button" className="real-text-button" onClick={()=>{choose("members");document.getElementById("directory-search")?.scrollIntoView({behavior:"smooth"});}}>Search members <Icon name="arrow" size={16}/></button></div><div className="real-soft-panel"><h3>Member records</h3><p>Search by professional name or role, with personal information visible only where publication has been authorised.</p></div></div></section>
  </main>;
}
