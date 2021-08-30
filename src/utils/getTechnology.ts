import ReactLogo from 'assets/logos/react.svg'
import VueLogo from 'assets/logos/vue.svg'
import GraphQLLogo from 'assets/logos/graphql.svg'
import GatsbyLogo from 'assets/logos/gatsby.svg'
import NuxtLogo from 'assets/logos/nuxt.svg'
import NextLogo from 'assets/logos/next.svg'
import ReduxLogo from 'assets/logos/redux.svg'
import TypescriptLogo from 'assets/logos/typescript.svg'
import NodeLogo from 'assets/logos/node.svg'
import SassLogo from 'assets/logos/sass.svg'
import StyledLogo from 'assets/logos/styled.png'
import AdobeXDLogo from 'assets/logos/adobexd.svg'

import type TechnologyProps from 'types/technologies'

const getTechnology = (name: string): TechnologyProps => {
  switch (name) {
    case 'react':
      return {
        link: 'https://reactjs.org/',
        logo: ReactLogo,
        name: 'react',
      }

    case 'gatsby':
      return {
        link: 'https://www.gatsbyjs.com/',
        logo: GatsbyLogo,
        name: 'gatsby',
      }

    case 'next.js':
      return {
        link: 'https://nextjs.org/',
        logo: NextLogo,
        name: 'next.js',
      }

    case 'redux':
      return {
        link: 'https://redux.js.org/',
        logo: ReduxLogo,
        name: 'redux',
      }

    case 'styled components':
      return {
        link: 'https://styled-components.com/',
        logo: StyledLogo,
        name: 'styled components',
      }

    case 'adobe xd':
      return {
        link: 'https://www.adobe.com/in/products/xd.html',
        logo: AdobeXDLogo,
        name: 'adobe xd',
      }

    case 'vue':
      return {
        link: 'https://vuejs.org/',
        logo: VueLogo,
        name: 'vue',
      }

    case 'nuxt.js':
      return {
        link: 'https://nuxtjs.org/',
        logo: NuxtLogo,
        name: 'nuxt.js',
      }

    case 'typescript':
      return {
        link: 'https://www.typescriptlang.org/',
        logo: TypescriptLogo,
        name: 'typescript',
      }

    case 'graphql':
      return {
        link: 'https://graphql.org/',
        logo: GraphQLLogo,
        name: 'graphql',
      }
    case 'sass':
      return {
        link: 'https://sass-lang.com/',
        logo: SassLogo,
        name: 'sass',
      }

    case 'node':
      return {
        link: 'https://nodejs.org/',
        logo: NodeLogo,
        name: 'node',
      }

    default:
      throw new Error('Wrong technology name.')
  }
}

export default getTechnology
