document.getElementById('crimson').onclick = changeCrimson;
document.getElementById('gold').onclick = changeGold;
document.getElementById('magenta').onclick = changeMagenta;
document.getElementById('white').onclick= changeWhite;


function changeCrimson() {
  document.querySelector('body').style.backgroundColor = 'rgb(153,0,0)';
  document.querySelector('body').style.color = 'white';
}

function changeGold() {
  document.querySelector('body').style.backgroundColor = 'rgb(218,183,64)';
  document.querySelector('body').style.color = 'crimson';
}

function changeMagenta() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 8, 232)';
  document.querySelector('body').style.color = 'gold';
}

function changeWhite() {
    document.querySelector('body').style.backgroundColor = 'rgb(255,255,255)';
    document.querySelector('body').style.color = 'black';
}