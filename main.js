const plusButton = document.querySelector("#plus")
const resetButton = document.querySelector("#reset")
const startButton = document.querySelector("#start")
const bricks = document.querySelector(".bricks")

plusButton.addEventListener("click", () => {
    addRedBrick()
})

resetButton.addEventListener("click", () => {
    bricks.innerHTML = ''
})

let handleInterval
let running = false
startButton.addEventListener("click", () => {
    startButton.classList.toggle("on")
    if (running) {
        clearInterval(handleInterval)
    } else {
        handleInterval = setInterval(addSpecialBrick, 1000)  
    }
    running = !running
})

function addSpecialBrick() {
    const newSpecialBrick = document.createElement("div")
    newSpecialBrick.classList.add("brick", "special")
    bricks.appendChild(newSpecialBrick)
}

function addRedBrick() {
    const newRedBrick = document.createElement("div")
    newRedBrick.classList.add("brick")
    bricks.appendChild(newRedBrick)
}

document.addEventListener("keypress", (e) => {
    if (e.key === "Backspace") {
        bricks.removeChild(bricks.lastElementChild) 
    }
})