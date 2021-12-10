import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Color from './Color'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'

import { Color as ColorMap, Spacing } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Color',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {
    hexCode: { control: 'color' },
  },
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  hexCode: '#CEFECE',
  width: Spacing.xxl,
  height: Spacing.xxl,
};