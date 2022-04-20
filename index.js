function setSquareCounterListener() {
    const buttonPlus = document.querySelectorAll(".btn-plus");
    const buttonMinus = document.querySelectorAll(".btn-minus");
    const counters = document.querySelectorAll(".counter");
    const buttons = document.querySelectorAll(".square");

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let counter = counters[i];

        button.addEventListener("click", event => {
            if (event.target === buttonPlus[i]) {
                counter.value++;
            }

            if (event.target === buttonMinus[i]) {
                counter.value--;
            }

            if (counter.value < 0) counter.value = 0;
        });
    }
}

function setSquareListener() {

    const squares = document.querySelectorAll(".change-color");

    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];

        square.addEventListener("click", () => {
            if (square.classList.contains("default-color")) {
                square.classList.remove("default-color");
                square.classList.add("blue-color");
            } else if (square.classList.contains("blue-color")) {
                square.classList.remove("blue-color");
                square.classList.add("green-color");
            } else if (square.classList.contains("green-color")) {
                square.classList.remove("green-color");
                square.classList.add("yellow-color");
            } else if (square.classList.contains("yellow-color")) {
                square.classList.remove("yellow-color");
                square.classList.add("blue-color");
            } 
        });
    }
}

function setListListener() {
    const list = document.querySelector(".list");
    const items = document.querySelectorAll(".list-item");
    
    list.addEventListener("click", event => {
        items.forEach(element => {
            if (element.classList.contains("red-bcg")) {
                element.classList.remove("red-bcg");
            }

            event.target.classList.add("red-bcg");
        });
    });
}

setListListener();

setSquareCounterListener();

setSquareListener();