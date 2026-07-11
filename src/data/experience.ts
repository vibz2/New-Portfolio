export interface Role {
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
}

export interface Employer {
  id: string;
  name: string;
  dates: string;
  location?: string;
  roles: Role[];
  tags: string[];
}

export const experience: Employer[] = [
  {
    id: "icorps",
    name: "NSF I-Corps Hub Mid-Atlantic Region",
    dates: "Jun 2026 – Present",
    location: "Hybrid",
    tags: ["Python", "SQL", "FastAPI", "Alembic", "SQLAlchemy", "Docker", "AWS S3"],
    roles: [
      {
        title: "Back End Developer",
        dates: "Jun 2026 – Present",
        location: "Hybrid",
        bullets: [
          "Engineered backend infrastructure using FastAPI, creating modular routers, RESTful APIs, and WebSocket pipelines for real-time communication",
          "Designed relational database systems with SQLAlchemy ORM, defining models and schemas while managing migrations through Alembic",
          "Built data persistence workflows using Redis and AWS S3 object storage to enable efficient retrieval of application resources",
          "Performed API validation, debugging, and load testing using SwaggerUI and custom testing workflows to improve backend reliability",
          "Integrated backend endpoints with React frontend applications through JavaScript service layers, collaborating across the full-stack pipeline",
        ],
      },
    ],
  },
  {
    id: "hardwarelumber",
    name: "Hardware & Lumber Limited",
    dates: "Jun 2025 – Aug 2025",
    location: "Internship",
    tags: ["Python", "SQL", "Javascript", "Google Apps Script", "IBM DB2", "IBM iSeries", "Inno Setup"],
    roles: [
      {
        title: "Software Engineer",
        dates: "Jun 2025 – Aug 2025",
        location: "Internship",
        bullets: [
          "Engineered a Python and SQL script to query real-time inventory from the S2K database, calculate reorder points from historical max stock data, and automate low-stock email alerts to branch and regional managers nationwide",
          "Developed a Google Sheets extension in JavaScript to automate quote generation from multiple sheets and dynamically populate Google Docs templates from customer orders",
          "Adapted the extension to the company's Microsoft ecosystem — migrated to Excel using VBA, a mapped network drive of Word templates, and automated delivery through Outlook",
          "Saved over $2,000 in labor by processing a backlog of 600+ quotes and archiving them to shared drives",
          "Built a Python tool using Pillow to batch-compress network-stored images and transfer them to an IBM iSeries folder, with automated source cleanup",
          "Packaged the image compression utility as a standalone .exe and deployed it as a custom Windows installer via Inno Setup for multi-device rollout",
        ],
      },
    ],
  },
  {
    id: "childrensnational",
    name: "Children's National Hospital",
    dates: "Sep 2024 – May 2025",
    tags: ["Python", "FastAPI", "React.tsx", "Supabase", "CSS", "Tailwind CSS", "SASS"],
    roles: [
      {
        title: "Full Stack Engineer",
        dates: "Feb 2025 – May 2025",
        bullets: [
          "Created a FastAPI backend service to integrate a brain scan ML model into the hospital platform, enabling automated medical image processing and API-based inference using NumPy and Nibabel",
          "Built a responsive, paginated web interface for data visualization using React, FastAPI, and Supabase",
          "Implemented a secure registration system with user authentication via Supabase and React Router DOM",
          "Collaborated in a 15-member Agile development team using Git to build and ship production React components",
        ],
      },
      {
        title: "Frontend Developer",
        dates: "Sep 2024 – Feb 2025",
        bullets: [
          "Developed responsive, modular React components with SASS and media queries, including interactive upload cards and dynamic data tables",
          "Integrated Supabase for authentication and simulated PACS system queries to securely retrieve and manage medical images",
          "Communicated with hospital representatives to adapt features based on user feedback and clinical needs",
        ],
      },
    ],
  },
  {
    id: "appdevclub",
    name: "App Development Club",
    dates: "Jan 2024 – May 2024",
    tags: ["Python", "React.js", "Javascript", "MongoDB", "CSS"],
    roles: [
      {
        title: "Bootcamp Member",
        dates: "Jan 2024 – May 2024",
        bullets: [
          "Designed a personal portfolio with React and CSS styling, implementing local storage, animated effects, and responsive routing",
          "Developed an interactive calendar using CSS grid and flexbox styling",
          "Manipulated MongoDB databases to facilitate more secure data storage",
        ],
      },
    ],
  },
  {
    id: "hillel",
    name: "Hillel Academy",
    dates: "Sep 2021 – Apr 2023",
    location: "Kingston, Jamaica",
    tags: ["Leadership", "Mentorship", "Public Speaking"],
    roles: [
      {
        title: "Peer Counseling Organization Founder",
        dates: "Sep 2021 – Apr 2023",
        bullets: [
          "Defined a curriculum to grade over 30 students to become peer counselors",
          "Composed two assessments — drama-club skits testing students on real-life situations, and practical multiple-choice tests",
          "Brought in the head of the Guidance Counselor Association of Jamaica to officiate the peer counselors",
        ],
      },
      {
        title: "Head Boy",
        dates: "Feb 2022 – Mar 2023",
        bullets: [
          "Led a prefect body of 50 students with an executive team of 6, increasing discipline compliance by 80% across a student body of 300+",
          "Organized major school initiatives including Spirit Week, the Talentless Talent Show, and Panther Day of Play",
          "Acted as mediator in student conflict, improving communication between prefects and school administration",
        ],
      },
      {
        title: "Vice President of Student Ambassadors",
        dates: "Feb 2022 – Mar 2023",
        location: "Kingston, Jamaica",
        bullets: [
          "Organized a body of over 40 students, running initiatives — field trips, movie nights, gift giveaways — to make foreign students feel included on campus",
        ],
      },
    ],
  },
];
