import React from "react"
import clsx from 'clsx'
import { Spacing, Size, FontWeight, Color, getClassName } from '@ds.crisp/foundation'

interface TagProps {
  children: React.ReactNode
  backgroundColor?: keyof typeof Color
  borderColor?: keyof typeof Color
  fontColor?: keyof typeof Color
  fontWeight?:  keyof typeof FontWeight
  size?: keyof typeof Size
  className?: string
}

const Tag: React.FC<TagProps> = ({
  children,
  backgroundColor = Color.dark,
  borderColor = Color.white,
  fontColor = Color.white,
  fontWeight = FontWeight.normal,
  size = Size.md,
  className: classNameProp,
}) => {
  let paddingX: string = ''
  let paddingY: string = ''
  switch(size) {
    case Size.sm:
      paddingX = Spacing.xs
      paddingY = Spacing.xxxs
      break
    case Size.md:
      paddingX = Spacing.md
      paddingY = Spacing.xxs
      break
    case Size.lg:
      paddingX = Spacing.md
      paddingY = Spacing.xs
      break
  }
  const className = clsx(
    'dsc-tag__container',
    {
      [`dsc-tag__size-${size}`]: size,
    },
    getClassName({  
      backgroundColor,
      borderColor,
      fontColor,
      fontWeight,
      paddingX,
      paddingY,
    }),
    classNameProp,
  )
  return (
    <span className={className}>
      {children}
    </span>
  )
}

export default Tag