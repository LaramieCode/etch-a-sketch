const container = document.querySelector("#container")
let grid = 16;
let gridLayout = []


function createGrid() {    
    for (let i = 0; i < grid * grid; i++) {
        gridLayout[i] = document.createElement("div")

        container.appendChild(gridLayout[i])
    }
}




createGrid()