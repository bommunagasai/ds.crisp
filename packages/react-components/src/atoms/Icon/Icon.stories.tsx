import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Icons.css'
import '@ds.crisp/scss/lib/Utilities.css'

import { Color as ColorMap } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} children="Icon" />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'book',
  color: ColorMap.green
}
