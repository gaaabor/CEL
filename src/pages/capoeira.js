import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'

const capoeiraPage = ({ data }) => (
  <Fragment>
    <header>
      <PageHeader
        fluid={data.csoportImage.childImageSharp.fluid}
        page="group"
      />
    </header>
  </Fragment>
)

export default capoeiraPage

{
  /* <div className="video">
        <div className="iframe__container iframe-container-4x3">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/HgFEUPgpwc4?rel=0&amp;showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            title="Capoeira video"
            allowfullscreen
          />
        </div>
      </div> */
}
