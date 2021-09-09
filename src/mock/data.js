import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonard Ugorji | UX Designer and Developer', // e.g: 'Name | Developer'
  lang: 'en, es, fr, jp', // e.g: en, es, fr, jp
  description: 'Welcome to the UX and Coding Designer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Leonard Ugorji',
  subtitle: 'A UX and Coding Designer creating delightful user stories',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Leonard Ugorji is a Coding designer and Content Creator; who unintentionally started his career in the university, skipping lessons to design on Maya.',
  paragraphTwo:
    'He is currently a UX Designer at Centric Gateway working with the SeerBit Team. Leo is a founding member of the Inspire Innovative Cohort — a technology driven product innovation and development team, we design digital products to meet commercial needs.',
  paragraphThree:
    'I like being challenged and there is always an opportunity to learn something new in web development and that is what gets me excited about this industry. Also contribute to an open source project by proffer solutions. At my leisure, favorite things I do is playing table tennis, basketball, and spending time with friends and family.',
  resume: 'https://drive.google.com/file/d/1jGhUuiOchl2q4Hy_6mc5fjQPzBlu6T5Q/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Blinqpay Landing page Case Study',
    info: 'Landing Page is the first point of contact online for your brand, product or service which makes it the easiest way to get more customers.',
    info2:
      'With just an Idea, you can measure your target audience interest before building the actual product.',
    url: 'https://leohimsef.medium.com/blinqpay-a-conversion-optimized-landing-page-ui-ux-case-study-d7afbbb64cae',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Unihelt Medical System',
    info: 'Patients find it difficult to see a doctor majorly in Nigeria. Aside from COVID 19,  a lot of people still require other medication attention',
    info2:
      "A platform will be needed to provide for the patients' needs in terms of consultation, getting prescribed drugs, locating nearby labs for testing, and health tips to enable individuals to stay healthy",
    url: 'https://uxfol.io/project/049dd3ee/Unihelt---Manage-waiting-time-at-hospitals',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Encouraging Payment without boundaries',
    info: "Here's where I currently build payment system with promising features.",
    info2:
      'At SeerBit, payment is made seamless to cater for every business. Tailoring payment options which meets the users and their shoppers need.',
    url: 'https://seerbit.com/',
    repo: 'https://github.com/seerbit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'profile.jpg',
    title: 'UI Designs',
    info: 'Portfolio of some UI projects I played with since 2019. Including some open source projects where I contributed',
    info2: '',
    url: 'https://dribbble.com/mLeoUC',
    repo: 'https://github.com/mikhael28/paretOS', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Get in touch let's build something awesome",
  btn: "Let's Talk",
  email: 'leonardugorji@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mLeoUC',
    },
    {
      id: nanoid(),
      name: 'dribbble',
      url: 'https://dribbble.com/mLeoUC',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leohimsef/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mleou',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
