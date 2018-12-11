import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const newsPage = () => (
  <Fragment>
    <Helmet>
      <script src="https://assets.juicer.io/embed.js" type="text/javascript" />
      <link
        href="https://assets.juicer.io/embed.css"
        media="all"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <h1 className="heading-1 news__title">Hírek</h1>
    <ul
      className="juicer-feed"
      data-feed-id="cel-capoeira-178fa395-90e8-452d-9e5a-59ace64b27ab"
    />
  </Fragment>
)

export default newsPage
