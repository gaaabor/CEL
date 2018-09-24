// Basic React Stuff
import React from 'react'
import PropTypes from 'prop-types'

// Images & Assets
import sprite from '../images/icons.svg'

// Component render
const Icon = props => (
  <svg className={`${props.block}__icon icon`}>
    <use xlinkHref={`${sprite}#icon-${props.name}`} />
  </svg>
)

export default Icon

// PropTypes
Icon.propTypes = {
  block: PropTypes.string,
  name: PropTypes.string,
}
