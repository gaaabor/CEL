import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { Link as Anchor } from 'react-scroll'

import Features from '../components/Features'
import Shortcuts from '../components/Shortcuts'
import Icon from '../components/Icon'
import Button from '../components/Button'
import CountDown from '../components/CountDown'

const IndexPage = ({ data }) => (
  <Fragment>
    <header className="hero__container">
      <Img
        fluid={data.heroImage.childImageSharp.fluid}
        className="hero__image"
        alt="Kezdőkép"
      />
      <Img
        fluid={data.logoImage.childImageSharp.fluid}
        className="hero__logo"
        alt="Logo"
      />
      <div className="arrow__box">
        <Anchor to="introduction" spy={true} smooth={true} duration={700}>
          <Icon block="arrow" name="arrow-down" />
        </Anchor>
      </div>
    </header>

    <main>
      <section className="introduction" id="introduction">
        <Fade>
          <h1 className="heading-1 margin-top-sm margin-bottom-sm">
            Edzéseink
          </h1>
        </Fade>

        <Fade>
          <p className="introduction__text margin-bottom-md">
            Edzéseinken a capoeira minden “irányzatával” megismerkedhetsz.
            Tapasztalt, szakképzett oktatóink a capoeira mozgásvilágának
            megalapozása mellett nagy hangsúlyt fektetnek a megfelelő testi,
            lelki és szellemi egészség kialakítására, és megőrzésére.
            <br />
            <br />
            <br />
            Célunk – a capoeira kultúrájának minél alaposabb átadásán túl – az
            élethosszig tartó rendszeres testmozgás iránti igény kialakítása és
            kielégítése, az életminőség nagyfokú és tartós javítása, egy
            nyitott, barátságos, elfogadó és támogató közösség megteremtése.
          </p>
        </Fade>

        <Fade>
          <Button
            link="/edzesek"
            text="MIKOR ÉS HOL EDZÜNK"
            color="green"
            iconName="calendar"
          />
        </Fade>
      </section>

      <Features />
      <Shortcuts />
    </main>
  </Fragment>
)

export default IndexPage

export const homeQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 65) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}
