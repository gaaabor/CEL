import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Shortcut from './Shortcut'

const Shortcuts = () => (
  <StaticQuery
    query={graphql`
      query shortcutQuery {
        csoportImage: file(relativePath: { eq: "csoport_square.jpg" }) {
          ...shortcutImage
        }
        capoeiraImage: file(relativePath: { eq: "capoeira_square.jpg" }) {
          ...shortcutImage
        }
        taborImage: file(relativePath: { eq: "tabor_square.jpg" }) {
          ...shortcutImage
        }
      }
      fragment shortcutImage on File {
        childImageSharp {
          fluid(maxWidth: 640, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
      <section className="shortcut">
        <Shortcut
          name="csoport"
          title="csoport"
          fluid={data.csoportImage.childImageSharp.fluid}
          text="Csoportunkat Professor Cabeludo (Oláh Krisztián) és Instrutor Magrão
        (Balogh Tamás) alapította 2016-ban."
          btnLink="/group"
          btnText="Nézz be hozzánk"
          iconName="group"
        />
        <Shortcut
          name="capoeira"
          title="capoeira"
          fluid={data.capoeiraImage.childImageSharp.fluid}
          text="Ismerd meg a capoeira világát és történelmét."
          btnLink="/capoeira"
          btnText="Tudj meg többet"
          iconName="book"
        />
        <Shortcut
          name="tabor"
          title="tabor"
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

// // Images & Assets
// import csoport from '../../images/csoport_square.jpg'
// import capoeira from '../../images/capoeira_square.jpg'
// import tabor from '../../images/tabor_square.jpg'

// const csoportImg = {
//   backgroundImage: `url(${csoport})`,
// }

// const capoeiraImg = {
//   backgroundImage: `url(${capoeira})`,
// }

// const taborImg = {
//   backgroundImage: `url(${tabor})`,
// }
