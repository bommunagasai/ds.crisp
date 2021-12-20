import React from 'react'
import clsx from 'clsx'

import { Size, Color, getClassName } from '@ds.crisp/foundation'

export interface SpinLoaderProps {
  size?: keyof typeof Size
  color?: keyof typeof Color
}

const SpinLoader: React.FC<SpinLoaderProps> = ({
  size = Size.md,
  color = Color.dark,
}) => {
  const containerClassName = clsx('dsc-loader__spinner', {
    [`dsc-loader__spinner-${size}`]: size,
  })
  const spinnerClassName = clsx(
    {
      [`dsc-loader__spinner--icon-${size}`]: size,
    },
    getClassName({
      borderTopColor: color,
      borderRightColor: color,
    })
  )
  return (
    <div className={containerClassName}>
      <div className={spinnerClassName} />
    </div>
  )
}

export default SpinLoader
