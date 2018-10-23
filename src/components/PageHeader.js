import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PageHeader = props => (
  <Fragment>
    <Img fluid={props.fluid} className={`${props.page}__header`} />
  </Fragment>
)

export default PageHeader

PageHeader.propTypes = {
  fluid: PropTypes.string,
  page: PropTypes.string,
}
