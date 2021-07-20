import * as React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/container'
import { Heading } from 'components/shared/typography'

import Swiper from 'components/sections/technology/swiper'

import type SingleTechnologyProps from 'types/technologies'

type TechnologyProps = {
  technologies: SingleTechnologyProps[]
}

const TechnologyWrapper = styled.section`
  padding: 3rem 0;
  background: ${({ theme }) => theme.colors.lightgray};
`

const TechnologySwiperWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: -2rem;
  margin-right: -2rem;

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`

const Technology: React.FC<TechnologyProps> = ({ technologies }) => {
  const half = Math.ceil(technologies.length / 2)
  const first = technologies.slice(0, half)
  const second = technologies.slice(half, technologies.length)

  return (
    <TechnologyWrapper>
      <Container>
        <Heading align="center" as="h2">
          To już znam
        </Heading>
      </Container>
      <TechnologySwiperWrapper>
        <Swiper slidesPerView={6} speed={1000} slides={first} />
      </TechnologySwiperWrapper>
      <TechnologySwiperWrapper>
        <Swiper slidesPerView={6} speed={1500} slides={second} />
      </TechnologySwiperWrapper>
    </TechnologyWrapper>
  )
}

export default Technology
