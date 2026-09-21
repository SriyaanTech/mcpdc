export const mainNav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      ["About Us", "/about/about-us"],
      ["Vision & Mission", "/about/vision-mission"],
      ["Governance", "/about/governance"],
      ["Standards & Policies", "/about/standards-policies"],
      ["Why Choose MCPDC", "/about/why-choose-mcpdc"],
    ],
  },
  {
    label: "Accreditation",
    to: "/accreditation",
    children: [
      ["Institutional Membership", "/accreditation/institutional-membership"],
      ["Course Accreditation", "/accreditation/course-accreditation"],
      ["Accreditation Process", "/accreditation/process"],
      ["Accreditation Standards", "/accreditation/standards"],
      ["Fees & Application", "/accreditation/fees-application"],
    ],
  },
  {
    label: "Membership",
    to: "/membership",
    children: [
      ["Professional Membership", "/membership/professional-membership"],
      ["Membership Categories", "/membership/categories"],
      ["Benefits", "/membership/benefits"],
      ["Apply for Membership", "/membership/apply"],
      ["Renew Membership", "/membership/renew"],
    ],
  },
  {
    label: "Certifications",
    to: "/certifications",
    children: [
      ["Certification Programs", "/certifications/programs"],
      ["Eligibility Criteria", "/certifications/eligibility"],
      ["Assessment Process", "/certifications/assessment"],
      ["Certification Renewal", "/certifications/renewal"],
    ],
  },
  {
    label: "Directory",
    to: "/directory",
    children: [
      ["Approved Institutions", "/directory/approved-institutions"],
      ["Accredited Courses", "/directory/accredited-courses"],
      ["Global Member Directory", "/directory/global-member-directory"],
    ],
  },
  {
    label: "Knowledge Hub",
    to: "/knowledge-hub",
    children: [
      ["Articles & Publications", "/knowledge-hub/articles-publications"],
      ["Industry News", "/knowledge-hub/industry-news"],
      ["Best Practice Guides", "/knowledge-hub/best-practice-guides"],
      ["Webinars & Events", "/knowledge-hub/webinars-events"],
      ["Downloads", "/knowledge-hub/downloads"],
    ],
  },
  {
    label: "Awards",
    to: "/awards",
    children: [
      ["About the Awards", "/awards/about"],
      ["Award Categories", "/awards/categories"],
      ["Nomination Process", "/awards/nomination-process"],
      ["Previous Winners", "/awards/previous-winners"],
    ],
  },
  { label: "Certificate Verification", to: "/verify-certificate" },
  {
    label: "Contact",
    to: "/contact",
    children: [
      ["Contact Us", "/contact"],
      ["Enquiry Form", "/contact/enquiry"],
      ["Become an Accredited Institution", "/contact/become-accredited"],
      ["Support", "/contact/support"],
    ],
  },
];

export const disruptors = [
  "Alternative fuels",
  "Artificial Intelligence",
  "Cyber Security",
  "Digital Navigation",
  "Automation",
  "Human Factors",
  "Environmental regulations",
];

export const standards = [
  "Course Design",
  "Learning Outcomes",
  "Assessment",
  "Instructor Competence",
  "Digital Learning",
  "Simulator Training",
  "Quality Assurance",
  "Continuous Improvement",
];

export const institutionTypes = [
  "Maritime Academies",
  "Universities",
  "Training Centres",
  "Shipping Companies",
  "Marine Consultants",
  "Port Organisations",
  "Marine Survey Firms",
  "Maritime Technology Companies",
];

export const organisationBenefits = [
  "International Recognition",
  "Independent Quality Assurance",
  "Accredited Course Status",
  "Digital Certificate Verification",
  "Global Directory Listing",
  "Professional Development Framework",
  "Marketing Support",
  "Annual Recognition Awards",
  "Access to Industry Best Practice",
];

