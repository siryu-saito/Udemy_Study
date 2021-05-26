document.addEventListener('DOMContentLoaded',function(){

  var e = document.getElementById('button');
  e.addEventListener('click', function(){
    appendElement();
  }, false);


}, false);

function appendElement() {
  var result = document.getElementById('result');
  var li = document.createElement('li');
  var text = document.createTextNode(result.value);
  li.appendChild(text);
  lists.appendChild(li);
}