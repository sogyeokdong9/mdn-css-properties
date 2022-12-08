const buttons = document.querySelectorAll('button');

let outline0 = () => (document.getElementById('target').className = 'outline0');
let outline1 = () => (document.getElementById('target').className = 'outline1');
let outline2 = () => (document.getElementById('target').className = 'outline2');
let outline3 = () => (document.getElementById('target').className = 'outline3');
let outline4 = () => (document.getElementById('target').className = 'outline4');

buttons[0].addEventListener('click', outline0, false);
buttons[1].addEventListener('click', outline1, false);
buttons[2].addEventListener('click', outline2, false);
buttons[3].addEventListener('click', outline3, false);
buttons[4].addEventListener('click', outline4, false);

const result = document.querySelector('#result');

let aClick = (e) => {
  e.preventDefault();
};

result.addEventListener('click', aClick, false);
