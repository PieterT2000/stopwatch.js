<a href="https://pietert2000.github.io/stopwatch.js/" ><img src="https://user-images.githubusercontent.com/47913749/75033615-9722c300-54ab-11ea-9e83-84cb09153be5.png" alt="stopwatch.js" width="500"/></a>

# stopwatch.js
Tiny JS library for creating a stopwatch fast and simple!
<br><Br>

## Installation
1. Download [stopwatch.js](https://cdn.jsdelivr.net/gh/pietert2000/stopwatch.js/dist/stopwatch.js)
2. Load module into your project (please see [example.js](example.js) or example setup below)

##### HTML setup
```
<div class="display">
  <span class="stopwatchSpan">00:00:00</span>
</div>
<div class="buttons">
    <button data-command="start" class="btn">Start</button>
    <button data-command="stop" class="btn">Stop</button>
    <button data-command="reset" class="btn">Reset</button>
</div>
```

##### JS setup
```
import {Stopwatch} from './dist/stopwatch.js'

const DOM {
  stopwatchSpan: document.querySelector('.stopwatchSpan'),
  buttons: document.querySelector('.buttons');
};

// Instantiate stopwatch (pass span, where stopwatch has to display, as parameter)
const sw = new Stopwatch(DOM.stopwatchSpan);

// Make control buttons to work
sw.configureButtons(buttons)

```
