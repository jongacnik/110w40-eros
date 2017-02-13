var mbl = require('mbl')

module.exports = function () {

  var archiveLoad = mbl($('[data-mbl]:not([data-mbl-complete])'), {
    sequential : true
  })

  archiveLoad.on('success', function (data) {
    // show numbers as images load
    var $prev = $(data.element).parents('a').prev()
    if ($prev.hasClass('ag-index-number')) {
      $prev.css('opacity', 1)
    }
  })

  return {
    start : archiveLoad.start
  }

}