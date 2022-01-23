import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from './Card'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import { Color } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: Color['light-red'],
  padding: 'sm',
};
