import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    paragraph: "Recent projects:",
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    title: null,
    paragraph: `Baker's Logbook is a personal recipe-tracking application built to support 
      iteration, organization, and refinement over time. After working professionally with React
      for the past couple of years, I chose Angular and Tailwind CSS for this project to 
      step outside my comfort zone and explore a different frontend ecosystem. Most importantly, 
      it's a practical tool that I genuinely intend to use in my day-to-day life. Features are 
      implemented based on my own needs as a home baker, with an emphasis on the simplicity of 
      a traditional manual logbook.`,
    links: [
      { primary: true, label: "BAKER'S LOGBOOK", href: 'https://bakers-logbook.web.app/' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    title: null,
    paragraph: `Mini UI Kit is a small component library I designed and built to experiment with 
      combining my skill sets in frontend development and graphic design. Components were designed 
      in Figma and implemented in React, with Storybook used as a development and documentation environment.`,
    links: [
      { primary: true, label: 'DEMO', href: '/mini-ui-kit' },
      { primary: false, label: 'FIGMA', href: 'https://www.figma.com/design/iUEUiDkx3jtnYPtJyTNjjE/Mini-Component-Library?node-id=490-189' },
      { primary: false, label: 'STORYBOOK', href: 'https://www.storybook.com/example' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
];

export const Home = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default Home;
