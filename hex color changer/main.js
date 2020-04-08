const hexNumbers = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const bodyBcg = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');


hexBtn.addEventListener('click', function () {
	let hexCol = '#'

	for(let i = 0; i < 6; i++){
		let random = Math.floor(Math.random()*hexNumbers.length);
		
		hexCol += hexNumbers[random];
	}

	bodyBcg.style.background = hexCol;
	hex.innerHTML = hexCol;
	console.log(hexCol);

})