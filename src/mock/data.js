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
  subtitle: 'A UX-UI and coding designer improving the lives of others.',
  // subtitle: 'A UX and Coding Designer who help people use products easily.',
  // subtitle: 'A UX and Coding Designer creating seamless products',
  // subtitle: 'A UX and Coding Designer creating delightful user stories',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'LeonardProfile.jpg',
  paragraphOne:
    'Leonard Ugorji is a Coding Designer and Content Creator; who unintentionally started his career in the university, skipping lessons to design on Maya.',
  paragraphTwo:
    'He is currently a UX Designer at Centric Gateway working with the SeerBit Team. Leo is a founding member of the Inspire Innovative Cohort — a technology driven product innovation and development team, we design digital products to meet commercial needs.',
  paragraphThree:
    'I like being challenged creating that opportunity to learn something new and that is what gets me excited about this industry. Also contribute to an open source project to proffer solutions. At my leisure, I play table tennis, basketball, and spend time with friends & family.',
  resume: 'https://drive.google.com/file/d/1jGhUuiOchl2q4Hy_6mc5fjQPzBlu6T5Q/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SeerBit.jpg',
    title: 'Encouraging Payment without boundaries',
    info: "Here's where I currently build diverse payment features. At SeerBit, payment is seamless and tailored to meet individuals need. ",
    info2: 'UI/UX DESIGN | CUSTOMER-FACING APP',
    url: 'https://seerbit.com/',
    repo: 'https://github.com/seerbit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Blinqpay.jpg',
    title: 'Embracing effective and simple ways to attract more customers.',
    info: "Here's my opinion about landing page which is the first touch point for your brand, product or service.",
    info2: 'UI/UX DESIGN | CUSTOMER-FACING APP',
    url: 'https://mleouc.medium.com/blinqpay-a-conversion-optimized-landing-page-ui-ux-case-study-d7afbbb64cae',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Unihelt.jpg',
    title: 'Reducing the wait time at the health providers',
    info: 'Here is how I help patients minimize the time spent waiting to see a doctor.',
    info2: 'UI/UX DESIGN',
    url: 'https://uxfol.io/project/049dd3ee/Unihelt---Manage-waiting-time-at-hospitals',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UbaOpenAPI.jpg',
    title: 'Enhancing financial services and processes in Africa',
    info: "Here's I helped the Nigerian pan-African financial services group revolutionize banking APIs",
    // info: 'Portfolio of some UI projects I played with since 2019. Including some open source projects where I contributed',
    info2: 'UI/UX DESIGN | CUSTOMER-FACING APP | HTML | CSS | REACT | Bootstrap',
    url: 'https://developer.ubaopenbanking.com/',
    // repo: 'https://github.com/mikhael28/paretOS', // if no repo, the button will not show up
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
      url: 'https://github.com/mleouc',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
