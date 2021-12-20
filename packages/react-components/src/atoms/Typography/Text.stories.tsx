import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Typography.css'

import { Color } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Typography/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} children={`Text`} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  fontColor: Color.dark,
}
