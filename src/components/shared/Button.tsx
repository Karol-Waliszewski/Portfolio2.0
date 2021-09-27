import styled, { css } from 'styled-components'
import { darken, rgba, readableColor } from 'polished'

import { Colors } from 'types/theme'
import { lightColors as colors } from 'styles/theme'
import { pxToRem } from 'styles/mixins'

import loadingIcon from 'assets/icons/loading.svg'

type ButtonProps = {
  [key in keyof Colors]?: boolean
} & {
  outline?: boolean
  loading?: boolean
  square?: boolean
  marginRight?: boolean
  marginLeft?: boolean
}

const Button = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;

  padding: ${({ square }) =>
    square ? `${pxToRem(6)}em` : `${pxToRem(6)}em ${pxToRem(12)}em`};

  color: ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  border: 2px solid transparent;

  font-size: ${pxToRem(16)}rem;
  font-weight: 500;
  text-decoration: none;

  cursor: pointer;
  transition: color 100ms ease, background-color 100ms ease,
    border-color 100ms ease, box-shadow 100ms ease;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${pxToRem(6)}em;
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${pxToRem(6)}em;
    `}

  ${(props) => {
    const keys = Object.keys(props)
    const colorProps = Object.keys(colors)

    for (const key of keys) {
      if (
        colorProps.includes(key) &&
        Boolean(props[key as keyof typeof props])
      ) {
        return css`
          background: ${({ theme }) => theme.colors[key as keyof Colors]};
          border-color: ${({ theme }) => theme.colors[key as keyof Colors]};
          color: ${({ theme }) =>
            readableColor(
              String(theme.colors[key as keyof Colors]),
              theme.colors.dark,
              theme.colors.white
            )};

          &:hover {
            background: ${({ theme }) =>
              darken(0.05, String(theme.colors[key as keyof Colors]))};
            border-color: ${({ theme }) =>
              darken(0.05, String(theme.colors[key as keyof Colors]))};
            box-shadow: 0 4px 6px
              ${({ theme }) =>
                rgba(String(theme.colors[key as keyof Colors]), 0.2)};
            color: ${({ theme }) =>
              readableColor(
                darken(0.05, String(theme.colors[key as keyof Colors])),
                theme.colors.dark,
                theme.colors.white
              )};
          }
        `
      }
    }

    return null
  }}

  ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.dark};
    `}

    ${({ loading }) =>
    loading &&
    css`
      opacity: 0.7;
      cursor: wait;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: inherit;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-image: url(${loadingIcon});
        background-size: auto 75%;
        background-position: center;
        background-repeat: no-repeat;
      }
    `}

    &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  primary: true,
}

export default Button
