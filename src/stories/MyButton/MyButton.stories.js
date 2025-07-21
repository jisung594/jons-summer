import { fn } from 'storybook/test';

import { MyButton } from './MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'BUTTON',
  },
};

export const Secondary = {
  args: {
    label: 'BUTTON',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'BUTTON',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'BUTTON',
  },
};
