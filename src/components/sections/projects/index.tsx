import * as React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'components/container'
import { Heading } from 'components/typography'
import Button from 'components/button'
import Icon from 'components/icon'
import type { Project as ProjectType } from 'typings/projects'
import Card from 'components/sections/projects/card'

import leftIcon from 'assets/icons/arrow-down.svg'

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
        <ProjectButtonLeft outline square>
          <Icon src={leftIcon} />
        </ProjectButtonLeft>
        <Heading>Co udało mi się stworzyć</Heading>
        <Swiper slidesPerView={3} spaceBetween={16} loop grabCursor>
          {cards}
        </Swiper>
        <ProjectButtonRight outline square>
          <Icon src={leftIcon} />
        </ProjectButtonRight>
      </ProjectContainer>
    </ProjectWrapper>
  )
}

export default Project
