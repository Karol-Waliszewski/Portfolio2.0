import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import { Heading } from 'components/shared/typography'

import Logos from 'components/sections/technology/logos'

import type SingleTechnologyProps from 'types/technologies'
import type ID from 'types/id'

type TechnologyProps = {
  technologies: SingleTechnologyProps[]
  title: string
  dual?: boolean
} & ID

const TechnologyWrapper = styled.section`
  padding: 3rem 0;
  background: ${({ theme }) => theme.colors.lightgray};
`

const Technology: React.FC<TechnologyProps> = ({
  technologies,
  id,
  title,
  dual,
}) => {
  const half = Math.ceil(technologies.length / 2)
  const first = technologies.slice(0, half)
  const second = technologies.slice(half, technologies.length)

  return (
    <TechnologyWrapper id={id}>
      <Container>
        <Heading align="center" as="h2">
          {title}
        </Heading>
      </Container>
      {!dual && (
        <Logos speed={technologies.length < 6 ? 0 : 20} slides={technologies} />
      )}
      {dual && (
        <>
          <Logos speed={14} slides={first} />
          <Logos speed={16} slides={second} />
        </>
      )}
    </TechnologyWrapper>
  )
}

export default Technology
