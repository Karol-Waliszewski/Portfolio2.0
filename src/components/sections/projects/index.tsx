import * as React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading } from 'components/typography'
import Card from 'components/sections/projects/card'

import type { Project as ProjectType } from 'typings/projects'

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
      <Container>
        <Heading>Co udało mi się stworzyć</Heading>
        <Swiper slidesPerView={3} spaceBetween={16} loop grabCursor>
          {cards}
        </Swiper>
      </Container>
    </ProjectWrapper>
  )
}

export default Project
