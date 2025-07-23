const container = document.querySelector(".container");

function makeGrid(size){  //make grid
    container.innerHTML = ""

    squareHeight = 650/size;
    squareWidth = 800/size;

    totalSquares = size * size;

    let isMouseClicked = false;

    document.addEventListener("mousedown", (e) => {
        if(e.button === 0) {
            isMouseClicked = true;
        }
    });

    document.addEventListener("mouseup", (e) => {
        if(e.button === 0){
            isMouseClicked = false;
        }
    });

    for (let i = 0; i < totalSquares; i++ ){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareWidth + "px";
        square.style.height = squareHeight + "px";
        square.addEventListener("mouseenter", function () {
            if(isMouseClicked){
                if(isColor) {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    const randomColor = `rgb(${r}, ${g}, ${b})`;
                    square.style.backgroundColor = randomColor;
                }else{
                    square.style.backgroundColor = "black";
                }
            }
        });
        container.appendChild(square);
    }
}

makeGrid(16);

const color = document.querySelector("#colorBtn"); //color

let isColor = false;

color.addEventListener("click", function() {
    isColor = !isColor;
})

const rightKnob = document.querySelector(".right-knob");
const rightKnobLabel = document.querySelector(".rKnob-label");

const sizes = [16, 32, 64, 100];
let currentSizeIndex = 0;

rightKnob.addEventListener("click", function () {
    currentSizeIndex = (currentSizeIndex + 1) % sizes.length;
    const newSize = sizes[currentSizeIndex];
    rightKnobLabel.textContent = newSize;
    makeGrid(newSize);
});

const leftKnob = document.querySelector(".left-knob");

leftKnob.addEventListener("click", function () {
    container.innerHTML = ""
});