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
            <Tab>Gyömrő</Tab>
            <Tab>Sopron</Tab>
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
                dayOne="Kedd"
                timeOne="19h00 - 20h30"
                dayTwo="Csütörtök"
                timeTwo="19h00 - 20h30"
                place="Régi Művelődési Ház"
                locationLink="https://goo.gl/maps/oJDy9TnjCm3hYVPo9"
                location="(2230 GYÖMRŐ, SZENT ISTVÁN ÚT 65-67.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Hétfő"
                timeOne="17h00 - 18h30"
                dayTwo="Szerda"
                timeTwo="17h00 - 18h30"
                place="Lackner Kristóf Általános Iskola"
                locationLink="https://goo.gl/maps/HgQJvfqeqfLfN9se8"
                location="(9400 SOPRON, RÉVAI MIKLÓS UTCA 2.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Hétfő"
                timeOne="19h15 - 20h45"
                dayTwo="Péntek"
                timeTwo="19h15 - 20h45"
                place="Váci Mihály Innovációs Centrum"
                locationLink="https://goo.gl/maps/zs95w548ViegqUJ57"
                location="(2112 VERESEGYHÁZ, FŐ ÚT 45-47.)"
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
