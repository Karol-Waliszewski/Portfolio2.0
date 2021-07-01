import React from 'react'
import styled from 'styled-components'

type NormalImageProps = {
  objectFit?: React.CSSProperties['objectFit']
  objectPosition?: React.CSSProperties['objectPosition']
}

type NormalImageWrapperProps = {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
}

const ImageInner = styled.img<NormalImageProps>`
  max-width: 100%;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  max-height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
`

const ImageWrapper = styled.div<NormalImageWrapperProps>`
  max-width: ${(props) => (props.width ? `${props.width}px` : '100%')};
`

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  objectFit?: React.CSSProperties['objectFit']
  objectPosition?: React.CSSProperties['objectPosition']
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  objectPosition,
}) => {
  return (
    <ImageWrapper width={width} height={height}>
      <ImageInner
        src={src}
        alt={alt}
        objectFit={objectFit}
        objectPosition={objectPosition}
        width={width}
        height={height}
      />
    </ImageWrapper>
  )
}

export default Image
