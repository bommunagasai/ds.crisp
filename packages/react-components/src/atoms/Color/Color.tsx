import React from 'react'
import clsx from 'clsx'
import { Spacing, Color as ColorMap } from '@ds.crisp/foundation'

export interface ColorProps {
    hexCode?: string
    width?: keyof typeof Spacing
    height?: keyof typeof Spacing
    color?: keyof typeof ColorMap
    className?: string
}

export interface StyleProps {
    backgroundColor?: string
}

const Color: React.FC<ColorProps> = ({
    hexCode,
    width = Spacing.sm,
    height = Spacing.sm,
    color = ColorMap.blue,
    className: classNameProp
}) => {
    const className = clsx(
        {
            [`dsc-width-${width}`]: width,
            [`dsc-width-${height}`]: height,
            [`dsc-bg-color-${color}`]: color,
        },
        classNameProp,
    );
    let style:StyleProps = {};
    if (hexCode) style.backgroundColor = hexCode;
    return <div className={className} style={style}/>
}

export default Color