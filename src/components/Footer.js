import React from 'react'

import Icon from './Icon'
import Contact from '../components/Contact'

const Footer = () => (
  <footer className="contact" id="contacts">
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
    <div className="contact__container">
      <Contact
        person="prof"
        name="Oláh Krisztián"
        apelido="Professor Cabeludo"
        email="cel.cabeludo@gmail.com"
        phone="+36 20 497 24 97"
        location="Budapest | Dunakeszi | Veresegyház"
      />
      <Contact
        person="magrao"
        name="Balogh Tamás"
        apelido="Instrutor Magrao"
        email="cel.magrao@gmail.com"
        phone="+36 20 978 28 64"
        location="Gyömrő"
      />
      <Contact
        person="sapi"
        name="Soós Levente"
        apelido="Instrutor Sapinho"
        email="cel.sapinho@gmail.com"
        phone="+36 30 951 76 38"
        location="Pesthidegkút"
      />
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
