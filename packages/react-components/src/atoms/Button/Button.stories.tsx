import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

import '@ds.crisp/scss/lib/Button.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Typography.css'

import { Color as ColorMap } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {
    hexCode: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} children="BUTTON" />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: ColorMap.dark,
  fontColor: ColorMap.white,
}

export const Custom = Template.bind({})
Custom.args = {}
