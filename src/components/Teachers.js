import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Teachers = () => (
  <StaticQuery
    query={graphql`
      query {
        magraoImage: file(relativePath: { eq: "magrao.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        profImage: file(relativePath: { eq: "prof.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sapiImage: file(relativePath: { eq: "sapi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="teacher">
        <div className="teacher__item">
          <div className="teacher__pic-box">
            <Img
              fluid={data.magraoImage.childImageSharp.fluid}
              className="teacher__pic"
            />
          </div>
          <div className="teacher__text-box">
            <h1 className="heading-1 heading-1--green">Instrutor Magrao</h1>
            <h2 className="heading-2">Balogh Tamás</h2>
            <p className="teacher__para">
              Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa
              viverra, sapien fo dang hendrerizzle, libero urna hendrerit leo,
              nizzle condimentum get down get down sapien at nunc. Donec eu
              fizzle. Vestibulum quis away.
            </p>
          </div>
        </div>

        <div className="teacher__item">
          <div className="teacher__pic-box">
            <Img
              fluid={data.profImage.childImageSharp.fluid}
              className="teacher__pic"
            />
          </div>
          <div className="teacher__text-box">
            <h1 className="heading-1 heading-1--green">Professor Cabeludo</h1>
            <h2 className="heading-2">Oláh Krisztián</h2>
            <p className="teacher__para">
              Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa
              viverra, sapien fo dang hendrerizzle, libero urna hendrerit leo,
              nizzle condimentum get down get down sapien at nunc. Donec eu
              fizzle. Vestibulum quis away.
            </p>
          </div>
        </div>

        <div className="teacher__item">
          <div className="teacher__pic-box">
            <Img
              fluid={data.sapiImage.childImageSharp.fluid}
              className="teacher__pic"
            />
          </div>
          <div className="teacher__text-box">
            <h1 className="heading-1 heading-1--green">Instrutor Sapinho</h1>
            <h2 className="heading-2">Soós Levente</h2>
            <p className="teacher__para">
              Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa
              viverra, sapien fo dang hendrerizzle, libero urna hendrerit leo,
              nizzle condimentum get down get down sapien at nunc. Donec eu
              fizzle. Vestibulum quis away.
            </p>
          </div>
        </div>
      </section>
    )}
  />
)

export default Teachers

// data.magraoImage.childImageSharp.fluid
