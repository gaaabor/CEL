// Basic React Stuff
import React from 'react'
import Transition from '../components/Transition'

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

const Layout = ({ children, location }) => (
  <div id="App">
    <Sidebar />
    <div id="page-wrap">
      <Transition location={location}>{children}</Transition>
      <Footer />
    </div>
  </div>
)

export default Layout

// // PropTypes
// Layout.propTypes = {
//   children: PropTypes.func,
// }
