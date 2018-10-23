import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import PageHeader from '../components/PageHeader'
import Teachers from '../components/Teacher/Teachers'

const groupPage = ({ data }) => (
  <Fragment>
    <header>
      <PageHeader
        fluid={data.csoportImage.childImageSharp.fluid}
        page="group"
      />
    </header>
    <main>
      <section className="kezdetek margin-top-sm margin-bottom-sm">
        <h1 className="heading-1 margin-top-sm margin-bottom-sm">A kezdetek</h1>

        <p className="kezdetek__text margin-bottom-md">
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
      </section>
      <section className="teachers">
        <h1 className="heading-1 margin-top-sm margin-bottom-sm">TANÁRAINK</h1>
        <Teachers />
      </section>
    </main>
  </Fragment>
)

export default groupPage

export const groupQuery = graphql`
  query {
    csoportImage: file(relativePath: { eq: "csoport.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 100) {
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
