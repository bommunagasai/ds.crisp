import React from 'react'
import ReactDOM from 'react-dom'

import { Color, Container, Row, Col } from '@ds.crisp/react-components'
import { Color as ColorMap } from '@ds.crisp/foundation'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Grid.css'

ReactDOM.render(
    <Container>
        <Row>
            <Col sm={4}>
                <Color color={ColorMap['blue']} width='xxs' height='xxs' />
                <Color color={ColorMap['red']} width='xl' height='xl' />
                <Color color={ColorMap['green']} width='xl' height='xl' />
                <Color color={ColorMap['yellow']} width='xl' height='xl' />
                <Color color={ColorMap['dark']} width='xl' height='xl' />
            </Col>
        </Row>
    </Container>,
    document.querySelector('#root')
);
