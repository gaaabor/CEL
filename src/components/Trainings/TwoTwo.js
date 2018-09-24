import React from 'react'

import pestimg from '../../images/pest.jpg'

const TwoTwo = () => {
  return (
    <div className="accordion__content">
      <div className="table__box table__box--location2">
        <div className="table__icon-box">
          {/* <svg className="table__icon table__icon--pin">
                <use xlink:href="img/sprite.svg#icon-map-marker"></use>
              </svg> */}
        </div>

        <div className="table__item table__item--1">
          <h4 className="heading-4">KIKÖTŐ IFJÚSÁGI KÖZÖSSÉGI SZIGET</h4>
          <h5 className="heading-5">
            <a
              href="https://goo.gl/maps/SndJLbD8zqE2"
              target="_blank"
              className="location-link"
            >
              (1156 ÚJPALOTA, NYÍRPALOTA ÚT 40.)
            </a>
          </h5>
        </div>
        <div className="table__item table__item--2">
          <h4 className="heading-4">ÚJPALOTAI SZABADIDŐ KÖZP. KÖZ. HÁZA</h4>
          <h5 className="heading-5">
            <a
              href="https://goo.gl/maps/a33jTCh3ny22"
              target="_blank"
              className="location-link"
            >
              (1157 ÚJPALOTA, ZSÓKAVÁR UTCA 15.)
            </a>
          </h5>
        </div>
      </div>
      <div className="table__box table__box--times2">
        <div className="table__icon-box">
          {/* <svg className="table__icon table__icon--calendar">
                <use xlink:href="img/sprite.svg#icon-calendar"></use>
              </svg> */}
        </div>

        <div className="table__item table__item--1">
          <h4 className="heading-4">
            KEDD
            <span>(Közös)</span> 18h15 - 19h45
          </h4>
        </div>

        <div className="table__item table__item--2">
          <h4 className="heading-4">
            CSÜTÖRTÖK
            <span>(Felnőtt)</span> 18h15 - 19h45
          </h4>
        </div>
      </div>

      <div className="table__box table__box--pic">
        <img src={pestimg} className="table__pic" />
      </div>
    </div>
  )
}

export default TwoTwo
