import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  helper
}) {
  let minutes = minutesDisplay.textContent

  let stopTimeOut

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
  
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countDown() {
    stopTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      
      if (minutes == 0 && seconds == 0) {
        Sounds().timeEnd();
        Sounds().pauseMusics();
        helper.resetBackground();
        updateDisplay();
        return
      }
  
      seconds--
  
      if (seconds < 0) {
        seconds = 59
        minutes--
      }
  
      minutes = String(minutes).padStart(2, "0")
      seconds = String(seconds).padStart(2, "0")
  
      updateDisplay(minutes, seconds)
      countDown()
    }, 1000)
  }  

  function reset() {
    clearTimeout(stopTimeOut);
    updateDisplay(minutes)
  }

  function hold() {
    clearTimeout(stopTimeOut);
  }

  return {
    updateDisplay,
    countDown,
    hold,
    reset
  }
}