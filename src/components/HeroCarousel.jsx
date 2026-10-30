import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import shipPhoto from "../assets/site/carousel-1.jpg";
import trainingPhoto from "../assets/site/carousel-2.jpg";
import professionalPhoto from "../assets/site/carousel-3.jpg";

// Images are bundled locally; the carousel makes no external image requests.
// All three files are consistently sized at 1600 x 900 pixels.
const slides = [
  {
    image: shipPhoto,
    kicker: "Independent · International · For a stronger maritime tomorrow",
    title: "Maritime Continuing Professional Development Council",
    sub: "The Global Professional Body for Maritime Continuing Professional Development",
    text: "The Maritime Continuing Professional Development Council (MCPDC) is an independent international organisation dedicated to promoting professional competence, lifelong learning, and quality assurance across the global maritime industry.",
    pillars: ["Professional Membership", "Institutional Membership", "Course Accreditation", "Competency Recognition"],
    primary: ["Become a Member", "/membership#apply"],
    secondary: ["Apply for Accreditation", "/accreditation#fees-application"],
  },
  {
    image: trainingPhoto,
    kicker: "Institutional Membership · Course Accreditation",
    title: "Recognition for organisations committed to quality learning",
    sub: "Independent quality assurance for maritime professional development",
    text: "MCPDC recognises institutions and accredits professional development programmes within a structured Continuing Professional Development framework.",
    primary: ["Institutional Membership", "/accreditation#institutional-membership"],
    secondary: ["Course Accreditation", "/accreditation#course-accreditation"],
  },
  {
    image: professionalPhoto,
    kicker: "Professional Recognition · Lifelong Learning",
    title: "Build a recognised record of professional development",
    sub: "Supporting maritime professionals throughout their careers",
    text: "Professional Membership supports recognition, CPD records, competency development, learning resources and continued career development.",
    primary: ["Professional Membership", "/membership#professional-membership"],
    secondary: ["Explore Benefits", "/membership#benefits"],
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[index];
  const move = (direction) => setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <section
      className="home-hero"
      aria-label="MCPDC highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div
        className="home-hero__media home-hero__media--slide"
        key={index}
        aria-hidden="true"
        style={{ backgroundImage: `url("${slide.image}")` }}
      />
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
        {/* <div className="hero-motto"><span />Recognition<br />Standards<br />Lifelong learning<br /><strong>One record, your whole career</strong></div> */}
        <div className="hero-dots" aria-label="Choose a hero slide">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
        <div className="hero-arrows" aria-label="Carousel controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous slide">‹</button>
          <button type="button" onClick={() => move(1)} aria-label="Next slide">›</button>
        </div>
      </div>
    </section>
  );
}
