import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'

const capoeiraPage = ({ data }) => (
  <Fragment>
    <header>
      <PageHeader
        fluid={data.capoeiraImage.childImageSharp.fluid}
        page="group"
      />
    </header>
    <main className="margin-top-md">
      <h1 className="capoeira__heading heading-1 margin-bottom-tiny">
        Történelem
      </h1>
      <p className="capoeira__text">
        A capoeira lenyűgöző mivolta abban rejlik, hogy egy élő és „lélegző”
        harcművészet, ami mind a mai napig folyamatosan változik, szüntelenül
        fejlődésben van. Ez a „tulajdonsága” egész történelmét meghatározta,
        hiszen az évszázadok során mindig igyekezett mindent „magába szívni”,
        ami a „hasznára válhatott”. Ennek köszönhetően mozgásvilága rendkívül
        sokszínű, kultúrájából fakadóan pedig a felszabadultság és a vidámság
        jellemzi.
      </p>
      <p className="capoeira__text">
        Feltalálása” nem egy ember nevéhez köthető, hanem egy igen hosszú
        folyamat végeredménye, s mint olyan, nem lehet tudni pontosan, hogy
        mikor is történt. Valószínűleg már a gyarmatosítás idején megkezdődött,
        az első rabszolgák dél-amerikai kontinensre érkezésével. Ezért is
        szoktak az „afro-brazil” jelzővel utalni rá, mivel számtalan, törzsi
        kultúrából eredő hagyomány és „szertartás” található benne, ugyanakkor a
        mai formájában – az egész világon – egyedül Brazíliában alakult ki.
      </p>
      <p className="capoeira__text margin-bottom-sm">
        Feltehetően emiatt a káprázatos összetettség, és páratlan kulturális
        gazdagság miatt válhatott a capoeira roda 2014-ben a szellemi kulturális
        örökség részévé (UNESCO).
      </p>
      <div className="video">
        <div className="iframe__container iframe-container-4x3">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/HgFEUPgpwc4?rel=0&amp;showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="Capoeira video"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  </Fragment>
)

export default capoeiraPage

export const capoeiraQuery = graphql`
  query {
    capoeiraImage: file(relativePath: { eq: "capoeira.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
