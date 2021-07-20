import styled, { css } from 'styled-components'

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
