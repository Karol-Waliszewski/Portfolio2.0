import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout'
import Header from 'components/layout/Header/Homepage'
import Seo from 'components/layout/Seo'
import About from 'components/sections/About'
import Technology from 'components/sections/Technology'
import Projects from 'components/sections/Projects'
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
      <Seo title="Strona główna" />
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
            order
          }
        }
      }
    }
  }
`
