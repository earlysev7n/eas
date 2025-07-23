const container = document.querySelector(".container");

function makeGrid(size){  //make grid
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

const resize = document.querySelector("#resizeBtn"); //resize

resize.addEventListener("click",function (){

    const userInput = parseInt(prompt("Grid size(MAX 100): "));

    while (userInput > 100){
        userInput = parseInt(prompt("Grid size(MAX 100): "));
    }  

    makeGrid(userInput);
});

const reset = document.querySelector("#resetBtn"); //reset

reset.addEventListener("click", function () {
    makeGrid(16);
});

const color = document.querySelector("#colorBtn"); //color

let isColor = false;

color.addEventListener("click", function() {
    isColor = !isColor;
})


