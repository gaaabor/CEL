import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

const Teachers = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className="teacher">
        <Teacher
          fluid={data.profImage.childImageSharp.fluid}
          apelido="Professor Cabeludo"
          name="Oláh Krisztián"
          text="Immáron 14 éve foglalkozom capoeira-val, amiből 8 éve oktatom is azt. Engem azonnal
megfogott – a brazil kultúrából fakadó – rendkívüli sokszínűsége, továbbá a keleti
harcművészetektől merőben eltérő kötetlensége.
Szerintem a lüktető zene, a szokatlan hangszerek, az embert-próbáló mutatványok és a
küzdelem játékossága mindaz, ami a capoeira-t annyira különlegessé, ellenállhatatlanná teszi!
Ennek a légkörnek a megteremtése, és az egészség mindenkori megóvása mellett, edzéseimen
elsődleges fontosságúnak tartom a megfelelő testtudat kialakítását, ami lehetővé teszi, és
megkönnyíti az összetettebb mozgásformák elsajátítását!"
        />
        <Teacher
          fluid={data.sapiImage.childImageSharp.fluid}
          apelido="Instrutor Sapinho"
          name="Soós Levente"
          text="Jelenleg a Testnevelési Egyetemen hallgatok rekreáció és egészségfejlesztést. A capoeira-val
először 2010-ben találkoztam, és azóta fokozatosan az életem szerves részévé vált. Ami
először megragadott benne az a különleges mozgáskultúrája, az állandó lehetőség a fejlődésre.
Később pedig a remek közösség tartott benne. A capoeira fejleszti a koordinációs képességet,
erőt, hajlékonyságot, állóképességet, egyensúlyérzéket, és a zenén keresztül a ritmusérzéket.
Az elkezdéséhez nincs szükség semmilyen előképzettségre. A foglalkozások során különös
figyelmet fordítunk a helyes mozgásminta kialakítására, és a test lépésről-lépésre való
felkészítésére a bonyolultabb gyakorlatokhoz."
        />
      </section>
    )}
  />
)

export default Teachers

const query = graphql`
  query teacherQuery {
    profImage: file(relativePath: { eq: "prof.jpg" }) {
      ...teacherImage
    }
    sapiImage: file(relativePath: { eq: "sapi.jpg" }) {
      ...teacherImage
    }
  }
  fragment teacherImage on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Teacher = props => (
  <div className="teacher__item">
    <Img fluid={props.fluid} className="teacher__pic" />
    <div className="teacher__text-box">
      <Fade>
        <h1 className="heading-1">{props.apelido}</h1>
        <h2 className="heading-2">{props.name}</h2>
      </Fade>
      <Fade>
        <p className="teacher__text">{props.text}</p>
      </Fade>
    </div>
  </div>
)

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}
