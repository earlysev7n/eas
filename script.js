const container = document.querySelector(".container");

function makeGrid(size){
    container.innerHTML = ""

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
        square.addEventListener("mouseenter", function () {
            if(isMouseClicked){
                square.style.backgroundColor = "black";            }
        });
        container.appendChild(square);
    }
}

makeGrid(16)