import React from 'react'

import Link from '../components/Link'
import Icon from './Icon'

const Button = props => (
  <Link to={props.link} className={`btn btn-${props.color}`}>
    <Icon block="btn" name={props.iconName} />
    <span className="btn__text">{props.text}</span>
  </Link>
)

export default Button
