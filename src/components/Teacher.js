// Basic React Stuff
import React from 'react'
import PropTypes from 'prop-types'

// Component render
const Teacher = props => (
  <div className={`teacher__item teacher__item--${props.item}`}>
    <div className="teacher__pic-box">
      <img
        className={`teacher__pic teacher__pic--${props.item}`}
        src={props.image}
      />
    </div>

    <div className="teacher__text-box">
      <h1 className="heading-1 heading-1--green">{props.apelido}</h1>
      <h2 className="heading-2">{props.name}</h2>
      <p className="teacher__para">{props.text}</p>
    </div>
  </div>
)

export default Teacher

// PropTypes
Teacher.propTypes = {
  item: PropTypes.string,
  image: PropTypes.object,
  apelido: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}
