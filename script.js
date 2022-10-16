const sec = document.querySelector('.second-hand')
const min = document.querySelector('.min-hand')
const hr = document.querySelector('.hour-hand')
const h1 = document.querySelector('h1')
function setDate(){
  const now = new Date()
  const seconds = now.getSeconds()
  const minute = now.getMinutes()
  const hour = now.getHours()
  const digiHour = hour > 12 ? (hour-12) : hour
  const midi = hour <= 12 ? 'am' : 'pm'

  const secDeg = (seconds / 60) * 360 + 90
  const minDeg = ((minute / 60)  * 360) + ((seconds / 60) * 6 )+ 90

  const hrDeg = (hour * 30) + ((minute / 60)*30) + 90
  sec.style.transform = `rotate(${secDeg}deg)`
  min.style.transform = `rotate(${minDeg}deg)`
  hr.style.transform = `rotate(${hrDeg}deg)`
  h1.innerText = `${digiHour}:${minute}:${seconds} ${midi}`

}

setInterval(setDate, 1000)