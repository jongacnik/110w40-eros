require('jquery-mousewheel')($)

function invertScroll (event, delta) {
  this.scrollLeft -= (delta * event.deltaFactor)
  event.preventDefault()
}

$('[data-scroll-container]').on('mousewheel', invertScroll)