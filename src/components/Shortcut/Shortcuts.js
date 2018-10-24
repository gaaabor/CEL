import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Shortcut from './Shortcut'

const Shortcuts = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className="shortcut margin-bottom-lg">
        <Shortcut
          fluid={data.csoportImage.childImageSharp.fluid}
          text="Csoportunkat Professor Cabeludo (Oláh Krisztián) és Instrutor Magrão
        (Balogh Tamás) alapította 2016-ban."
          btnLink="/group"
          btnText="Nézz be hozzánk"
          iconName="group"
        />
        <Shortcut
          fluid={data.taborImage.childImageSharp.fluid}
          text="Egy kihagyhatatlan lehetőség, hogy a capoeira-val intenzíven foglalkozzunk és persze életreszóló élményekkel térjünk
            haza!"
          btnLink="/tabor"
          btnText="Éld át te is"
          iconName="sea-waves"
        />
      </section>
    )}
  />
)

export default Shortcuts

const query = graphql`
  query shortcutQuery {
    csoportImage: file(relativePath: { eq: "csoport.jpg" }) {
      ...shortcutImage
    }
    taborImage: file(relativePath: { eq: "tabor.jpg" }) {
      ...shortcutImage
    }
  }
  fragment shortcutImage on File {
    childImageSharp {
      fluid(maxWidth: 1900, quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
