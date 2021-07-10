import React, { useRef } from 'react'
import styled from 'styled-components'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/container'
import { Heading } from 'components/typography'
import Button from 'components/button'
import Icon from 'components/icon'
import type { Project as ProjectType } from 'typings/projects'
import Card from 'components/sections/projects/card'

import leftIcon from 'assets/icons/arrow-down.svg'

SwiperCore.use([Navigation])

type ProjectsProps = {
  projects: ProjectType[]
}

const ProjectWrapper = styled.section`
  padding: 4rem 0;

  .swiper-slide {
    height: auto;
  }

  .swiper-slide-duplicate {
    picture {
      img {
        opacity: 1 !important;
      }
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
`

const ProjectButtonLeft = styled(ProjectButton)`
  left: 7px;
`

const ProjectButtonRight = styled(ProjectButton)`
  right: 7px;
`

const Project: React.FC<ProjectsProps> = ({ projects }) => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const cards = projects.map((el) => (
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
  ))

  return (
    <ProjectWrapper>
      <ProjectContainer>
        <Heading>Co udało mi się stworzyć</Heading>
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          loop
          grabCursor
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const { navigation } = swiper.params
              if (navigation) {
                navigation.prevEl = prevRef.current
                navigation.nextEl = nextRef.current
              }
            }
          }}
        >
          {cards}
        </Swiper>
        <ProjectButtonLeft outline square ref={prevRef}>
          <Icon src={leftIcon} />
        </ProjectButtonLeft>
        <ProjectButtonRight outline square ref={nextRef}>
          <Icon src={leftIcon} />
        </ProjectButtonRight>
      </ProjectContainer>
    </ProjectWrapper>
  )
}

export default Project
