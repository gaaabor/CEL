import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Fade from 'react-reveal/Fade'

import Card from '../components/Card'

const trainingsPage = () => (
  <main>
    <section className="trainings">
      <h1 className="trainings__heading heading-1">Edzéseink</h1>
      <Tabs>
        <div className="location-list">
          <TabList>
            <Tab>Újpalota</Tab>
            <Tab>Veresegyház</Tab>
          </TabList>
        </div>

        <div className="panels">
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Csütörtök"
                timeOne="19h00 - 20h30"
                place="Újpalotai Szabadidő Központ"
                locationLink="https://goo.gl/maps/a33jTCh3ny22"
                location="(1157 ÚJPALOTA, ZSÓKAVÁR UTCA 15.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Hétfő"
                timeOne="19h00 - 20h30"
                dayTwo="Péntek"
                timeTwo="19h00 - 20h30"
                place="Fabriczius József Esti Gimnázium"
                locationLink="https://goo.gl/maps/2oXK4EJ5zNP2"
                location="(2112 VERESEGYHÁZ, FŐ ÚT 77.)"
              />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
    <Fade bottom={true} fraction={0.5} duration={400}>
      <section className="equipment">
        <h1 className="heading-1 margin-bottom-sm">Mit hozz magaddal?</h1>
        <p className="equipment__text">
          Ahhoz, hogy bármikor csatlakozhass foglalkozásainkhoz csupán egy
          kényelmes pólóra, és egy rövid vagy hosszú nadrágra lesz szükséged,
          amiben jól érzed magad, és könnyedén tudsz mozogni! Edzéseinken
          többnyire mezítláb vagyunk, így edzőcipőt nem kell hoznod magaddal.
          <br />A folyadékveszteség pótlására érdemes valamilyen – legalább fél
          liter – innivalóról is gondoskodnod!
          <br />
          <br />
          Később – amennyiben folytatod az edzéseket – az oktatóktól majd
          beszerezheted saját – a csoport címerével ellátott – edző pólódat és
          nadrágodat is!
        </p>
      </section>
    </Fade>
  </main>
)

export default trainingsPage
