import React from 'react'
import clsx from 'clsx'
import { Color, FontSize, FontIcon, getClassName } from '@ds.crisp/foundation'

export interface IconProps {
  name?: keyof typeof FontIcon
  color?: keyof typeof Color
  size?: keyof typeof FontSize
  className?: string
  outlined?: boolean
}

const Icon: React.FC<IconProps> = ({
  name = FontIcon.none,
  size = FontSize.xl,
  color = Color.violet,
  className: classNameProp,
  outlined = false,
}) => {
  const className = clsx(
    'dsc-icon',
    {
      [`dsc-icon-${name}${outlined ? '-outline' : ''}`]: name,
    },
    getClassName({ fontColor: color, fontSize: size }),
    classNameProp
  )
  return <i className={className} />
}

export default Icon
