// import { Github, Twitter, Figma, Linkedin } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
// import LogoJavascript from '/public/images/logos/icon-javascript.svg';
// import LogoTypescript from '/public/images/logos/icon-typescript.svg';
// import LogoReact from '/public/images/logos/icon-react.svg';
// import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
// import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
// import LogoExpress from '/public/images/logos/icon-express.svg';
// import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
// import LogoNest from '/public/images/logos/icon-nest.svg';
// import LogoSocket from '/public/images/logos/icon-socket.svg';
// import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
// import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
// import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
// import LogoSass from '/public/images/logos/icon-sass.svg';
// import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
// import LogoFigma from '/public/images/logos/icon-figma.svg';
// import LogoLinkedin from '/public/images/logos/icon-linkedin.svg';
// import LogoCypress from '/public/images/logos/icon-cypress.svg';
// import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
// import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPmp from '/public/images/logos/certifications/pmp.png';
import LogoPmicapm from '/public/images/logos/certifications/pmicapm.png';
import LogoPmiacp from '/public/images/logos/certifications/pmiacp.png';
import LogoAwssaa from '/public/images/logos/certifications/awssaa.png';
import LogoAwscp from '/public/images/logos/certifications/awscp.png';
import LogoCspo from '/public/images/logos/certifications/cspo.png';
import LogoCsm from '/public/images/logos/certifications/csm.png';
import LogoGoogleadvanceddata from '/public/images/logos/certifications/googleadvanceddata.png';

// import LogoUpwork from '/public/images/logos/logo-upwork.svg';
// import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
// import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
// import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
// import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import LogoAmazon from '/public/images/logos/amazon-logo.jpg';
import LogoBfc from '/public/images/logos/bfc-logo.png';
import LogoCisco from '/public/images/logos/cisco-logo.png';
import LogoOptimalgreening from '/public/images/logos/optimalgreening-logo.jpg';
import LogoMoledao from '/public/images/logo/moledao-logo.png';

import LogoInsead from '/public/images/logos/INSEAD-long-logo.png';
import LogoNitc from '/public/images/logo/nitc-logo.svg';

import ProjectBridgevantage from '/public/images/project-bridgevantage.png';
import ProjectParitypulse from '/public/images/project-paritypulse.png';


// import ProjectFiskil from '/public/images/project-fiskil.png';
// import ProjectWingie from '/public/images/project-wingie.png';
// import ProjectPepehousing from '/public/images/project-pepehousing.png';

// import AvatarKrisztian from '/public/images/avatar-krisztian.png';
// import AvatarEugen from '/public/images/avatar-eugen.png';
// import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  CertificationDetails,
  EducationDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  // blah blah TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/rituann',
  GITHUB_REPO: 'https://github.com/rituann/ritu-portfolio',
  LINKEDIN: 'https://www.linkedin.com/in/rituannroy/'
  //TWITTER: 'https://twitter.com/rituann',
  //FIGMA: 'https://www.figma.com/@rituann',
  //FIGMA_FILE:
  //  'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/rituann',
  },
  // {
  //   icon: Twitter,
  //   url: 'https://twitter.com/rituann',
  // },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/rituannroy',
  },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@rituann',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Linkedin',
    logo: LogoLinkedin,
    url: 'https://www.linkedin.com/',
  },
  // {
  //   label: 'Figma',
  //   logo: LogoFigma,
  //   url: 'https://www.figma.com/',
  // },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];


export const CERTIFICATIONS: CertificationDetails[] = [
  {
    label: 'PMP',
    logo: LogoPmp,
    url: 'https://www.credly.com/badges/bba611a7-61d7-4489-ab70-9affd1cc8d54/linked_in_profile',
  },
  {
    label: 'PMI-CAPM',
    logo: LogoPmicapm,
    url: 'https://www.credly.com/badges/201fcc8d-e3e6-4b98-8682-f60c36f2ebed/public_url',
  },
  {
    label: 'PMI-ACP',
    logo: LogoPmiacp,
    url: 'https://www.credly.com/badges/e0b41527-ebff-4bfd-a360-8da75b59c7cb/public_url',
  },
  {
    label: 'CSPO',
    logo: LogoCspo,
    url: 'https://bcert.me/bc/html/show-badge.html?b=coquhqis',
  },
  {
    label: 'CSM',
    logo: LogoCsm,
    url: 'https://bcert.me/bc/html/show-badge.html?b=esfntgjs',
  },
  {
    label: 'AWS Solutions Architect - Associate',
    logo: LogoAwssaa,
    // darkModeLogo: LogoExpressLight,
    url: 'https://www.credly.com/badges/50effa54-08a6-477d-8a23-ccf8df80f88a/linked_in_profile',
  },
  {
    label: 'AWS Cloud Practitioner',
    logo: LogoAwscp,
    url: 'https://www.credly.com/badges/257c1e27-c47a-48a9-9925-9e6aa3430b27/public_url',
  },
  {
    label: 'Google Advanced Data Analytics',
    logo: LogoGoogleadvanceddata,
    // darkModeLogo: LogoSocketLight,
    url: 'https://www.coursera.org/account/accomplishments/specialization/D67Y9V7KMV9S',
  },
];


