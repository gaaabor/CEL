import React from 'react'
import Img from 'gatsby-image'

import PropTypes from 'prop-types'
import Button from '../Button'

const Shortcut = props => (
  <div className={`shortcut__item shortcut__item--${props.name}`}>
    <Img
      fluid={props.fluid}
      className={`shortcut__pic shortcut__pic--${props.name}`}
    />

    <div className="shortcut__pic-title heading-1 heading-1--white">
      {props.name}
    </div>

    <div className="shortcut__overlay">
      <div className="shortcut__text-box">
        <p className="shortcut__text">{props.text}</p>
        <Button
          link={props.btnLink}
          text={props.btnText}
          color="ghost"
          iconName={props.iconName}
        />
      </div>
      <div className="shortcut__pic-title heading-1 heading-1--white">
        {props.name}
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

{
  /* <p className="shortcut__text">{props.text}</p>
          <Button
            link={props.btnLink}
            text={props.btnText}
            color="green"
            iconName={props.iconName}
          /> */
}
