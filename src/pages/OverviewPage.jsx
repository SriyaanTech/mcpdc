import PageHero from "../components/PageHero";
import SectionIndex from "../components/SectionIndex";
import Icon from "../components/Icon";
import { detailPages } from "../data/siteContent";
import { ApplicationForm } from "./DetailPage";

function SectionBody({ detail }) {
  if (!detail) return null;
  return (
    <div className="content-section__body">
      {detail.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {detail.sections?.length > 0 && (
        <div className="content-section__inner-grid">
          {detail.sections.map(([heading, text]) => (
            <article className="content-section__subcard" key={heading}>
              <h3>{heading}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      )}
      {detail.subheading && <h3 className="content-section__subheading">{detail.subheading}</h3>}
      {detail.list?.length > 0 && (
        <div className="detail-list content-section__list">
          {detail.list.map((item) => <div key={item}><Icon name="check" size={18} /><span>{item}</span></div>)}
        </div>
      )}
      {detail.formType && <ApplicationForm type={detail.formType} embedded />}
    </div>
  );
}

export default function OverviewPage({ data }) {
  const sections = data.links.map(([label, to]) => {
    const [parentPath, id] = to.split("#");
    return { label, to, id, detail: detailPages[`${parentPath}/${id}`] };
  });

  return (
    <main>
      <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <SectionIndex links={data.links} />
      <section className="overview-intro section--white">
        <div className="shell overview-intro__inner">
          <span className="eyebrow">Explore {data.eyebrow}</span>
          <p>{data.body}</p>
        </div>
      </section>
      {sections.map(({ id, label, detail }, index) => (
        <section
          id={id}
          className={`section content-section ${index % 2 ? "section--mist" : "section--white"}`}
          key={id}
          aria-labelledby={`${id}-heading`}
        >
          <div className="shell content-section__grid">
            <div className="content-section__heading">
              <span className="content-section__number">{String(index + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span>
              <h2 id={`${id}-heading`}>{detail?.title || label}</h2>
              <span className="content-section__rule" />
            </div>
            <SectionBody detail={detail} />
          </div>
        </section>
      ))}
    </main>
  );
}
