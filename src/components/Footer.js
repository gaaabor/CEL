import React from 'react'

import Icon from './Icon'
import Contacts from '../components/Contacts'

const Footer = () => (
  <footer className="contact" id="contacts">
    <Contacts />
    <div className="social__box">
      <div className="social">
        <a
          href="https://www.youtube.com/channel/UCgbYtjFmdAffgUoptWjYf-w"
          target="_blank"
          className="social__link"
        >
          <Icon block="social" name="youtube" />
        </a>
        <a
          href="https://www.instagram.com/capoeira_espirito_livre_cel/"
          target="_blank"
          className="social__link"
        >
          <Icon block="social" name="instagram" />
        </a>
        <a
          href="https://www.facebook.com/cel.capoeira/"
          target="_blank"
          className="social__link"
        >
          <Icon block="social" name="facebook" />
        </a>
      </div>
    </div>

    <div className="footer">
      <p>2018 | Capoeira Espirito Livre</p>
      <p>
        Built by: <a href="#">Gabor Bencsik</a>
      </p>
    </div>
  </footer>
)

export default Footer
