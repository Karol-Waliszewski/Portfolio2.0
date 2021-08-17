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

const technologies: TechnologyProps[] = [
  {
    link: 'https://reactjs.org/',
    logo: ReactLogo,
    name: 'react',
  },
  {
    link: 'https://www.gatsbyjs.com/',
    logo: GatsbyLogo,
    name: 'gatsby',
  },
  {
    link: 'https://nextjs.org/',
    logo: NextLogo,
    name: 'next.js',
  },
  {
    link: 'https://redux.js.org/',
    logo: ReduxLogo,
    name: 'redux',
  },
  {
    link: 'https://styled-components.com/',
    logo: StyledLogo,
    name: 'styled components',
  },
  {
    link: 'https://www.adobe.com/in/products/xd.html',
    logo: AdobeXDLogo,
    name: 'adobe xd',
  },
  {
    link: 'https://vuejs.org/',
    logo: VueLogo,
    name: 'vue',
  },
  {
    link: 'https://nuxtjs.org/',
    logo: NuxtLogo,
    name: 'nuxt.js',
  },
  {
    link: 'https://www.typescriptlang.org/',
    logo: TypescriptLogo,
    name: 'typescript',
  },
  {
    link: 'https://graphql.org/',
    logo: GraphQLLogo,
    name: 'graphql',
  },
  {
    link: 'https://sass-lang.com/',
    logo: SassLogo,
    name: 'sass',
  },
  {
    link: 'https://nodejs.org/',
    logo: NodeLogo,
    name: 'node',
  },
]

export default technologies
