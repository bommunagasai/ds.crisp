import React from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'
import {
  Container,
  Row,
  Col,
  Text,
  Icon,
  Color,
  Card,
  SearchBar,
  SheetContainer,
  SheetHeader,
  SheetFooter,
} from '@ds.crisp/react-components'
import {
  Color as ColorMap,
  FontWeight,
  FontSize,
  Spacing,
  FontIcon,
  getClassName,
} from '@ds.crisp/foundation'

// import '@ds.crisp/scss/assets/fonts'
import '@ds.crisp/scss/lib/Image.css'
import '@ds.crisp/scss/lib/Grid.css'
import '@ds.crisp/scss/lib/Loader.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Icons.css'
import '@ds.crisp/scss/lib/Tag.css'
import '@ds.crisp/scss/lib/SearchBar.css'
import '@ds.crisp/scss/lib/Sheet.css'
import RecentWorks from './RecentWorks'

import './index.scss'

const cardClassName = clsx(
  'mh-80vh overflow-y-auto font-zero',
  getClassName({ borderRadiusT: Spacing.xs })
)
ReactDOM.render(
  <Container>
    <Row>
      <RecentWorks />
    </Row>
    <SheetContainer bottom show>
      <Container>
        <Row>
          <Col md={8} />
          <Col md={4}>
            <Card className={cardClassName}>
              <Text fontWeight={FontWeight.bold} className="mb-1">
                Theme
              </Text>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
                backgroundColor={ColorMap['light-blue']}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  color={ColorMap.dark}
                  className={getClassName({
                    borderRadius: Spacing.xs,
                    borderWidth: Spacing.xs,
                  })}
                />
              </Card>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  className={getClassName({
                    borderRadius: Spacing.xs,
                    borderWidth: Spacing.xs,
                  })}
                />
              </Card>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
                // backgroundColor={ColorMap['light-blue']}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  color={ColorMap.green}
                  className={getClassName({ borderRadius: Spacing.xs })}
                />
              </Card>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
                // backgroundColor={ColorMap['light-blue']}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  color={ColorMap.red}
                  className={getClassName({ borderRadius: Spacing.xs })}
                />
              </Card>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
                // backgroundColor={ColorMap['light-blue']}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  color={ColorMap.yellow}
                  className={getClassName({ borderRadius: Spacing.xs })}
                />
              </Card>
              <Card
                borderRadius={Spacing.md}
                className="d-inline-block"
                padding={Spacing.xs}
                // backgroundColor={ColorMap['light-blue']}
              >
                <Color
                  width={Spacing.md}
                  height={Spacing.md}
                  color={ColorMap.violet}
                  className={getClassName({ borderRadius: Spacing.xs })}
                />
              </Card>
              <Text>
                
              </Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </SheetContainer>
  </Container>,
  document.querySelector('#root')
)
