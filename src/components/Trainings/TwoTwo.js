import React from 'react'

import Icon from '../Icon'

const TwoTwo = props => {
  return (
    <div className="table">
      <div className="table__box table__box--location2">
        <div className="table__icon-box">
          <Icon block="table" name="map-marker" />
        </div>

        <div className="table__item table__item--1">
          <h4 className="heading-4">{props.placeOne}</h4>
          <h5 className="heading-5">
            <a
              href={props.locationOneLink}
              target="_blank"
              className="location-link"
            >
              {props.locationOne}
            </a>
          </h5>
        </div>
        <div className="table__item table__item--2">
          <h4 className="heading-4">{props.placeTwo}</h4>
          <h5 className="heading-5">
            <a
              href={props.locationTwoLink}
              target="_blank"
              className="location-link"
            >
              {props.locationTwo}
            </a>
          </h5>
        </div>
      </div>
      <div className="table__box table__box--times2">
        <div className="table__icon-box">
          <Icon block="table" name="calendar" />
        </div>

        <div className="table__item table__item--1">
          <h4 className="heading-4">
            {props.timeOne}
            <br />
            <span>{props.typeOne}</span>
          </h4>
        </div>

        <div className="table__item table__item--2">
          <h4 className="heading-4">
            {props.timeTwo}
            <br />
            <span>{props.typeTwo}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default TwoTwo
