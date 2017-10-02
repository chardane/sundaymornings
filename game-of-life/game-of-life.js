/*
 * Game of life javascript implementation
 */

/**
 * Generate a new generation
 */
function gameOfLife(map){
	let m = [];
	for(let i = 0; i < map.length; i++) {
		m[i] = [];
		for(let j = 0; j < map[i].length; j++) {
			let alive = map[i][j] === 1;
			let count = countNeighbours(map, i, j);
			if(alive) {
				// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
				// Any live cell with two or three live neighbours lives on to the next generation.
				// Any live cell with more than three live neighbours dies, as if by overpopulation.
				if(count < 2 || count > 3) {
					alive = false;
				}
			} else {
				// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
				if(count === 3) {
					alive = true;
				}
			}
			m[i][j] = alive? 1 : 0;
		}
	}
	return m;
}

/**
 * Count the cells around (i,j)
 */
function countNeighbours(map, i, j){
	let sum = 0;
	sum += getMapVal(map, i - 1, j - 1);
	sum += getMapVal(map, i + 0, j - 1);
	sum += getMapVal(map, i + 1, j - 1);	
	sum += getMapVal(map, i - 1, j + 0);
	sum += getMapVal(map, i + 0, j + 0);
	sum += getMapVal(map, i + 1, j + 0);
	sum += getMapVal(map, i - 1, j + 1);
	sum += getMapVal(map, i + 0, j + 1);
	sum += getMapVal(map, i + 1, j + 1);
	return sum;
}

/**
 * Return a cell value, checking for boundaries
 */
function getMapVal(map, i, j) {
	if(i<0 || i >= map.length || j<0 || j >= map[i].length) {
		return 0;
	}
	return map[i][j];
}

/**
 * Print a map to the console
 */
function printMap(map){
	let str = "";
	for(let i = 0; i < map.length; i++) {
		for(let j = 0; j < map[i].length; j++) {
			str += map[i][j] === 1 ? " X " : "   ";
		}
		str += "\n";
	}
	console.log(str);	
}


// Test the algorithm for  10 generations
let testMap = [
[1, 0, 1, 1, 0],
[1, 0, 0, 0, 0],
[0, 1, 1, 1, 0],
[0, 0, 0, 1, 0]
];

for(let generation = 0; generation < 10; generation++) {
	console.log("Generation " + generation);	
	testMap = gameOfLife(testMap);
	printMap(testMap);
	console.log();
}