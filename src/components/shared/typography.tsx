/* eslint-disable import/prefer-default-export */
import styled, { CSSProperties, css } from 'styled-components'

import media from 'styles/media'
import { pxToRem, themeAnimation } from 'styles/mixins'

type TextProps = {
  align?: CSSProperties['textAlign']
  margin?: CSSProperties['margin']
  size?: number
}

type HeadingProps = TextProps & {
  background?: boolean
  light?: boolean
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

  max-width: 100%;
  margin-bottom: ${({ margin }) => margin ?? '1.5rem'};

  ${themeAnimation()};

  ${media.lg.max} {
    font-size: ${({ size }) =>
      size ? `${pxToRem((size * 40) / 42)}rem` : `${pxToRem(40)}rem`};
  }

  ${media.md.max} {
    font-size: ${({ size }) =>
      size ? `${pxToRem((size * 38) / 42)}rem` : `${pxToRem(38)}rem`};
  }

  ${media.sm.max} {
    font-size: ${({ size }) =>
      size ? `${pxToRem((size * 32) / 42)}rem` : `${pxToRem(32)}rem`};
  }

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

  ${({ background, light }) =>
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

        background: ${({ theme }) =>
          light ? theme.colors.light : theme.colors.primary};
        border-radius: 4px;

        ${themeAnimation()};
      }
    `}
`

Heading.defaultProps = {
  background: true,
  align: 'left',
}

export const Subheading = styled(Heading)`
  margin-bottom: 1rem;
`

Subheading.defaultProps = {
  size: 24,
  background: false,
  align: 'left',
  margin: '1.25rem',
}

const textStyles = css<TextProps>`
  font-weight: 500;
  line-height: 1.1em;

  font-size: ${({ size }) => (size ? `${pxToRem(size)}rem` : '1rem')};
  text-align: ${({ align }) => align ?? 'left'};
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: ${({ margin }) => margin ?? '1rem'};

  ${themeAnimation()};

  a {
    color: inherit;
  }
`

export const Text = styled.p<TextProps>`
  ${textStyles}
`

export const Bold = styled.span`
  font-weight: 700;
`

export const Content = styled.section`
  padding: 2rem 0;

  p {
    ${textStyles}
  }
`
