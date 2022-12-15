import ReactLogo from 'assets/logos/react.svg'
import VueLogo from 'assets/logos/vue.svg'
import GraphQLLogo from 'assets/logos/graphql.svg'
import GraphCMSLogo from 'assets/logos/graphcms.svg'
import GatsbyLogo from 'assets/logos/gatsby.svg'
import NuxtLogo from 'assets/logos/nuxt.svg'
import NextLogo from 'assets/logos/next.svg'
import ReduxLogo from 'assets/logos/redux.svg'
import TypescriptLogo from 'assets/logos/typescript.svg'
import NodeLogo from 'assets/logos/node.svg'
import TailwindLogo from 'assets/logos/tailwindcss.svg'
import ExpressLogo from 'assets/logos/expressjs.svg'
import SassLogo from 'assets/logos/sass.svg'
import StyledLogo from 'assets/logos/styled.png'
import AdobeXDLogo from 'assets/logos/adobexd.svg'
import BulmaLogo from 'assets/logos/bulma.svg'
import SocketLogo from 'assets/logos/socketio.svg'
import MongoLogo from 'assets/logos/mongo.svg'
import GulpLogo from 'assets/logos/gulp.svg'
import FlameLinkLogo from 'assets/logos/flamelink.png'

import type TechnologyProps from 'types/technologies'

const getTechnology = (name: string): TechnologyProps => {
  switch (name.toLowerCase()) {
    case 'react':
      return {
        link: 'https://reactjs.org/',
        logo: ReactLogo,
        name: 'React',
      }

    case 'gatsby':
      return {
        link: 'https://www.gatsbyjs.com/',
        logo: GatsbyLogo,
        name: 'Gatsby',
      }

    case 'next.js':
      return {
        link: 'https://nextjs.org/',
        logo: NextLogo,
        name: 'Next.js',
      }

    case 'redux':
      return {
        link: 'https://redux.js.org/',
        logo: ReduxLogo,
        name: 'Redux',
      }

    case 'styled components':
    case 'styledcomponents':
    case 'styled-components':
      return {
        link: 'https://styled-components.com/',
        logo: StyledLogo,
        name: 'StyledComponents',
      }

    case 'adobe xd':
      return {
        link: 'https://www.adobe.com/in/products/xd.html',
        logo: AdobeXDLogo,
        name: 'AdobeXD',
      }

    case 'vue':
      return {
        link: 'https://vuejs.org/',
        logo: VueLogo,
        name: 'Vue',
      }

    case 'nuxt.js':
      return {
        link: 'https://nuxtjs.org/',
        logo: NuxtLogo,
        name: 'Nuxt.js',
      }

    case 'typescript':
      return {
        link: 'https://www.typescriptlang.org/',
        logo: TypescriptLogo,
        name: 'TypeScript',
      }

    case 'graphql':
      return {
        link: 'https://graphql.org/',
        logo: GraphQLLogo,
        name: 'GraphQL',
      }

    case 'graphcms':
      return {
        link: 'https://graphcms.com/',
        logo: GraphCMSLogo,
        name: 'GraphCMS',
      }

    case 'sass':
    case 'scss':
      return {
        link: 'https://sass-lang.com/',
        logo: SassLogo,
        name: 'Sass',
      }

    case 'tailwindcss':
      return {
        link: 'https://tailwindcss.com/',
        logo: TailwindLogo,
        name: 'TailwindCSS',
      }

    case 'flamelink':
      return {
        link: 'https://flamelink.io/',
        logo: FlameLinkLogo,
        name: 'FlameLink',
      }

    case 'gulp':
    case 'gulpjs':
      return {
        link: 'https://gulpjs.com/',
        logo: GulpLogo,
        name: 'Gulp',
      }

    case 'node':
    case 'node.js':
      return {
        link: 'https://nodejs.org/',
        logo: NodeLogo,
        name: 'NodeJS',
      }

    case 'express':
    case 'expressjs':
    case 'express.js':
      return {
        link: 'https://expressjs.com/',
        logo: ExpressLogo,
        name: 'Express',
      }

    case 'socket.io':
      return {
        link: 'https://socket.io/',
        logo: SocketLogo,
        name: 'Socket.io',
      }

    case 'bulma':
      return {
        link: 'https://bulma.io/',
        logo: BulmaLogo,
        name: 'Bulma',
      }

    case 'mongo':
    case 'mongodb':
      return {
        link: 'https://www.mongodb.com/',
        logo: MongoLogo,
        name: 'MongoDB',
      }

    default:
      throw new Error(`Wrong technology name: ${name}`)
  }
}

export default getTechnology
