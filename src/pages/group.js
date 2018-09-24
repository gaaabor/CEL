// Basic React stuff
import React, { Fragment } from 'react'

// Building blocks
import Hero from '../components/Hero'
import Teachers from '../components/Teachers'

// Images & Assets
import hero from '../images/csoport.jpg'

const heroImage = {
  backgroundImage: `url(${hero})`,
}

const groupPage = () => (
  <Fragment>
    <Hero image={heroImage} text="I AM THE HERO IMAGE" />
    <Teachers />
  </Fragment>
)

export default groupPage

// export const pageQuery = graphql`
//   query groupQuery {
//     magraoImage: imageSharp(id: { regex: "/magrao.jpg/" }) {
//       sizes(maxWidth: 640) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//     profImage: imageSharp(id: { regex: "/prof.jpg/" }) {
//       sizes(maxWidth: 640) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//     sapiImage: imageSharp(id: { regex: "/sapi.jpg/" }) {
//       sizes(maxWidth: 640) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
