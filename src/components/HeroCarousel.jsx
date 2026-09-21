import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import oceanBannerPhoto from "../assets/site/ocean-banner-photo.png";

const slides = [
  {
    kicker: "Independent · International · For a stronger maritime tomorrow",
    title: "Maritime Continuing Professional Development Council",
    sub: "The Global Professional Body for Maritime Continuing Professional Development",
    text: "The Maritime Continuing Professional Development Council (MCPDC) is an independent international organisation dedicated to promoting professional competence, lifelong learning, and quality assurance across the global maritime industry.",
    pillars: ["Professional Membership", "Institutional Membership", "Course Accreditation", "Competency Recognition"],
    primary: ["Become a Member", "/membership/apply"],
    secondary: ["Apply for Accreditation", "/accreditation/fees-application"],
  },
  {
    kicker: "Institutional Membership · Course Accreditation",
    title: "Recognition for organisations committed to quality learning",
    sub: "Independent quality assurance for maritime professional development",
    text: "MCPDC recognises institutions and accredits professional development programmes within a structured Continuing Professional Development framework.",
    primary: ["Institutional Membership", "/accreditation/institutional-membership"],
    secondary: ["Course Accreditation", "/accreditation/course-accreditation"],
  },
  {
    kicker: "Professional Recognition · Lifelong Learning",
    title: "Build a recognised record of professional development",
    sub: "Supporting maritime professionals throughout their careers",
    text: "Professional Membership supports recognition, CPD records, competency development, learning resources and continued career development.",
    primary: ["Professional Membership", "/membership/professional-membership"],
    secondary: ["Explore Benefits", "/membership/benefits"],
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);
  const slide = slides[index];

  return (
    <section className="home-hero">
      <div className="home-hero__media" style={{ backgroundImage: `url(${oceanBannerPhoto})` }} />
      <div className="home-hero__shade" />
      <div className="shell home-hero__content">
        <div className="home-hero__copy" key={index}>
          <p className="eyebrow eyebrow--light">{slide.kicker}</p>
          <h1>{slide.title}</h1>
          <h2>{slide.sub}</h2>
          <p>{slide.text}</p>
          {slide.pillars && (
            <p className="hero-pillars">
              {slide.pillars.map((p, i) => <span key={p}>{p}{i < slide.pillars.length - 1 ? " \u00b7 " : ""}</span>)}
            </p>
          )}
          <div className="hero-actions">
            <Link to={slide.primary[1]} className="btn btn--red">{slide.primary[0]} <Icon name="arrow" size={17} /></Link>
            <Link to={slide.secondary[1]} className="btn btn--outline-light">{slide.secondary[0]} <Icon name="arrow" size={17} /></Link>
          </div>
        </div>
        <div className="hero-motto"><span />Recognition<br />Standards<br />Lifelong learning<br /><strong>One record, your whole career</strong></div>
        <div className="hero-dots" aria-label="Hero slides">
          {slides.map((_, i) => <button key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`Show slide ${i + 1}`} />)}
        </div>
      </div>
    </section>
  );
}
