import Tweezer from 'tweezer.js'
const autoHeight = require('./../modules/autoHeight')

module.exports = function () {

  var $drawer = $('[data-drawer]')
  var isOpen = false
  var tween = null
  var speed = 300

  var api = {}

  function resetTween () {
    if (tween) tween.stop()
    tween = null
  }

  function getHeight (section) {
    var max = window.innerHeight * 0.65
    if (section === 'index') {
      return max
    } else if (section) {
      var sectionHeight = getSectionHeight(section)
      return (sectionHeight < max) ? sectionHeight : max
    } else {
      return max
    }
  }

  function getSectionHeight (section) {
    var $section =
      $('[data-drawer-section="' + section + '"]')
      .clone()
      .addClass('gt')
    return autoHeight($section[0], ['h1'])
  }

  api.open = function (section) {
    resetTween()
    isOpen = true
    var start = $drawer.height() * 1000
    var end = getHeight(section) * 1000
    $(document).trigger('drawer:begin')
    if (start != end) {
      tween = new Tweezer({
        start: start,
        end: end,
        duration: speed
      })
      .on('tick', value => {
        var heightVal = value / 1000
        $drawer.height(heightVal)
        window.aspect.size()
      })
      .on('done', ()=> {
        $(document).trigger('drawer:open-complete')
      })
      .begin()
    }
  }

  api.close = function (section) {
    resetTween()
    isOpen = false
    $(document).trigger('drawer:begin')
    tween = new Tweezer({
      start: $drawer.height() * 1000,
      end: 0,
      duration: speed
    })
    .on('tick', value => {
      var heightVal = value / 1000
      $drawer.height(heightVal)
      window.aspect.size()
    })
    .on('done', ()=> {
      $(document).trigger('drawer:close-complete')
    })
    .begin()
  }

  api.isOpen = function () {
    return isOpen
  }

  return api

}