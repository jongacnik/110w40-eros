$('body')
  .on('mouseenter', '[data-hoversync]', function () {
    var id = $(this).attr('data-hoversync')
    if (!id) return
    var syncers = $('[data-hoversync="' + id + '"]').addClass('hover')
  })
  .on('mouseleave', '[data-hoversync]', function () {
    var id = $(this).attr('data-hoversync')
    if (!id) return
    var syncers = $('[data-hoversync="' + id + '"]').removeClass('hover')
  })