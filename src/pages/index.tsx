import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import Image from 'components/image'
import LazyImage from 'components/lazyImage'

import astronautImage from 'assets/images/gatsby-astronaut.png'

type DataProps = {
  site: {
    buildTime: string
  }
  astronaut: ImageDataLike
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h2>Standard image</h2>
      <Image
        src={astronautImage}
        alt="A Gatsby astronaut"
        width={500}
        height={300}
        objectFit="contain"
        objectPosition="center"
      />
      <h2>Lazy image</h2>
      <LazyImage
        src={data.astronaut}
        alt="A Gatsby astronaut"
        objectFit="contain"
        width={500}
        height={300}
        objectPosition="center"
      />
      <p>
        You're currently on the page "{path}" which was built on{' '}
        {data?.site.buildTime}.
      </p>
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a")
    }
    astronaut: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`
