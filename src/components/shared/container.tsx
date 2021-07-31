import styled, { css } from 'styled-components'

import media from 'styles/media'

type ContainerProps = {
  fullHeight?: boolean
  fullWidth?: boolean
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1000px;

  margin-left: auto;
  margin-right: auto;
  padding-left: 3rem;
  padding-right: 3rem;

  ${media.md.max} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${media.sm.max} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  box-sizing: border-box;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: initial;
    `}

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
`

export default Container
