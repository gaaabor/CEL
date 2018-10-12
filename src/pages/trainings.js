import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import TwoTwo from '../components/Trainings/TwoTwo'

const trainingsPage = () => (
  <Fragment>
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
          <TwoTwo
            placeOne="KIKÖTŐ IFJÚSÁGI KÖZÖSSÉGI SZIGET"
            locationOneLink="https://goo.gl/maps/SndJLbD8zqE2"
            locationOne="(1156 ÚJPALOTA, NYÍRPALOTA ÚT 40.)"
            timeOne="KEDD | 18h15 - 19h45"
            typeOne="(Közös)"
            placeTwo="ÚJPALOTAI SZABADIDŐ KÖZP. KÖZ. HÁZA"
            locationTwoLink="https://goo.gl/maps/a33jTCh3ny22"
            locationTwo="(1157 ÚJPALOTA, ZSÓKAVÁR UTCA 15.)"
            timeTwo="CSÜTÖRTÖK | 18h15 - 19h45"
            typeTwo="(Felnőtt)"
          />
        </TabPanel>
        <TabPanel>
          <h2>DUNAKESZI CONTENT</h2>
          <p className="anyad">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            magnam inventore expedita facere placeat temporibus ducimus
            consequuntur, voluptatibus eaque hic quam dicta nemo unde architecto
            quisquam voluptatum quasi error, impedit non sunt modi a esse
            maiores! Dicta delectus ex, iusto magni debitis quasi! Sit, ipsum
            molestiae voluptatum nobis assumenda facere eligendi dignissimos
            quos expedita rerum aliquam labore magni unde nisi, quaerat error
            perspiciatis voluptate corrupti explicabo sapiente omnis reiciendis
          </p>
        </TabPanel>
        <TabPanel>
          <h2>VERES CONTENT</h2>
          <p className="anyad">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            magnam inventore expedita facere placeat temporibus ducimus
            consequuntur, voluptatibus eaque hic quam dicta nemo unde architecto
            quisquam voluptatum quasi error, impedit non sunt modi a esse
            maiores! Dicta delectus ex, iusto magni debitis quasi! Sit, ipsum
          </p>
        </TabPanel>
        <TabPanel>
          <h2>GYOMRO CONTENT</h2>
        </TabPanel>
        <TabPanel>
          <h2>PESTHIDEGKUT CONTENT</h2>
        </TabPanel>
      </div>
    </Tabs>
  </Fragment>
)

export default trainingsPage
