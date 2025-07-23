const container = document.querySelector(".container");

function makeGrid(size){
    container.innerHTML = ""

    totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++ ){
        const square = document.createElement("div");
        square.classList.add("square")
        container.appendChild(square);
    }
}

makeGrid(16)