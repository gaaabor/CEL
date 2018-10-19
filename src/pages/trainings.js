import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Fade from 'react-reveal/Fade'

import Card from '../components/Trainings/Card'

const trainingsPage = () => (
  <main>
    <section className="trainings">
      <h1 className="trainings__heading heading-1">Edzéseink</h1>
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
            <div className="card__container">
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
            <div className="card__container">
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
            <div className="card__container">
              <Card
                dayOne="Hétfő"
                timeOne="16h30 - 18h00 (Közös)"
                dayTwo="Szerda"
                timeTwo="16h30 - 18h00 (Gyerek)"
                dayThree="Péntek"
                timeThree="16h30 - 18h00 (Közös)"
                place="Sport Zone - Triangolo"
                locationLink="https://goo.gl/maps/xu4eVngGFUv"
                location="(2112 VERESEGYHÁZ, SZADAI ÚT 7.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Péntek"
                timeOne="17h45 - 19h15 (Közös)"
                place="Weöres Sándor Általános Iskola"
                locationLink="https://goo.gl/maps/vDcL9Z47fB62"
                location="(2230 GYÖMRŐ, ERZSÉBET UTCA 18.)"
              />
              <Card
                dayOne="Vasárnap"
                timeOne="10h00 - 11h30 (Közös)"
                place="Fekete István Általános Iskola"
                locationLink="https://goo.gl/maps/W4nrn47cyxo"
                location="(2230 GYÖMRŐ, KOSSUTH FERENC UTCA 5-7.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Hétfő"
                timeOne="18h00 - 19h30 (Közös)"
                dayTwo="Szerda"
                timeTwo="18h00 - 19h30 (Közös)"
                place="Waldorf Iskola"
                locationLink="https://goo.gl/maps/SVcbJ4QuzU92"
                location="(1028 PESTHIDEGKÚT, KOSSUTH UTCA 15-17.)"
              />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
    <Fade bottom={true} fraction={0.5} duration={400}>
      <section className="equipment">
        <h1 className="heading-1 margin-bottom-sm">Mire van szükséged</h1>
        <p className="equipment__text">
          Aliquam porta rizzle tellizzle. Mammasay mammasa mamma oo sa viverra,
          sapien fo dang hendrerizzle, libero urna hendrerit leo, nizzle
          condimentum get down get down sapien at nunc. Donec eu fizzle.
          Vestibulum quis away.
        </p>
      </section>
    </Fade>
  </main>
)

export default trainingsPage
