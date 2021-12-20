import React from 'react'
import clsx from 'clsx'

interface ColProps {
  xs?: 1|2|3|4|5|6|7|8|9|10|11|12
  sm?: 1|2|3|4|5|6|7|8|9|10|11|12
  md?: 1|2|3|4|5|6|7|8|9|10|11|12
  lg?: 1|2|3|4|5|6|7|8|9|10|11|12
  offset?: 0|1|2|3|4|5|6|7|8|9|10|11|12
  pull?: 0|1|2|3|4|5|6|7|8|9|10|11|12
  push?: 0|1|2|3|4|5|6|7|8|9|10|11|12
  size?: 1|2|3|4|5|6|7|8|9|10|11|12
  children?: React.ReactNode
  className?: string
}

const Col: React.FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  offset,
  pull,
  push,
  size,
  className: classNameProp,
  children,
}) => {
  const className = clsx(
    {
      'col': !(xs || sm || md || lg),
      [`col-xs-${xs}`]: xs,
      [`col-sm-${sm}`]: sm,
      [`col-md-${md}`]: md,
      [`col-lg-${lg}`]: lg,

      [`offset-${offset}`]: offset,

      [`col-xs-pull-${pull}`]: xs && pull,
      [`col-sm-pull-${pull}`]: sm && pull,
      [`col-md-pull-${pull}`]: md && pull,
      [`col-lg-pull-${pull}`]: lg && pull,

      [`col-xs-push-${push}`]: xs && push,
      [`col-sm-push-${push}`]: sm && push,
      [`col-md-push-${push}`]: md && push,
      [`col-lg-push-${push}`]: lg && push,

      [`col-${size}`]: size,
    },
    classNameProp,
  )
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Col