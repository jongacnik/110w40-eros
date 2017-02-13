window.jQuery = window.$ = require('jquery')

if (!require('has-touch')) {
  require('./snippets/hoversync')
  require('./snippets/scrollInvert')
  $('body').addClass('no-touch')
}

require('./snippets/smoothscroll')

var lazy = require('./snippets/lazy')()
var jumpto = require('./snippets/jumpto')
var scrollTrack = require('./snippets/scrolltrack')()
window.appSize = require('./snippets/appSize')
window.aspect = require('./components/aspect')

// drawer
require('./components/drawers')

var lastImage = null

$(document)
  .on('drawer:begin', function () {
    if (window.location.hash) lastImage = parseInt(window.location.hash.substr(1))
  })
  .on('drawer:open', function (e, section) {
    if (section === 'index') require('./components/archive')().start()
  })
  .on('drawer:open-complete', function (e) {
    if (lazy.lazy()) lazy.lazy().revalidate()
    scrollTrack.refresh()
    if (window.location.hash) jumpto(0, lastImage)
  })
  .on('drawer:close-complete', function (e) {
    scrollTrack.refresh()
    if (window.location.hash) jumpto(0, lastImage)
  })

// init lazy
$(document).one('aspectsize', function () {
  lazy.init()
  jumpto(0)
  scrollTrack.refresh()
  scrollTrack.start()
})

// app resize
setTimeout(function () {
  appSize.size()
  aspect.size()
}, 100)

$(window).on('resize', () => {
  appSize.size()
  aspect.size()
})