import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Fade from 'react-reveal/Fade'

import Button from './Button'

const Shortcuts = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className="shortcut margin-bottom-lg">
        <Shortcut
          fluid={data.csoportImage.childImageSharp.fluid}
          text="Csoportunkat Professor Cabeludo (Oláh Krisztián) és Instrutor Magrão
        (Balogh Tamás) alapította 2016-ban."
          btnLink="/csoport"
          btnText="Nézz be hozzánk"
          iconName="group"
        />
        <Shortcut
          fluid={data.taborImage.childImageSharp.fluid}
          text="Egy kihagyhatatlan lehetőség, hogy elmélyedj a capoeira-ban, és életre szóló
élményeket szerezz!"
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
const Shortcut = props => (
  <div className="shortcut__container">
    <Img fluid={props.fluid} className="shortcut__pic" />
    <div className="shortcut__overlay">
      <div className="shortcut__text-box">
        <Fade>
          <p className="shortcut__text">{props.text}</p>
        </Fade>
        <Fade>
          <Button
            link={props.btnLink}
            text={props.btnText}
            color="ghost"
            iconName={props.iconName}
          />
        </Fade>
      </div>
    </div>
  </div>
)

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}
