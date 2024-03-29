import React from 'react'

import Icon from './Icon'

const SocialIcon = props => (
  <a
    href={props.href}
    target="_blank"
    className="social__link"
    rel="noopener noreferrer"
  >
    <Icon block="social" name={props.iconName} />
  </a>
)

export default SocialIcon
