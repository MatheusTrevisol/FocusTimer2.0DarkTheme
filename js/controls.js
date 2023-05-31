import {
  buttonPause,
  buttonPlay,
  minutesDisplay
} from "./elements.js"

export default function Controls() {  
  function play() {
    buttonPause.classList.remove("hide")
    buttonPlay.classList.add("hide")
  }

  function pause() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  function stop() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  function increaseVolume() {
    let minutes = minutesDisplay.textContent
    let newMinutes
    if (minutes > 55) {
      newMinutes = 60
      return newMinutes
    }
    minutes = Number(minutes) + 5
    newMinutes = String(minutes).padStart(2, "0")
    return newMinutes
  }

  function decreaseVolume() {
    let minutes = minutesDisplay.textContent
    let newMinutes
    if (minutes < 5) {
      newMinutes = 0
      return newMinutes
    }
    minutes = Number(minutes) - 5
    newMinutes = String(minutes).padStart(2, "0")
    return newMinutes
  }

  return {
    play,
    pause,
    stop,
    increaseVolume,
    decreaseVolume
  }
}