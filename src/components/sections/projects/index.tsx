import * as React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import { Heading } from 'components/typography'
import Card from 'components/sections/projects/card'

import type { Project as ProjectType } from 'typings/projects'

type ProjectsProps = {
  projects: ProjectType[]
}

const ProjectWrapper = styled.section`
  padding: 4rem 0;
`

const Project: React.FC<ProjectsProps> = ({ projects }) => {
  const cards = projects.map((el) => (
    <Col xs={12} lg={6} xl={4}>
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
    </Col>
  ))

  return (
    <ProjectWrapper>
      <Container>
        <Grid>
          <Heading>Co udało mi się stworzyć</Heading>
          <Row alignItems="stretch">{cards}</Row>
        </Grid>
      </Container>
    </ProjectWrapper>
  )
}

export default Project
