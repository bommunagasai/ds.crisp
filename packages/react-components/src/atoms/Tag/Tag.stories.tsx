import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tag from './Tag'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Tag.css'

import { Color, Size } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} children="React" />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  fontColor: Color.blue,
  backgroundColor: Color['light-blue'],
  size: Size.sm,
}
