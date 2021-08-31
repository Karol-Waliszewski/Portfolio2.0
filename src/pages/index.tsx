import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import About from 'components/sections/about'
import Technology from 'components/sections/technology'
import Projects from 'components/sections/projects'
import TECHNOLOGIES from 'constants/technologies'

import type ProjectType from 'types/projects'

type DataProps = {
  about: ImageDataLike
  me: ImageDataLike
  projects: { edges: { node: ProjectType }[] }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const projects = data.projects.edges.map(({ node }) => node)

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <About image={data.me} id="about" />
      <Technology
        technologies={TECHNOLOGIES}
        id="technologies"
        title="To już znam"
        dual
      />
      <Projects projects={projects} id="projects" />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    about: file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
    me: file(relativePath: { eq: "images/me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
    projects: allMarkdownRemark {
      edges {
        node {
          excerpt
          html
          frontmatter {
            slug
            name
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            technology
            live
            github
          }
        }
      }
    }
  }
`
