var velocity = require('velocity-animate')

function smoothScroll () {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']')
    if (target.length) {
      target.velocity('scroll', {
        container: $('[data-scroll-container]'),
        axis: 'x',
        duration: 500,
        offset: -1 * $('[data-offset]').outerWidth()
      })
      return false
    }
  }
}

$('[data-subnav]').on('click', smoothScroll)