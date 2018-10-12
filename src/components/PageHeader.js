import React, { Fragment } from 'react'
import Img from 'gatsby-image'

const PageHeader = props => (
  <Fragment>
    <Img fluid={props.fluid} className="header__image" />
  </Fragment>
)

export default PageHeader
