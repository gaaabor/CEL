import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const taborPage = ({ data }) => (
  <div className="tabor__background">
    <div className="tabor__text">
      <h1>Edzőtábor - Acampamento</h1>
      <h1>2019</h1>
      <h2>
        Részletek hamarosan itt és a tábor{' '}
        <a
          href="https://www.facebook.com/cel.capoeira.acampamento"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{' '}
        oldalán!
      </h2>
      <Img
        fluid={data.taborLogoImage.childImageSharp.fluid}
        className="tabor__image"
        alt="Tábor logo"
      />
    </div>
  </div>
)

export default taborPage

export const taborQuery = graphql`
  query {
    taborLogoImage: file(relativePath: { eq: "tabor-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
