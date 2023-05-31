const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonIncreaseVolume = document.querySelector(".increaseVolume")
const buttonDecreaseVolume = document.querySelector(".decreaseVolume")
const musicButtons = document.querySelectorAll('.musicButtons')
const musicForestBtn = document.querySelector("#btnForest")
const musicRainBtn = document.querySelector("#btnRain")
const musicCoffeeBtn = document.querySelector("#btnCoffee")
const musicCampfireBtn = document.querySelector("#btnCampfire")
const inputs = document.querySelectorAll('input')
const inputVolume1 = document.querySelector('#inputVolume1')
const inputVolume2 = document.querySelector('#inputVolume2')
const inputVolume3 = document.querySelector('#inputVolume3')
const inputVolume4 = document.querySelector('#inputVolume4')
const main = document.querySelector("#main")
const h1 = document.querySelector("h1")
const pathForest = document.querySelector('#pathForest')
const pathRain = document.querySelector('#pathRain')
const pathCoffee = document.querySelector('#pathCoffee')
const pathCampfire = document.querySelector('#pathCampfire')
const paths = document.querySelectorAll('.path')
const lightMode = document.querySelector("#lightMode")
const darkMode = document.querySelector("#darkMode")

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncreaseVolume,
  buttonDecreaseVolume,
  musicForestBtn,
  musicRainBtn,
  musicCoffeeBtn,
  musicCampfireBtn,
  inputVolume1,
  inputVolume2,
  inputVolume3,
  inputVolume4,
  main,
  h1,
  pathCampfire,
  pathCoffee,
  pathForest,
  pathRain,
  paths,
  lightMode,
  darkMode,
  musicButtons,
  inputs,
}
