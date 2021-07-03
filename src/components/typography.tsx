/* eslint-disable import/prefer-default-export */
import styled, { CSSProperties, css } from 'styled-components'
import { pxToRem } from 'styles/mixins'

type HeadingProps = {
  align?: CSSProperties['textAlign']
  size?: number
  background?: boolean
}

export const Heading = styled.h1<HeadingProps>`
  font-family: 'Rubik', sans-serif;
  font-weight: 700;

  font-size: ${({ size }) =>
    size ? `${pxToRem(size)}rem` : `${pxToRem(42)}rem`};
  text-align: ${({ align }) => align ?? 'left'};
  color: ${({ theme }) => theme.colors.dark};

  position: relative;
  width: ${({ align }) => (align !== 'left' ? 'auto' : 'max-content')};

  ${({ background }) =>
    background &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: -2px;
        top: 50%;
        z-index: -1;

        height: 50%;
        width: 45%;
        max-width: 250px;

        background: ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
      }
    `}
`

Heading.defaultProps = {
  background: true,
  align: 'left',
}

export const Subheading = styled(Heading)``

Subheading.defaultProps = {
  size: 34,
  background: false,
  align: 'left',
}
