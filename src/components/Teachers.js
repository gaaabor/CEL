import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Teacher from './Teacher'

const Teachers = () => (
  <StaticQuery
    query={graphql`
      query {
        magraoImage: file(relativePath: { eq: "magrao.jpg" }) {
          ...oneThirdImage
        }
        profImage: file(relativePath: { eq: "prof.jpg" }) {
          ...oneThirdImage
        }
        sapiImage: file(relativePath: { eq: "sapi.jpg" }) {
          ...oneThirdImage
        }
      }
    `}
    render={data => (
      <section className="teacher">
        <Teacher
          item="magrao"
          fluid={data.magraoImage.childImageSharp.fluid}
          apelido="Instrutor Magrao"
          name="Balogh Tamás"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
        <Teacher
          item="prof"
          fluid={data.profImage.childImageSharp.fluid}
          apelido="Professor Cabeludo"
          name="Oláh Krisztián"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
        <Teacher
          item="sapi"
          fluid={data.sapiImage.childImageSharp.fluid}
          apelido="Instrutor Sapinho"
          name="Soós Levente"
          text="Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra, sapien fo dang hendrerizzle, libero urna hendrerit
            leo, nizzle condimentum get down get down sapien at nunc. Donec eu fizzle. Vestibulum quis away."
        />
      </section>
    )}
  />
)

export default Teachers
