import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Button from '../Button'

const Shortcut = props => (
  <div className="shortcut__container">
    <Img fluid={props.fluid} className="shortcut__pic" />
    <div className="shortcut__overlay">
      <div className="shortcut__text-box">
        <Fade>
          <p className="shortcut__text">{props.text}</p>
        </Fade>
        <Fade>
          <Button
            link={props.btnLink}
            text={props.btnText}
            color="ghost"
            iconName={props.iconName}
          />
        </Fade>
      </div>
    </div>
  </div>
)

export default Shortcut

Shortcut.propTypes = {
  fluid: PropTypes.string,
  text: PropTypes.string,
  btnLink: PropTypes.string,
  btnText: PropTypes.string,
  iconName: PropTypes.string,
}

Fade.defaultProps = {
  bottom: true,
  fraction: 0.5,
  duration: 400,
}
