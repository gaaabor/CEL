import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const Contact = props => (
  <div className={`contact__box contact__box--${props.person}`}>
    <div className="contact__name">
      <h2 className="contact__name--full">{props.name}</h2>
      <span className="contact__name--apelido">{props.apelido}</span>
    </div>
    <div className="contact__details">
      <div className="contact__email">
        <Icon block="contact" name="mail" />
        <span className="contact__details-text">{props.email}</span>
      </div>
      <div className="contact__phone">
        <Icon block="contact" name="phone" />
        <span className="contact__details-text">{props.phone}</span>
      </div>
      <div className="contact__location">
        <Icon block="contact" name="map-marker" />
        <span className="contact__details-text">{props.location}</span>
      </div>
    </div>
  </div>
)

export default Contact

Contact.propTypes = {
  person: PropTypes.string,
  name: PropTypes.string,
  apelido: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
}
