const gridContainer = document.querySelector("#gridContainer")

let gridSize = 16
let gridLayout = []
let gridWidth = 100 / gridSize + "%"





// create grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {

        gridLayout[i] = document.createElement("div")

        gridLayout[i].style.width = (gridWidth)

        gridContainer.appendChild(gridLayout[i])
    }
}

createGrid()