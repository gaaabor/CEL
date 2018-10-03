import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'

const Teacher = props => (
  <div className={`teacher__item teacher__item--${props.item}`}>
    <div className="teacher__pic-box">
      <Img
        fluid={props.fluid}
        className={`teacher__pic teacher__pic--${props.item}`}
      />
    </div>

    <div className="teacher__text-box">
      <h1 className="heading-1 heading-1--green">{props.apelido}</h1>
      <h2 className="heading-2">{props.name}</h2>
      <p className="teacher__para">{props.text}</p>
    </div>
  </div>
)

export default Teacher

Teacher.propTypes = {
  item: PropTypes.string,
  apelido: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}

// data.magraoImage.childImageSharp.fluid
