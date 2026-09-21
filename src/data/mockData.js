// Static, in-memory data used in place of the MCPDC-Server backend.
// Nothing here is fetched over the network - it ships with the client
// so the site runs entirely on its own, with no server required.

export const directoryRecords = {
  institutions: [
    { id: "inst-01", type: "institutions", name: "Nordic Maritime Academy", subtitle: "Oslo, Norway · Approved Institution since 2021" },
    { id: "inst-02", type: "institutions", name: "Pacific Rim Maritime Institute", subtitle: "Manila, Philippines · Approved Institution since 2019" },
    { id: "inst-03", type: "institutions", name: "Southern Cross Training Centre", subtitle: "Fremantle, Australia · Approved Institution since 2022" },
    { id: "inst-04", type: "institutions", name: "Gulf Coast Shipping Academy", subtitle: "Dubai, UAE · Approved Institution since 2020" },
    { id: "inst-05", type: "institutions", name: "Atlantic Maritime University", subtitle: "Halifax, Canada · Approved Institution since 2018" },
    { id: "inst-06", type: "institutions", name: "Baltic Sea Training College", subtitle: "Gdansk, Poland · Approved Institution since 2023" },
    { id: "inst-07", type: "institutions", name: "Mediterranean Marine Institute", subtitle: "Piraeus, Greece · Approved Institution since 2021" },
    { id: "inst-08", type: "institutions", name: "Indian Ocean Maritime School", subtitle: "Mumbai, India · Approved Institution since 2020" },
  ],
  courses: [
    { id: "crs-01", type: "courses", name: "Advanced Bridge Resource Management", subtitle: "Nordic Maritime Academy · Accredited Course" },
    { id: "crs-02", type: "courses", name: "Marine Engineering Officer of the Watch", subtitle: "Pacific Rim Maritime Institute · Accredited Course" },
    { id: "crs-03", type: "courses", name: "Dynamic Positioning Operator Programme", subtitle: "Gulf Coast Shipping Academy · Accredited Course" },
    { id: "crs-04", type: "courses", name: "Maritime Cyber Security Fundamentals", subtitle: "Southern Cross Training Centre · Accredited Course" },
    { id: "crs-05", type: "courses", name: "Alternative Fuels & Emissions Compliance", subtitle: "Atlantic Maritime University · Accredited Course" },
    { id: "crs-06", type: "courses", name: "Ship Simulator & Navigation Training", subtitle: "Baltic Sea Training College · Accredited Course" },
    { id: "crs-07", type: "courses", name: "Crew Resource Management Refresher", subtitle: "Mediterranean Marine Institute · Accredited Course" },
  ],
  members: [
    { id: "mem-01", type: "members", name: "Capt. Erik Solberg", subtitle: "Master Mariner · Professional Member since 2019" },
    { id: "mem-02", type: "members", name: "Maria Santos", subtitle: "Chief Engineer · Professional Member since 2020" },
    { id: "mem-03", type: "members", name: "Ahmed Al-Farsi", subtitle: "Marine Surveyor · Professional Member since 2021" },
    { id: "mem-04", type: "members", name: "Chloe Whitfield", subtitle: "Port Operations Manager · Professional Member since 2022" },
    { id: "mem-05", type: "members", name: "Rajesh Nair", subtitle: "Second Officer · Professional Member since 2023" },
    { id: "mem-06", type: "members", name: "Ingrid Larsen", subtitle: "Maritime Consultant · Professional Member since 2018" },
  ],
};

export const certificates = {
  "MCPDC-2026-0001": {
    certificate_number: "MCPDC-2026-0001",
    holder_name: "Capt. Erik Solberg",
    programme_name: "Advanced Bridge Resource Management",
    status: "Active",
    issued_date: "2026-02-14",
  },
  "MCPDC-2025-0148": {
    certificate_number: "MCPDC-2025-0148",
    holder_name: "Maria Santos",
    programme_name: "Marine Engineering Officer of the Watch",
    status: "Active",
    issued_date: "2025-08-02",
  },
  "MCPDC-2024-0932": {
    certificate_number: "MCPDC-2024-0932",
    holder_name: "Ahmed Al-Farsi",
    programme_name: "Maritime Cyber Security Fundamentals",
    status: "Expired",
    issued_date: "2024-03-19",
  },
};
