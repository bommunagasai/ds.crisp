import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Text, Image, Tag, Button, Card } from '@ds.crisp/react-components'
import { Color as ColorMap, Size, FontWeight, FontSize, Spacing } from '@ds.crisp/foundation'

import RecentWorks from './RecentWorks'

ReactDOM.render(
    <Container>
        <Row>
            <Col md={12}>
                <Card borderRadius={Spacing.sm} padding={Spacing.md} backgroundColor={ColorMap['light-yellow']}>
                <Text fontSize={FontSize.xl} fontWeight={FontWeight.extrabold} fontColor={ColorMap.yellow}>
                    Creative Ui & Ux Designer based in New York, USA
                </Text>
                </Card>
            </Col>
            <Col md={6}>
                <Image
                    src='https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                    width='100%'
                    height='450'
                />
            </Col>
            <Col md={6}>
                <Tag backgroundColor={ColorMap.shine} fontColor={ColorMap.dark} fontWeight={FontWeight.bold} >ABOUT ME</Tag>
                <Text fontSize={FontSize.xl} fontWeight={FontWeight.extrabold}>
                    Creative Ui & Ux Designer based in New York, USA
                </Text>
                <Text fontSize={FontSize.base} fontWeight={FontWeight.light} fontColor={ColorMap.light}>
                    I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a 
                    professional web developer, I have acquired the skills and knowledge necessary to make your project a 
                    success. I enjoy every step of the design process, from discussion and collaboration.
                </Text>
                <Button backgroundColor={ColorMap.dark} size={Size.lg} >
                    Download CV
                </Button>
            </Col>
            <RecentWorks />
        </Row>
    </Container>,
    document.querySelector('#root')
);
