import React from 'react'
import clsx from 'clsx'
import { Spacing, Color, getClassName } from '@ds.crisp/foundation'

interface CardProps {
  padding: keyof typeof Spacing
  borderRadius: keyof typeof Spacing
  children?: React.ReactNode
  className?: string
  backgroundColor?: keyof typeof Color
}


const Card: React.FC<CardProps> = ({
  padding = Spacing.sm,
  children,
  className: classNameProp,
  backgroundColor = Color.white,
  borderRadius = Spacing.none,
}) => {
  const className = clsx(
    'dsc-card__container',
    getClassName({ padding, backgroundColor, borderRadius }),
    classNameProp,
  )
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card