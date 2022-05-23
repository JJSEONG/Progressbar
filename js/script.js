;(function() {
  'use strict'
  
  let timerID
  const get = (target) => {
    return document.querySelector(target)
  }

  const throttle = (callback, time) => {
    if (timerID) return
    timerID = setTimeout(() => {
      callback()
      timerID = undefined
    }, time)
  }

  const $progressBar = get('.progress-bar')

  const onScroll = () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop

    const width = (scrollTop/height) * 100
    $progressBar.style.width = width + '%'
    console.log(width)
  }

  window.addEventListener('scroll', () => throttle(onScroll, 100))
})()