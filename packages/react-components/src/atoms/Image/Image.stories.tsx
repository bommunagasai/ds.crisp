import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Image from './Image'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Image.css'
import '@ds.crisp/scss/lib/Loader.css'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <Image
    {...args}
    width="25%"
    height="10%"
    src="https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
