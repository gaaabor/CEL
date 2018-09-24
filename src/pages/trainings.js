import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import PageTransition from 'gatsby-plugin-page-transitions'

import TwoTwo from '../components/Trainings/TwoTwo'

const trainingsPage = () => (
  <PageTransition>
    <Fragment>
      <Tabs>
        <TabList>
          <Tab>Budapest</Tab>
          <Tab>Dunakeszi</Tab>
          <Tab>Veresegyház</Tab>
          <Tab>Gyömrő</Tab>
          <Tab>Pesthidegkút</Tab>
        </TabList>

        <TabPanel>
          <TwoTwo />
        </TabPanel>
        <TabPanel>
          <h2>DUNAKESZI CONTENT</h2>
        </TabPanel>
        <TabPanel>
          <h2>VERES CONTENT</h2>
        </TabPanel>
        <TabPanel>
          <h2>GYOMRO CONTENT</h2>
        </TabPanel>
        <TabPanel>
          <h2>PESTHIDEGKUT CONTENT</h2>
        </TabPanel>
      </Tabs>
    </Fragment>
  </PageTransition>
)

export default trainingsPage