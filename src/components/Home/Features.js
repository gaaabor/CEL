// Basic React Stuff
import React from 'react'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

const Features = props => (
  <section className="feature margin-top-md">
    <div className="feature__item feature__item--mozgas">
      <Img fluid={props.mozgasImage} className="feature__pic" />
      <div className="feature__text feature__text--mozgas">
        <div>
          <Fade>
            <h1 className="heading-1 heading-1--green margin-bottom-sm">
              Mozgás
            </h1>
          </Fade>
          <Fade>
            <p className="feature__para">
              A capoeira rendkívül változatos, szinte minden alapvető emberi
              mozgásformát ötvöz, az alapvető elemektől (fejenállás,
              kézállás...) az egészen látványos akrobatikus mozdulatokig
              (kézenátfordulások, szaltók...) Különösen jó hatással van az
              alapvető kondicionális (erő, gyorsaság, állóképesség) és
              koordinációs képességekre, valamint a hajlékonyságra, a testi (és
              szellemi) rugalmasságra.
            </p>
          </Fade>
        </div>
      </div>
    </div>

    <div className="feature__item feature__item--harc">
      <Img fluid={props.harcImage} className="feature__pic" />
      <div className="feature__text feature__text--harc">
        <div>
          <Fade>
            <h1 className="heading-1 heading-1--green margin-bottom-sm">
              Harc
            </h1>
          </Fade>
          <Fade>
            <p className="feature__para">
              A capoeira - a közhiedelemmel ellentétben - egy harcművészet, így
              minden, amit az edzéseken hallunk és tanulunk a segítségünkre
              lehet abban, hogy bármikor, bármilyen körülmények között képesek
              legyünk megvédeni magunkat. Tanítványainknak időről időre
              lehetőségük nyílik összemérni tudásukat egy játékos küzdelem
              formájában, a capoeira “arénájában”, a roda-ban.
            </p>
          </Fade>
        </div>
      </div>
    </div>

    <div className="feature__item feature__item--zene">
      <Img fluid={props.zeneImage} className="feature__pic" />
      <div className="feature__text feature__text--zene">
        <div>
          <Fade>
            <h1 className="heading-1 heading-1--green margin-bottom-sm">
              Zene
            </h1>
          </Fade>
          <Fade>
            <p className="feature__para">
              Az éneklés és a zene a capoeira nélkülözhetetlen része. Ez az ami
              a capoeira-t egyértelműen megkülönbözteti minden más
              harcművészettől. Fontosnak tartjuk hogy edzéseinken a mozdulatok
              elsajátítása mellett, minden tanulónk megismerkedjen a capoeira
              dalaival, hangszereivel.
            </p>
          </Fade>
        </div>
      </div>
    </div>

    <div className="feature__item feature__item--nyelv">
      <Img fluid={props.nyelvImage} className="feature__pic" />
      <div className="feature__text feature__text--nyelv">
        <div>
          <Fade>
            <h1 className="heading-1 heading-1--green margin-bottom-sm">
              NYELV ÉS KULTÚRA
            </h1>
          </Fade>
          <Fade>
            <p className="feature__para">
              Ezen tényezők (mozgás, küzdelem, zene, dalok) összessége pedig
              lehetővé teszi, hogy megismerj az európaitól egy merőben eltérő
              kultúrát és gondolkodásmódot, továbbá, hogy közelebbi kapcsolatba
              kerülj a capoeira “anyanyelvével”, a (brazil) portugállal.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </section>
)

export default Features
