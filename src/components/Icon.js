import React from 'react'
import PropTypes from 'prop-types'

import sprite from '../images/icons.svg'

const Icon = props => (
  <svg className={`${props.block}__icon icon`}>
    <use xlinkHref={`${sprite}#icon-${props.name}`} />
  </svg>
)

export default Icon

Icon.propTypes = {
  block: PropTypes.string,
  name: PropTypes.string,
}
