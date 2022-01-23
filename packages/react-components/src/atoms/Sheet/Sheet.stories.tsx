import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SheetContainer, SheetHeader, SheetFooter } from './Sheet'

import { Color } from '@ds.crisp/foundation'
import '@ds.crisp/scss/lib/Sheet.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'

import { Color as ColorMap } from '@ds.crisp/foundation'
import { Card } from '../Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SheetContainer',
  component: SheetContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof SheetContainer>

const Template: ComponentStory<typeof SheetContainer> = (args) => (
  <SheetContainer
    {...args}
    children={
      <>
        <SheetHeader>
          <Card backgroundColor={Color['light-blue']}>Header</Card>
        </SheetHeader>
        <Card>Body</Card>
        <SheetFooter>
          <Card backgroundColor={Color['light-yellow']}>Footer</Card>
        </SheetFooter>
      </>
    }
  />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  show: true,
  bottom: true,
}