export const professionalBenefits = [
  "Professional Recognition",
  "Annual CPD Transcript",
  "Digital Membership Card",
  "Competency Passport",
  "Professional Networking",
  "Career Development",
  "Learning Resources",
  "Industry Updates",
];

export const overviewCards = [
  {
    icon: "institution",
    title: "Institutional Membership",
    text: "Recognising maritime organisations committed to quality learning and professional development.",
    to: "/accreditation/institutional-membership",
  },
  {
    icon: "course",
    title: "Course Accreditation",
    text: "Professional development programmes can be assessed within the MCPDC quality framework.",
    to: "/accreditation/course-accreditation",
  },
  {
    icon: "members",
    title: "Professional Membership",
    text: "Build a recognised record of professional development throughout your career.",
    to: "/membership/professional-membership",
  },
  {
    icon: "recognition",
    title: "Competency Recognition",
    text: "Supporting professional recognition through structured continuing professional development.",
    to: "/certifications",
  },
];

export const quickActions = [
  ["institution", "Approved Institutions", "View recognised maritime education and training providers.", "/directory/approved-institutions"],
  ["course", "Accredited Courses", "Explore quality-assured maritime courses.", "/directory/accredited-courses"],
  ["members", "Global Member Directory", "Connect with verified maritime professionals.", "/directory/global-member-directory"],
  ["shield", "Certificate Verification", "Verify the authenticity of MCPDC certificates.", "/verify-certificate"],
];

export const sectionPages = {
  about: {
    eyebrow: "About MCPDC",
    title: "An independent professional body for Maritime Continuing Professional Development",
    intro: "The Maritime Continuing Professional Development Council (MCPDC) is an independent international organisation dedicated to promoting professional competence, lifelong learning, and quality assurance across the global maritime industry.",
    body: "We recognise institutions, accredit professional development programmes, certify learning excellence, and support maritime professionals throughout their careers.",
    links: mainNav.find((item) => item.label === "About").children,
  },
  accreditation: {
    eyebrow: "Accreditation",
    title: "Independent recognition for maritime learning and professional development",
    intro: "MCPDC provides an internationally recognised framework that enables organisations to demonstrate their commitment to excellence through structured Continuing Professional Development.",
    body: "Institutional Membership and Course Accreditation are designed around quality learning, clear standards and continuous improvement.",
    links: mainNav.find((item) => item.label === "Accreditation").children,
  },
  membership: {
    eyebrow: "Membership",
    title: "Professional recognition throughout a maritime career",
    intro: "Build a recognised record of professional development throughout your career.",
    body: "MCPDC Professional Membership connects lifelong learning, professional recognition, competency records and access to industry knowledge.",
    links: mainNav.find((item) => item.label === "Membership").children,
  },
  certifications: {
    eyebrow: "Professional Certifications",
    title: "Certification programmes built around competence and continuing development",
    intro: "MCPDC supports professional recognition through structured certification programmes, eligibility criteria, assessment and renewal.",
    body: "The certification structure is designed to support the wider MCPDC mission of continuous learning, professional competence, innovation and excellence.",
    links: mainNav.find((item) => item.label === "Certifications").children,
  },
  directory: {
    eyebrow: "Directory",
    title: "A public route to recognised institutions, courses and professionals",
    intro: "The MCPDC Directory brings together Approved Institutions, Accredited Courses and the Global Member Directory.",
    body: "Public verification and directory visibility support confidence for employers, regulators, learners and maritime professionals.",
    links: mainNav.find((item) => item.label === "Directory").children,
  },
  knowledge: {
    eyebrow: "Maritime Knowledge Hub",
    title: "Knowledge and professional development for a changing maritime industry",
    intro: "The maritime industry is changing rapidly across alternative fuels, Artificial Intelligence, Cyber Security, Digital Navigation, Automation, Human Factors and environmental regulations.",
    body: "The Maritime Knowledge Hub is structured for Articles & Publications, Industry News, Best Practice Guides, Webinars & Events and Downloads.",
    links: mainNav.find((item) => item.label === "Knowledge Hub").children,
  },
  awards: {
    eyebrow: "Annual Maritime Excellence Awards",
    title: "Recognition for excellence across the maritime professional community",
    intro: "The Annual Maritime Excellence Awards form part of MCPDC's wider professional recognition framework.",
    body: "The awards section includes award information, categories, the nomination process and previous winners.",
    links: mainNav.find((item) => item.label === "Awards").children,
  },
};

