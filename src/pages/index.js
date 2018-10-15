import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Features from '../components/Home/Features'
import Shortcuts from '../components/Home/Shortcuts'
import Icon from '../components/Icon'
import Button from '../components/Button'

const IndexPage = ({ data }) => (
  <Fragment>
    <header className="hero__container">
      <Img
        fluid={data.heroImage.childImageSharp.fluid}
        className="hero__image"
      />
      <h1 className="hero__heading">Capoeira Espirito Livre</h1>
      <div className="arrow__box">
        <a className="scroll" href="#trainings">
          <Icon block="arrow" name="arrow-down" />
        </a>
      </div>
    </header>

    <main>
      <section className="introduction" id="trainings">
        <Fade>
          <h1 className="heading-1 heading-1--green margin-top-sm margin-bottom-sm title1">
            Edzéseink
          </h1>
        </Fade>

        <Fade>
          <p className="introduction__text margin-bottom-md">
            Edzéseinken a capoeira minden “irányzatával” megismerkedhetsz.
            Tapasztalt, szakképzett oktatóink a capoeira alapjainak minél
            hatékonyabb átadása mellett nagy hangsúlyt fektetnek a megfelelő
            testi, lelki és szellemi egészség kialakítására, és megőrzésére.
            <br />
            <br />
            <br />
            Célunk az élethosszig tartó rendszeres testmozgás iránti igény
            kialakítása és kielégítése, az életminőség nagy mértékű és tartós
            javítása, egy nyitott, barátságos, elfogadó és támogató közösség
            megteremtése.
          </p>
        </Fade>

        <Fade>
          <Button
            link="/trainings"
            text="MIKOR ÉS HOL EDZÜNK"
            color="green"
            iconName="calendar"
          />
        </Fade>
      </section>

      <Features />
    </main>
  </Fragment>
)

export default IndexPage

export const homeQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 65) {
          ...GatsbyImageSharpFluid
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
