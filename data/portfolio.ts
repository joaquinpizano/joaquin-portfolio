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
    slug: 'riskmap', name: 'RiskMap', number: '01', category: 'INSURANCE · RISK ANALYTICS',
    headline: 'Understanding exposure starts with understanding the data.',
    summary: 'A FEMA NFIP policy audit examining geographic coverage, source-field reconciliation, and the limits of exposure analysis.',
    technologies: ['Python', 'Data validation', 'FEMA NFIP data'],
    problem: 'A ZIP code does not establish county membership. In ZIP 33708, filtering policy records to confirmed Pinellas geography leaves out records with missing geographic identifiers. That affects the coverage of any analysis built on the filtered data.',
    importance: 'Before drawing conclusions about exposure, the records need to reconcile. Understanding what is included, what is excluded, and why is part of the analytical result.',
    approach: 'I used Python-based data analysis to investigate 2024 effective-year FEMA NFIP public records for Florida ZIP 33708, using the September 8, 2026 source snapshot. The workflow validates geographic identifiers against the Pinellas census GEOID prefix 12103, reconciles record IDs and policyCount totals, and explicitly classifies missing, outside-county, and malformed geography. Documented exposure methodology and data-quality limitations explain what the resulting measures can support and where interpretation remains constrained.',
    status: '2024 effective-year audit · ZIP 33708',
    live: null, repository: 'https://github.com/joaquinpizano/RiskMap',
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
