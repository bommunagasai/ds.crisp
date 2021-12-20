import React from 'react'
import ReactDOM from 'react-dom'
import {
  Container,
  Row,
  Col,
  Text,
  Image,
  Tag,
  Icon,
  Card,
  SearchBar,
} from '@ds.crisp/react-components'
import {
  Color as ColorMap,
  Size,
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
import '@ds.crisp/scss/lib/Typography.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Icons.css'
import '@ds.crisp/scss/lib/Tag.css'
import '@ds.crisp/scss/lib/SearchBar.css'

ReactDOM.render(
  <Container>
    <Row>
      <Col md={12} className="mb-3">
        <Row>
          <Col>
            <Tag backgroundColor={ColorMap['light-green']}>
              <Text
                fontWeight={FontWeight.black}
                fontColor={ColorMap.green}
              >
                Notes App
              </Text>
            </Tag>
          </Col>
          <Col md={4}>
            <SearchBar
              placeholder="Search using keywords.."
              startIcon={{ name: FontIcon.search, color: ColorMap.green }}
              endIcon={{
                name: FontIcon.settings,
                color: ColorMap.green,
                backgroundColor: ColorMap['light-green'],
                onClick: (e: React.MouseEvent<HTMLDivElement>) =>
                  console.log(e),
              }}
              backgroundColor={ColorMap['shine']}
            />
          </Col>
        </Row>
      </Col>
      <Col md={4} size={4} className="mb-3">
        <Card
          borderRadius={Spacing.sm}
          borderColor={ColorMap.yellow}
          backgroundColor={ColorMap['shine']}
        >
          <div className="mb-2 d-flex justify-content-between">
            <Icon
              name="book"
              className={getClassName({
                fontSize: FontSize.xs,
                backgroundColor: ColorMap['light-violet'],
                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
            <Icon
              name="more-horizontal"
              color={ColorMap.gray}
              className={getClassName({
                fontSize: FontSize.xs,
                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
          </div>
          <Text fontWeight={FontWeight.bold} fontColor={ColorMap.dark}>
            Storybook JS
          </Text>
          <Text
            fontWeight={FontWeight.light}
            fontSize={FontSize.xs}
            fontColor={ColorMap.dark}
          >
            UI components library framework to showcase
          </Text>
        </Card>
      </Col>

      <Col md={4} size={4} className="mb-3">
        <Card
          borderRadius={Spacing.sm}
          backgroundColor={ColorMap['light-yellow']}
        >
          <div className="mb-2 d-flex justify-content-between">
            <Icon
              name="bulb"
              color={ColorMap.red}
              oulined
              className={getClassName({
                fontSize: FontSize.xs,
                backgroundColor: ColorMap['light-violet'],
                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
            <Icon
              name="more-horizontal"
              color={ColorMap.gray}
              className={getClassName({
                fontSize: FontSize.xs,

                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
          </div>
          <Text fontWeight={FontWeight.bold} fontColor={ColorMap.yellow}>
            React JS tips
          </Text>
          <Text
            fontWeight={FontWeight.light}
            fontSize={FontSize.xs}
            fontColor={ColorMap.yellow}
          >
            Experimental framwork to create awesome single page applications
          </Text>
        </Card>
      </Col>

      <Col md={4} size={4} className="mb-3">
        <Card borderRadius={Spacing.sm} backgroundColor={ColorMap['shine']}>
          <div className="mb-2 d-flex justify-content-between">
            <Icon
              name="color-palette"
              color={ColorMap.green}
              oulined
              className={getClassName({
                fontSize: FontSize.xs,
                backgroundColor: ColorMap['light-green'],
                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
            <Icon
              name="more-horizontal"
              color={ColorMap.gray}
              className={getClassName({
                fontSize: FontSize.xs,

                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
          </div>
          <Text fontWeight={FontWeight.bold} fontColor={ColorMap.violet}>
            Pouch DB
          </Text>
          <Text
            fontWeight={FontWeight.light}
            fontSize={FontSize.xs}
            fontColor={ColorMap.violet}
          >
            Offline database to store data
          </Text>
        </Card>
      </Col>

      <Col md={4} size={4} className="mb-3">
        <Card
          borderRadius={Spacing.sm}
          backgroundColor={ColorMap['light-yellow']}
        >
          <div className="mb-2 d-flex justify-content-between">
            <Icon
              name="gift"
              color={ColorMap.green}
              oulined
              className={getClassName({
                fontSize: FontSize.xs,
                backgroundColor: ColorMap['light-green'],
                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
            <Icon
              name="more-horizontal"
              color={ColorMap.gray}
              className={getClassName({
                fontSize: FontSize.xs,

                borderRadius: Spacing.xs,
                padding: Spacing.xxs,
              })}
            />
          </div>
          <Text fontWeight={FontWeight.bold} fontColor={ColorMap.yellow}>
            React JS tips
          </Text>
          <Text
            fontWeight={FontWeight.light}
            fontSize={FontSize.xs}
            fontColor={ColorMap.yellow}
          >
            Experimental framwork to create awesome single page applications
          </Text>
        </Card>
      </Col>

<Col md={4} size={4} className="mb-3">
  <Card
    borderRadius={Spacing.sm}
    backgroundColor={ColorMap['light-violet']}
  >
    <div className="mb-2 d-flex justify-content-between">
      <Icon
        name="film"
        color={ColorMap.violet}
        oulined
        className={getClassName({
          fontSize: FontSize.xs,
          backgroundColor: ColorMap['light-green'],
          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
      <Icon
        name="more-horizontal"
        color={ColorMap.gray}
        className={getClassName({
          fontSize: FontSize.xs,

          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
    </div>
    <Text fontWeight={FontWeight.bold} fontColor={ColorMap.violet}>
      Pouch DB
    </Text>
    <Text
      fontWeight={FontWeight.light}
      fontSize={FontSize.xs}
      fontColor={ColorMap.violet}
    >
      Offline database to store data
    </Text>
  </Card>
</Col>

<Col md={4} size={4} className="mb-3">
  <Card
    borderRadius={Spacing.sm}
    backgroundColor={ColorMap['light-violet']}
  >
    <div className="mb-2 d-flex justify-content-between">
      <Icon
        name="film"
        color={ColorMap.violet}
        oulined
        className={getClassName({
          fontSize: FontSize.xs,
          backgroundColor: ColorMap['light-green'],
          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
      <Icon
        name="more-horizontal"
        color={ColorMap.gray}
        className={getClassName({
          fontSize: FontSize.xs,

          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
    </div>
    <Text fontWeight={FontWeight.bold} fontColor={ColorMap.violet}>
      Pouch DB
    </Text>
    <Text
      fontWeight={FontWeight.light}
      fontSize={FontSize.xs}
      fontColor={ColorMap.violet}
    >
      Offline database to store data
    </Text>
  </Card>
</Col>

<Col md={4} size={4} className="mb-3">
  <Card
    borderRadius={Spacing.sm}
    backgroundColor={ColorMap['light-violet']}
  >
    <div className="mb-2 d-flex justify-content-between">
      <Icon
        name="film"
        color={ColorMap.violet}
        oulined
        className={getClassName({
          fontSize: FontSize.xs,
          backgroundColor: ColorMap['light-green'],
          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
      <Icon
        name="more-horizontal"
        color={ColorMap.gray}
        className={getClassName({
          fontSize: FontSize.xs,

          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
    </div>
    <Text fontWeight={FontWeight.bold} fontColor={ColorMap.violet}>
      Pouch DB
    </Text>
    <Text
      fontWeight={FontWeight.light}
      fontSize={FontSize.xs}
      fontColor={ColorMap.violet}
    >
      Offline database to store data
    </Text>
  </Card>
</Col>

<Col md={4} size={4} className="mb-3">
  <Card
    borderRadius={Spacing.sm}
    backgroundColor={ColorMap['light-violet']}
  >
    <div className="mb-2 d-flex justify-content-between">
      <Icon
        name="film"
        color={ColorMap.violet}
        oulined
        className={getClassName({
          fontSize: FontSize.xs,
          backgroundColor: ColorMap['light-green'],
          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
      <Icon
        name="more-horizontal"
        color={ColorMap.gray}
        className={getClassName({
          fontSize: FontSize.xs,

          borderRadius: Spacing.xs,
          padding: Spacing.xxs,
        })}
      />
    </div>
    <Text fontWeight={FontWeight.bold} fontColor={ColorMap.violet}>
      Pouch DB
    </Text>
    <Text
      fontWeight={FontWeight.light}
      fontSize={FontSize.xs}
      fontColor={ColorMap.violet}
    >
      Offline database to store data
    </Text>
  </Card>
</Col>
    </Row>
  </Container>,
  document.querySelector('#root')
)
