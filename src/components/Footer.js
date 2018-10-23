import React from 'react'
import { Link } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'

import Icon from './Icon'
import Contacts from '../components/Contact/Contacts'

const Footer = () => (
  <footer className="footer">
    <div className="footer__icon-box" onClick={() => scroll.scrollToTop()}>
      <Icon block="footer" name="arrow-up" />
    </div>
    <Contacts />
    <div className="footer__main">
      <div className="footer__sitemap">
        <Link to="/" className="footer__sitemap-link">
          Kezdőlap
        </Link>
        <Link to="/capoeira" className="footer__sitemap-link">
          Capoeira
        </Link>
        <Link to="/trainings" className="footer__sitemap-link">
          Edzések
        </Link>
        <Link to="/group" className="footer__sitemap-link">
          Csoport
        </Link>
        <Link to="/camp" className="footer__sitemap-link">
          Tábor
        </Link>
      </div>
      <div className="footer__social">
        <p className="footer__social-text">Kövess minket:</p>
        <div className="footer__social-box">
          <a
            href="https://www.youtube.com/channel/UCgbYtjFmdAffgUoptWjYf-w"
            target="_blank"
            className="footer__social-item"
            rel="noopener noreferrer"
          >
            <Icon block="social" name="youtube" />
          </a>
          <a
            href="https://www.instagram.com/capoeira_espirito_livre_cel/"
            target="_blank"
            className="footer__social-item"
            rel="noopener noreferrer"
          >
            <Icon block="social" name="instagram" />
          </a>
          <a
            href="https://www.facebook.com/cel.capoeira/"
            target="_blank"
            className="footer__social-item"
            rel="noopener noreferrer"
          >
            <Icon block="social" name="facebook" />
          </a>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <p>2018 | Capoeira Espirito Livre</p>
      <p>
        Built by: <a href="#">Gabor Bencsik</a>
      </p>
    </div>
  </footer>
)

export default Footer
