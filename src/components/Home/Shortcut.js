import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Button from '../Button'

const Shortcut = props => (
  <div className="shortcut__container">
    <Img fluid={props.fluid} className="shortcut__pic" />
    <div className="shortcut__overlay">
      <div className="shortcut__text-box">
        <p className="shortcut__text">{props.text}</p>
        <Button
          link={props.btnLink}
          text={props.btnText}
          color="ghost"
          iconName={props.iconName}
          className="shortcut__button"
        />
      </div>
    </div>
  </div>
)

export default Shortcut

Shortcut.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  btnLink: PropTypes.string,
  btnText: PropTypes.string,
  iconName: PropTypes.string,
}
