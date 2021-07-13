import * as React from 'react'
import { PageProps } from 'gatsby'

import Layout from 'components/layout/layout'
import Seo from 'components/layout/seo'
import Header from 'components/layout/projectHeader'
import Container from 'components/shared/container'
import { Content } from 'components/shared/typography'

type ProjectContext = {
  title: string
  content: string
  github?: string
  live?: string
}

const ProjectPage: React.FC<PageProps<object, ProjectContext>> = ({
  pageContext: { title, content, github, live },
}) => (
  <Layout>
    <Seo title={title} />
    <Header title={title} github={github} live={live} />
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  </Layout>
)

export default ProjectPage
