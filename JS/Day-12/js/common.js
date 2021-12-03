function id(id) {
  return document.getElementById(id);
}

function onEvent(element, event, callback) {
  element.addEventListener(event, function () {
    callback(this);
  });
}
