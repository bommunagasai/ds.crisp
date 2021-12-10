import React from 'react'

import { Color, Col, Image, Text, Tag } from '@ds.crisp/react-components'
import { Color as ColorMap, Size, FontWeight, FontSize, Spacing } from '@ds.crisp/foundation'
import '@ds.crisp/scss/lib/Button.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Grid.css'
import '@ds.crisp/scss/lib/Typography.css'
import '@ds.crisp/scss/lib/Tag.css'
import '@ds.crisp/scss/lib/Image.css'
import '@ds.crisp/scss/lib/Loader.css'

const RecentWorks: React.FC = () => {
  return (
    <>
    <Col md={4}>
      <Image
          src='https://cdn.dribbble.com/users/241205/screenshots/5188744/media/37ce0efb6375c575c77c0b6a808eb95c.png?compress=1&resize=300x225'
          width='100%'
          height='200'
      />
      <Text fontSize={FontSize.md} fontWeight={FontWeight.bold} fontColor={ColorMap.dark} className='mt-2 mb-0'>
          Crisp UI components
      </Text>
      <Text fontSize={FontSize.xs} fontColor={ColorMap.metal} className='mt-0 mb-2'>
          Using Storybook to develop shared understanding | by Bommu
      </Text>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-red']}
          fontColor={ColorMap.red}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.red}/>
          Storybook JS
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-blue']}
          fontColor={ColorMap.dark}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.dark}/>
          React JS
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-yellow']}
          fontColor={ColorMap.yellow}
          fontWeight={FontWeight.bold}
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.yellow}/>
          Typescript JS
      </Tag>
  </Col>
  <Col md={4}>
      <Image
          src="https://cdn.dribbble.com/users/427857/screenshots/10143929/media/8b4534bf2923723580d3f22d451ecb3a.jpg?compress=1&resize=400x300"
          width='100%'
          height='200'
      />
      <Text fontSize={FontSize.md} fontWeight={FontWeight.bold} fontColor={ColorMap.dark} className='mt-2 mb-0'>
          Widget based dashboards
      </Text>
      <Text fontSize={FontSize.xs} fontColor={ColorMap.metal} className='mt-0 mb-2'>
          Crisp UI components | by Bommu
      </Text>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-blue']}
          fontColor={ColorMap.dark}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.dark}/>
          React JS
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-green']}
          fontColor={ColorMap.green}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.green}/>
          Crisp UI
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-yellow']}
          fontColor={ColorMap.yellow}
          fontWeight={FontWeight.bold}
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.yellow}/>
          Typescript JS
      </Tag>
  </Col>
  <Col md={4}>
      <Image
          src="https://cdn.dribbble.com/users/563897/screenshots/15275579/media/0e8bf7f55bd6ebc9489c0d30f5cf6691.png?compress=1&resize=400x300"
          width='100%'
          height='200'
      />
      <Text fontSize={FontSize.md} fontWeight={FontWeight.bold} fontColor={ColorMap.dark} className='mt-2 mb-0'>
          PWA Weather chatbot
      </Text>
      <Text fontSize={FontSize.xs} fontColor={ColorMap.metal} className='mt-0 mb-2'>
          Amazon Lambda | by Bommu
      </Text>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-blue']}
          fontColor={ColorMap.dark}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.dark}/>
          React JS
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-green']}
          fontColor={ColorMap.green}
          fontWeight={FontWeight.bold}
          className='mr-2 mb-2'
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.green}/>
          Crisp UI
      </Tag>
      <Tag
          size={Size.sm}
          backgroundColor={ColorMap['light-violet']}
          fontColor={ColorMap.violet}
          fontWeight={FontWeight.bold}
      >
          <Color width={Spacing.xxs} height={Spacing.xxs} className='mr-1' color={ColorMap.violet}/>
          AWS Lambda
      </Tag>
  </Col>
  </>
  )
}

export default RecentWorks