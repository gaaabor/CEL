import React from 'react'
import Helmet from 'react-helmet'
import Transition from '../components/Transition'

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Layout = ({ children, location }) => (
  <div id="App">
    <Helmet
      title="Capoeira Espirito Livre"
      meta={[
        {
          name: 'description',
          content:
            'Csoportunk, a Capoeira Espírito Livre (Capoeira Szabad Szellem) 2016-ban azzal a céllal alakult, hogy magas színvonalú, minőségi oktatást biztosítson a capoeira iránt érdeklődők számára.',
        },
        {
          name: 'keywords',
          content:
            'capoeira, sport, edzés, budapest, újpalota, dunakeszi, veresegyház, gyömrő',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
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
