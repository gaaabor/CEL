// Basic React Stuff
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

// Component render
const Shortcut = props => (
  <div className={`shortcut__item shortcut__item--${props.name}`}>
    <div className="shortcut__pic-box">
      <div
        className={`shortcut__pic shortcut__pic--${props.name}`}
        style={props.image}
      >
        <div className="shortcut__overlay">
          <div className="shortcut__overlay-title heading-1 heading-1--white">
            {props.name}
          </div>
        </div>
        <div className="shortcut__pic-title heading-1 heading-1--white">
          {props.name}
        </div>
      </div>
    </div>

    <div className="shortcut__text-box">
      <p className="shortcut__text">{props.text}</p>
      <Button
        link={props.btnLink}
        text={props.btnText}
        color="green"
        iconName={props.iconName}
      />
    </div>
  </div>
)

export default Shortcut

// PropTypes
Shortcut.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  text: PropTypes.string,
  btnLink: PropTypes.string,
  btnText: PropTypes.string,
  iconName: PropTypes.string,
}
