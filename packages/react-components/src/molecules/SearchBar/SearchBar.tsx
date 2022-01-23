import React from 'react'
import clsx from 'clsx'

import {
  Spacing,
  getClassName,
  Color,
  FontIcon,
} from '@ds.crisp/foundation'
import { Icon, IconProps } from '../../atoms/Icon'
import { Card, CardProps } from '../../atoms/Card'

export interface SearchBarProps {
  placeholder?: string
  startIcon: {
    name: keyof typeof FontIcon
    color: keyof typeof Color
  }
  endIcon: {
    name: keyof typeof FontIcon
    color: keyof typeof Color
    backgroundColor: keyof typeof Color
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  }
  backgroundColor?: keyof typeof Color
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  startIcon,
  endIcon,
  backgroundColor = Color['light-red'],
}) => {
  const containerClassName = clsx(
    'dsc-search-bar__container',
    getClassName({
      backgroundColor,
      padding: Spacing.xxs,
      borderRadius: Spacing.xs,
    })
  )

  const startIconProps: IconProps = {
    name: startIcon.name,
    color: startIcon.color,
    size: 'xl',
    className: getClassName({
      paddingY: Spacing.xxs,
      paddingL: Spacing.xxxs,
    }),
  }

  const endIconBoxProps: CardProps = {
    backgroundColor: endIcon.backgroundColor,
    borderRadius: Spacing.xs,
    padding: Spacing.none,
    onClick: endIcon.onClick,
    className: 'dsc-end-icon-box',
  }

  const endIconProps: IconProps = {
    name: endIcon.name,
    color: endIcon.color,
    size: 'xl',
    className: getClassName({
      padding: Spacing.xxs,
    }),
  }
  return (
    <div className={containerClassName}>
      <Icon {...startIconProps} />
      <input className="dsc-input-box" placeholder={placeholder} />
      <Card {...endIconBoxProps}>
        <Icon {...endIconProps} />
      </Card>
    </div>
  )
}

export default SearchBar
