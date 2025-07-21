import { fn } from 'storybook/test';
import { MyToggle } from './MyToggle';

export default {
  title: 'Components/MyToggle',
  component: MyToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialState: {
      control: 'boolean',
      description: 'Controls the initial state of the toggle (true for On, false for Off).',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback function triggered when the toggle state changes.',
    },
    label: {
      control: 'text',
      description: 'Optional label for accessibility (used as aria-label for the switch).',
    },
  },
  args: {
    initialState: false,
    onToggle: fn(),
    label: 'Enable Feature',
  },
};

export const Off = {
  args: {
    initialState: false,
  },
};

export const On = {
  args: {
    initialState: true,
  },
};

export const Focus = {
  args: {
    initialState: false,
  },
  play: async ({ canvasElement }) => {
    // Find the hidden input checkbox and programmatically focus it
    const input = canvasElement.querySelector('input[type="checkbox"]');
    if (input) {
      input.focus();
    }
  },
};
