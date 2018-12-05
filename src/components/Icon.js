import React from 'react'

import sprite from '../images/icons.svg'

const Icon = props => (
  <svg className={`${props.block}__icon icon`}>
    <use xlinkHref={`${sprite}#icon-${props.name}`} />
  </svg>
)

export default Icon
