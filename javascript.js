const container = document.querySelector("#container")
let grid = 16;
let gridLayout = []
const windowWidth = innerWidth
const gridWidth = (100 / grid) + "%" // 100 represents 100% of the screen and grid is what to divide that by

function createGrid() {    

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




createGrid()