import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  fluid?: boolean
  className?: string
  children?: React.ReactChild|string
}

const Container: React.FC<ContainerProps> = ({
  fluid,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    {
      'container': !fluid,
      'container-fluid': fluid,
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