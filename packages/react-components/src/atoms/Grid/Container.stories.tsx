import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Container from './Container'
import '@ds.crisp/scss/lib/Grid.css'

const CONTENT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, 
mauris ut cursus ornare, lectus arcu vestibulum lectus, ut tincidunt erat 
mi eu nulla. Vivamus euismod diam id viverra porta. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Quisque imperdiet erat ex, a tincidunt ex euismod ac. Sed vestibulum id 
nisi at imperdiet. Curabitur dapibus nulla non risus viverra convallis. 
Fusce malesuada a enim at feugiat. Quisque vehicula dolor eget vehicula 
dictum. Maecenas eget massa laoreet, aliquet velit volutpat, accumsan purus. 
Nulla et suscipit leo. Ut aliquam consectetur finibus. Nullam sit amet diam 
lacus. Nulla eu efficitur ipsum.`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Grid/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: CONTENT,
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
  children: CONTENT,
};