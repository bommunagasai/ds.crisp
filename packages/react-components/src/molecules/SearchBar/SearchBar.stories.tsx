import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchBar from './SearchBar'

import '@ds.crisp/scss/lib/SearchBar.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Icons.css'
import '@ds.crisp/scss/lib/Utilities.css'

import { Color as ColorMap } from '@ds.crisp/foundation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Moleclues/SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {
    startIcon: { name: 'search' },
    endIcon: { name: 'search' },
    placeholder: 'Enter search term..',
  },
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} children="SearchBar" />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: ColorMap['light-yellow'],
  fontColor: ColorMap.white,
  startIcon: { name: 'search', color: ColorMap.yellow },
  endIcon: {},
  placeholder: 'Enter search term..',
}
