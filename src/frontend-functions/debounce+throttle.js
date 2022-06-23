var timerId

function debounce (callback, delay) {
  clearInterval(timerId)
  timerId = setTimeout(callback, delay);
}

function throttle (callback, delay) {
  if (timerId) {
    return
  }

  timerId = setTimeout(function () {
    callback()
    timerId = undefined
  }, delay)
}
