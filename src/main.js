const CHESS_BOARD_SIZE = 8;

const X = 0;
const Y = 1;



function init() {
	let cell = getRandomCell();
	let cellName = getCellName(cell);
	$('#cell').text(cellName);

	let diagonals = getDiagonals(cell);
	console.log(diagonals);
	initStyle(cell, diagonals);

	let cellColor = getCellColor(cell);
	$('#s2 p').text(cellColor);

	let firstDiagonalName = getDiagonalName(diagonals[0]);
	$('#s3 p #d1').text(firstDiagonalName);

	let secondDiagonalName = getDiagonalName(diagonals[1]);
	$('#s3 p #d2').text(secondDiagonalName);
}



function getRandomCell() {
	let horizontal = getRandomInt(CHESS_BOARD_SIZE) + 1;
	let vertical = getRandomInt(CHESS_BOARD_SIZE) + 1;
	return [horizontal, vertical];
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


function getCellName(cell) {
	let letter = getLetter(cell[X]);
	let digit = cell[Y];
	return letter + digit;
}

function getLetter(number) {
	switch(number) {
		case 1:
			return 'a';
		case 2:
			return 'b';
		case 3:
			return 'c';
		case 4:
			return 'd';
		case 5:
			return 'e';
		case 6:
			return 'f';
		case 7:
			return 'g';
		case 8:
			return 'h';
		default:
			return '';
	}
}


function initStyle(cell, diagonals) {
	let cellName = getCellName(cell);
	let selectorV2 = '.v2 #' + cellName;
	setStyleV2(selectorV2);


	let selectorV3 = buildSelectorV3(cell, diagonals);
	console.log(selectorV3);
	setStyleV3(selectorV3);
}


function getDiagonals(mainCell) {
	const mainX = mainCell[X];
	const mainY = mainCell[Y];

	let result = [];

	let diagonal = [];
	diagonal.push([mainX, mainY]);
	for (let range = 1; range < CHESS_BOARD_SIZE; range++) {
		let x = mainX - range;
		if (x < 1) break;

		let y = mainY - range;
		if (y < 1) break;

		diagonal.unshift([x, y]);
	}
	for (let range = 1; range < CHESS_BOARD_SIZE; range++) {
		let x = mainX + range;
		if (x > CHESS_BOARD_SIZE) break;

		let y = mainY + range;
		if (y > CHESS_BOARD_SIZE) break;

		diagonal.push([x, y]);
	}
	result.push(diagonal);

	diagonal = [];
	diagonal.push([mainX, mainY]);
	for (let range = 1; range < CHESS_BOARD_SIZE; range++) {
		let x = mainX - range;
		if (x < 1) break;

		let y = mainY + range;
		if (y > CHESS_BOARD_SIZE) break;

		diagonal.unshift([x, y]);
	}
	for (let range = 1; range < CHESS_BOARD_SIZE; range++) {
		let x = mainX + range;
		if (x > CHESS_BOARD_SIZE) break;

		let y = mainY - range;
		if (y < 1) break;

		diagonal.push([x, y]);
	}
	result.push(diagonal);

	return result;
}


function buildSelectorV3(mainCell, diagonals) {
	const mainX = mainCell[X];
	const mainY = mainCell[Y];

	let selectors = [];
	for (let i = 0; i < 2; i++) {
		let diagonal = diagonals[i];
		for (let j = 0; j < diagonal.length; j++) {
			let cell = diagonal[j];
			let x = cell[X];
			let y = cell[Y];

			if (x === mainX && y === mainY) continue;

			let cellName = getCellName(cell);
			selectors.push('.v3 #' + cellName);
		}
	}
	return selectors.join(', ');
}

function setStyleV2(selector) {
	setBackground(selector, '#eb755f');
}

function setStyleV3(selector) {
	setBackground(selector, '#b8cc67');
}

function setBackground(selector, color) {
	var style = document.createElement('style');
	style.innerHTML = selector + ' { background: ' + color + '; }';
	document.head.appendChild(style);
}


function getCellColor(cell) {
	return (cell[X] + cell[Y]) % 2 === 0 ? 'Чёрный' : 'Белый';
}

function getDiagonalName(diagonal) {
	let firstCell = diagonal[0];
	let lastCell = diagonal[diagonal.length - 1];
	return getCellName(firstCell) + '-' + getCellName(lastCell);
}