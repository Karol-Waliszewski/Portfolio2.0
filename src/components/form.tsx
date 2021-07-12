import styled, { css } from 'styled-components'

import { pxToRem } from 'styles/mixins'

type InputProps = {
  error?: boolean
}

type InfoProps = {
  visible?: boolean

  error?: boolean
  success?: boolean
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.span<InfoProps>`
  display: block;
  min-height: ${pxToRem(23)}rem;

  font-size: ${pxToRem(12)}rem;
  font-weight: 500;

  visibility: hidden;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;

  font-weight: 700;
  font-size: ${pxToRem(18)}rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: ${pxToRem(8)}rem ${pxToRem(14)}rem;

  font-weight: 500;

  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.lightgray};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.lightgray};
`

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`
