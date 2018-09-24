// Basic React Stuff
import React, { Fragment } from 'react'
import Link from 'gatsby-link'

// Individual components
import Icon from './Icon'

// Component render
class Footer extends React.Component {
  render() {
    return (
      <footer className="contact" id="contacts">
        {/* <h1 className="heading-1 heading-1--white margin-bottom-sm" id="contact__h1">ELÉRHETŐSÉGEK</h1> */}
        <div className="contact__container">
          <div className="contact__box contact__box--prof">
            <div className="contact__name">
              <h2 className="contact__name--full">Oláh Krisztián</h2>
              <span className="contact__name--apelido">Professor Cabeludo</span>
            </div>
            <div className="contact__details">
              <div className="contact__email">
                <Icon block="contact" name="mail" />
                <span className="contact__details-text">
                  cel.cabeludo@gmail.com
                </span>
              </div>
              <div className="contact__phone">
                <Icon block="contact" name="phone" />
                <span className="contact__details-text">+36 20 497 24 97</span>
              </div>
              <div className="contact__location">
                <Icon block="contact" name="map-marker" />
                <span className="contact__details-text">
                  Budapest | Dunakeszi | Veresegyház
                </span>
              </div>
            </div>
          </div>

          <div className="contact__box contact__box--magrao">
            <div className="contact__name">
              <h2 className="contact__name--full">Balogh Tamás</h2>
              <span className="contact__name--apelido">Instrutor Magrao</span>
            </div>
            <div className="contact__details">
              <div className="contact__email">
                <Icon block="contact" name="mail" />
                <span className="contact__details-text">
                  cel.magrao@gmail.com
                </span>
              </div>
              <div className="contact__phone">
                <Icon block="contact" name="phone" />
                <span className="contact__details-text">+36 20 978 28 64</span>
              </div>
              <div className="contact__location">
                <Icon block="contact" name="map-marker" />
                <span className="contact__details-text">Gyömrő</span>
              </div>
            </div>
          </div>

          <div className="contact__box contact__box--sapi">
            <div className="contact__name">
              <h2 className="contact__name--full">Soós Levente</h2>
              <span className="contact__name--apelido">Instrutor Sapinho</span>
            </div>
            <div className="contact__details">
              <div className="contact__email">
                <Icon block="contact" name="mail" />
                <span className="contact__details-text">
                  cel.sapinho@gmail.com
                </span>
              </div>
              <div className="contact__phone">
                <Icon block="contact" name="phone" />
                <span className="contact__details-text">+36 30 951 76 38</span>
              </div>
              <div className="contact__location">
                <Icon block="contact" name="map-marker" />
                <span className="contact__details-text">Pesthidegkút</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>2018 | Capoeira Espirito Livre</p>
          <p>
            Web Design: <a href="#">Gabor Bencsik</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
