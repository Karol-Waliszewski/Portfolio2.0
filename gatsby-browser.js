/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
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
