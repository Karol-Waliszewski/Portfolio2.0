import styled, { css } from 'styled-components'

type ContainerProps = {
  fullHeight?: boolean
  fullWidth?: boolean
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: calc(1000px + 3rem);

  margin-left: auto;
  margin-right: auto;
  padding-left: 3rem;
  padding-right: 3rem;

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
