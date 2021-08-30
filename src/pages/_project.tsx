import React, { useMemo } from 'react'
import { PageProps } from 'gatsby'

import Layout from 'components/layout'
import Seo from 'components/layout/seo'
import Header from 'components/layout/projectHeader'

import Container from 'components/shared/container'
import { Content } from 'components/shared/typography'

import Technology from 'components/sections/technology'

import getTechnology from 'utils/getTechnology'

type ProjectContext = {
  title: string
  content: string
  technology: string[]

  github?: string
  live?: string
}

const ProjectPage: React.FC<PageProps<object, ProjectContext>> = ({
  pageContext: { title, content, github, live, technology },
}) => {
  const technologies = useMemo(
    () => technology.map((name) => getTechnology(name)),
    [technology]
  )

  return (
    <Layout>
      <Seo title={title} />
      <Header title={title} github={github} live={live} />
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
      <Technology
        technologies={technologies}
        id="technologies"
        title="Wykorzystane technologie"
        dual={technologies.length >= 10}
      />
    </Layout>
  )
}

export default ProjectPage
