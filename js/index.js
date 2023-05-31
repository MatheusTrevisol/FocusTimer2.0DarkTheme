import Controls from "./controls.js"
import Events from "./events.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import Helper from "./functions.js"

let helper = Helper();

let sounds = Sounds()

let timer = Timer({
  minutesDisplay,
  secondsDisplay,
  helper
})

let controls = Controls({
  minutesDisplay, 
})

Events({timer, sounds, controls, helper})