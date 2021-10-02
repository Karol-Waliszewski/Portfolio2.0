import React, { useMemo } from 'react'
import { PageProps } from 'gatsby'
import styled from 'styled-components'

import Layout from 'components/layout'
import Seo from 'components/layout/Seo'
import Header from 'components/layout/Header/Project'

import Container from 'components/shared/Container'
import { Content } from 'components/shared/Typography'
import Button from 'components/shared/Button'

import Technology from 'components/sections/Technology'

import getTechnology from 'utils/getTechnology'

type ProjectContext = {
  title: string
  subtitle?: string
  content: string
  technology: string[]

  github?: string
  live?: string
}

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 2rem;
`

const ProjectPage: React.FC<
  PageProps<Record<string, unknown>, ProjectContext>
> = ({
  pageContext: { title, subtitle, content, github, live, technology },
}) => {
  const technologies = useMemo(
    () => technology.map((name) => getTechnology(name)),
    [technology]
  )

  return (
    <Layout>
      <Seo title={title} />
      <Header title={title} subtext={subtitle} github={github} live={live} />
      <Container slim>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <ProjectButtons>
          {live && (
            <Button
              marginRight
              as="a"
              href={live}
              target="_blank"
              rel="noreferrer nofollow"
              primary
            >
              Podgląd
            </Button>
          )}
          {github && (
            <Button
              as="a"
              href={github}
              target="_blank"
              rel="noreferrer nofollow"
              primary
            >
              Github
            </Button>
          )}
        </ProjectButtons>
      </Container>

      <Technology
        technologies={technologies}
        id="technologies"
        title="Przydało się w projekcie"
        dual={technologies.length >= 10}
      />
    </Layout>
  )
}

export default ProjectPage
