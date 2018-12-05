import React from 'react'
import Button from '../components/Button'

const NotFoundPage = () => (
  <div
    style={{
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1 className="heading-1" style={{ marginBottom: '3rem' }}>
      Az oldal nem létezik :(
    </h1>
    <Button link="/" text="VISSZA A KEZDŐLAPRA" color="green" iconName="home" />
  </div>
)

export default NotFoundPage
