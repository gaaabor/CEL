import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

const capoeiraPage = ({ data }) => (
  <Fragment>
    <div className="page__container">
      <div className="video">
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
      </div>
      <h1
        className="heading-1"
        style={{ textAlign: 'center', paddingBottom: '10vh' }}
      >
        Az oldal feltöltés alatt, nézz vissza kesőbb
      </h1>
    </div>
  </Fragment>
)

export default capoeiraPage
