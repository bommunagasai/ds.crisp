import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import H from './H'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'

import { Color, Size } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Typography/H',
  component: H,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof H>;

const Template: ComponentStory<typeof H> = (args) => <H {...args} children={`H${args?.level}`}/>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  fontColor: Color.dark,
  level: 1,
};
