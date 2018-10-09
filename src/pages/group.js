// Basic React stuff
import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

// Building blocks
import Teachers from '../components/Teachers'

class groupPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Teachers />
      </Fragment>
    )
  }
}

export default groupPage
