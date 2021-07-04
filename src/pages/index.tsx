import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import About from 'components/sections/about'

type DataProps = {
  about: ImageDataLike
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <About image={data.about} />

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
  }
`
