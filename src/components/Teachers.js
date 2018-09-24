// Basic React Stuff
import React, { Component } from 'react'

// Individual components
import Teacher from './Teacher'

// Images & Assets
import prof from '../images/prof.jpg'
import magrao from '../images/magrao.jpg'
import sapi from '../images/sapi.jpg'

const profImg = {
  backgroundImage: `url(${prof})`,
}

const magraoImg = {
  backgroundImage: `url(${magrao})`,
}

const sapiImg = {
  backgroundImage: `url(${sapi})`,
}

// Building block render
class Teachers extends Component {
  render() {
    return (
      <section className="teacher">
        <Teacher
          item="magrao"
          image={magraoImg}
          apelido="Instrutor Magrao"
          name="Balogh Tamás"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
        <Teacher
          item="prof"
          image={profImg}
          apelido="Professor Cabeludo"
          name="Oláh Krisztián"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
        <Teacher
          item="sapi"
          image={sapiImg}
          apelido="Instrutor Sapinho"
          name="Soós Levente"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
      </section>
    )
  }
}

export default Teachers
