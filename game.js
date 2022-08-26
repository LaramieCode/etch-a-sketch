const gridContainer = document.querySelector("#gridContainer")

const colors = ["colorBlack", "colorWhite", "colorOrange", "colorYellow", "colorRed", "colorGreen", "colorBlue", "colorPurple"]

let gridSize = 16
let gridLayout = []
let gridWidth = 100 / gridSize + "%"
let color = "colorBlack"





// create grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {

        gridLayout[i] = document.createElement("div")
        gridLayout[i].style.width = (gridWidth)

        gridLayout[i].addEventListener("mouseover", function() {gridPainter(i)})

        gridContainer.appendChild(gridLayout[i])
    }
}

function gridPainter(i) {
    gridLayout[i].classList.add(color)
}

function colorPicker(className) {
    color = className
}

createGrid()