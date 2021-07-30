import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import About from 'components/sections/about'
import Technology from 'components/sections/technology'
import Projects from 'components/sections/projects'
import TECHNOLOGIES from 'util/technologies'

import type ProjectType from 'types/projects'

type DataProps = {
  about: ImageDataLike
  projects: { edges: { node: ProjectType }[] }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const projects = data.projects.edges.map(({ node }) => node)

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <About image={data.about} id="about" />
      <Technology technologies={TECHNOLOGIES} id="technologies" />
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
