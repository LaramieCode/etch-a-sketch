const gridContainer = document.querySelector("#gridContainer")

const colors = ["colorBlack", "colorWhite", "colorOrange", "colorYellow", "colorRed", "colorGreen", "colorBlue", "colorPurple"]

let gridSize = 16
let gridLayout = []
let gridWidth = 100 / gridSize + "%"
let color = "colorBlack"

const black = document.querySelector("#black")
black.addEventListener("click", function() {colorPicker(colors[0])})
const white = document.querySelector("#white")
white.addEventListener("click", function() {colorPicker(colors[1])})
const orange = document.querySelector("#orange")
orange.addEventListener("click", function() {colorPicker(colors[2])})
const yellow = document.querySelector("#yellow")
yellow.addEventListener("click", function() {colorPicker(colors[3])})
const red = document.querySelector("#red")
red.addEventListener("click", function() {colorPicker(colors[4])})
const green = document.querySelector("#green")
green.addEventListener("click", function() {colorPicker(colors[5])})
const blue = document.querySelector("#blue")
blue.addEventListener("click", function() {colorPicker(colors[6])})
const purple = document.querySelector("#purple")
purple.addEventListener("click", function() {colorPicker(colors[7])})

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
    gridLayout[i].className = ""
    gridLayout[i].classList.add(color)
}

function colorPicker(className) {
    color = className
}

createGrid()