// CV data extracted from your PDF
export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  details?: string[];
  description?: string;
}

export const cvData = {
  contact: {
    address: "108 College St W1140, Vector Institute, University of Toronto",
    city: "Toronto, ON M5G 0C6",
    phone: "+1 (437) 984-2899",
    email: "mohammad.yaghini@mail.utoronto.ca",
    website: "https://m-yaghini.github.io"
  },

  researchInterests: [
    "Trustworthy Machine Learning",
    "Algorithmic Fairness",
    "Differential Privacy"
  ],

  education: [
    {
      degree: "Ph.D. Candidate, Electrical and Computer Engineering",
      institution: "University of Toronto",
      location: "Toronto, Canada",
      date: "October 2020 - May 2026 (expected)",
      details: [
        'Dissertation Topic: "Multi-objective and Multi-agent ML Trustworthiness"',
        "Advisor: Nicolas Papernot"
      ]
    },
    {
      degree: "Master's in Data Science",
      institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
      location: "Lausanne, Switzerland",
      date: "October 2019",
      details: [
        'Thesis Topic: "A Human-in-the-loop Framework to Construct Context-dependent Mathematical Formulations of Fairness"',
        "Advisors: Andreas Krause, Hoda Heidari"
      ]
    },
    {
      degree: "B.Sc. in Electrical Engineering",
      institution: "Isfahan University of Technology",
      location: "Isfahan, Iran",
      date: "April 2016",
      details: [
        'Thesis Topic: "An Energy-Efficient Cooperative Mechanism for Device-to-Device Communications"',
        "Advisor: Mohammad Hossein Manshaei"
      ]
    }
  ],

  awards: [
    {
      title: "Meta PhD Research Fellowship in Security and Privacy",
      date: "February 2022"
    },
    {
      title: "Schwartz Reisman Institute for Technology and Society Graduate Fellowship",
      date: "September 2021"
    }
  ],

  advisory: [
    {
      name: "Wanru Zhao",
      role: "PhD Research Intern (University of Cambridge)",
      date: "Feb. – Sept. 2025",
      // project: "To Achieve Truly Generalist Models, We Need to Incentivize Collaboration Through Fair Revenue Sharing (NeurIPS 2025 Workshop on Algorithmic Collective Action)"
    },
    {
      name: "Augustin Godinot",
      role: "PhD Research Intern (INRIA Rennes)",
      date: "May – Sept. 2025",
      // project: "∆-Audits: Adaptive and Manipulation-Proof Performance Monitoring (upcoming)"
    },
    {
      name: "Angéline Pouget",
      role: "Master Thesis (ETHZ)",
      date: "May – Dec. 2024",
      // project: "Suitability Filter: A Statistical Framework for Model Evaluation in Real-World Deployment Settings (Oral in ICML 2025)"
    },
    {
      name: "Tudor Cebere",
      role: "PhD Research Intern (INRIA Montpelier)",
      date: "Sept. – Dec. 2023",
      // project: "Private Rate-Constrained Optimization with Applications to Fair Learning (preprint)"
    },
    {
      name: "Patty Liu",
      role: "Undergraduate Researcher (UoT EngSci)",
      date: "May 2022 – Dec. 2023",
      // project: "Trustworthy ML Regulation as a Principle-Agent Problem (FAccT2025); Learning to Walk Impartially on the Pareto Frontier of Fairness, Privacy, and Utility (NeurIPS RegML 2023)"
    }
  ],

  academicService: {
    organizer: [
      {
        title: "Governance Mechanisms Workshop, 2025",
        link: "https://cleverhans.io/gov-mech",
        date: "April 30—May 1, 2025"
      }
    ],
    programCommittee: [
      "IEEE SatML 2023",
      "IEEE S&P 2023"
    ],
    reviewer: [
      "NeurIPS 2025, ICML 2025, ICLR 2025, ICML 2024, NeurIPS 2023, JMLR",
      "NeurIPS Workshop on Privacy in ML 2021"
    ],
    externalReviewer: [
      "NeurIPS 2021, USENIX Security 2021, IEEE S&P 2022"
    ]
  },

  experience: [
    {
      title: "Research Assistant to Nicolas Papernot (CleverHans Lab)",
      institution: "University of Toronto & Vector Institute",
      location: "Toronto, Canada",
      date: "Sep. 2020 – Present",
      description: "Technical ML Governance, Intellectual Property of ML Models, Privacy, Algorithmic Fairness."
    },
    {
      title: "Research Intern with Florian Tramèr (Secure and Private AI Lab)",
      institution: "ETH Zurich",
      location: "Zurich, Switzerland",
      date: "Jun. 2023 – Sep. 2023",
      description: "Systematic Canary Design for Auditing Differential Privacy Guarantees."
    },
    {
      title: "Research Intern with Reza Shokri (Privacy and Trust Group)",
      institution: "National University of Singapore (Remote)",
      location: "Remote",
      date: "Mar. 2020 – Sep. 2020",
      description: "Human-in-the-loop Explainable Machine Learning."
    },
    {
      title: "Master Thesis with Andreas Krause (Learning and Adaptive Systems)",
      institution: "ETH Zurich",
      location: "Zurich, Switzerland",
      date: "Mar. 2019 – Aug. 2019",
      description: "Context-dependent mathematical formulations of fairness."
    },
    {
      title: "Research Assistant with Carmela Troncoso (Security and Privacy Engineering Lab)",
      institution: "EPFL",
      location: "Lausanne, Switzerland",
      date: "Oct. 2017 – Dec. 2019",
      description: "Quantifying privacy vulnerability and disparity in ML models and defenses."
    },
    {
      title: "Research Assistant with Robert West (Data Science Lab)",
      institution: "EPFL",
      location: "Lausanne, Switzerland",
      date: "Feb. 2018 – Jun. 2018",
      description: "Designing mechanisms for truthful judgment aggregation to detect misinformation."
    },
    {
      title: "Research Assistant with Boi Faltings (Artificial Intelligence Laboratory)",
      institution: "EPFL",
      location: "Lausanne, Switzerland",
      date: "Feb. 2017 – Aug. 2017",
      description: "Building a convex fairness metric for classifiers."
    },
    {
      title: "Research Assistant with Mohammad Hossein Manshaei (Game Theory & Mechanism Design Group)",
      institution: "Isfahan University of Technology",
      location: "Isfahan, Iran",
      date: "Sep. 2014 – Aug. 2016",
      description: "Designed game-theoretic mechanisms to incentivize device-to-device communication for 5G networks."
    }
  ],

  teaching: [
    {
      title: "Course Instructor",
      course: "ECE421 Introduction to Machine Learning",
      institution: "University of Toronto",
      date: "Fall 2022",
      responsibilities: "Weekly in-person lectures and office hours, exam design"
    },
    {
      title: "Teaching Assistant (Nicolas Papernot, Brendan Frey, Ashish Khisti)",
      course: "ECE421 Introduction to Machine Learning",
      institution: "University of Toronto",
      date: "Fall 2023, 2024, 2025",
      responsibilities: "Substitute lecturer, holding office-hours, exam design validation and grading"
    },
    {
      title: "Graduate Seminar Assistant (Nicolas Papernot)",
      course: "ECE1784/CSC2559 Trustworthy Machine Learning",
      institution: "University of Toronto",
      date: "Fall 2021",
      responsibilities: "Assisting students on presentation preparation, giving feedback on project proposals, grading project reports and poster presentations"
    },
    {
      title: "Head Teaching Assistant & Course Development (Nicolas Papernot)",
      course: "ECE421 Introduction to Machine Learning",
      institution: "University of Toronto",
      date: "Jun. 2021 – Dec. 2021",
      responsibilities: "Designing coding exercises, coordinating and finalizing homework and exam grading"
    },
    {
      title: "Teaching Assistant (Mohammad Hossein Manshaei)",
      course: "Game Theory (Graduate)",
      institution: "Isfahan University of Technology",
      date: "Fall 2015, 2016",
      responsibilities: "Homework design, grading, and problem-solving sessions"
    },
  ],
  teachingUndergrad: [
    {
      title: "Teaching Assistant (Mohammadali Khosravifard)",
      course: "Signals and Systems",
      institution: "Isfahan University of Technology",
      date: "Fall 2015",
      responsibilities: "Designing homework problems and holding problem-solving sessions"
    },
    {
      title: "Teaching Assistant (Mohammad Dakhilalian)",
      course: "Principles of Communication Systems",
      institution: "Isfahan University of Technology",
      date: "Fall 2014",
      responsibilities: "Designing and grading computer-simulation assignments in Matlab and Simulink"
    },
    {
      title: "Teaching Assistant (Mohammadali Khosravifard, Masoud Omoomi)",
      course: "Electric Circuits II",
      institution: "Isfahan University of Technology",
      date: "Fall 2013",
      responsibilities: "A semester-long course Introduction to Circuit Analysis using Matlab and PSpice, grading computer homeworks and projects"
    }
  ],

  industry: [
    {
      title: "Privacy Research Intern",
      company: "Microsoft Research",
      location: "Cambridge, UK (Remote)",
      date: "June – Sept. 2022",
      description: "Analysis and empirical estimation of differential privacy trade-off curves for machine learning."
    },
    {
      title: "Junior Data Scientist",
      company: "Expedia",
      location: "Geneva, Switzerland",
      date: "Sept. 2018 – Feb. 2019",
      description: "Building statistical models for advanced time-series forecasting using Spark."
    }
  ],

  talks: [
    {
      title: "Scalable and Principled Design of Privacy Canaries",
      venue: "Vector Institute, Toronto, Canada",
      date: "October 24, 2025"
    },
    {
      title: "Suitability Filter: A Statistical Framework for Model Evaluation in Real-World Deployment Settings",
      venue: "Vector Institute, Toronto, Canada",
      date: "October 2, 2025"
    },
    {
      title: "Privacy, Fairness, and Incentives: An Optimization Perspective on Trustworthy ML",
      venue: "Max Planck Institute for Intelligent Systems, Tübingen, Germany",
      date: "April 17, 2025"
    }
  ]
};
