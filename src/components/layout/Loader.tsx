import React from 'react'
import styled, { css } from 'styled-components'

import type { ActiveRequired } from 'types/active'

const LoaderWrapper = styled.aside<ActiveRequired>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};

  opacity: 1;
  visibility: visible;

  transition: opacity 350ms ease-in-out, visibility 350ms ease-in-out;

  ${({ active }) =>
    !active &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`

const Loader: React.FC<ActiveRequired> = ({ active }) => {
  return <LoaderWrapper active={active} />
}

export default Loader
