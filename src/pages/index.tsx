import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from 'components/layout/layout'
import Header from 'components/layout/header'
import Seo from 'components/layout/seo'
import About from 'components/sections/about'
import Technology from 'components/sections/technology/index'
import { SingleTechnologyProps } from 'components/sections/technology/single'

import ReactLogo from 'assets/logos/react.png'
import VueLogo from 'assets/logos/vue.png'
import GraphQLLogo from 'assets/logos/graphql.png'
import GatsbyLogo from 'assets/logos/gatsby.svg'
import NuxtLogo from 'assets/logos/nuxt.svg'

type DataProps = {
  about: ImageDataLike
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const technologies: SingleTechnologyProps[] = [
    {
      link: 'https://reactjs.org/',
      logo: ReactLogo,
      name: 'react',
    },
    {
      link: 'https://vuejs.org/',
      logo: VueLogo,
      name: 'vue',
    },
    {
      link: 'https://graphql.org/',
      logo: GraphQLLogo,
      name: 'graphql',
    },
    {
      link: 'https://www.typescriptlang.org/',
      logo: '',
      name: 'typescript',
    },
    {
      link: 'https://www.gatsbyjs.com/',
      logo: GatsbyLogo,
      name: 'gatsby',
    },
    {
      link: 'https://nextjs.org/',
      logo: '',
      name: 'next.js',
    },
    {
      link: 'https://redux.js.org/',
      logo: '',
      name: 'redux',
    },
    {
      link: 'https://nuxtjs.org/',
      logo: NuxtLogo,
      name: 'nuxt.js',
    },
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <About image={data.about} />
      <Technology technologies={technologies} />
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
