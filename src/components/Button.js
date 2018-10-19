import React from 'react'
import PropTypes from 'prop-types'

import Link from '../components/Link'

import Icon from './Icon'

const Button = props => (
  <Link to={props.link} className={`btn btn-${props.color}`}>
    <Icon block="btn" name={props.iconName} />
    <span className="btn__text">{props.text}</span>
  </Link>
)

export default Button

Button.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  iconName: PropTypes.string,
}
