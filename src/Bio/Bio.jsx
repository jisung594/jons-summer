import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    paragraph: "Hi, my name is Jon.",
    background: '#000000',
    imageUrl: null,
  },
  {
    paragraph: "Due to federal budget cuts earlier in the year, the company I had worked at for about four years was affected and I was laid off. They're a one-of-a-kind company with an amazing culture, and I owe a lot of my growth during the past couple of years to them.",
    background: '#000000',
    imageUrl: null,
  },
  {
    paragraph: "Surprisingly enough, I am wholeheartedly enjoying my funemployment. I've been...",
    background: '#000000',
    imageUrl: null,
  },
  {
    paragraph: "learning to bake loaves of bread and paint furniture",
    background: '#000000',
    imageUrl: null,
  },
  {
    title: "country loaf",
    paragraph: null,
    background: 'transparent',
    imageUrl: `${process.env.PUBLIC_URL}/images/country_loaf.jpeg`,
  },
  {
    title: "a rusty barstool & an old coffee table",
    paragraph: null,
    background: 'transparent',
    imageUrl: `${process.env.PUBLIC_URL}/images/painting_yellow.jpeg`,
  },
  {
    paragraph: "tending to our patio garden and taking my dog on longer walks",
    background: '#000000',
    imageUrl: null,
  },
  {
    title: "basil, mint, moonflowers, morning glories, nasturtiums, scotch bonnet peppers, sunflowers, tomatillos, tomatoes, and zinnias",
    paragraph: null,
    background: 'transparent',
    imageUrl: `${process.env.PUBLIC_URL}/images/patio.jpeg`,
  },
  {
    title: "Eddie likes chicken and french fries (and most foods, except fruits + vegetables)",
    paragraph: null,
    background: 'transparent',
    imageUrl: `${process.env.PUBLIC_URL}/images/eddie.jpeg`,
  },
  {
    paragraph: "This opportunity did give me a clearer headspace to re-evaluate my personal goals, including those as a web developer. I've always looked to work my background in graphic design into my dev work where I can, so I decided to build a mini component library as a fun personal project / portfolio piece. I used Figma to design my components and Storybook to build and style them.",
    background: '#38A3A5',
    imageUrl: null,
  },
  {
    title: null,
    paragraph: null,
    links: [
      { primary: true, label: 'DEMO', href: '/mini-ui-kit' },
      { primary: false, label: 'FIGMA', href: 'https://www.figma.com/design/iUEUiDkx3jtnYPtJyTNjjE/Mini-Component-Library?node-id=490-189' },
      { primary: false, label: 'STORYBOOK', href: 'https://www.storybook.com/example' }
    ],
    background: '#f1f1f1',
    imageUrl: null,
  },
  {
    title: "thank you :)",
    paragraph: null,
    background: '#f1f1f1',
    imageUrl: null,
  },
];

export const Bio = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default Bio;
