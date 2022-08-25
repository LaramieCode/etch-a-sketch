const windowWidth = (innerWidth) + "px"
const windowHeight = (innerHeight) + "px"

const container = document.querySelector("#container")

if (innerHeight < innerWidth) {
    container.style.width = (windowHeight)
    container.style.height = (windowHeight)
} else if (innerWidth < innerHeight) {
    container.style.width = (windowWidth)
    container.style.height = (windowWidth)
}