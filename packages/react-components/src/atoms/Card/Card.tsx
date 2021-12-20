import React from 'react'
import clsx from 'clsx'
import { Spacing, Color, getClassName } from '@ds.crisp/foundation'

export interface CardProps {
  padding?: keyof typeof Spacing
  borderRadius?: keyof typeof Spacing
  children?: React.ReactNode
  className?: string
  backgroundColor?: keyof typeof Color
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Card: React.FC<CardProps> = ({
  padding = Spacing.sm,
  children,
  className: classNameProp,
  backgroundColor = Color.white,
  borderRadius = Spacing.none,
  onClick = () => {},
}) => {
  const className = clsx(
    'dsc-card__container',
    getClassName({ padding, backgroundColor, borderRadius }),
    classNameProp
  )
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
