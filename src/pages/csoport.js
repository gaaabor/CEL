import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import PageHeader from '../components/PageHeader'
import Teachers from '../components/Teachers'

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
        <Fade>
          <h1 className="heading-1 margin-top-sm margin-bottom-sm">
            A kezdetek
          </h1>
        </Fade>

        <Fade>
          <p className="kezdetek__text margin-bottom-md">
            Csoportunk, a Capoeira Espírito Livre (Capoeira Szabad Szellem)
            2016-ban azzal a céllal alakult, hogy magas színvonalú, minőségi
            oktatást biztosítson a capoeira iránt érdeklődők számára. <br />
            Azóta is számos helyszínen, heti több alkalommal zajlanak edzéseink,
            melyekre sok szeretettel várunk mindenkit, aki kortól, nemtől,
            vallási felekezettől függetlenül!
            <br />
            <br />
            Amennyiben úgy érzed, valamely kérdésedre nem kaptál választ az
            oldalon, keress minket bátran az{' '}
            <a
              href="mailto:someone@yoursite.com"
              rel="noopener noreferrer"
              target="_blank"
              className="kezdetek__link"
            >
              info@cel-capoeira.com
            </a>{' '}
            e-mail címen. Ha szeretnél bepillantást nyeri csoportunk életébe,
            látogass el{' '}
            <a
              href="https://www.facebook.com/cel.capoeira/"
              rel="noopener noreferrer"
              target="_blank"
              className="kezdetek__link"
            >
              Facebook
            </a>{' '}
            oldalunkra, vagy nézelődj{' '}
            <a
              href="https://www.youtube.com/channel/UCgbYtjFmdAffgUoptWjYf-w"
              rel="noopener noreferrer"
              target="_blank"
              className="kezdetek__link"
            >
              Youtube
            </a>{' '}
            csatornánkon!”
          </p>
        </Fade>
      </section>
      <section className="teachers">
        <Fade>
          <h1 className="heading-1 teachers__heading margin-bottom-md">
            TANÁRAINK
          </h1>
        </Fade>
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
