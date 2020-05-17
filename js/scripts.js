window.addEventListener('load', start);

var redRange = document.querySelector('input[name=red]');
var greenRange = document.querySelector('input[name=green]');
var blueRange = document.querySelector('input[name=blue]');
var redBox = document.querySelector('input[name=red-box');
var greenBox = document.querySelector('input[name=green-box');
var blueBox = document.querySelector('input[name=blue-box');
var square = document.querySelector('.square');

function start() {
  catchValue(redRange, redBox);
  catchValue(greenRange, greenBox);
  catchValue(blueRange, blueBox);
}

function catchValue(range, box) {
  box.value = range.value;
  
  range.addEventListener('change', () => {
    box.value = range.value;
    changeSquareColor();
  });

  box.addEventListener('keyup', (event) => {
    if(event.key === 'Enter' && box.value >= 0 && box.value <= 255) {
      range.value = box.value;
    }
    changeSquareColor();
  });
}

function changeSquareColor() {
  square.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}