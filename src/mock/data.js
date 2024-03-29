import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonard Ugorji | UX Designer', // e.g: 'Name | Developer'
  lang: 'en, es, fr, jp', // e.g: en, es, fr, jp
  description: 'Welcome to the UX and Coding Designer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Leonard Ugorji',
  // subtitle: 'A UX-UI and coding designer improving the lives of others.',
  // subtitle: 'A UX and Coding Designer who help people use products easily.',
  // subtitle: 'A UX and Coding Designer creating seamless products',
  subtitle: 'A User Experience Designer creating delightful user stories',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'LeoImage.jpg',
  paragraphOne:
    'I am a UX/UI Designer and UI Developer, unintentionally started my career in the university. Fun fact: I skipped lessons to design on Maya. 😄',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/18I38RHQzj0XiLb6PT33Fjh4GC9tfIk7R/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Unihelt.jpg',
    title: 'Reducing the wait time at the health providers',
    info: 'Helps patients minimize the time spent waiting to see a doctor.',
    info2: 'UI/UX DESIGN',
    url: 'https://uxfol.io/project/049dd3ee/Unihelt---Manage-waiting-time-at-hospitals',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Blinqpay.jpg',
    title: 'Embracing effective and simple ways to attract more customers.',
    info: 'Opinion about landing page which is the first touch point for your brand, product or service.',
    info2: 'UI/UX DESIGN | CUSTOMER-FACING APP',
    url: 'https://leouonline.medium.com/blinqpay-a-conversion-optimized-landing-page-ui-ux-case-study-d7afbbb64cae',
    // repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SeerBit.jpg',
    title: 'Encouraging Payment without boundaries',
    info: 'Currently build diverse payment features. At SeerBit, payment is seamless and tailored to meet individuals need. ',
    info2: 'UI/UX DESIGN | CUSTOMER-FACING APP',
    url: 'https://seerbit.com/',
    repo: 'https://github.com/seerbit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UbaOpenAPI.jpg',
    title: 'Enhancing financial services and processes in Africa',
    info: 'Helped the Nigerian pan-African financial services group revolutionize banking APIs',
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
      url: 'https://twitter.com/leoactionz',
    },
    {
      id: nanoid(),
      name: 'dribbble',
      url: 'https://dribbble.com/leoactionz',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://leoactionz.medium.com/',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/leoactionz',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leoactionz/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
