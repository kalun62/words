const scoreInput = document.getElementById('score')
const katBtn = document.getElementById('kat')
const kolBtn = document.getElementById('kol')
const resetBtn = document.querySelector('.resetBtn')

const currentScoreKat = document.getElementById('currentScoreKat');
const currentScoreKol = document.getElementById('currentScoreKol');

const getValueFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? parseInt(value) : 0;
};

const currentScoreKatLocalStorage = getValueFromLocalStorage('currentScoreKat');
const currentScoreKolLocalStorage = getValueFromLocalStorage('currentScoreKol');

currentScoreKat.innerText = currentScoreKatLocalStorage;
currentScoreKol.innerText = currentScoreKolLocalStorage;

katBtn.addEventListener('click', () => clickBtn('currentScoreKat'))
kolBtn.addEventListener('click', () => clickBtn('currentScoreKol'))

resetBtn.addEventListener('click', resetScore)

function clickBtn(elem) {
	let currentScore = document.getElementById(elem);
	const newScore = scoreInput.value;
	
	if (newScore) {
	  const plusScore = +currentScore.innerText + +newScore;
	  currentScore.innerText = plusScore;
	  scoreInput.value = '';
	  
	  localStorage.setItem(elem, plusScore);
	  
	  scoreInput.focus();
	}
  }

function resetScore() {
	const elementsToReset = ['currentScoreKat', 'currentScoreKol'];
  
	elementsToReset.forEach(elementId => {
	  document.getElementById(elementId).innerText = 0;
	  localStorage.removeItem(elementId);
	});
  }