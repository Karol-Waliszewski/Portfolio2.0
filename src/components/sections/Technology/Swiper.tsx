import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SingleTechnology from 'components/sections/Technology/Single'

import type SingleTechnologyProps from 'types/technologies'

import { breakpoints } from 'styles/theme'
import 'swiper/swiper-bundle.css'

type TechnologySwiperProps = {
  speed: number
  slidesPerView: number
  slides: SingleTechnologyProps[]
}

const TechnologySwiper: React.FC<TechnologySwiperProps> = ({
  speed,
  slidesPerView,
  slides,
}) => {
  const slidesDOM = slides.map((el) => (
    <SwiperSlide key={el.name}>
      <SingleTechnology name={el.name} logo={el.logo} link={el.link} />
    </SwiperSlide>
  ))

  const generateAutoPlay = () => {
    let slideTo = 0

    return (swiper: SwiperCore) => {
      slideTo = slideTo === 0 ? swiper.slides.length - 1 : 0
      const duration =
        slideTo === 0
          ? 1
          : swiper.slides.length * (swiper.params.speed ?? speed)
      swiper.slideTo(slideTo, duration, true)
    }
  }

  const autoPlay = generateAutoPlay()

  return (
    <Swiper
      slidesPerView={slidesPerView}
      onTransitionEnd={autoPlay}
      speed={speed}
      freeMode
      loop
      noSwiping
      allowTouchMove={false}
      breakpoints={{
        [breakpoints.xs]: {
          slidesPerView: Math.ceil(slidesPerView / 2),
          spaceBetween: 10,
          speed: Math.ceil(speed * 1.5),
        },
        [breakpoints.sm]: {
          slidesPerView: Math.ceil((slidesPerView / 3) * 2),
          spaceBetween: 10,
          speed: Math.ceil(speed * 1.25),
        },
        [breakpoints.md]: {
          slidesPerView: slidesPerView - 1,
          spaceBetween: 15,
          speed,
        },
        [breakpoints.xl]: {
          slidesPerView: 6,
          spaceBetween: 15,
          speed,
        },
      }}
    >
      {slidesDOM}
    </Swiper>
  )
}

export default TechnologySwiper
