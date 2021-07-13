import styled, { css } from 'styled-components'

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

  border: 1px solid ${({ theme }) => theme.colors.gray};
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
