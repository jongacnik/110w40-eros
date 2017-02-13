var $container = $('[data-aspect-container]')

var size = function () {
  $('[data-aspect]').each(function () {
    var ar = this.getAttribute('data-aspect')
    var height = $container.height()
    var width = height / ar
    this.style.width = width + 'px'
  })
  $(document).trigger('aspectsize')
}

module.exports = {
  size: size
}