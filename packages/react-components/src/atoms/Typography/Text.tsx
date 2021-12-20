import React from 'react'
import clsx from 'clsx'
import { FontSize, FontWeight, Color, getClassName } from '@ds.crisp/foundation'

export interface TextProps {
  fontSize?: keyof typeof FontSize
  fontWeight?: keyof typeof FontWeight
  fontColor?: keyof typeof Color
  children?: React.ReactNode
  className?: string
}

const Text: React.FC<TextProps> = ({
  fontSize = FontSize.base,
  fontWeight = FontWeight.normal,
  fontColor = Color.dark,
  children,
  className: classNameProp,
}) => {
  const className = clsx(
    getClassName({
      fontSize,
      fontWeight,
      fontColor,
      padding: 'none',
      margin: 'none',
    }),
    classNameProp
  )
  return <p className={className}>{children}</p>
}

export default Text
