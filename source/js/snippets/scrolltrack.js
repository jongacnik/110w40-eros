var _ = {
  throttle : require('lodash/throttle')
}

window.currentScrollPos = 0

module.exports = function () {

  var st = {
    elements : $($('[data-watch]').get().reverse()),
    container : $('[data-scroll-container]'),
    current : 0,
    end : null,
    offset : 0
  }

  var doScrollTracking =  _.throttle(function () {
    var scrollLeft = st.container.scrollLeft()
    if (scrollLeft >= st.end) {
      scrollUpdate(st.elements.first()[0])
      return false
    }
    st.elements.each(function (i) {
      if ($(this).position().left <= st.offset) {
        var index = st.elements.length - i
        if (index != st.current) {
          st.current = index
          window.currentScrollPos = st.current
          scrollUpdate(this)
        }
        return false
      }
    })
  }, 100)

  var refreshTracking = _.throttle(function () {
    if ($('[data-subnav]').length) {
      st.offset = $('[data-offset]').outerWidth() + 2
      findEnd()
      doScrollTracking()
    }
  }, 300)

  function scrollUpdate (ele) {
    updateNav(ele)
    updateUrl(ele)
  }

  function updateNav (ele) {
    $('[data-subnav]').removeClass('active')
    $('[data-subnav][href="#' + ele.id + '"]').addClass('active')
  }

  function updateUrl (ele) {
    window.location.replace('#' + ($(ele).index() + 1))
  }

  function findEnd () {
    st.end = 0
    st.elements.each(function () {
      st.end += ($(this).outerWidth() + $('[data-offset]').outerWidth())
    })
    st.end += $('[data-offset]').outerWidth()
    st.end -= $(window).width()
  }

  function getCurrent () {
    return st.current
  }

  function start () {
    if ($('[data-subnav]').length) {
      st.container.on('scroll', doScrollTracking)
      $(window).on('resize', refreshTracking)
    }
  }

  function stop () {
    if ($('[data-subnav]').length) {
      st.container.off('scroll', doScrollTracking)
      $(window).off('resize', refreshTracking)
    }
  }

  return {
    refresh : refreshTracking,
    current : getCurrent,
    start : start,
    stop : stop
  }

}