export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAmazon,
    logoAlt: 'Amazon logo',
    position: 'Sr. Product Manager (MBA Internship)',
    startDate: new Date(2025, 6),
    endDate: new Date(2025, 8),
    // currentlyWorkHere: true,
    summary: [
      'Owned operational strategy & global supply chain partner expansion for Amazon Haul, Amazon’s latest ultra-low cost marketplace, scaling selection, sourcing, and launch readiness across the UK and EU with direct fulfilment from China. ',
      'Product, Growth & Strategy',
      '• Owned UK expansion strategy and direct partner integrations, contributing to $200M+ in projected gross merchandise sales through category diversification and large-scale retail partnerships. ',
      '• Defined EU selection and sourcing strategy for direct fulfilment from China, including supplier onboarding criteria, assortment prioritization, and category-level operating models ',
      '• Developed customer personas, value hypotheses, and early GTM signals for Gen-Z value retail using internal data and GenAI-enabled capabilities ',
      'Execution & Cross-Functional Leadership ', 
      '• Partnered with Operations, Technology, Legal, Fashion, and Marketing teams to align commercial terms, regulatory readiness, and launch sequencing across EU markets ',
      '• Owned roadmap dependencies, launch requirements, and success metrics across multiple senior stakeholders',
    ],
  },
  {
    logo: LogoBfc,
    // darkModeLogo: LogoGreenApexLight,
    logoAlt: 'BFC logo',
    position: 'Manager - IT Projects',
    startDate: new Date(2023, 2),
    endDate: new Date(2024, 11),
    summary: [
      'Largest forex firm in Bahrain, acquired by Al Ansari Exchange (UAE) in 2025. Owned platform modernization and  multi-market agile product delivery for mission-critical transaction systems across Bahrain, Kuwait, and India in a highly regulated fintech environment.',
      'Product & Strategic Initiatives ',
      '• Led accelerated integration of a currency exchange platform for Kuwaiti airline Jazeera Airways in 6 weeks (25% ',
      'ahead of plan), owning partner coordination and FX customer journey integration across booking and post-booking ',
      'flows, unlocking a new B2B airline revenue channel. ',
      '• Owned phased rollout of branch-level transaction platforms across three countries, reducing average customer ',
      'wait times by 30% ',
      '• Drove 67% improvement in production release cadence by standardizing product delivery and deployment ',
      'processes across regions ',
      '• Optimized core transaction flows, reducing backend processing and savings execution time by 70% ',
      'Operational Resilience & Risk ',
      '• Led a board-visible data migration initiative, achieving 80% infrastructure cost savings through database and storage optimization ',
      '• Eliminated customer-visible downtime during peak salary disbursement windows through cloud scalability planning, traffic management, and release readiness ',
      'People, Process & Stakeholder Leadership ',
      '• Built and led a 20-member cross-functional team, improving same-day issue resolution by 80% ',
      '• Drove organization-wide adoption of Agile scrum practices, reducing meeting overhead by 75% ',
      '• Served as executive liaison with regulators and partners including Benefit, PACI (Kuwait), Rateb, and IGA (Bahrain) ',
    ],
  },
  {
    logo: LogoCisco,
    logoAlt: 'Cisco logo',
    position: 'Software Engineer',
    startDate: new Date(2021, 8),
    endDate: new Date(2023, 1),
    summary: [
      'Software engineer on cloud-native firewall and security intelligence products, building scalable and highly reliable security platforms for enterprise customers.',
      'Designed and shipped cloud-based security intelligence components incorporating machine learning, improving intrusion detection effectiveness by 40%. ',
      '• Promoted to Scrum Master within four months, leading Agile execution for distributed engineering teams across the US and India ',
      '• Improved sprint velocity by 25% through delivery process improvements and peer programming ',
      '• Reduced critical issue resolution cycles to one week by introducing structured triage and daily coordination, ',
      'resolving 40+ customer-impacting defects ',
   ],
  },
  {
    logo: LogoCisco,
    logoAlt: 'Cisco logo',
    position: 'Software Engineer Intern',
    startDate: new Date(2020, 6),
    endDate: new Date(2020, 7),
    summary: [
      '• Improved malware detection performance by 10% and increased test coverage by 20% ',
      '• Selected as one of five Global Interns to represent the cohort at Cisco’s Annual Intern Meet with the CEO',
    ],
  },
];

