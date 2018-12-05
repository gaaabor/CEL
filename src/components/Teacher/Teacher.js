import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

const Teacher = props => (
  <div className={`teacher__item teacher__item--${props.item}`}>
    <Img fluid={props.fluid} className="teacher__pic" />
    <div className="teacher__text-box">
      <Fade>
        <h1 className="heading-1">{props.apelido}</h1>
        <h2 className="heading-2">{props.name}</h2>
      </Fade>
      <Fade>
        <p className="teacher__text">{props.text}</p>
      </Fade>
    </div>
  </div>
)

export default Teacher

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}

Teacher.propTypes = {
  item: PropTypes.string,
  fluid: PropTypes.string,
  apelido: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}
