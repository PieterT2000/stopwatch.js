const _timeStamp = new WeakMap();
const _pauzeStartTime = new WeakMap();
const _pauzed = new WeakMap();
const _running = new WeakMap();
const _durationSpan = new WeakMap();

export class Stopwatch {
  constructor(durationSpan) {
    _timeStamp.set(this, 0);
    _pauzeStartTime.set(this, 0);
    _pauzed.set(this, false);
    _running.set(this, false);
    _durationSpan.set(this, durationSpan);
  }

  start() {
    // check if stopwatch is already running
    if (_running.get(this)) throw new Error("Stopwatch already running");
    // otherwise run
    _running.set(this, true);

    // check if stopwatch has been pauzed
    if (!_pauzed.get(this)) {
      _timeStamp.set(this, Date.now());
    } else {
      const timeStamp = _timeStamp.get(this);
      const pauzeStartTime = _pauzeStartTime.get(this);
      const pauzeDuration = Date.now() - pauzeStartTime;
      // update timestamp to account for pauze
      _timeStamp.set(this, timeStamp + pauzeDuration);
    }

    // update the duration span every second
    setInterval(() => {
      if (_running.get(this)) {
        const timeDifference = Date.now() - _timeStamp.get(this);
        // convert time difference in milliseconds to date
        const date = new Date(timeDifference);
        _durationSpan.get(this).textContent = this.formatTime(date);
      }
    }, 1000);
  }

  stop() {
    _pauzeStartTime.set(this, Date.now());
    _running.set(this, false);
    _pauzed.set(this, true);
  }

  reset() {
    _running.set(this, false);
    _pauzed.set(this, false);
    _durationSpan.get(this).textContent = "00:00:00";
  }

  formatTime(date) {
    let h = date.getHours() - 1, //note we don't want to get the time but how many hours are 'past'
      m = date.getMinutes(),
      s = date.getSeconds();
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    return `${h}:${m}:${s}`;
  }

  configButtons(buttonsContainer) {
    buttonsContainer.addEventListener("click", e => {
      if (!e.target.closest(".btn")) return;
      // returns start, stop or reset
      const command = e.target.dataset.command;
      // run command on prototype of instance
      this[command]();
    });
  }
}
