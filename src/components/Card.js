import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Fade from 'react-reveal/Fade'

const Card = props => (
  <Fade bottom={true} fraction={0.5} duration={400}>
    <div className="card__body">
      <div className="card__upper">
        <h3 className="card__day">{props.dayOne}</h3>
        <p className="card__time">{props.timeOne}</p>
        <h3 className="card__day">{props.dayTwo}</h3>
        <p className="card__time">{props.timeTwo}</p>
        <h3 className="card__day">{props.dayThree}</h3>
        <p className="card__time">{props.timeThree}</p>
      </div>
      <h3 className="card__lower">
        <Icon block="card" name="map-marker" />
        <p className="card__location">{props.place}</p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={props.locationLink}
          className="card__location-link"
        >
          {props.location}
        </a>
      </h3>
    </div>
  </Fade>
)

export default Card

Card.propTypes = {
  dayOne: PropTypes.string,
  timeOne: PropTypes.string,
  dayTwo: PropTypes.string,
  timeTwo: PropTypes.string,
  dayThree: PropTypes.string,
  timeThree: PropTypes.string,
  place: PropTypes.string,
  locationLink: PropTypes.string,
  location: PropTypes.string,
}
