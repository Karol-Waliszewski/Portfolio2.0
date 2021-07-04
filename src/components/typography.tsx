/* eslint-disable import/prefer-default-export */
import styled, { CSSProperties, css } from 'styled-components'
import { pxToRem } from 'styles/mixins'

type TextProps = {
  align?: CSSProperties['textAlign']
  size?: number
}

type HeadingProps = TextProps & {
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
  width: max-content;
  transform-style: preserve-3d;

  margin-bottom: 1.5rem;

  ${({ align }) => {
    switch (align) {
      case 'right':
        return css`
          margin-left: auto;
        `

      case 'center':
        return css`
          margin-left: auto;
          margin-right: auto;
        `

      default:
        return css``
    }
  }}

  ${({ background }) =>
    background &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: -2px;
        top: 45%;
        transform: translate3d(0, 0, -1px);

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

export const Text = styled.p<TextProps>`
  font-weight: 500;
  line-height: 1rem;

  font-size: ${({ size }) => (size ? `${pxToRem(size)}rem` : '1rem')};
  text-align: ${({ align }) => align ?? 'left'};
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 1rem;
`

export const Bold = styled.span`
  font-weight: 700;
`
