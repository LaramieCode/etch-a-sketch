const container = document.querySelector("#container")
let grid = 16;
let gridLayout = []

const windowWidth = (innerWidth) + "px"
const windowHeight = (innerHeight) + "px"

if (innerHeight < innerWidth) {
    container.style.width = (windowHeight)
    container.style.height = (windowHeight)
} else if (innerWidth < innerHeight) {
    container.style.width = (windowWidth)
    container.style.height = (windowWidth)
}

function createGrid() {    

    let gridWidth = (100 / grid) + "%" // 100 represents 100% of the screen and grid is what to divide that by

    for (let i = 0; i < grid * grid; i++) {
        gridLayout[i] = document.createElement("div")

        gridLayout[i].style.width = (gridWidth)

        gridLayout[i].addEventListener("mouseover", function() {gridColor(i)})

        container.appendChild(gridLayout[i])
    }
}

function gridColor(i) {
    if (gridLayout[i].classList.contains("black")) {
        return
    } else (gridLayout[i].classList.add("black"))
}

function newGrid() {
    grid = prompt("How big grid?")
    gridLayout.forEach(clearGrid)
    createGrid()
}

function clearGrid(item, index, array) {
    container.removeChild(array[index])
}



createGrid()