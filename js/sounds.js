export default function Sounds() {
  const musicForest = new Audio("../musics/Floresta.wav")
  const musicRain = new Audio("../musics/Chuva.wav")
  const musicCoffee = new Audio("../musics/Cafeteria.wav")
  const musicCampfire = new Audio("../musics/Lareira.wav")
  const timeIsOver = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const soundsVolume = {
    controllVolume: function(event) {
      const input = event.target.id
      const volume = event.target.value

      if(input === 'inputVolume1') {
        musicForest.volume = volume
        return
      }
      if(input === 'inputVolume2') {
        musicRain.volume = volume
        return
      }
      if(input === 'inputVolume3') {
        musicCoffee.volume = volume
        return
      }
      if(input === 'inputVolume4') {
        musicCampfire.volume = volume
        return
      }
    }
  }
  function playMusicForest() {
    pauseMusics()
    musicForest.play()
  }

  function playMusicRain() {
    pauseMusics()
    musicRain.play()
  }

  function playMusicCoffee() {
    pauseMusics()
    musicCoffee.play()
  }

  function playMusicCampfire() {
    pauseMusics()
    musicCampfire.play()
  }

  function pauseMusics() {
    musicCampfire.pause()
    musicForest.pause()
    musicCoffee.pause()
    musicRain.pause()
  }

  function timeEnd() {
    timeIsOver.play()
  }

  return {
    playMusicForest,
    playMusicRain,
    playMusicCoffee,
    playMusicCampfire,
    musicForest,
    musicRain,
    musicCoffee,
    musicCampfire,
    timeEnd,
    pauseMusics,
    soundsVolume
  }
}