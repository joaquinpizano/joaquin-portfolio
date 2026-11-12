export const profile = {
  name: 'Joaquin Pizano',
  email: 'joaquinmpizano@gmail.com',
  github: 'https://github.com/joaquinpizano',
  linkedin: 'https://www.linkedin.com/in/joaquinpizano/',
  resume: '/resume.pdf',
};
export const riskAudit = {
  zip: '33708', effectiveYear: 2024, snapshot: 'September 8, 2026',
  totalRows: 4304, includedRows: 3790, excludedRows: 514, outsideRows: 0,
  includedPolicyCount: 10047, excludedPolicyCount: 514, totalPolicyCount: 10561,
  validationTests: 18,
};
export const pharmaStudy = {
  packages: 221667, defaultBudget: 500000, defaultReviewCost: 1000,
  defaultCapacity: 500, maximumCapacity: 5000,
  models: [
    { name: 'v0.4', role: 'Recommended comparison', method: 'FDA-linked information and CMS demand features; corrected liblinear model.', averagePrecision: 0.0038970900621604822, captured: 10 },
    { name: 'v0.5', role: 'Experimental alternative', method: 'Adds recall-language features; corrected lbfgs model.', averagePrecision: 0.0028578304440981584, captured: 7 },
  ],
};
export const projects = [
  {
    slug: 'riskmap', name: 'RiskMap | Flood Risk & Insurance Analytics', number: '01', category: 'INSURANCE · RISK ANALYTICS',
    headline: 'Three views, kept distinct: mapped hazard, observed claims, provisional exposure.',
    summary: 'RiskMap v2 distinguishes FEMA flood-hazard maps as geographic context, historical NFIP claims as observed losses, and provisional insured exposure as a policy-term measure—not property-level predictions or insurance pricing.',
    technologies: ['Python', 'Historical NFIP claims', 'FEMA flood-hazard geography', 'Data validation'],
    problem: 'Mapped flood hazard, historical claims, and insured exposure answer different questions. Combining them without distinction could confuse geographic hazard context with observed past losses or provisional policy coverage.',
    importance: 'FEMA flood-hazard geography describes mapped context; historical NFIP claims and reported payments record observed past losses; provisional insured exposure summarizes policy coverage over time under explicit assumptions. None of these measures establishes an individual property’s current or future risk.',
    approach: 'RiskMap v2 brings these three complementary but non-interchangeable views together: FEMA flood-hazard geography for mapped context, historical NFIP claims and reported payments for observed loss history, and a provisional insured-exposure sensitivity based on policy terms and time-weighted policy counts. Separately, I used Python to audit 2024 effective-year FEMA NFIP records for Florida ZIP 33708 against the Pinellas census GEOID prefix 12103, reconciling record IDs and policyCount totals while classifying missing, outside-county, and malformed geography. Missing GEOIDs do not establish county membership, and the duration-based exposure remains provisional with documented cancellation-date exceptions. RiskMap does not make property-level predictions, estimate claim rates, or determine insurance pricing.',
    status: 'RiskMap v2 · historical claims, mapped hazard & provisional exposure',
    live: 'https://riskmap-vtvvsxoqbp9nxxwal4rjkh.streamlit.app/', repository: 'https://github.com/joaquinpizano/RiskMap',
  },
  {
    slug: 'pharmaopt', name: 'PharmaOpt', number: '02', category: 'HEALTHCARE · SUPPLY ANALYTICS',
    headline: 'Prioritizing pharmaceutical data for limited review capacity.',
    summary: 'A research prototype combining pharmaceutical data, experimental ranking, and transparent review-allocation assumptions.',
    technologies: ['Python', 'SQL / MySQL', 'Jupyter', 'Streamlit'],
    problem: 'Pharmaceutical supply information is distributed across public records, while the capacity to review individual packages is limited. The research question is how to integrate that information and make review priorities explicit.',
    importance: 'A useful analytical workflow must distinguish evidence, assumptions, and uncertainty. A ranking can help organize research without being mistaken for a verified shortage prediction.',
    approach: 'I use Python, SQL/MySQL, and Jupyter to clean and validate historical FDA-linked information and CMS records, engineer features, compare experimental ranking models, and explore constrained review allocation in Streamlit. The historical 2025 study includes 221,667 pharmaceutical packages.',
    status: 'Independent research prototype · 2025 study',
    live: 'https://pharmaopt.streamlit.app/', repository: 'https://github.com/joaquinpizano/pharmaopt',
  },
];
export const experience = [
  { name: 'Rock Solid Allstars', role: 'Coach', dates: '2021–2026', description: 'Coached and mentored athletes ages 6–18, developing teaching, teamwork, communication, and athlete-development skills.', type: 'ATHLETICS' },
  { name: 'Publix', role: 'Cashier', dates: 'February 2022–August 2026', description: 'Helped customers, resolved transaction questions, and supported day-to-day retail operations with clear communication.', type: 'WORK' },
  { name: 'ACBros HVAC', role: 'Summer experience', dates: 'Summer 2025', description: 'Assisted with HVAC-related field and engineering work.', type: 'WORK' },
  { name: 'Bulls Business Community', role: 'University of South Florida', dates: 'August 2026–present', description: 'Participate in student events, professional development, and conversations with fellow business students.', type: 'INVOLVEMENT' },
  { name: 'St. Petersburg Collegiate High School', role: 'Student President', dates: '2024–2025', description: 'Developed leadership and communication through student involvement and service as Student President.', type: 'LEADERSHIP' },
];
export const skills = [
  { title: 'Programming & data', items: ['Python', 'SQL', 'MySQL', 'Jupyter'] },
  { title: 'Analytics & visualization', items: ['Excel', 'Tableau', 'Data analysis', 'Data visualization'] },
  { title: 'Business & professional', items: ['Business analytics', 'Research', 'Communication', 'Leadership'] },
];
