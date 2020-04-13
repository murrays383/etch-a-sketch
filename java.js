let boxesNumber = prompt("Select number of columns. Has to be 10 or greater.");

if (boxesNumber > 9) {
	newGridSize();
} 

let gridSize = document.querySelector("#grid-size");

gridSize.addEventListener("click", gridSizer);

function deleteBoxes() {
	let gridContainer = document.querySelector("#grid-container");

	var child = gridContainer.lastElementChild;
	while (child) {
		gridContainer.removeChild(child);
		child = gridContainer.lastElementChild;
	}
}

function createBoxes() {
	let gridContainer = document.querySelector("#grid-container");

	document.getElementById(
		"grid-container"
	).style.gridTemplateColumns = `repeat(${boxesNumber},1fr)`;

	for (x = 1; x <= boxesNumber * boxesNumber; x++) {
		let gridBox = document.createElement("div");

		gridContainer.appendChild(gridBox);

		gridBox.setAttribute("id", "grid-box");

		gridBox.textContent = "";
	}
}

function createBoxesNew() {
	let gridContainer = document.querySelector("#grid-container");
	let boxesNumber = prompt(
		"Select number of columns. Has to be 10 or greater."
	);

	if (boxesNumber > 9) {
		document.getElementById(
			"grid-container"
		).style.gridTemplateColumns = `repeat(${boxesNumber},1fr)`;

		for (x = 1; x <= boxesNumber * boxesNumber; x++) {
			let gridBox = document.createElement("div");

			gridContainer.appendChild(gridBox);

			gridBox.setAttribute("id", "grid-box");

			gridBox.textContent = "";
		}
	} else {
		document.getElementById(
			"grid-container"
		).style.gridTemplateColumns = `repeat(10,1fr)`;

		for (x = 1; x <= 10 * 10; x++) {
			let gridBox = document.createElement("div");

			gridContainer.appendChild(gridBox);

			gridBox.setAttribute("id", "grid-box");

			gridBox.textContent = "";
		}
	}
}

function newGridSize() {
	deleteBoxes();
	createBoxes();
	trailEffect();
}

function gridSizer() {
	deleteBoxes();
	createBoxesNew();
	trailEffect();
}

let gridReset = document.querySelector("#grid-reset");

gridReset.addEventListener("click", resetGridSize);

function resetGrid() {
	let gridElementsOne = document.querySelectorAll("#grid-box-1");
	gridElementsOne.forEach(element => {
		element.setAttribute("id", "grid-box");
		element.removeAttribute("style");
	});

	let gridElementsTwo = document.querySelectorAll("#grid-box-2");
	gridElementsTwo.forEach(element => {
		element.setAttribute("id", "grid-box");
		element.removeAttribute("style");
	});

	let gridElementsThree = document.querySelectorAll("#grid-box-3");
	gridElementsThree.forEach(element => {
		element.setAttribute("id", "grid-box");
		element.removeAttribute("style");
	});

	let gridElementsFour = document.querySelectorAll("#grid-box-4");
	gridElementsFour.forEach(element => {
		element.setAttribute("id", "grid-box");
		element.removeAttribute("style");
	});
}

function resetGridSize() {
	resetGrid();
	trailEffect();
}


function trailEffect() {
	let gridElement = document.querySelectorAll("#grid-box");
	gridElement.forEach(element => {
		let x = 0;
		let colourArray = ["grid-box-1", "grid-box-2", "grid-box-3", "grid-box-4"];
		element.addEventListener("mouseenter", function () {
			if (x < colourArray.length - 1) {
				element.setAttribute("id", `${colourArray[x]}`);
				console.log(`${colourArray[x]}`);
				x += 1;
			} else {
				element.setAttribute("id", `${colourArray[x]}`);
				console.log(`${colourArray[x]}`);
			}
		});
	});
}

let randomColor = document.querySelector("#random-color");

randomColor.addEventListener("click", trailEffectRandom);

function randColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function trailEffectRandom() {
	let gridElementOne = document.querySelectorAll("#grid-box");
	let gridElementTwo = document.querySelectorAll("#grid-box-1");
	let gridElementsThree = document.querySelectorAll("#grid-box-2");
	let gridElementsFour = document.querySelectorAll("#grid-box-3");
	let gridElementsFive = document.querySelectorAll("#grid-box-4");

	gridElementOne.forEach(element => {
		element.addEventListener("mouseover", function () {
			element.setAttribute("style", `background-color:${randColor()}`);
		});
	});

	gridElementTwo.forEach(element => {
		element.addEventListener("mouseover", function () {
			element.setAttribute("style", `background-color:${randColor()}`);
		});
	});

	gridElementsThree.forEach(element => {
		element.addEventListener("mouseover", function () {
			element.setAttribute("style", `background-color:${randColor()}`);
		});
	});

	gridElementsFour.forEach(element => {
		element.addEventListener("mouseover", function () {
			element.setAttribute("style", `background-color:${randColor()}`);
		});
	});

	gridElementsFive.forEach(element => {
		element.addEventListener("mouseover", function () {
			element.setAttribute("style", `background-color:${randColor()}`);
		});
	});
}
