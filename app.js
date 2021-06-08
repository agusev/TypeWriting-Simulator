// select text area
const textDisplay = document.getElementById('text');

// declaring variable
let previousPhrase = [];
let currentPhrase = [];
let isDeleting = false;

// declaring constants
const speedUp = Math.random() * (80 - 50) + 50;
const normalSpeed = Math.random() * (300 - 200) + 200;
let time = 2000;

// get values from text area
const el = document.getElementById('inputId');
el.onkeyup = function modifyText(e) {
	previousPhrase = currentPhrase ? currentPhrase : '';
	currentPhrase = e.target.value.split('\n');
};

// reset entered values
const btn = document.getElementById('resetBtn');
btn.onclick = function resetBtn(e) {
	doc = document.getElementById('inputId');
	doc.value = '';

	e.target.value = [];
	currentPhrase = [];
	previousPhrase = [];
};

// loop to listen to text area entries
function loop() {
	isDeleting = currentPhrase.length > previousPhrase.length ? false : true;
	// console.log(isDeleting);
	textDisplay.innerHTML = isDeleting
		? previousPhrase.join('</br>')
		: currentPhrase.join('</br>');
	time = isDeleting ? speedUp : normalSpeed;

	setTimeout(loop, time);
}

loop();
