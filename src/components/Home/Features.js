// Basic React Stuff
import React, { Component } from 'react'

// Individual components
import Feature from './Feature'

// Images & Assets
import mozgas from '../../images/mozgas.jpg'
import harc from '../../images/harc.jpg'
import zene from '../../images/zene.jpg'
import nyelv from '../../images/nyelv.jpg'

const mozgasImg = {
  backgroundImage: `url(${mozgas})`,
}

const harcImg = {
  backgroundImage: `url(${harc})`,
}

const zeneImg = {
  backgroundImage: `url(${zene})`,
}

const nyelvImg = {
  backgroundImage: `url(${nyelv})`,
}

// Building block render
class Features extends Component {
  render() {
    return (
      <section className="feature margin-top-md">
        <Feature
          name="mozgas"
          image={mozgasImg}
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
          image={harcImg}
          title="Harc"
          text="A capoeira - a közhiedelemmel ellentétben - egy harcművészet, így minden, amit az edzéseken hallunk és tanulunk
            a segítségünkre lehet abban, hogy bármikor, bármilyen körülmények között képesek legyünk megvédeni magunkat.
            Tanítványainknak időről időre lehetőségük nyílik összemérni tudásukat egy játékos küzdelem formájában, a capoeira
            “arénájában”, a roda-ban."
        />
        <Feature
          name="zene"
          image={zeneImg}
          title="Zene"
          text="Az éneklés és a zene a capoeira nélkülözhetetlen része. Ez az ami a capoeira-t egyértelműen megkülönbözteti minden
            más harcművészettől. Fontosnak tartjuk hogy edzéseinken a mozdulatok elsajátítása mellett, minden tanulónk megismerkedjen
            a capoeira dalaival, hangszereivel."
        />
        <Feature
          name="nyelv"
          image={nyelvImg}
          title="NYELV ÉS KULTÚRA"
          text="Ezen tényezők (mozgás, küzdelem, zene, dalok) összessége pedig lehetővé teszi, hogy megismerj az európaitól egy
            merőben eltérő kultúrát és gondolkodásmódot, továbbá, hogy közelebbi kapcsolatba kerülj a capoeira “anyanyelvével”,
            a (brazil) portugállal."
        />
      </section>
    )
  }
}

export default Features
