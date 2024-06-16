const ele = document.getElementById("ele1");

function pintar(event, color = 'green') {
  event.target.style.backgroundColor = color;
}

ele.addEventListener("click", function(event) {
  pintar(event, 'yellow');
});

const eleDefault = document.getElementById("ele1");
eleDefault.addEventListener("dblclick", function(event) {
  pintar(event);
});
