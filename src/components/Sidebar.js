import React from 'react'
import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/push'

import Icon from './Icon'

// Images & Assets
import logo from '../images/logo.png'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      >
        <nav>
          <div className="nav-logo__box">
            <Link to="/" className="nav-logo" onClick={() => this.closeMenu()}>
              <img src={logo} alt="CEL-logo" />
            </Link>
          </div>

          <ul className="side-nav">
            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/"
                onClick={() => this.closeMenu()}
              >
                <span>Kezdőlap</span>
                <Icon block="side-nav" name="home" />
              </Link>
            </li>

            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/capoeira"
                onClick={() => this.closeMenu()}
              >
                <span>Capoeira</span>
                <Icon block="side-nav" name="book" />
              </Link>
            </li>

            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/trainings"
                onClick={() => this.closeMenu()}
              >
                <span>Edzések</span>
                <Icon block="side-nav" name="calendar" />
              </Link>
            </li>

            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/group"
                onClick={() => this.closeMenu()}
              >
                <span>Csoport</span>
                <Icon block="side-nav" name="group" />
              </Link>
            </li>

            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/camp"
                onClick={() => this.closeMenu()}
              >
                <span>Tábor</span>
                <Icon block="side-nav" name="sea-waves" />
              </Link>
            </li>

            <li className="side-nav__item">
              <Link
                className="side-nav__link"
                to="/camp"
                onClick={() => this.closeMenu()}
              >
                <span>Elérhetőségek</span>
                <Icon block="side-nav" name="phone" />
              </Link>
            </li>
          </ul>
        </nav>
      </Menu>
    )
  }
}

export default Sidebar
