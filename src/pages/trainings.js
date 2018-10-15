import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Card from '../components/Trainings/Card'

const trainingsPage = () => (
  <div className="trainings">
    <h1 className="trainings__heading heading-1 heading-1--green">Edzéseink</h1>
    <Tabs>
      <div className="location-list">
        <TabList>
          <Tab>Budapest</Tab>
          <Tab>Dunakeszi</Tab>
          <Tab>Veresegyház</Tab>
          <Tab>Gyömrő</Tab>
          <Tab>Pesthidegkút</Tab>
        </TabList>
      </div>

      <div className="panels">
        <TabPanel>
          <div className="card__section">
            <Card
              dayOne="Kedd"
              timeOne="18h15 - 19h45 (Közös)"
              place="Kikötő Ifjúsági Közösségi Sziget"
              locationLink="https://goo.gl/maps/SndJLbD8zqE2"
              location="(1156 ÚJPALOTA, NYÍRPALOTA ÚT 40.)"
            />
            <Card
              dayOne="Csütörtök"
              timeOne="18h15 - 19h45 (Felnőtt)"
              place="Újpalotai Szabadidő Közp. Köz. Háza"
              locationLink="https://goo.gl/maps/a33jTCh3ny22"
              location="(1157 ÚJPALOTA, ZSÓKAVÁR UTCA 15.)"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card__section">
            <Card
              dayOne="Hétfő"
              timeOne="19h00 - 20h30 (Felnőtt)"
              dayTwo="Szerda"
              timeTwo="18h30 - 20h00 (Gyerek)"
              dayThree="Péntek"
              timeThree="18h30 - 20h00 (Közös)"
              place="Szent István Általános Iskola"
              locationLink="https://goo.gl/maps/wdc4WygWu7A2"
              location="(2120 DUNAKESZI, REPÜLŐTÉRI UTCA 3.)"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card__section">
            <Card
              dayOne="Hétfő"
              timeOne="16h30 - 18h00 (Közös)"
              dayTwo="Szerda"
              timeTwo="16h30 - 18h00 (Gyerek)"
              dayThree="Péntek"
              timeThree="16h30 - 18h00 (Felnőtt)"
              place="Szent István Általános Iskola"
              locationLink="https://goo.gl/maps/wdc4WygWu7A2"
              location="(2120 DUNAKESZI, REPÜLŐTÉRI UTCA 3.)"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>GYOMRO CONTENT</h2>
        </TabPanel>
        <TabPanel>
          <h2>PESTHIDEGKUT CONTENT</h2>
        </TabPanel>
      </div>
    </Tabs>
  </div>
)

export default trainingsPage
