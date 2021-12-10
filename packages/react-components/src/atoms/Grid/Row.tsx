import React from "react"
import clsx from 'clsx'

interface RowProps {
  noGutters?: boolean
  className?: string
  children?: React.ReactNode
}

const Row: React.FC<RowProps> = ({
  noGutters,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    'row',
    {
      'no-gutters': noGutters,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Row