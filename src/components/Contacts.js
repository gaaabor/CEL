import React from 'react'

import Icon from './Icon'

const Contacts = () => (
  <div className="contact">
    <div className="wrap-collabsible">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle">
        Elérhetőségeink
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <div className="contact__container">
            <Contact
              person="prof"
              name="Oláh Krisztián"
              apelido="Professor Cabeludo"
              email="cel.cabeludo@gmail.com"
              phone="+36 20 497 24 97"
              location="Újpalota | Dunakeszi | Veresegyház"
            />
            <Contact
              person="sapi"
              name="Soós Levente"
              apelido="Instrutor Sapinho"
              email="cel.sapinho@gmail.com"
              phone="+36 30 951 76 38"
              location="Gyömrő | Pesthidegkút"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contacts

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
