const Drawer = require('./drawer')

var drawer = Drawer()
var lastSection = null

function hideSections () {
  $('[data-drawer-section]').hide()
  $('[data-drawer-scroll]').scrollTop(0)
  $('[data-drawer-trigger]').removeClass('active')
}

$('[data-drawer-trigger]').on('click', function () {
  var id = this.getAttribute('data-drawer-trigger')
  var $drawer = $('[data-drawer-section="' + id + '"]')

  if (drawer.isOpen() && id === lastSection) {
    drawer.close()
    $(this).removeClass('active')
    return
  }

  hideSections()
  $drawer.show()
  $(this).addClass('active')
  lastSection = id
  drawer.open(id)
  $(document).trigger('drawer:open', [id])
  // if (!drawer.isOpen()) {
  //
  // }

})

$('[data-drawer-close]').on('click', function () {
  if (drawer.isOpen()) {
    drawer.close()
  }
})