import {
  musicButtons,
  musicForestBtn,
  musicRainBtn,
  musicCoffeeBtn,
  musicCampfireBtn,
  inputVolume1,
  inputVolume2,
  inputVolume3,
  inputVolume4,
  pathForest,
  pathCampfire,
  pathCoffee,
  pathRain,
  main,
  inputs,
  paths
} from "./elements.js"

export default function Helper() {
  function musicButtonPress(btn) {
    const isDarkTheme = main.className === 'main-dark';
    
    const buttons = [
      musicForestBtn,
      musicRainBtn,
      musicCoffeeBtn,
      musicCampfireBtn,
    ]  
  
    for (let i = 0; i <= buttons.length; i++) {
      switch (btn) {
        case buttons[0]:
          btn.classList.remove("bg-button")
          if(!btn.classList.contains("forest")) {
            btn.classList.add("forest")
          }
          inputVolume1.classList.add('volumeInputClick')
          isDarkTheme ? pathForest.style.fill = 'var(--color-h1-inputs)' : pathForest.style.fill = 'var(--bg-main)'
          break
        case buttons[1]:
          btn.classList.remove("bg-button")
          btn.classList.add("rain")
          inputVolume2.classList.add('volumeInputClick')
          isDarkTheme ? pathRain.style.fill = 'var(--color-h1-inputs)' : pathRain.style.fill = 'var(--bg-main)'
          break
        case buttons[2]:
          btn.classList.remove("bg-button")
          btn.classList.add("coffee")
          inputVolume3.classList.add('volumeInputClick')
          isDarkTheme ? pathCoffee.style.fill = 'var(--color-h1-inputs)' : pathCoffee.style.fill = 'var(--bg-main)'
          break
        case buttons[3]:
          btn.classList.remove("bg-button")
          btn.classList.add("campfire")
          inputVolume4.classList.add('volumeInputClick')
          isDarkTheme ? pathCampfire.style.fill = 'var(--color-h1-inputs)' : pathCampfire.style.fill = 'var(--bg-main)'
          break
      }
    }
  }
  
  function resetBackground() {
    const isDarkTheme = main.className === 'main-dark';

    musicForestBtn.classList.remove("forest")
    musicRainBtn.classList.remove("rain")
    musicCoffeeBtn.classList.remove("coffee")
    musicCampfireBtn.classList.remove("campfire")
    musicButtons.forEach(button => button.classList.add("bg-button"))

    inputs.forEach(input => {
      input.classList.remove("volumeInputClick")
      input.classList.add("volumeInput")
    })   
    
    paths.forEach(path => {
      path.style.fill = 'var(--color-items)'
    })
  }
  
  return {musicButtonPress, resetBackground}
}