export const detailPages = {
  "/about/about-us": {
    eyebrow: "About MCPDC",
    title: "About Us",
    paragraphs: [
      "The Maritime Continuing Professional Development Council (MCPDC) is an independent international organisation dedicated to promoting professional competence, lifelong learning, and quality assurance across the global maritime industry.",
      "We recognise institutions, accredit professional development programmes, certify learning excellence, and support maritime professionals throughout their careers.",
    ],
  },
  "/about/vision-mission": {
    eyebrow: "About MCPDC",
    title: "Vision & Mission",
    sections: [
      ["Our Vision", "To become the world's most respected independent professional body for Maritime Continuing Professional Development."],
      ["Our Mission", "To establish internationally recognised standards that promote continuous learning, professional competence, innovation, and excellence throughout the global maritime industry."],
    ],
  },
  "/about/governance": {
    eyebrow: "About MCPDC",
    title: "Governance",
    paragraphs: ["Governance information is structured as a dedicated MCPDC page so council leadership, committees, responsibilities and approved governance documents can be published clearly when supplied by the client."],
  },
  "/about/standards-policies": {
    eyebrow: "About MCPDC",
    title: "Standards & Policies",
    paragraphs: ["MCPDC has developed quality standards covering Course Design, Learning Outcomes, Assessment, Instructor Competence, Digital Learning, Simulator Training, Quality Assurance and Continuous Improvement."],
    list: standards,
  },
  "/about/why-choose-mcpdc": {
    eyebrow: "About MCPDC",
    title: "Why Choose MCPDC",
    paragraphs: [
      "The maritime industry is changing rapidly.",
      "Professionals must continuously update their knowledge and competence beyond mandatory statutory training.",
      "MCPDC provides an internationally recognised framework that enables organisations and maritime professionals to demonstrate their commitment to excellence through structured Continuing Professional Development.",
    ],
    list: disruptors,
  },
  "/accreditation/institutional-membership": {
    eyebrow: "Accreditation",
    title: "Institutional Membership",
    paragraphs: ["Recognising maritime organisations committed to quality learning and professional development."],
    subheading: "Ideal for",
    list: institutionTypes,
  },
  "/accreditation/course-accreditation": {
    eyebrow: "Accreditation",
    title: "Course Accreditation",
    paragraphs: ["MCPDC accredits professional development programmes within a quality framework covering course design, learning outcomes, assessment, instructor competence, digital learning, simulator training, quality assurance and continuous improvement."],
    list: standards,
  },
  "/accreditation/process": {
    eyebrow: "Accreditation",
    title: "Accreditation Process",
    paragraphs: ["This page is prepared for the client-approved accreditation process. The backend supports online applications, supporting documents, review status and publication of approved records."],
  },
  "/accreditation/standards": {
    eyebrow: "Accreditation",
    title: "Accreditation Standards",
    paragraphs: ["MCPDC has developed quality standards covering the full learning lifecycle."],
    list: standards,
  },
  "/accreditation/fees-application": {
    eyebrow: "Accreditation",
    title: "Fees & Application",
    paragraphs: ["The page is ready for the final client-approved fee schedule. Organisations can already use the application form structure without publishing unapproved fee figures."],
    formType: "accreditation",
  },
  "/membership/professional-membership": {
    eyebrow: "Membership",
    title: "Professional Membership",
    paragraphs: ["Build a recognised record of professional development throughout your career."],
    list: professionalBenefits,
  },
  "/membership/categories": {
    eyebrow: "Membership",
    title: "Membership Categories",
    paragraphs: ["The site structure supports multiple professional membership categories. Final category names and eligibility rules should be published only after client approval."],
  },
  "/membership/benefits": {
    eyebrow: "Membership",
    title: "Benefits",
    paragraphs: ["Benefits for Maritime Professionals"],
    list: professionalBenefits,
  },
  "/membership/apply": {
    eyebrow: "Membership",
    title: "Apply for Membership",
    paragraphs: ["Submit your professional membership enquiry and application details to MCPDC."],
    formType: "membership",
  },
  "/membership/renew": {
    eyebrow: "Membership",
    title: "Renew Membership",
    paragraphs: ["The renewal page is prepared for existing members. Renewal rules, fees and supporting evidence requirements can be added when approved by the client."],
    formType: "renewal",
  },
  "/certifications/programs": {
    eyebrow: "Professional Certifications",
    title: "Certification Programs",
    paragraphs: ["This page is prepared for MCPDC certification programmes once programme names and award criteria are approved by the client."],
  },
  "/certifications/eligibility": {
    eyebrow: "Professional Certifications",
    title: "Eligibility Criteria",
    paragraphs: ["Eligibility criteria will be published here for each approved certification programme."],
  },
  "/certifications/assessment": {
    eyebrow: "Professional Certifications",
    title: "Assessment Process",
    paragraphs: ["The site supports a dedicated assessment-process page so evidence requirements, assessment stages and review decisions can be explained clearly."],
  },
  "/certifications/renewal": {
    eyebrow: "Professional Certifications",
    title: "Certification Renewal",
    paragraphs: ["Renewal information will be published here for each professional certification programme."],
  },
  "/knowledge-hub/articles-publications": { eyebrow: "Maritime Knowledge Hub", title: "Articles & Publications", paragraphs: ["Professional articles and MCPDC publications can be managed from the backend and published here."] },
  "/knowledge-hub/industry-news": { eyebrow: "Maritime Knowledge Hub", title: "Industry News", paragraphs: ["Industry news can be published here through the MCPDC content system."] },
  "/knowledge-hub/best-practice-guides": { eyebrow: "Maritime Knowledge Hub", title: "Best Practice Guides", paragraphs: ["Best practice guides can be organised by topic and made available to the maritime professional community."] },
  "/knowledge-hub/webinars-events": { eyebrow: "Maritime Knowledge Hub", title: "Webinars & Events", paragraphs: ["Upcoming webinars and events can be listed with dates, registration information and resources."] },
  "/knowledge-hub/downloads": { eyebrow: "Maritime Knowledge Hub", title: "Downloads", paragraphs: ["Policies, standards documents, guides and approved downloads can be managed and published from this section."] },
  "/awards/about": { eyebrow: "Annual Maritime Excellence Awards", title: "About the Awards", paragraphs: ["The Annual Maritime Excellence Awards provide a dedicated framework for professional recognition within the MCPDC website structure."] },
  "/awards/categories": { eyebrow: "Annual Maritime Excellence Awards", title: "Award Categories", paragraphs: ["Final award categories will be published here when approved by the client."] },
  "/awards/nomination-process": { eyebrow: "Annual Maritime Excellence Awards", title: "Nomination Process", paragraphs: ["The nomination workflow can be submitted online and stored securely for review."], formType: "award" },
  "/awards/previous-winners": { eyebrow: "Annual Maritime Excellence Awards", title: "Previous Winners", paragraphs: ["Previous award recipients can be published here once official results are available."] },
  "/contact/become-accredited": { eyebrow: "Contact", title: "Become an Accredited Institution", paragraphs: ["Organisations interested in institutional recognition or course accreditation can begin with an accreditation enquiry and continue into the formal application workflow."], formType: "accreditation" },
};
