import React from 'react'
import { graphql } from 'gatsby'
import Transition from '../components/Transition'

// Building blocks
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

// Styles
import '../styles/main.scss'

const Layout = ({ children, location }) => (
  <div id="App">
    <Sidebar />
    <div id="page-wrap">
      <Transition location={location}>{children}</Transition>
      <Footer />
    </div>
  </div>
)

export default Layout

export const siteQuery = graphql`
  fragment fullImage on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment halfImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment oneThirdImage on File {
    childImageSharp {
      fluid(maxWidth: 700, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
