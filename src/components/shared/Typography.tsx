/* eslint-disable import/prefer-default-export */
import styled, { CSSProperties, css } from 'styled-components'
import { rgba } from 'polished'

import media from 'styles/media'
import { pxToRem, themeAnimation } from 'styles/mixins'

type TextProps = {
  align?: CSSProperties['textAlign']
  margin?: CSSProperties['margin']
  line?: CSSProperties['lineHeight']
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

  ${({ background, light, size }) =>
    background &&
    css`
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: -2px;
        bottom: 5%;
        transform: translate3d(0, 0, -1px);

        height: ${() =>
          size ? `${pxToRem(size * 0.55)}rem` : `${pxToRem(42 * 0.55)}rem`};
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
  line-height: ${({ line }) => line ?? 1.4};

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

export const LinkText = styled(Text)`
  color: ${({ theme }) =>
    theme.dark ? theme.colors.light : theme.colors.dark};
`

export const Bold = styled.span`
  font-weight: 700;
`

export const Content = styled.section`
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.text};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    max-width: 100%;
    width: max-content;

    transform-style: preserve-3d;

    &::after {
      content: '';
      position: absolute;
      left: -2px;
      bottom: 5%;
      transform: translate3d(0, 0, -1px);

      width: 45%;
      max-width: 250px;

      background: ${({ theme }) => theme.colors.primary};
      border-radius: 4px;

      ${themeAnimation()};
    }
  }

  h1 {
    font-size: 42px;
    &::after {
      height: ${pxToRem(42 * 0.55)}rem;
    }
  }

  h2 {
    font-size: 38px;
    &::after {
      height: ${pxToRem(38 * 0.55)}rem;
    }
  }

  h3 {
    font-size: 34px;
    &::after {
      height: ${pxToRem(34 * 0.55)}rem;
    }
  }

  h4 {
    font-size: 30px;
    &::after {
      height: ${pxToRem(30 * 0.55)}rem;
    }
  }

  h5 {
    font-size: 26px;
    &::after {
      height: ${pxToRem(28 * 0.55)}rem;
    }
  }

  h6 {
    font-size: 20px;
    &::after {
      height: ${pxToRem(20 * 0.55)}rem;
    }
  }

  p {
    ${textStyles}
  }

  .gatsby-resp-image-wrapper {
    margin-bottom: 1rem;
    box-shadow: 0 2px 18px
      ${({ theme }) =>
        theme.dark
          ? rgba(String(theme.colors.gray), 0.1)
          : rgba(String(theme.colors.dark), 0.1)};
  }
`
