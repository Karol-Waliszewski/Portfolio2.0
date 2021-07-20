import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SingleTechnology from 'components/sections/technology/single'

import type SingleTechnologyProps from 'types/technologies'

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
      const duration = slideTo === 0 ? 1 : swiper.slides.length * speed
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
    >
      {slidesDOM}
    </Swiper>
  )
}

export default TechnologySwiper
