const scoreInput = document.getElementById('score')
const katBtn = document.getElementById('kat')
const kolBtn = document.getElementById('kol')
const resetBtn = document.querySelector('.resetBtn')



katBtn.addEventListener('click', () => clickBtn('currentScoreKat'))
kolBtn.addEventListener('click', () => clickBtn('currentScoreKol'))

resetBtn.addEventListener('click', resetScore)

function clickBtn(elem) {
	let currentScore = document.getElementById(elem)
	const newScore = scoreInput.value
	if (newScore) {
		const plusScore = +currentScore.innerText + +newScore
		currentScore.innerText = plusScore
		scoreInput.value = ''
		console.log(currentScore.innerText);
	}
}

function resetScore () {
	document.getElementById('currentScoreKat').innerText = 0
	document.getElementById('currentScoreKol').innerText = 0
	console.log('asda');
}