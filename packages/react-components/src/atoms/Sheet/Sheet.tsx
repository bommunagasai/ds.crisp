import React, { useEffect } from 'react'
import clsx from 'clsx'

export interface SheetContainerProps {
  show: boolean
  bottom?: boolean
  top?: boolean
  left?: boolean
  right?: boolean
  children: React.ReactNode
  className?: string
}

export const SheetContainer: React.FC<SheetContainerProps> = ({
  show,
  top,
  bottom,
  left,
  right,
  children,
  className: classNameProp,
}) => {
  const className = clsx(
    'dsc-sheet__container',
    {
      show: show,
      'position-top': top,
      'position-bottom': bottom,
      'position-left': left,
      'position-right': right,
    },
    classNameProp
  )
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset'
  }, [show])
  return (
    <>
      <div className="dsc-sheet__overlay" />
      <div className={className}>{children}</div>
    </>
  )
}

export interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  children,
  className: classNameProp,
}) => {
  const className = clsx('dsc-sheet__header', classNameProp)
  return <div className={className}>{children}</div>
}

export interface SheetFooterProps {
  children: React.ReactNode
  className?: string
}

export const SheetFooter: React.FC<SheetFooterProps> = ({
  children,
  className: classNameProp,
}) => {
  const className = clsx('dsc-sheet__footer', classNameProp)
  return <div className={className}>{children}</div>
}
