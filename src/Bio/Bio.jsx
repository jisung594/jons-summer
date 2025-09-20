import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import styles from './Bio.module.css';
import { MyButton } from '../stories/MyButton/MyButton';

// This is the data array for the scrolling steps, based on your content.
const stepData = [
  {
    paragraph: "Hi, my name is Jon.",
    // background: '#22577A',
    background: '#000000',
    // background: 'linear-gradient(45deg, rgba(24, 28, 20, 1) 0%, rgba(60, 61, 55, 1) 100%)',
    // background: 'conic-gradient(from 90deg, #22577A, #38A3A5)',
  
    imageUrl: null,
  },
  {
    paragraph: "Due to federal budget cuts earlier in the year, the company I had worked at for about four years was affected and I was laid off. They're a one-of-a-kind company with an amazing culture, and I owe a lot of my growth during the past couple of years to them.",
    // background: '#22577A',
    background: '#000000',
    // background: 'linear-gradient(-45deg, rgba(34, 87, 122, 1) 0%, rgba(20, 50, 70, 1) 100%)',
    imageUrl: null,
  },
  {
    paragraph: "Surprisingly enough, I am wholeheartedly enjoying my funemployment. I've been...",
    // background: '#22577A',
    background: '#000000',
    imageUrl: null,
  },
  {
    paragraph: "learning to bake loaves of bread and paint furniture",
    // background: '#22577A',
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
    // background: '#22577A',
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
      { primary: true, label: 'DEMO', href: 'https://www.jonjichoi.com/miniuikit' },
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
  const [currentStep, setCurrentStep] = useState(0);

  // This function is called by Scrollama when a step enters the viewport.
  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div className={styles.bioContainer}>
      {/* Sidebar with dot navigation */}
      <div className={styles.bioSidebar}>
        {stepData.map((_, i) => (
          <div
            key={i}
            className={`${styles.scrollamaDot} ${currentStep === i ? styles.activeDot : ''}`}
          />
        ))}
      </div>

      {/* Holds fixed background images. */}
      <div className={styles.imageBackgroundContainer}>
        {stepData.map((data, i) => (
          <img
            key={i}
            src={data.imageUrl || null} // Use an empty string if no image URL is provided
            alt={data.title || ''}
            className={`${styles.scrollytellingImageFixed} ${currentStep === i && data.imageUrl ? styles.scrollytellingImageActive : ''}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1920x1080/d7c4b0/000000?text=Error';
            }}
          />
        ))}
      </div>

      {/* Main Scrollama wrapper for text content */}
      <div className={styles.bioTextSections}>
        <Scrollama
          onStepEnter={onStepEnter}
          offset={0.1} // Triggers when step is at 10% of the viewport height
        >
          {stepData.map((data, i) => (
            <Step key={i} data={i}>
              <div
                className={styles.fullHeightStep}
                style={{ 
                  background: data.background,
                  minHeight: data.imageUrl ? '200vh' : '100vh',
                }}
              >
                <div className={`${styles.textContent} ${data.links && styles.projectLinkStep}`}>
                  {data.title && <span>{data.title}</span>}
                  {data.paragraph && <p>{data.paragraph}</p>}
                  {
                    data.links && (
                      data.links.map((buttonItem, index) => (
                        <MyButton 
                          key={index} 
                          primary={buttonItem.primary} 
                          label={buttonItem.label} 
                          className={styles.projectLinkCta} 
                          href={buttonItem.href}
                        />
                      ))
                  )}
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default Bio;
