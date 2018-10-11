import React from 'react'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const Feature = props => (
  <div className={`feature__item feature__item--${props.name}`}>
    <Img
      fluid={props.fluid}
      className={`feature__pic feature__pic--${props.name}`}
    />
    <div className={`feature__text feature__text--${props.name}`}>
      <Fade bottom={true} fraction={0.5} duration={400}>
        <h1 className="heading-1 heading-1--green margin-bottom-sm">
          {props.title}
        </h1>
        <p className="feature__para">{props.text}</p>
      </Fade>
    </div>
  </div>
)

export default Feature

// PropTypes
Feature.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
