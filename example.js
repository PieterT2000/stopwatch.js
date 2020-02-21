// This is an example config file
import { Stopwatch } from "./src/stopwatch.js";

const DOM = {
  // get the span where you want to display the timer
  durationSpan: document.querySelector(".duration"),
  // get the control buttons
  buttons: document.querySelector(".buttons")
};

// create a new stopwatch instance
const sw = new Stopwatch(DOM.durationSpan);

// add interactivity to control buttons
sw.configButtons(DOM.buttons);
