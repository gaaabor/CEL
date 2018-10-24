import React from 'react'
import Transition from '../components/Transition'

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Layout = ({ children, location }) => (
  <div id="App">
    <Sidebar />
    <div id="page-wrap">
      <Transition location={location}>
        {children}
        <Footer />
      </Transition>
    </div>
  </div>
)

export default Layout
