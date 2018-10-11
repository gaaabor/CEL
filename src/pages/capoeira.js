import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const capoeiraPage = ({ data }) => (
  <Fragment>
    <div className="page__container">
      <div className="iframe__container iframe-container-4x3">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/HgFEUPgpwc4?rel=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    </div>
  </Fragment>
)

export default capoeiraPage

export const capoeiraQuery = graphql`
  query {
    capoeiraImage: file(relativePath: { eq: "capoeira_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 65) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
