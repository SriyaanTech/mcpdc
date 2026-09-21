import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { sectionPages } from "../data/siteContent";
import { api } from "../lib/api";

export default function Directory() {
  const data = sectionPages.directory;
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState([]);
  const [message, setMessage] = useState("Choose a directory below, or search by name first.");
  const search = async (type) => {
    setMessage("Searching…");
    try {
      const result = await api.listDirectory(type, query);
      setRecords(result.data || []);
      setMessage(result.data?.length ? "" : "No published records matched your search.");
    } catch {
      setRecords([]);
      setMessage("Something went wrong with your search. Please try again.");
    }
  };
  return (
    <main>
      <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <section className="section section--white">
        <div className="shell directory-search">
          <div><p className="eyebrow">Public directory</p><h2>Search MCPDC records</h2><p>{data.body}</p></div>
          <div className="directory-tool">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Institution, course or member name" />
            <div className="directory-buttons">
              <button onClick={() => search("institutions")}>Approved Institutions</button>
              <button onClick={() => search("courses")}>Accredited Courses</button>
              <button onClick={() => search("members")}>Global Members</button>
            </div>
          </div>
        </div>
        <div className="shell directory-results">
          {message && <p className="empty-state">{message}</p>}
          {records.map((item) => <article className="record-card" key={`${item.type}-${item.id}`}><Icon name="shield" /><div><strong>{item.name}</strong><span>{item.subtitle}</span></div></article>)}
        </div>
      </section>
    </main>
  );
}
