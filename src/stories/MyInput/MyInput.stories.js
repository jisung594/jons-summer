import { fn } from 'storybook/test';

import { MyInput } from './MyInput';

export default {
  title: 'Components/MyInput',
  component: MyInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'EMAIL',
    placeholder: 'placeholder@example.com',
    onChange: fn(),
  },
};

export const Default = {
  args: {},
};

export const Filled = {
  args: {
    value: 'myemail@example.com',
    placeholder: 'This placeholder is hidden by value',
  },
};

// TODO: JS for user interaction, such as click and tab
export const Active = {
  args: {
    label: 'EMAIL',
    value: 'user@example.com',
  },
  // Storybook example of focus
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    if (input) {
      input.focus();
    }
  },
};
