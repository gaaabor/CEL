// Basic React Stuff
import React, { Component } from 'react'

// Individual components
import Shortcut from './Shortcut'

// Images & Assets
import csoport from '../../images/csoport_square.jpg'
import capoeira from '../../images/capoeira_square.jpg'
import tabor from '../../images/tabor_square.jpg'

const csoportImg = {
  backgroundImage: `url(${csoport})`,
}

const capoeiraImg = {
  backgroundImage: `url(${capoeira})`,
}

const taborImg = {
  backgroundImage: `url(${tabor})`,
}

// Component render
class Shortcuts extends Component {
  render() {
    return (
      <section className="shortcut">
        <Shortcut
          name="csoport"
          title="csoport"
          image={csoportImg}
          text="Csoportunkat Professor Cabeludo (Oláh Krisztián) és Instrutor Magrão
        (Balogh Tamás) alapította 2016-ban."
          btnLink="/group"
          btnText="Nézz be hozzánk"
          iconName="group"
        />
        <Shortcut
          name="capoeira"
          title="capoeira"
          image={capoeiraImg}
          text="Ismerd meg a capoeira világát és történelmét."
          btnLink="/capoeira"
          btnText="Tudj meg többet"
          iconName="book"
        />
        <Shortcut
          name="tabor"
          title="tabor"
          image={taborImg}
          text="Egy kihagyhatatlan lehetőség, hogy a capoeira-val intenzíven foglalkozzunk és persze életreszóló élményekkel térjünk
            haza!"
          btnLink="/tabor"
          btnText="Éld át te is"
          iconName="sea-waves"
        />
      </section>
    )
  }
}

export default Shortcuts
