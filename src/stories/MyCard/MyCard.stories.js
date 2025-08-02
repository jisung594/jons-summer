import { fn } from 'storybook/test';
import { MyCard } from './MyCard';

export default {
  title: 'Components/MyCard',
  component: MyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['vertical'],
      description: 'The layout variant of the card.',
    },
    title: { control: 'text', description: 'The main title of the card.' },
    secondaryText: { control: 'text', description: 'Secondary text/subtitle.' },
    bodyText: { control: 'text', description: 'Longer body text content.' },
    imageUrl: { control: 'text', description: 'URL for the card image.' },
    imageAlt: { control: 'text', description: 'Alt text for the image.' },
    ctaButtons: { control: 'object', description: 'Array of CTA buttons.' },
    isInitiallyOpen: { control: 'boolean', description: 'For vertical variant: if the card should be initially open.' },
    onClick: { action: 'cardClicked', description: 'Callback for entire card click.' },
  },
  args: {
    title: 'Card Title',
    secondaryText: 'Secondary text',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida vestibulum ante vel pulvinar. Quisque non rhoncus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    imageUrl: '',
    imageAlt: 'Placeholder image',
    ctaButtons: [
      { label: 'CTA #1', onClick: fn() },
      { label: 'CTA #2', onClick: fn() },
    ],
    onClick: fn(),
  },
};

export const VerticalClosed = {
  args: {
    variant: 'vertical',
    imageUrl: 'https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg',
    imageAlt: 'Hands kneading dough',
    isInitiallyOpen: false,
  },
};

export const VerticalOpen = {
  args: {
    variant: 'vertical',
    imageUrl: 'https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg',
    imageAlt: 'Hands kneading dough',
    isInitiallyOpen: true,
  },
};

export const VerticalNoImage = {
  args: {
    variant: 'vertical',
    imageUrl: '',
    imageAlt: 'No image available',
  },
};
