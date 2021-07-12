import styled, { css } from 'styled-components'
import { darken, rgba } from 'polished'

import { pxToRem } from 'styles/mixins'

import loadingIcon from 'assets/icons/loading.svg'

type ButtonProps = {
  primary?: boolean
  light?: boolean
  success?: boolean
  danger?: boolean
  dark?: boolean
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

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) =>
          darken(0.05, String(theme.colors.primary))};
        border-color: ${({ theme }) =>
          darken(0.05, String(theme.colors.primary))};
        box-shadow: 0 3px 6px
          ${({ theme }) => rgba(String(theme.colors.primary), 0.3)};
      }
    `}

  ${({ light }) =>
    light &&
    css`
      background: ${({ theme }) => theme.colors.light};
      border-color: ${({ theme }) => theme.colors.light};

      &:hover {
        background: ${({ theme }) => darken(0.05, String(theme.colors.light))};
        border-color: ${({ theme }) =>
          darken(0.05, String(theme.colors.light))};
        box-shadow: 0 3px 6px
          ${({ theme }) => rgba(String(theme.colors.light), 0.4)};
      }
    `}

    ${({ danger }) =>
    danger &&
    css`
      background: ${({ theme }) => theme.colors.danger};
      border-color: ${({ theme }) => theme.colors.danger};

      &:hover {
        background: ${({ theme }) => darken(0.05, String(theme.colors.danger))};
        border-color: ${({ theme }) =>
          darken(0.05, String(theme.colors.danger))};
        box-shadow: 0 3px 6px
          ${({ theme }) => rgba(String(theme.colors.danger), 0.25)};
      }
    `}

    ${({ success }) =>
    success &&
    css`
      background: ${({ theme }) => theme.colors.success};
      border-color: ${({ theme }) => theme.colors.success};

      &:hover {
        background: ${({ theme }) =>
          darken(0.05, String(theme.colors.success))};
        border-color: ${({ theme }) =>
          darken(0.05, String(theme.colors.success))};
        box-shadow: 0 3px 6px
          ${({ theme }) => rgba(String(theme.colors.success), 0.25)};
      }
    `}

    ${({ dark }) =>
    dark &&
    css`
      background: ${({ theme }) => theme.colors.dark};
      border-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background: ${({ theme }) => darken(0.05, String(theme.colors.dark))};
        border-color: ${({ theme }) => darken(0.05, String(theme.colors.dark))};
        box-shadow: 0 3px 6px
          ${({ theme }) => rgba(String(theme.colors.dark), 0.2)};
      }
    `}

    ${({ outline, dark }) =>
    outline &&
    css`
      background: transparent;
      ${dark &&
      css`
        color: ${({ theme }) => theme.colors.dark};
        &:hover {
          color: ${({ theme }) => theme.colors.white};
        }
      `}
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
