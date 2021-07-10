import * as React from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import { Autoplay, Swiper as SwiperCore } from 'swiper'

import 'swiper/swiper-bundle.css'

import Container from 'components/container'
import { Heading } from 'components/typography'
import SingleTechnology from 'components/sections/technology/single'
import type { TechnologyProps as SingleTechnologyProps } from 'util/technologies'

SwiperCore.use([Autoplay])

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
  const technologiesDOM = technologies.map((el) => (
    <div key={el.name}>
      <SingleTechnology name={el.name} logo={el.logo} link={el.link} />
    </div>
  ))

  return (
    <TechnologyWrapper>
      <Container>
        <Heading align="center">To już znam</Heading>
      </Container>
      <TechnologySwiperWrapper>
        <Swiper
          slidesPerView={6}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: true,
          // }}
          on={{
            transitionEnd: (swiper) => {
              const speed = swiper.params.speed ?? 3000
              swiper.slideTo(0, 0)
              swiper.slideTo(
                swiper.slides.length - 1,
                swiper.slides.length * speed
              )
              // swiper.slideNext(swiper.params.speed)
            },
          }}
          speed={2000}
          freeMode
          loop
          noSwiping
        >
          {technologiesDOM}
        </Swiper>
      </TechnologySwiperWrapper>
      {/* <TechnologySwiperWrapper>
        <Swiper
          slidesPerView={6}
          autoplay={{
            delay: -1,
            disableOnInteraction: false,
          }}
          speed={3500}
          freeMode
          loop
          grabCursor
        >
          {technologiesDOM}
        </Swiper>
      </TechnologySwiperWrapper> */}
    </TechnologyWrapper>
  )
}

export default Technology
