// Basic React Stuff
import React from 'react'

import Link from 'gatsby-link'
import Menu from 'react-burger-menu/lib/menus/push'

import Icon from '../components/Icon'
import logo from '../images/logo.png'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Building blocks
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

// Styles
import '../styles/main.scss'

class Layout extends React.Component {
  render() {
    return (
      <div id="App">
        <Sidebar />
        <div id="page-wrap">
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout

// // PropTypes
// Layout.propTypes = {
//   children: PropTypes.func,
// }
