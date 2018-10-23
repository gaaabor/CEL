import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import Icon from './Icon'
import Contacts from '../components/Contact/Contacts'

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <footer className="footer">
        <Contacts />
        <div className="footer__main">
          {/* <div className="footer__logo-box">
            <Img
              fixed={data.footerLogo.childImageSharp.fixed}
              className="footer__logo"
            />
          </div> */}
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
        </div>

        <div className="footer__bottom">
          <p>2018 | Capoeira Espirito Livre</p>
          <p>
            Built by: <a href="#">Gabor Bencsik</a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer

const footerQuery = graphql`
  query {
    footerLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 200, quality: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
