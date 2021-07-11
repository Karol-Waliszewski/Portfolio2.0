import styled from 'styled-components'

import { pxToRem } from 'styles/mixins'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  font-weight: 700;
  font-size: ${pxToRem(20)}rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Input = styled.input`
  width: 100%;
  padding: ${pxToRem(8)}rem ${pxToRem(14)}rem;

  font-weight: 500;

  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.lightgray};
`

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`
