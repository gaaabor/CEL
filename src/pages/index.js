// Basic React Stuff
import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

// Building blocks
import Features from '../components/Home/Features'
import Shortcuts from '../components/Home/Shortcuts'

// Individual components
import Button from '../components/Button'
import Icon from '../components/Icon'

// Styles
import '../styles/main.scss'

// Page render
class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Img
          fluid={this.props.data.heroImage.childImageSharp.fluid}
          style={{ height: '90vh' }}
        />
        <div className="arrow__box">
          <a className="scroll" href="#trainings">
            <Icon block="arrow" name="arrow-down" />
          </a>
        </div>

        <section className="trainings" id="trainings">
          <Fade bottom>
            <h1 className="heading-1 heading-1--green margin-top-sm margin-bottom-sm title1">
              Edzéseink
            </h1>
          </Fade>

          <Fade bottom>
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

          <Fade bottom>
            <Button
              link="/trainings"
              text="MIKOR ÉS HOL EDZÜNK"
              color="green"
              iconName="calendar"
            />
          </Fade>
        </section>

        <Features />

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
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
