const Blazy = require('blazy')
const _ = {
  throttle : require('lodash/throttle')
}

module.exports = function () {

  var lazy = null

  var init = function () {
    $('.image-container').addClass('loader')

    lazy = new Blazy({
      selector : '[data-blazy]',
      container : '[data-scroll-container]',
      success : function (ele) {
        if (ele.getAttribute('data-blazy') === 'bg') {
          $(ele).parent().css({
            backgroundImage : `url(${ele.src})`
          }).addClass('loaded')
        }
      }
    })

    $(window).on('resize', _.throttle(() => { lazy.revalidate() }, 100))
  }

  return {
    lazy : () => lazy,
    init : init
  }

}