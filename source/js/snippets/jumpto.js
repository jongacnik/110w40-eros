var velocity = require('velocity-animate')

var jumpto = function (duration, index) {
  if (window.location.hash) {
    index = index || parseInt(window.location.hash.substr(1))
    $('[data-watch]').eq(index - 1).velocity('scroll', {
      container: $('[data-scroll-container]'),
      axis: 'x',
      duration: duration,
      offset: -1 * $('[data-offset]').outerWidth()
    })
  }
}

$('[data-index-jumpto]').on('click', function() {
  if (this.pathname == window.location.pathname) {
    jumpto(500, parseInt(this.hash.substr(1)))
    return false
  }
})

module.exports = jumpto