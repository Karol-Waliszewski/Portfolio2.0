import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { pxToRem } from 'styles/mixins'

type BadgeProps = {
  marginRight?: boolean
  marginLeft?: boolean
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;

  color: ${({ theme }) => theme.colors.text};
  font-size: ${pxToRem(12)}rem;
  font-weight: 500;
  line-height: 1em;
  padding: ${pxToRem(4)}em ${pxToRem(10)}em;

  background: ${({ theme }) =>
    theme.dark ? lighten(0.05, String(theme.colors.lightgray)) : 'transparent'};
  border: 1px solid
    ${({ theme }) =>
      theme.dark
        ? lighten(0.05, String(theme.colors.lightgray))
        : theme.colors.gray};
  border-radius: 3px;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${pxToRem(4)}em;
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${pxToRem(4)}em;
    `}
`

export default Badge
