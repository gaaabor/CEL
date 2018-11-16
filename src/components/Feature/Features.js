import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import Feature from './Feature'
import Button from '../Button'

const Features = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className="feature margin-top-md">
        <div className="feature__container">
          <Feature
            name="mozgas"
            fluid={data.mozgasImage.childImageSharp.fluid}
            title="Mozgás"
            text="A capoeira mozgásvilága különösen változatos. Szinte minden alapvető emberi
mozgásmintát tartalmaz a viszonylag könnyebbektől (guggolás, kúszás, fejenállás, kézállás...)
az egészen látványosakig (kézen átfordulás, szaltó...) Különösen jó hatással van az alapvető
kondicionális (erő, gyorsaság, állóképesség) és koordinációs képességekre, valamint a
hajlékonyságra, a testi (és szellemi) rugalmasságra."
          />
          <Feature
            name="harc"
            fluid={data.harcImage.childImageSharp.fluid}
            title="Küzdelem"
            text="A capoeira - a közhiedelemmel ellentétben - egy harcművészet, így minden, amit az
edzéseken látunk, hallunk és tanulunk, a segítségünkre lehet abban, hogy bármikor, bármilyen
körülmények között képesek legyünk megvédeni magunkat. Tanítványainknak újra és újra
lehetőségük nyílik összemérni tudásukat egy játékos küzdelem formájában, a capoeira
“arénájában”, a roda-ban."
          />
          <Feature
            name="zene"
            fluid={data.zeneImage.childImageSharp.fluid}
            title="Zene"
            text="A zene és az énekszó a capoeira nélkülözhetetlen része. Ez az ami a capoeira-t egyértelműen
megkülönbözteti minden más harcművészettől. Foglalkozásainkon kiemelt figyelmet
szentelünk annak, hogy a tanulók kapcsolatba kerülhessenek a capoeira zenei világával is,
megismerhessék saját adottságaikat, és elsajátíthassák a hangszerek kezelésének különböző
módozatait."
          />
          <Feature
            name="nyelv"
            fluid={data.nyelvImage.childImageSharp.fluid}
            title="NYELV ÉS KULTÚRA"
            text="Ezen tényezők (mozgás, küzdelem, zene, dalok) összessége pedig lehetővé teszi, hogy az
érdeklődők személyes benyomásokat szerezhessenek egy, az európaitól egy merőben eltérő
kultúráról és gondolkodásmódról, továbbá, hogy megtehessék első lépéseiket egy izgalmas
idegen nyelv, a (brazil) portugál elsajátítása felé."
          />
        </div>
        <div className="feature__cta-container">
          <Fade bottom={true} fraction={0.5} duration={400}>
            <Button
              link="/capoeira"
              text="Fedezd fel a capoeira világát"
              color="green"
              iconName="book"
            />
          </Fade>
        </div>
      </section>
    )}
  />
)

export default Features

const query = graphql`
  query featureQuery {
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
