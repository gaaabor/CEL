// Basic React Stuff
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Component render
const Hero = props => (
  <div className="hero-container">
    {/* <Img sizes={props.heroImage.resolutions} /> */}
  </div>
)

export default Hero

// PropTypes
Hero.propTypes = {
  image: PropTypes.object,
  text: PropTypes.string,
}
