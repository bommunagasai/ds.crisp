import clsx from 'clsx'

interface classNameProps {
  borderWidth?: string
  borderColor?: string
  borderLeftColor?: string
  borderRightColor?: string
  borderTopColor?: string
  borderBottomColor?: string
  backgroundColor?: string
  fontSize?: string
  fontColor?: string
  fontWeight?: string
  padding?: string
  paddingX?: string
  paddingY?: string
  paddingL?: string
  paddingR?: string
  paddingT?: string
  paddingB?: string
  margin?: string
  marginX?: string
  marginY?: string
  marginL?: string
  marginR?: string
  marginT?: string
  marginB?: string
  borderRadius?: string
}

const getClassName = (props: classNameProps): string|undefined => {
  const {
    borderWidth,
    borderColor,
    borderLeftColor,
    borderRightColor,
    borderTopColor,
    borderBottomColor,
    backgroundColor,
    fontSize,
    fontColor,
    fontWeight,
    padding,
    paddingX,
    paddingY,
    paddingL,
    paddingR,
    paddingT,
    paddingB,
    margin,
    marginX,
    marginY,
    marginL,
    marginR,
    marginT,
    marginB,
    borderRadius,
  } = props;
  return clsx(
    {
      [`dsc-bg-color-${backgroundColor}`]: backgroundColor,

      [`dsc-border-color-${borderColor}`]: borderColor,
      [`dsc-border-left-color-${borderLeftColor}`]: borderLeftColor,
      [`dsc-border-right-color-${borderRightColor}`]: borderRightColor,
      [`dsc-border-top-color-${borderTopColor}`]: borderTopColor,
      [`dsc-border-bottom-color-${borderBottomColor}`]: borderBottomColor,
      [`dsc-border-width-${borderWidth}`]: borderWidth,

      [`dsc-font-size-${fontSize}`]: fontSize,
      [`dsc-font-color-${fontColor}`]: fontColor,
      [`dsc-font-weight-${fontWeight}`]: fontWeight,

      [`dsc-padding-${padding}`]: padding,
      [`dsc-padding-x-${paddingX}`]: paddingX,
      [`dsc-padding-y-${paddingY}`]: paddingY,
      [`dsc-padding-l-${paddingL}`]: paddingL,
      [`dsc-padding-r-${paddingR}`]: paddingR,
      [`dsc-padding-t-${paddingT}`]: paddingT,
      [`dsc-padding-b-${paddingB}`]: paddingB,

      [`dsc-margin-${margin}`]: margin,
      [`dsc-margin-x-${marginX}`]: marginX,
      [`dsc-margin-y-${marginY}`]: marginY,
      [`dsc-margin-l-${marginL}`]: marginL,
      [`dsc-margin-r-${marginR}`]: marginR,
      [`dsc-margin-t-${marginT}`]: marginT,
      [`dsc-margin-b-${marginB}`]: marginB,

      [`dsc-border-radius-${borderRadius}`]: borderRadius,
    },
  )
};


export {
  getClassName
}