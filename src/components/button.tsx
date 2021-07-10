import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { pxToRem } from 'styles/mixins'
import loadingIcon from 'assets/icons/loading.svg'

type ButtonProps = {
  primary?: boolean
  light?: boolean
  dark?: boolean
  outline?: boolean
  loading?: boolean
}

const Button = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;

  padding: ${pxToRem(6)}rem ${pxToRem(12)}rem;

  color: ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  border: 2px solid transparent;

  font-size: ${pxToRem(16)}rem;
  font-weight: 500;
  text-decoration: none;

  cursor: pointer;
  transition: color 100ms ease, background-color 100ms ease,
    border-color 100ms ease;

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
