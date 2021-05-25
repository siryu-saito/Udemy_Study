function showElements() {
  var elements = document.getElementsByClassName('foo');
  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}