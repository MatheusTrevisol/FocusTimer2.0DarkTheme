import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncreaseVolume,
  buttonDecreaseVolume,
  musicForestBtn,
  musicRainBtn,
  musicCoffeeBtn,
  musicCampfireBtn,
  lightMode,
  darkMode,
  main,
  inputs,
  paths,
} from "./elements.js"

export default function Events({timer, sounds, controls, helper}) {
  buttonPlay.addEventListener("click", controllPlay)
  buttonPause.addEventListener("click", controllPause)
  buttonStop.addEventListener("click", controllStop)
  buttonIncreaseVolume.addEventListener("click", controllIncreaseVolume)
  buttonDecreaseVolume.addEventListener("click", controllDecreaseVolume)

  musicForestBtn.addEventListener("click", controllForestBtn)
  musicRainBtn.addEventListener("click", controllRainBtn)
  musicCoffeeBtn.addEventListener("click", controllCoffeeBtn)
  musicCampfireBtn.addEventListener("click", controllCampfireBtn)

  inputs.forEach(input => input.addEventListener("change", sounds.soundsVolume.controllVolume))

  lightMode.addEventListener("click", controllLightDarkMode)
  darkMode.addEventListener("click", controllLightDarkMode)
  

  function controllLightDarkMode() {  
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')

    main.classList.toggle("main-dark")

    const isDarkTheme = main.className == 'main-dark'

    /*mantém o path e o input clicado ativo */
    paths.forEach(path => {
      if(!isDarkTheme && path.style.fill == 'var(--color-h1-inputs)') {
        path.style.fill = 'var(--bg-main)'
        return
      }
      if(isDarkTheme && path.style.fill == 'var(--bg-main)') {
        path.style.fill = 'var(--color-h1-inputs)'
        return
      }
    })

    inputs.forEach(input => {
      if(!isDarkTheme && input.classList.contains('volumeInputClick')) {
        input.classList.add('volumeInputClick') 
        return;
      } 
      if(isDarkTheme && input.classList.contains('volumeInputClick')) {
        input.classList.add('volumeInputClick')
        return
      }    
    })
  }

  function controllPlay() {
    timer.countDown()
    controls.play()
  }
  
  function controllPause() {
    timer.hold()
    controls.pause()
  }
  
  function controllStop() {
    timer.reset()
    controls.stop()
    sounds.pauseMusics()
    helper.resetBackground()
  }
  
  function controllIncreaseVolume() {
    let newMinutes = controls.increaseVolume()
    timer.updateDisplay(newMinutes);
  }
  
  function controllDecreaseVolume() {
    let newMinutes = controls.decreaseVolume()
    timer.updateDisplay(newMinutes);
  }

  function controllForestBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    sounds.playMusicForest()
    helper.musicButtonPress(button)
  }

  function controllRainBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    sounds.playMusicRain()
    helper.musicButtonPress(button)
  }

  function controllCoffeeBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    sounds.playMusicCoffee()
    helper.musicButtonPress(button)
  }

  function controllCampfireBtn(btn) {
    let button = btn.currentTarget
    helper.resetBackground()
    sounds.playMusicCampfire()
    helper.musicButtonPress(button)
  }

  return {
    controllPlay,
    controllPause,
    controllStop,
    controllIncreaseVolume,
    controllDecreaseVolume,
    controllForestBtn,
    controllRainBtn,
    controllCoffeeBtn,
    controllCampfireBtn,
  }
}
