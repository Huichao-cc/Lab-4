// 0 = empty, 1 = making coffee, 2 = ready
let coffeeState = 0;

function makeCoffee() {
    if (coffeeState === 0) {
        coffeeState = 1;
        document.getElementById("message").innerHTML = "Click Make Coffee again to finish.";
    } else if (coffeeState === 1) {
        coffeeState = 2;
        document.getElementById("message").innerHTML = "Your coffee is ready to drink.";
    } else {
        document.getElementById("message").innerHTML = "The cup is full. Drink your coffee first.";
    }

    updateCoffee();
}

function drinkCoffee() {
    if (coffeeState === 2) {
        coffeeState = 0;
        document.getElementById("message").innerHTML = "You finished your coffee. Make another cup!";
    } else if (coffeeState === 1) {
        document.getElementById("message").innerHTML = "Your coffee is still being made. Finish making it first.";
    } else {
        document.getElementById("message").innerHTML = "The cup is empty. Make some coffee first.";
    }

    updateCoffee();
}

function updateCoffee() {
    if (coffeeState === 0) {
        document.getElementById("coffeeImage").src = "empty.jpg";
        document.getElementById("coffeeImage").alt = "An empty glass";
        document.getElementById("coffeeStatus").innerHTML = "The cup is empty.";
    } else if (coffeeState === 1) {
        document.getElementById("coffeeImage").src = "making.jpg";
        document.getElementById("coffeeImage").alt = "Coffee being made";
        document.getElementById("coffeeStatus").innerHTML = "Making coffee...";
    } else {
        document.getElementById("coffeeImage").src = "full.jpg";
        document.getElementById("coffeeImage").alt = "A full glass of coffee";
        document.getElementById("coffeeStatus").innerHTML = "Your coffee is ready!";
    }
}
