import React from 'react'
import styled, { css } from 'styled-components'

import Image from 'components/shared/Image'

import { pxToRem } from 'styles/mixins'

type IconProps = {
  src: string
  size?: number
  height?: number
  width?: number

  marginRight?: boolean
  marginLeft?: boolean

  className?: string
}

const StyledIcon = styled(Image)<IconProps>`
  display: block;
  font-size: ${({ size }) => size}px;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${pxToRem(8)}em;
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${pxToRem(8)}em;
    `};
`

const Icon: React.FC<IconProps> = ({
  src,
  size,
  className,
  marginLeft,
  marginRight,
  height,
  width,
}) => {
  if (height && !width) {
    return (
      <StyledIcon
        src={src}
        alt=""
        height={height}
        className={className}
        objectFit="contain"
        objectPosition="center"
        marginLeft={marginLeft}
        marginRight={marginRight}
        size={height}
      />
    )
  }

  if (!height && width) {
    return (
      <StyledIcon
        src={src}
        alt=""
        width={width}
        className={className}
        objectFit="contain"
        objectPosition="center"
        marginLeft={marginLeft}
        marginRight={marginRight}
        size={width}
      />
    )
  }

  return (
    <StyledIcon
      src={src}
      alt=""
      width={width || size}
      height={height || size}
      className={className}
      objectFit="contain"
      objectPosition="center"
      marginLeft={marginLeft}
      marginRight={marginRight}
      size={size}
    />
  )
}

Icon.defaultProps = { size: 16 }

export default Icon
