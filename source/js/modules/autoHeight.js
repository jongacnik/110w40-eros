/**
 * Functionality:
 * - returns auto height value in pixels of an element
 */

module.exports = function (element, uniqueClass) {
  var wrapper = document.createElement('div')
  var clone = element.cloneNode(true)
  wrapper.appendChild(clone)
  if (uniqueClass) {
    uniqueClass.forEach(function (c) {
      wrapper.classList.add(c)
    })
  }
  clone.style.height = 'auto'
  document.body.appendChild(wrapper)
  var height = clone.clientHeight
  wrapper.parentNode.removeChild(wrapper)
  return height
}
