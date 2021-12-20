import React from "react"
import clsx from 'clsx'
import { Spacing, Size, Color, getClassName } from '@ds.crisp/foundation'

export interface ButtonProps {
  children: React.ReactNode
  backgroundColor?: keyof typeof Color
  borderColor?: keyof typeof Color
  fontColor?: keyof typeof Color
  size?: keyof typeof Size
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor = Color.dark,
  borderColor = Color.white,
  fontColor = Color.white,
  size = Size.md,
  className: classNameProp,
  onClick = () => {},
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
    'dsc-btn__container',
    {
      [`dsc-btn__size-${size}`]: size,
    },
    getClassName({  
      backgroundColor,
      borderColor,
      fontColor,
      paddingX,
      paddingY,
    }),
    classNameProp,
  )
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button