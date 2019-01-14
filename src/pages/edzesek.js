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
                timeOne="18h15 - 19h45"
                place="Kikötő Ifjúsági Közösségi Sziget"
                locationLink="https://goo.gl/maps/SndJLbD8zqE2"
                location="(1156 ÚJPALOTA, NYÍRPALOTA ÚT 40.)"
              />
              <Card
                dayOne="Csütörtök"
                timeOne="19h00 - 20h30"
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
                timeOne="19h00 - 20h30 (Haladó)"
                dayTwo="Szerda"
                timeTwo="19h00 - 20h30"
                dayThree="Péntek"
                timeThree="19h00 - 20h30"
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
                timeOne="15h30 - 17h00"
                dayTwo="Szerda"
                timeTwo="16h30 - 18h00"
                dayThree="Péntek"
                timeThree="16h30 - 18h00"
                place="Fabriczius József Esti Gimnázium"
                locationLink="https://goo.gl/maps/2oXK4EJ5zNP2"
                location="(2112 VERESEGYHÁZ, FŐ ÚT 77.)"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card__container">
              <Card
                dayOne="Péntek"
                timeOne="17h45 - 19h15"
                place="Weöres Sándor Általános Iskola"
                locationLink="https://goo.gl/maps/vDcL9Z47fB62"
                location="(2230 GYÖMRŐ, ERZSÉBET UTCA 18.)"
              />
              <Card
                dayOne="Vasárnap"
                timeOne="10h00 - 11h30"
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
                timeOne="17h00 - 18h30"
                dayTwo="Szerda"
                timeTwo="17h00 - 18h30"
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
