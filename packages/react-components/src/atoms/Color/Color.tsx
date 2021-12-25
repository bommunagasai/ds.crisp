import React from 'react'
import clsx from 'clsx'
import { Spacing, Color as ColorMap, getClassName } from '@ds.crisp/foundation'

export interface ColorProps {
  hexCode?: string
  color?: keyof typeof ColorMap
  width?: keyof typeof Spacing
  height?: keyof typeof Spacing
  className?: string
}

interface StyleProps {
  backgroundColor?: string
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
  color = ColorMap.blue,
  className: classNameProp,
}) => {
  const className = clsx(
    'dsc-atoms-color__container',
    {
      [`dsc-width-${width}`]: width,
      [`dsc-height-${height}`]: height,
      [`dsc-bg-color-${color}`]: color,
    },
    getClassName({ backgroundColor: color }),
    classNameProp
  )
  let style: StyleProps = {}
  if (hexCode) style.backgroundColor = hexCode
  return <div className={className} style={style} />
}

export default Color
