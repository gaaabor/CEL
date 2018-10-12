import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Feature from './Feature'
import Button from '../Button'

const Features = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <section className="feature margin-top-md">
        <div className="feature__container">
          <Feature
            name="mozgas"
            fluid={data.mozgasImage.childImageSharp.fluid}
            title="Mozgás"
            text="A capoeira rendkívül változatos, szinte minden alapvető emberi
                mozgásformát ötvöz, az alapvető elemektől (fejenállás,
                kézállás...) az egészen látványos akrobatikus mozdulatokig
                (kézenátfordulások, szaltók...)
                Különösen jó hatással van az alapvető kondicionális (erő,
                gyorsaság, állóképesség) és koordinációs képességekre, valamint
                a hajlékonyságra, a testi (és szellemi) rugalmasságra."
          />
          <Feature
            name="harc"
            fluid={data.harcImage.childImageSharp.fluid}
            title="Harc"
            text="A capoeira - a közhiedelemmel ellentétben - egy harcművészet, így minden, amit az edzéseken hallunk és tanulunk
            a segítségünkre lehet abban, hogy bármikor, bármilyen körülmények között képesek legyünk megvédeni magunkat.
            Tanítványainknak időről időre lehetőségük nyílik összemérni tudásukat egy játékos küzdelem formájában, a capoeira
            “arénájában”, a roda-ban."
          />
          <Feature
            name="zene"
            fluid={data.zeneImage.childImageSharp.fluid}
            title="Zene"
            text="Az éneklés és a zene a capoeira nélkülözhetetlen része. Ez az ami a capoeira-t egyértelműen megkülönbözteti minden
            más harcművészettől. Fontosnak tartjuk hogy edzéseinken a mozdulatok elsajátítása mellett, minden tanulónk megismerkedjen
            a capoeira dalaival, hangszereivel."
          />
          <Feature
            name="nyelv"
            fluid={data.nyelvImage.childImageSharp.fluid}
            title="NYELV ÉS KULTÚRA"
            text="Ezen tényezők (mozgás, küzdelem, zene, dalok) összessége pedig lehetővé teszi, hogy megismerj az európaitól egy
            merőben eltérő kultúrát és gondolkodásmódot, továbbá, hogy közelebbi kapcsolatba kerülj a capoeira “anyanyelvével”,
            a (brazil) portugállal."
          />
        </div>
        <div className="feature__cta-section">
          <h1 className="feature__cta-heading">
            Ismerd meg a capoeira világát és történelmét.
          </h1>
          <Button
            link="/capoeira"
            text="Olvass tovább"
            color="green"
            iconName="book"
          />
        </div>
      </section>
    )}
  />
)

export default Features
