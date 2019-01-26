import React, { Fragment } from 'react'

function countdown(endDate) {
  let days, hours, minutes, seconds

  endDate = new Date(endDate).getTime()

  if (isNaN(endDate)) {
    return
  }

  setInterval(calculate, 1000)

  function calculate() {
    let startDate = new Date()
    startDate = startDate.getTime()

    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400)
      timeRemaining = timeRemaining % 86400

      hours = parseInt(timeRemaining / 3600)
      timeRemaining = timeRemaining % 3600

      minutes = parseInt(timeRemaining / 60)
      timeRemaining = timeRemaining % 60

      seconds = parseInt(timeRemaining)

      document.getElementById('days').innerHTML = parseInt(days, 10)
      document.getElementById('hours').innerHTML = ('0' + hours).slice(-2)
      document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2)
      document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2)
    } else {
      return
    }
  }
}

;(function() {
  countdown('03/01/2019 07:00:00 PM')
})()

const CountDown = props => (
  <div className="countdown">
    <div className="countdown__text">
      <h1 className="countdown__title">Batizado 2019</h1>
      <h3 className="countdown__sub-title">
        Csoportunk idei Avatás és övcseréje már csak:
      </h3>
    </div>
    <div className="countdown__timer">
      <span id="days" /> Nap és <span id="hours" /> : <span id="minutes" /> :{' '}
      <span id="seconds" />
    </div>
    <a
      href="https://www.facebook.com/events/363218667759514/"
      className="btn btn-green countdown__btn"
      rel="noopener noreferrer"
      target="_blank"
    >
      Részletek
    </a>
  </div>
)

export default CountDown

//
