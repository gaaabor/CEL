import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const nonPageComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        capoeiraImage: file(relativePath: { eq: "capoeira_square.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1 className="heading-1 heading-1--green">CAPOEIRA PAGE</h1>
        <Img
          fluid={data.capoeiraImage.childImageSharp.fluid}
          style={{ height: '90vh' }}
        />
      </div>
    )}
  />
)

export default nonPageComponent
