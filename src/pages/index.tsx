import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import About from 'components/sections/about'
import Technology from 'components/sections/technology/index'
import Technologies from 'util/technologies'

import type { Project } from 'util/projects'

type DataProps = {
  about: ImageDataLike
  projects: { edges: { node: Project }[] }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  console.log(data.projects.edges[0].node.frontmatter)

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <About image={data.about} />
      <Technology technologies={Technologies} />
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
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
