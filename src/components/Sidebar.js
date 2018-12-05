import React from 'react'
import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/push'

import Icon from './Icon'
import SocialIcon from './SocialIcon'

import logo from '../images/manifest_logo.png'
import menu from '../images/menu.svg'

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
        customBurgerIcon={<img src={menu} alt="logo" />}
      >
        <div className="side-nav__container">
          <div className="side-nav__logo-box">
            <Link
              to="/"
              className="side-nav__logo-link"
              onClick={() => this.closeMenu()}
            >
              <img className="side-nav__logo-img" src={logo} alt="CEL-logo" />
            </Link>
          </div>

          <ul className="side-nav__list">
            <NavItem to="/" text="Kezdőlap" iconName="home" />
            <NavItem to="/news" text="Hírek" iconName="news" />
            <NavItem to="/trainings" text="Edzések" iconName="calendar" />
            <NavItem to="/capoeira" text="Capoeira" iconName="book" />
            <NavItem to="/group" text="Csoport" iconName="group" />
            <NavItem to="/camp" text="Tábor" iconName="sea-waves" />
          </ul>

          <div className="social__box">
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
      </Menu>
    )
  }
}

const NavItem = props => (
  <li className="side-nav__item">
    <Link
      className="side-nav__link"
      to={props.to}
      onClick={() => this.closeMenu()}
    >
      <span>{props.text}</span>
      <Icon block="side-nav" name={props.iconName} />
    </Link>
  </li>
)

export default Sidebar
