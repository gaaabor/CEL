import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Features from '../components/Home/Features'
import Shortcuts from '../components/Home/Shortcuts'
import Icon from '../components/Icon'
import Button from '../components/Button'

class IndexPage extends React.Component {
  render() {
    const {
      heroImage,
      mozgasImage,
      harcImage,
      zeneImage,
      nyelvImage,
    } = this.props.data

    console.log(heroImage.childImageSharp.fluid)

    return (
      <Fragment>
        <Img
          fluid={heroImage.childImageSharp.fluid}
          style={{ height: '90vh' }}
        />
        <div className="arrow__box">
          <a className="scroll" href="#trainings">
            <Icon block="arrow" name="arrow-down" />
          </a>
        </div>

        <section className="trainings" id="trainings">
          <Fade>
            <h1 className="heading-1 heading-1--green margin-top-sm margin-bottom-sm title1">
              Edzéseink
            </h1>
          </Fade>

          <Fade>
            <p className="trainings__text margin-bottom-md text1">
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

        <Features
          mozgasImage={mozgasImage.childImageSharp.fluid}
          harcImage={harcImage.childImageSharp.fluid}
          zeneImage={zeneImage.childImageSharp.fluid}
          nyelvImage={nyelvImage.childImageSharp.fluid}
        />

        <Shortcuts />
      </Fragment>
    )
  }
}

export default IndexPage

export const homeQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mozgasImage: file(relativePath: { eq: "mozgas.jpg" }) {
      ...featureImage
    }
    harcImage: file(relativePath: { eq: "harc.jpg" }) {
      ...featureImage
    }
    zeneImage: file(relativePath: { eq: "zene.jpg" }) {
      ...featureImage
    }
    nyelvImage: file(relativePath: { eq: "nyelv.jpg" }) {
      ...featureImage
    }
  }
  fragment featureImage on File {
    childImageSharp {
      fluid(maxWidth: 950, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}
