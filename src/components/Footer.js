import React from 'react'
import { Link } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'

import Icon from './Icon'
import SocialIcon from './SocialIcon'
import Contacts from '../components/Contacts'

const Footer = () => (
  <footer className="footer">
    <div className="footer__icon-box" onClick={() => scroll.scrollToTop()}>
      <Icon block="footer" name="arrow-up" />
    </div>
    <Contacts />
    <div className="footer__main">
      <div className="footer__sitemap">
        <SitemapLink to="/" text="Kezdőlap" />
        <SitemapLink to="/hirek" text="Hírek" />
        <SitemapLink to="/capoeira" text="Capoeira" />
        <SitemapLink to="/edzesek" text="Edzések" />
        <SitemapLink to="/csoport" text="Csoport" />
        <SitemapLink to="/tabor" text="Tábor" />
      </div>
      <div className="footer__social">
        <p className="footer__social-text">Kövess minket:</p>
        <div className="footer__social-box">
          <SocialIcon
            href="https://www.youtube.com/channel/UCgbYtjFmdAffgUoptWjYf-w"
            iconName="youtube"
          />
          <SocialIcon
            href="https://www.instagram.com/capoeira_espirito_livre_cel/"
            iconName="instagram"
          />
          <SocialIcon
            href="https://www.facebook.com/cel.capoeira/"
            iconName="facebook"
          />
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <p>2018 | Capoeira Espirito Livre</p>
      <p>
        Built by:{' '}
        <a
          href="https://gaborbencsik.me"
          rel="noopener noreferrer"
          target="_blank"
        >
          Gabor Bencsik
        </a>
      </p>
    </div>
  </footer>
)

export default Footer

const SitemapLink = props => (
  <Link to={props.to} className="footer__sitemap-link">
    {props.text}
  </Link>
)