// export const EXPERIENCES: ExperienceDetails[] = [
//   {
//     logo: LogoUpwork,
//     logoAlt: 'Upwork logo',
//     position: 'Independent Freelancer',
//     startDate: new Date(2021, 10),
//     currentlyWorkHere: true,
//     summary: [
//       'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
//       'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
//     ],
//   },
//   {
//     logo: LogoGreenApex,
//     darkModeLogo: LogoGreenApexLight,
//     logoAlt: 'Greenapex logo',
//     position: 'Team Lead',
//     startDate: new Date(2017, 6),
//     endDate: new Date(2021, 9),
//     summary: [
//       'Acted as team lead in different projects.',
//       'Brainstormed new ideas & gathered requirements for internal projects.',
//       'Designed architecture of different projects (frontend + backend).',
//       'Worked on enterprise-level projects for a variety of clients.',
//       'Handled sprint planning & task distribution.',
//     ],
//   },
//   {
//     logo: LogoDotnpixel,
//     darkModeLogo: LogoDotnpixelLight,
//     logoAlt: 'Dotnpixel logo',
//     position: 'Full Stack Developer',
//     startDate: new Date(2015, 11),
//     endDate: new Date(2017, 4),
//     summary: ['Worked as a full stack developer (React / Laravel).'],
//   },
// ];


INSEAD                                                                                                                              
MBA Class of December 2025                                                                                                                                                         

MBA Consulting Assignments undertaken:  
Strategy Consultant, Moledao                                                                                                          
Nov 2025 
Moledao is a Web3 & Blockchain community, operating under Bybit, one of the world’s top cryptocurrency exchanges 
• Conducted strategic research on tokenomics, incentive engineering, governance models, user segmentation, 
behavioural analytics, emerging market trends, competitive intelligence, and sustainability levers for Moledao’s 
market expansion 
External Consultant, Optimal Greening Foundation                                                                      
NGO based in Nigeria, delivering clean water, sanitation, and renewable energy solutions                                                              
Jun 2025                                                                                                                  
• Built fundraising pipeline and enabled data-driven donor reporting for clean water access to 5,000+ people by 
designing an impact measurement framework for the flagship WASH initiative across two underserved communities  






export const PROJECTS: ProjectDetails[] = [
  {
    name: 'BridgeVantage',
    description:
      'blah blah.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'ParityPulse',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Factograde',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: 'Krisztian Gyuris',
//     personAvatar: AvatarKrisztian,
//     title: 'Founder - inboxgenie.io',
//     testimonial:
//       'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Ritu and will rehire in the future for Frontend development.',
//   },
//   {
//     personName: 'Eugen Esanu',
//     personAvatar: AvatarEugen,
//     title: 'Founder - shosho.design',
//     testimonial:
//       'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
//   },
//   {
//     personName: 'Joe Matkin',
//     personAvatar: AvatarDummy,
//     title: 'Freelancer',
//     testimonial:
//       'Ritu was extremely easy and pleasant to work with and he truly cares about the project being a success. Ritu has a high level of knowledge and was able to work on my MERN stack application without any issues.',
//   },
// ];

export const EDUCATION: EducationDetails[] = [
  {
    logo: LogoInsead,
    logoAlt: 'INSEAD logo',
    college: 'INSEAD Business School',
    location: 'France & Singapore',
    degree: 'MBA Class of December 2025',
    startDate: new Date(2025, 1),
    endDate: new Date(2025, 12),
    // currentlyWorkHere: true,
    summary: [

      '• President: Tech Media and Telecom (TMT) Club, Founder and Lead, TMT Tech Talks global webinar series',               
      '• Class Career Representative, VP: Artificial General Intelligence (AGI) Interest Group', 
      '• Selected in Women Impact Network (Kearney Middle East), Semi-finalist at INSEAD Roland Berger Case Competition, OpenSpace VC Mentorship (Singapore)', 
      '• Recipient: INSEAD Judith Connelly Endowed Scholarship for Outstanding Women ',
    ],
  },
  {
    logo: LogoInsead,
    logoAlt: 'NITC logo',
    college: 'National Institute of Technology Calicut (NITC)',
    location: 'India',
    degree: 'BTech Electronics and Communication Engineering',
    startDate: new Date(2017, 7),
    endDate: new Date(2021, 6),
    // currentlyWorkHere: true,
    summary: [
      '• CGPA 9.47/10, University Top 1%, All India Rank 8768 in 2017 Joint Entrance Exam among 1.3 million candidates',
      '• Spearheaded efforts during the COVID-19 pandemic, coordinating academic and recruitment drives among 1,000+ students, faculty, and the career department as the elected college representative',
      '• AI Research Publication: Developed a new LSTM based automated natural language processing (NLP) text scoring system, research presented in 2022 IEEE International Conference on Artificial Intelligence (IAICT), Indonesia',
    ],
  },
];
