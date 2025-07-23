const container = document.querySelector(".container");

function makeGrid(size){
    container.innerHTML = ""

    squareSize = 960/size;

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
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.addEventListener("mouseenter", function () {
            if(isMouseClicked){
                square.style.backgroundColor = "black";            }
        });
        container.appendChild(square);
    }
}

const resize = document.querySelector("#resizeBtn");

resize.addEventListener("click",function (){

    const userInput = parseInt(prompt("Grid size(MAX 100): "));

    while (userInput > 100){
        userInput = parseInt(prompt("Grid size(MAX 100): "));
    }

    makeGrid(userInput);
});

const reset = document.querySelector("#resetBtn");

reset.addEventListener("click", function () {
    makeGrid(16);
});

makeGrid(16);
