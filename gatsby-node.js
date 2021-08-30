/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              slug
              name
              live
              github
              technology
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/projects${node.frontmatter.slug}`,
      component: path.resolve(`./src/pages/_project.tsx`),
      context: {
        content: node.html,
        title: node.frontmatter.name,
        live: node.frontmatter.live,
        github: node.frontmatter.github,
        technology: node.frontmatter.technology,
      },
    })
  })
}
