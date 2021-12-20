import React, { useState } from 'react'
import clsx from 'clsx'

import { SpinLoader } from '../Loader'

export interface ImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 'inherit',
  height = 'inherit',
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(true)
  const className = clsx('dsc-img__wrapper', {
    [`dsc-img__wrapper--loading`]: showLoader,
  })
  return (
    <div className={className}>
      {showLoader && <SpinLoader />}
      <img
        className="dsc-img__container"
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => {
          setShowLoader(false)
          console.log('loaded')
        }}
        onError={() => setShowLoader(false)}
        loading="lazy"
      />
    </div>
  )
}

export default Image
