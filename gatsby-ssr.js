/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require('react')
const { GlobalStyles } = require('styles')

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
