const divs = document.querySelectorAll("div");
divs.forEach(div => {
  div.addEventListener("click", function() {
    this.style.backgroundColor = 'black';
  });
});

let globalColor = '';

document.addEventListener('keydown', function(event) {
  const keyElement = document.getElementById('key');
  if (event.key === 'a') {
    globalColor = 'pink';
    keyElement.style.backgroundColor = 'pink';
  } else if (event.key === 's') {
    globalColor = 'orange';
    keyElement.style.backgroundColor = 'orange';
  } else if (event.key === 'd') {
    globalColor = 'skyblue';
    keyElement.style.backgroundColor = 'skyblue';
  } else if (event.key === 'q') {
    createDiv('purple');
  } else if (event.key === 'w') {
    createDiv('gray');
  } else if (event.key === 'e') {
    createDiv('brown');
  }
});

function createDiv(color) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
