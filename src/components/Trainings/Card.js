import React from 'react'
import Icon from '../Icon'
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
        <h4 className="card__location">{props.place}</h4>
        <a href={props.locationLink} className="card__location-link">
          {props.location}
        </a>
      </h3>
    </div>
  </Fade>
)

export default Card
