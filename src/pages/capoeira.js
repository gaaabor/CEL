import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const capoeiraPage = ({ data }) => (
  <Fragment>
    <div>
      <h1 className="heading-1 heading-1--green">CAPOEIRA PAGE</h1>
      <Img
        fluid={data.capoeiraImage.childImageSharp.fluid}
        style={{ height: '90vh' }}
      />
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
