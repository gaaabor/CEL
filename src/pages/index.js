// Basic React Stuff
import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Zoom from 'react-reveal/Zoom'

// Building blocks
// import Hero from '../components/Hero'
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
        {/* <Img
          sizes={this.props.data.heroImage.sizes}
          style={{ height: '90vh' }}
        /> */}
        <div className="arrow__box">
          <a className="scroll" href="#trainings">
            <Icon block="arrow" name="arrow-down" />
          </a>
        </div>

        <Zoom fraction={0.95}>
          <section className="trainings" id="trainings">
            <h1 className="heading-1 heading-1--green margin-top-sm margin-bottom-sm title1">
              Edzéseink
            </h1>

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

            <Button
              link="/trainings"
              text="MIKOR ÉS HOL EDZÜNK"
              color="green"
              iconName="calendar"
            />
          </section>
        </Zoom>

        <Zoom>
          <Features />
        </Zoom>

        <Shortcuts />
      </Fragment>
    )
  }
}

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     heroImage: imageSharp(id: { regex: "/hero.jpg/" }) {
//       sizes(maxWidth: 1920) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query HeroImageQuery {
//     heroImage: imageSharp(id: { regex: "/hero/" }) {
//       sizes(maxWidth: 1900) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
