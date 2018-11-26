import React from 'react'

import Contact from './Contact'

const Contacts = () => (
  <div className="contact">
    <div className="wrap-collabsible">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle">
        Elérhetőségeink
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <div className="contact__container">
            <Contact
              person="prof"
              name="Oláh Krisztián"
              apelido="Professor Cabeludo"
              email="cel.cabeludo@gmail.com"
              phone="+36 20 497 24 97"
              location="Újpalota | Dunakeszi | Veresegyház"
            />
            <Contact
              person="sapi"
              name="Soós Levente"
              apelido="Instrutor Sapinho"
              email="cel.sapinho@gmail.com"
              phone="+36 30 951 76 38"
              location="Gyömrő | Pesthidegkút"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contacts
