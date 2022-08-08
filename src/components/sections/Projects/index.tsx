import React, { useRef, useEffect, useState, useMemo } from 'react'
import styled, { css } from 'styled-components'
import SwiperCore, { Navigation, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import media from 'styles/media'
import { breakpoints } from 'styles/theme'

import Container from 'components/shared/Container'
import { Heading } from 'components/shared/Typography'
import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'
import Card from 'components/sections/Projects/Card'

import useNav from 'hooks/useNav'

import type ProjectType from 'types/projects'
import type ID from 'types/id'

import leftArrowIcon from 'assets/icons/arrow-left.svg'
import rightArrowIcon from 'assets/icons/arrow-right.svg'

SwiperCore.use([Navigation, Mousewheel])

type ProjectsProps = {
  projects: ProjectType[]
} & ID

const ProjectWrapper = styled.section`
  padding: 4rem 0;

  .swiper-slide {
    height: auto;
  }

  .swiper-wrapper.swiper-slide {
    transition-property: transform, -webkit-transform;
  }

  .swiper-slide-duplicate {
    picture {
      img {
        opacity: 1 !important;
      }
    }
  }

  .swiper-container {
    padding: 1rem 0.5rem;
    margin: -1rem -0.5rem;
  }

  ${media.md.max} {
    .swiper-container {
      overflow: initial;
    }
  }
`

const ProjectContainer = styled(Container)`
  position: relative;
`

const ProjectButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);

  ${media.md.max} {
    display: none;
  }

  ${({ theme }) =>
    theme.dark &&
    css`
      img {
        filter: brightness(0) invert(1);
      }
    `}
`

const ProjectButtonLeft = styled(ProjectButton)`
  left: -10px;
  ${media.xxl.max} {
    left: 6px;
  }
`

const ProjectButtonRight = styled(ProjectButton)`
  right: -10px;
  ${media.xxl.max} {
    right: 6px;
  }
`

const Project: React.FC<ProjectsProps> = ({ projects, id }) => {
  const { active: activeNav } = useNav()
  const [swiperRef, setSwiper] = useState<SwiperCore | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    return () => {
      if (swiperRef != null) {
        setTimeout(() => swiperRef.update(), 250)
      }
    }
  }, [activeNav, swiperRef])

  const cards = useMemo(
    () =>
      projects
        .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
        .map((el) => (
          <SwiperSlide>
            <Card
              name={el.frontmatter.name}
              slug={el.frontmatter.slug}
              live={el.frontmatter.live}
              github={el.frontmatter.github}
              technology={el.frontmatter.technology}
              thumbnail={el.frontmatter.thumbnail}
              alt={el.frontmatter.thumbnailAlt}
              excerpt={el.excerpt}
            />
          </SwiperSlide>
        )),
    [projects]
  )

  return (
    <ProjectWrapper id={id}>
      <ProjectContainer>
        <Heading as="h2">Co udało mi się stworzyć</Heading>
        <ProjectButtonLeft outline square ref={prevRef}>
          <Icon src={leftArrowIcon} />
        </ProjectButtonLeft>
        <ProjectButtonRight outline square ref={nextRef}>
          <Icon src={rightArrowIcon} />
        </ProjectButtonRight>
        <Swiper
          breakpoints={{
            [breakpoints.xs]: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            [breakpoints.sm]: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            [breakpoints.lg]: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          initialSlide={0}
          loop
          loopedSlides={4}
          grabCursor
          mousewheel={{ forceToAxis: true }}
          onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
          onBeforeInit={(swiper: SwiperCore) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const { navigation } = swiper.params
              if (navigation) {
                navigation.prevEl = prevRef.current
                navigation.nextEl = nextRef.current
                swiper.update()
              }
            }
          }}
        >
          {cards}
        </Swiper>
      </ProjectContainer>
    </ProjectWrapper>
  )
}

export default Project
