import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SpinLoader } from './'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Loader.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Loader/Spin',
  component: SpinLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof SpinLoader>

const Template: ComponentStory<typeof SpinLoader> = (args) => (
  <SpinLoader {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
