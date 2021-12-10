import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  fluid?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  className?: string
  children?: React.ReactChild|string
}

const Container: React.FC<ContainerProps> = ({
  fluid,
  sm,
  md,
  lg,
  xl,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    {
      'container': !(fluid || sm || md || lg || xl),
      'container-fluid': fluid,
      'container-sm': sm,
      'container-md': md,
      'container-lg': lg,
      'container-xl': xl,
    },
    classNameProp,
  )

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Container